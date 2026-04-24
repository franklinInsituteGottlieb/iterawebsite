"use client";

import { COMPANY_LOGOS } from "@/config/partners.config";

interface CompanyLogosCarouselProps {
  /** Standard zentriert; im Hero oft links unter dem Text */
  headingAlign?: "center" | "start";
}

export default function CompanyLogosCarousel({ headingAlign = "center" }: CompanyLogosCarouselProps) {
  const headingClass =
    headingAlign === "start" ? "text-center lg:text-left" : "text-center";

  return (
    <div className="mt-14 w-full">
      <p
        className={`text-sm font-semibold uppercase tracking-wider text-black mb-6 ${headingClass}`}
      >
        Unsere Teilnehmer arbeiten hier
      </p>
      <div className="relative overflow-hidden">
        <div className="company-logos-track flex w-max gap-12 items-center">
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="flex h-8 shrink-0 items-center justify-center [filter:brightness(0)]"
              style={{ width: "clamp(80px, 12vw, 140px)" }}
            >
              <img
                src={src}
                alt=""
                className="h-full w-auto object-contain object-center"
                width={120}
                height={32}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
