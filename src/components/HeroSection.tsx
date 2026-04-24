"use client";

import { siteConfig } from "@/config/site.config";
import TypeformLink from "@/components/TypeformLink";
import CompanyLogosCarousel from "@/components/CompanyLogosCarousel";

function GoogleRatingBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        <div className="flex items-center gap-0.5" aria-hidden>
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#E8B923" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-sm font-medium text-foreground">
        <span className="font-bold">4,9</span>
        <span className="text-foreground-light"> · </span>
        <span>450+ Google-Bewertungen</span>
      </p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-x-hidden pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="relative z-10 page-shell">
        <div className="grid gap-12 lg:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center xl:grid-cols-[1.1fr_0.9fr]">
          {/* Linke Spalte: Claim + Aktionen */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl lg:leading-[1.08] xl:text-6xl 2xl:text-7xl">
              {siteConfig.hero.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-light sm:text-xl lg:max-w-xl">
              {siteConfig.hero.subline}
            </p>

            <p className="mt-5 text-base sm:text-lg">
              <span className="relative inline-block px-3 py-1.5 sm:px-3.5 sm:py-2">
                <span
                  className="pointer-events-none absolute inset-y-0 -left-1.5 -right-1.5 -skew-x-[10deg] rounded-sm bg-yellow-200/95 shadow-sm ring-1 ring-yellow-300/55"
                  aria-hidden
                />
                <span className="relative font-medium text-foreground">
                  Bis zu 100&nbsp;% staatlich gefördert
                  <span className="inline-block w-2 sm:w-2.5" aria-hidden />
                  Online möglich
                </span>
              </span>
            </p>

            <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap lg:justify-start">
              <TypeformLink className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-primary/25 transition-colors hover:bg-primary-dark sm:flex-none sm:px-8 sm:py-4 sm:text-lg">
                {siteConfig.hero.ctaText}
                <svg className="ml-2 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </TypeformLink>
              <a
                href="#kurse"
                className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-slate-300 bg-white/95 px-7 py-3.5 text-base font-bold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary sm:flex-none sm:px-8 sm:py-4 sm:text-lg"
              >
                Kurse entdecken
              </a>
            </div>

            <div className="mt-8 lg:hidden">
              <GoogleRatingBlock />
            </div>
          </div>

          {/* Rechte Spalte: Infokarte (nur ab lg) + Mobile: Karte unter CTAs optional */}
          <div className="relative lg:pl-2">
            <div
              className="absolute -inset-1 rounded-[1.65rem] bg-gradient-to-br from-primary/20 via-orange-200/40 to-transparent blur-xl lg:block"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md sm:p-8 lg:rounded-[1.65rem]">
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-primary via-primary to-orange-400" aria-hidden />
              <div className="pl-4 sm:pl-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Warum Itera Campus</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {siteConfig.trust.stats.map((s) => (
                    <li
                      key={s.label}
                      className="rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-sm sm:px-4 sm:py-4"
                    >
                      <div className="text-2xl font-extrabold tabular-nums leading-none text-primary sm:text-3xl">
                        {s.value}
                      </div>
                      <p className="mt-2 text-sm leading-snug text-foreground-light sm:text-[0.9375rem] sm:leading-relaxed">
                        {s.label}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 hidden flex-col gap-2 border-t border-slate-200/80 pt-6 lg:flex">
                  <GoogleRatingBlock />
                </div>
              </div>
            </div>
          </div>

          {/* Logo-Streifen über volle Breite */}
          <div className="col-span-full mt-4 border-t border-slate-200/70 pt-10 md:pt-12">
            <CompanyLogosCarousel headingAlign="start" />
          </div>
        </div>
      </div>
    </section>
  );
}
