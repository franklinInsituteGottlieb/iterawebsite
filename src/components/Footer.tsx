import Image from "next/image";
import Link from "next/link";
import TypeformLink from "@/components/TypeformLink";
import { siteConfig } from "@/config/site.config";
import { featuredStandorte } from "@/config/standorte.config";
import { ratgeberArticles } from "@/config/ratgeber.config";

const footerStandorte = featuredStandorte.slice(0, 5);
const topArticles = ratgeberArticles.slice(0, 3);

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0a1526] text-white">
      <div className="page-shell py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/iteracampus_nobg.png"
                alt={siteConfig.seoBrand}
                width={220}
                height={64}
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                unoptimized
              />
            </Link>
            <p className="text-sm text-slate-200/90 leading-relaxed mb-4">
              {siteConfig.tagline}
            </p>
            <a href={`mailto:${siteConfig.footer.email}`} className="text-sm text-slate-100 hover:text-white underline-offset-2 hover:underline">
              {siteConfig.footer.email}
            </a>
          </div>

          {/* Kurse */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Kurse
            </h3>
            <ul className="space-y-3">
              {siteConfig.courses.map((c) => (
                <li key={c.slug}>
                  <Link href={`/kurse/${c.slug}`} className="text-slate-100 hover:text-white text-sm">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standorte */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Standorte
            </h3>
            <ul className="space-y-3">
              {footerStandorte.map((s) => (
                <li key={s.slug}>
                  <Link href={`/standorte/${s.slug}`} className="text-slate-100 hover:text-white text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <TypeformLink className="text-orange-300 hover:text-white text-sm font-medium">
                  Jetzt beraten lassen →
                </TypeformLink>
              </li>
            </ul>
          </div>

          {/* Campus-Wissen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Campus-Wissen
            </h3>
            <ul className="space-y-3">
              {topArticles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/ratgeber/${a.slug}`} className="text-slate-100 hover:text-white text-sm">
                    {a.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ratgeber" className="text-orange-300 hover:text-white text-sm font-medium">
                  Alle Artikel →
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt & CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Kontakt
            </h3>
            <p className="text-sm text-slate-200/90 leading-relaxed mb-4">
              {siteConfig.footer.address}
            </p>
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
              Jetzt beraten lassen
            </TypeformLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-600/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <span>{siteConfig.footer.copyright}</span>
          <span className="flex gap-6">
            <Link href="/kosten" className="text-slate-200 hover:text-white">
              Kosten & Förderung
            </Link>
            <Link href="/impressum" className="text-slate-200 hover:text-white">
              Impressum
            </Link>
            <Link href="/impressum#datenschutz" className="text-slate-200 hover:text-white">
              Datenschutz
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
