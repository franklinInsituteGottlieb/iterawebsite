"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SESSION_ID_KEY = "page_log_session_id";
const STORAGE_KEY = "course_context";
const ENTERED_VIA_UTM_KEY = "page_log_entered_via_utm";
const SENT_PREFIX_KEY = "page_log_sent_for_";
const MEINNOW_COURSE_PARAMS_KEY = "meinnow_course_params";

/** Page-Log senden nur, wenn UTM "meinnow" enthält (z.B. meinnow-course). */
function hasUtmInUrl(): boolean {
  if (typeof window === "undefined") return false;
  const utm = new URLSearchParams(window.location.search).get("utm_source") ?? "";
  const v = utm.toLowerCase();
  return v.includes("meinnow");
}

/** Referrer ist unsere eigene Seite (Navigation von innen). */
function isReferrerOurSite(): boolean {
  if (typeof window === "undefined") return false;
  const ref = document.referrer || "";
  if (!ref) return false;
  try {
    return new URL(ref).origin === window.location.origin;
  } catch {
    return false;
  }
}

/**
 * Tracking nur, wenn der Nutzer von außen mit UTM (forward-education/website) gekommen ist.
 * – Referrer = unsere Seite → nie Flag setzen; wenn Flag schon gesetzt ist, Session weiter tracken.
 * – Referrer = extern/leer + UTM in URL → Flag setzen, ab dann ganze Session in page_log.
 */
function shouldTrackPageLog(): boolean {
  if (typeof window === "undefined") return false;

  if (isReferrerOurSite()) {
    return sessionStorage.getItem(ENTERED_VIA_UTM_KEY) === "1";
  }

  if (hasUtmInUrl()) {
    sessionStorage.setItem(ENTERED_VIA_UTM_KEY, "1");
  }
  return sessionStorage.getItem(ENTERED_VIA_UTM_KEY) === "1";
}

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = "s_" + Date.now() + "_" + Math.random().toString(36).slice(2, 11);
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

function getCourseContext(): {
  course_id: string;
  course_type: string;
  course_duration: string;
} {
  if (typeof window === "undefined")
    return { course_id: "", course_type: "", course_duration: "" };
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { course_id: "", course_type: "", course_duration: "" };
    const ctx = JSON.parse(raw) as {
      course_id?: string;
      course_type?: string;
      course_duration?: number;
    };
    return {
      course_id: ctx.course_id ?? "",
      course_type: String(ctx.course_type ?? ""),
      course_duration: String(ctx.course_duration ?? ""),
    };
  } catch {
    return { course_id: "", course_type: "", course_duration: "" };
  }
}

function getMeinnowCourseContext(): {
  course_id: string;
  course_type: string;
  course_duration: string;
} {
  if (typeof window === "undefined")
    return { course_id: "", course_type: "", course_duration: "" };
  try {
    const raw = sessionStorage.getItem(MEINNOW_COURSE_PARAMS_KEY);
    if (!raw) return { course_id: "", course_type: "", course_duration: "" };
    const ctx = JSON.parse(raw) as {
      meinnow_course_id?: string;
      meinnow_course_type?: string;
      meinnow_course_duration?: string;
    };
    return {
      course_id: ctx.meinnow_course_id ?? "",
      course_type: String(ctx.meinnow_course_type ?? ""),
      course_duration: String(ctx.meinnow_course_duration ?? ""),
    };
  } catch {
    return { course_id: "", course_type: "", course_duration: "" };
  }
}

function getCourseIdFromUrl(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get("course_id") ?? "";
}

export default function PageLogTracker() {
  const pathname = usePathname();
  const sentRef = useRef<string>("");

  useEffect(() => {
    if (!pathname) return;
    if (!shouldTrackPageLog()) return;

    const key = pathname + "|" + (typeof window !== "undefined" ? window.location.search : "");
    if (sentRef.current === key) return;
    sentRef.current = key;

    const session_id = getOrCreateSessionId();
    const url_course_id = getCourseIdFromUrl();
    const sentKey = `${SENT_PREFIX_KEY}${session_id}`;
    if (sessionStorage.getItem(sentKey) === "1") return;

    let inFlight = false;

    const MAX_WAIT_MS = 8000;
    const startedAt = Date.now();

    const trySend = () => {
      if (inFlight) return;
      // Redundant safety: durch Polling darf niemals mehrfach gesendet werden.
      if (sessionStorage.getItem(sentKey) === "1") return;

      const storedForward = getCourseContext();
      const storedMeinnow = getMeinnowCourseContext();
      const course_id = url_course_id || storedForward.course_id || storedMeinnow.course_id;

      if (!course_id) return;

      const meinnow_course_type = storedForward.course_type || storedMeinnow.course_type;
      const meinnow_course_duration = storedForward.course_duration || storedMeinnow.course_duration;

      // Daten sollen erst gesendet werden, wenn Kurs-Typ und Duration verfügbar sind.
      if (!meinnow_course_type || !meinnow_course_duration) return;

      inFlight = true;

      // Wichtig: setze das Flag sofort, damit selbst bei parallelen
      // Effekten/Intervallen (z.B. schnelle Navigation) nie mehr als 1x gesendet wird.
      sessionStorage.setItem(sentKey, "1");

      const payload = {
        action: "track",
        brand: "forward",
        ts: new Date().toISOString(),
        session_id,
        course_id,
        // Keys müssen zum Apps-Script passen (Sheet-Spalten):
        // brand, received_at, ts, session_id, course_id, meinnow_course_type, meinnow_course_duration
        meinnow_course_type,
        meinnow_course_duration,
      };

      fetch("/api/page-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(() => {
          // kein-op: sentKey wurde bereits vor dem fetch gesetzt
        })
        .catch(() => {})
        .finally(() => {
          inFlight = false;
        });
    };

    const interval = window.setInterval(() => {
      trySend();

      if (Date.now() - startedAt >= MAX_WAIT_MS) {
        window.clearInterval(interval);
        // Fallback: falls die Daten doch nie auftauchen, senden wir nach Zeitlimit nicht
        // (sonst würdest du wieder leere meinnow_course_type/duration in page_logs sehen).
      }
    }, 300);

    // Sofort versuchen (ohne Wartezeit)
    trySend();

    return () => {
      window.clearInterval(interval);
    };
  }, [pathname]);

  return null;
}
