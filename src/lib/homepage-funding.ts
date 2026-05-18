import { siteConfig } from "@/config/site.config";
import type { BenefitConfig, FaqItemConfig } from "@/config/site.config";

/** Bildungsgutschein / Förderung auf der Startseite sichtbar? */
export function showBildungsgutscheinOnHomepage(): boolean {
  return siteConfig.features.showBildungsgutscheinOnHomepage;
}

export function getHomeHeroSubline(): string {
  return showBildungsgutscheinOnHomepage()
    ? siteConfig.hero.subline
    : siteConfig.homepageWithoutFunding.heroSubline;
}

/** Zwei Highlight-Teile für die gelbe Markierung im Hero */
export function getHomeHeroHighlights(): [string, string] {
  if (showBildungsgutscheinOnHomepage()) {
    return ["Bis zu 100 % staatlich gefördert", "Online möglich"];
  }
  return siteConfig.homepageWithoutFunding.heroHighlights;
}

export function getHomeCoursesIntro(): string {
  return showBildungsgutscheinOnHomepage()
    ? "KI, Sales oder Projektmanagement: in 3 bis 6 Monaten fit für den Arbeitsmarkt. Alle Kurse mit Bildungsgutschein förderbar."
    : siteConfig.homepageWithoutFunding.coursesIntro;
}

export function getHomeStandorteIntro(): string {
  return showBildungsgutscheinOnHomepage()
    ? "Egal wo Du wohnst – unsere Kurse in KI, Sales und Projektmanagement sind online oder vor Ort verfügbar! Alle Kurse sind mit dem Bildungsgutschein förderbar."
    : siteConfig.homepageWithoutFunding.standorteIntro;
}

export function getHomeBenefitsIntro(): string {
  return showBildungsgutscheinOnHomepage()
    ? "Von der ersten Beratung bis zum nächsten Job: Du bekommst konkrete Skills, keine Kosten und Begleitung, die wirkt."
    : siteConfig.homepageWithoutFunding.benefitsIntro;
}

export function getHomeCtaSubline(): string {
  return showBildungsgutscheinOnHomepage()
    ? siteConfig.cta.subline
    : siteConfig.homepageWithoutFunding.ctaSubline;
}

export function getHomeBenefits(): BenefitConfig[] {
  if (showBildungsgutscheinOnHomepage()) return siteConfig.benefits;

  const replacement = siteConfig.homepageWithoutFunding.benefitReplacement;
  return siteConfig.benefits.map((b) => (b.icon === "piggybank" ? replacement : b));
}

const HIDDEN_HOME_FAQ_RE = /bildungsgutschein|azav/i;

export function getHomeFaq(): FaqItemConfig[] {
  if (showBildungsgutscheinOnHomepage()) return siteConfig.faq;

  const { hiddenFaqQuestions, faqAnswerOverrides, replacementFaq } =
    siteConfig.homepageWithoutFunding;

  const filtered = siteConfig.faq
    .filter((item) => !hiddenFaqQuestions.includes(item.question))
    .filter((item) => !HIDDEN_HOME_FAQ_RE.test(`${item.question} ${item.answer}`))
    .map((item) => ({
      ...item,
      answer: faqAnswerOverrides[item.question] ?? item.answer,
    }));

  const costIndex = siteConfig.faq.findIndex(
    (item) => item.question === "Wer übernimmt die Kosten für die Weiterbildung?"
  );
  const insertAt = costIndex >= 0 ? costIndex : 1;

  return [
    ...filtered.slice(0, insertAt),
    replacementFaq,
    ...filtered.slice(insertAt),
  ];
}
