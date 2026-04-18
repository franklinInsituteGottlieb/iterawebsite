import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site.config";
import { ratgeberArticles, ratgeberCategories } from "@/config/ratgeber.config";

const base = siteConfig.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  title: `Campus-Wissen – Kurse, Live-Format & Qualifizierung | ${siteConfig.seoBrand}`,
  description:
    "Orientierung aus dem Itera Campus: Live-Unterricht, AZAV-Maßnahmen, Kurswahl in KI, Vertrieb und Projektmanagement – kompakt und aus Trainer:innen-Sicht.",
  keywords: [
    "Itera Campus",
    "AZAV Maßnahme",
    "Live-Unterricht",
    "virtuelles Klassenzimmer",
    "KI Kurs München",
    "tech-naher Vertrieb",
    "agiles Projektmanagement Kurs",
    "Qualifizierung Agentur für Arbeit",
  ],
  alternates: { canonical: `${base}/ratgeber` },
};

export default function RatgeberOverview() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-36 pb-24">
        <PageBackground />
        <div className="relative z-10 page-shell">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Campus-Wissen" },
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Campus-Wissen
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              Kurzantworten rund um unsere Programme: virtuelles Klassenzimmer, Kursrhythmus, AZAV-Nachweise, Zusage der Agentur und typische Einstiegsrollen – ohne generisches Nachschlagewerk.
            </p>
          </section>

          {ratgeberCategories.map((cat) => {
            const articles = ratgeberArticles.filter((a) => a.category === cat.slug);
            if (articles.length === 0) return null;
            return (
              <section key={cat.slug} className="mb-14">
                <h2 className="text-xl font-bold text-foreground mb-5">{cat.label}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/ratgeber/${article.slug}`}
                      className="group rounded-2xl bg-white shadow-md border border-slate-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                    >
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-foreground-light leading-relaxed line-clamp-2">
                        {article.description}
                      </p>
                      <span className="mt-3 inline-block text-sm font-semibold text-primary">
                        Lesen →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <section className="text-center rounded-2xl bg-white shadow-lg border border-slate-200 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Noch Fragen?
            </h2>
            <p className="text-foreground-light mb-6 max-w-lg mx-auto">
              Wir beraten Dich kostenlos zu Kursstarts, AZAV-Maßnahmen und dem Gespräch bei der Agentur – passend zu KI, Vertrieb oder Projektmanagement.
            </p>
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary-dark transition-colors">
              Kostenlos beraten lassen
            </TypeformLink>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
