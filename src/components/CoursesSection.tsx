import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TypeformLink from "@/components/TypeformLink";
import { siteConfig } from "@/config/site.config";

const COURSE_IMAGES: Record<string, { src: string; alt: string }> = {
  "kuenstliche-intelligenz": { src: "/blondefrau.png", alt: "Weiterbildung Künstliche Intelligenz – Itera Campus" },
  "it-sales": { src: "/3leute.png", alt: "Weiterbildung Sales und IT-Vertrieb – Itera Campus" },
  "projektmanagement": { src: "/schwarzedame.jpeg", alt: "Weiterbildung Projektmanagement – Itera Campus" },
};

export default function CoursesSection() {
  return (
    <section id="kurse" className="relative py-24 scroll-mt-36">
      <div className="relative z-10 page-shell">
        <AnimateOnScroll animation="fadeUp" replayWhenInView>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            {/* Kopf: alles in einem Block */}
            <div className="border-b border-slate-200 px-6 py-8 text-center sm:px-10 sm:py-10">
              <span className="block text-base font-semibold uppercase tracking-widest text-primary">
                Unsere Weiterbildungen
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Wähle Deinen Karriereweg
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground-light sm:text-xl">
                KI, Sales oder Projektmanagement: in 3 bis 6 Monaten fit für den Arbeitsmarkt. Alle Kurse mit Bildungsgutschein förderbar.
              </p>
            </div>

            {/* Drei Kurse in einem Kasten, mit Strich dazwischen */}
            <div className="grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
              {siteConfig.courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/kurse/${course.slug}`}
                  className="group flex min-h-[280px] flex-col transition-colors hover:bg-slate-50/80 md:min-h-[360px]"
                >
                  <div className="relative h-48 w-full shrink-0 overflow-hidden bg-slate-100 md:h-52">
                    {COURSE_IMAGES[course.slug] ? (
                      <Image
                        src={COURSE_IMAGES[course.slug].src}
                        alt={COURSE_IMAGES[course.slug].alt}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-foreground-light/40">
                        <span className="text-sm font-medium">Bild</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-foreground sm:text-xl">{course.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-light sm:text-base">{course.description}</p>
                    <ul className="mb-4 mt-3 space-y-1.5">
                      {course.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground-light">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-primary">
                      Mehr erfahren
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA */}
        <div className="mt-12 text-center">
          <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary-dark transition-colors">
            Jetzt beraten lassen
          </TypeformLink>
        </div>
      </div>
    </section>
  );
}
