import { getHomeFaq } from "@/lib/homepage-funding";
import JsonLd from "./JsonLd";

/**
 * FAQPage JSON-LD for pages with FAQ content.
 * Skill: schema-markup – mainEntity array of Question/Answer.
 */
export default function FaqPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getHomeFaq().map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}
