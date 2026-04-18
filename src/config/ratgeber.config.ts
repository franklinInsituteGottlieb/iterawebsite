export interface RatgeberArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
}

export const ratgeberCategories = [
  { slug: "bildungsgutschein", label: "Antrag, Zusage & Unterlagen" },
  { slug: "karriere", label: "Rollen, Einstieg & zweite Karriere" },
  { slug: "weiterbildung", label: "Methoden, Tools & Lernformate" },
  { slug: "foerderung", label: "AZAV, Leistungen & Rechte" },
] as const;

export const ratgeberArticles: RatgeberArticle[] = [
  {
    slug: "was-ist-ein-bildungsgutschein",
    title: "Die Zusage der Agentur für Deinen Kurs – was sie praktisch bedeutet",
    description:
      "Aus Kurs- und Trägersicht: was die Zusage regelt, wer sie bekommt und wie Du von der Beratung zu einer buchbaren AZAV-Maßnahme kommst.",
    category: "bildungsgutschein",
    content: `## Was die Zusage der Agentur für Deinen Kurs bedeutet

Die Zusage (häufig als Gutschein der Agentur oder des Jobcenters bezeichnet) ist eine schriftliche Zusicherung, bestimmte Kosten einer beruflichen Qualifizierung zu übernehmen. Sie richtet sich typischerweise an Arbeitssuchende, von Arbeitslosigkeit Bedrohte und Personen, die sich mit einer klar begründeten Maßnahme beruflich neu aufstellen möchten.

## Wer bekommt typischerweise eine Zusage?

- **Arbeitssuchende**, die bei der Agentur für Arbeit oder dem Jobcenter gemeldet sind
- **Von Arbeitslosigkeit bedrohte** Arbeitnehmer:innen
- Voraussetzung: ein individuelles Beratungsgespräch – dort wird Dein Bedarf dokumentiert

## Von der Beratung bis zur Kursbuchung

1. **Beratungsgespräch** bei Deiner Agentur für Arbeit oder Deinem Jobcenter vereinbaren
2. **Qualifizierungsziel besprechen** – welche Maßnahme (z. B. KI, Vertrieb, Projektmanagement) passt?
3. **Schriftliche Zusage** – nach positivem Bescheid erhältst Du die gebündelten Leistungen
4. **AZAV-zertifizierten Anbieter wählen** – Maßnahme und Träger müssen passend zertifiziert sein
5. **Kursstart** – die Abrechnung läuft in der Regel direkt zwischen Agentur und Träger

## Welche Kostenpakete sind oft drin?

Eine Zusage der Agentur kann in der Regel u. a. abdecken:
- Lehrgangsgebühren (bis zu 100 %)
- Fahrtkosten
- Kinderbetreuungskosten
- Auswärtige Unterbringung und Verpflegung (falls nötig)
- Lernmittel und Prüfungsgebühren

Welche Kosten in Deinem Fall übernommen werden, klärst Du im Beratungsgespräch mit der Agentur für Arbeit.

## Wie Itera Campus beim Einstieg hilft

Unsere Programme in KI, tech-nahem Vertrieb und Projektmanagement sind AZAV-zertifiziert – damit sind sie grundsätzlich für die übliche staatliche Kostenübernahme über die Agentur infrage, sofern diese im Einzelfall bewilligt wird. Wir klären mit Dir vorab Kursfit, Unterlagen und den Ablauf – kostenlos und unverbindlich.`,
  },
  {
    slug: "bildungsgutschein-beantragen-schritt-fuer-schritt",
    title: "Vom Erstgespräch zur fixen Kursbuchung – Ablauf im Überblick",
    description:
      "Chronologischer Fahrplan: Termin, Unterlagen, Maßnahmenbeschreibung und Einlösung bei einem AZAV-Anbieter – so, wie wir ihn mit Teilnehmer:innen durchgehen.",
    category: "bildungsgutschein",
    content: `## Vom Erstgespräch zur fixen Kursbuchung

Eine staatlich mitfinanzierte Qualifizierung startet mit einem klaren Fahrplan. Diese Schritte begleiten wir im Itera Campus typischerweise gemeinsam mit Dir.

## Schritt 1: Termin bei der Agentur für Arbeit vereinbaren

Rufe bei Deiner lokalen Agentur für Arbeit an oder nutze das Online-Terminbuchungssystem. Du wirst zu einem Beratungsgespräch eingeladen.

## Schritt 2: Weiterbildungsbedarf begründen

Im Gespräch erklärst Du, warum die Weiterbildung Deine Chancen auf dem Arbeitsmarkt verbessert. Bereite Dich vor:
- Welcher Bereich interessiert Dich? (z. B. KI, Sales, Projektmanagement)
- Welche Qualifikation fehlt Dir für Deinen Wunschjob?
- Ist der Kurs AZAV-zertifiziert?

## Schritt 3: Bildungsangebot vorlegen

Zeige dem/der Berater:in ein konkretes Kursangebot eines zertifizierten Trägers. Bei Itera Campus erhältst Du alle nötigen Unterlagen für die Agentur.

## Schritt 4: Bescheid abwarten

Die Agentur prüft Deinen Antrag. Bei positiver Entscheidung erhältst Du die Zusage – in der Regel innerhalb weniger Wochen.

## Schritt 5: Kurs buchen und starten

Du reichst die Zusage beim gewählten AZAV-Träger ein und startest die Maßnahme. Die Abrechnung der Leistungen läuft in der Regel direkt über die Agentur.

## Tipps aus der Campus-Praxis

- **Frühzeitig anfragen** – der Prozess kann einige Wochen dauern
- **Konkret werden** – nenne einen bestimmten Kurs und Anbieter
- **AZAV-Zertifizierung prüfen** – nur zertifizierte Maßnahmen passen in den üblichen Rahmen
- **Kostenlose Beratung nutzen** – Itera Campus hilft Dir bei der Vorbereitung`,
  },
  {
    slug: "quereinsteiger-it-so-gelingt-der-einstieg",
    title: "Ohne Informatikstudium in tech-nahe Rollen – realistische Einstiege",
    description:
      "Welche Rollen neben klassischer Entwicklung infrage kommen, welche Kompetenzen im Live-Kurs trainiert werden und wie Du Dich für Bewerbungsgespräche positionierst.",
    category: "karriere",
    content: `## Tech-Rollen ohne klassisches Informatikstudium

Die Branche sucht Profile jenseits klassischer Entwicklung – oft mit Fokus auf Anwendung, Vertrieb und Steuerung von Projekten. Typische Einstiegsfelder im Itera Campus:
- Künstliche Intelligenz & Machine Learning
- IT-Vertrieb (Sales)
- Projektmanagement (agil & klassisch)

## Welche Skills brauchst Du?

### Für KI & Machine Learning
- Grundlegendes Verständnis von Daten und Algorithmen
- Interesse an neuen Technologien
- Analytisches Denken

### Für IT-Sales
- Kommunikationsstärke
- Grundverständnis für IT-Produkte
- Verkaufs- und Beratungstalent

### Für Projektmanagement
- Organisationstalent
- Teamfähigkeit und Führungskompetenz
- Methodenkenntnisse (Scrum, Kanban)

## So gelingt der Quereinstieg

1. **Qualifizierung wählen** – Eine AZAV-Maßnahme liefert Dir strukturierten Unterricht, Nachweise und Projekterfahrung
2. **Förderweg prüfen** – staatliche Kostenübernahme ist im Einzelfall möglich; wir bereiten Dich auf das Gespräch vor
3. **Praxis sammeln** – unsere Kurse arbeiten mit realen Projekten und Case Studies
4. **Netzwerk aufbauen** – im Live-Format lernst Du Gleichgesinnte und Branchenkontakte kennen
5. **Bewerbung vorbereiten** – Karriereberatung und Bewerbungscoaching sind bei uns inklusive

## Warum gerade jetzt?

Nachfrage in digitalen Rollen bleibt hoch. Unternehmen honorieren klare Profile und Nachweise – genau darauf zielen unsere Programme ab.`,
  },
  {
    slug: "karriere-mit-kuenstlicher-intelligenz",
    title: "KI im Job: Rollen jenseits von „reinem Programmieren“",
    description:
      "Anwendung, Steuerung und Projektbezug von KI-Systemen – welche Profile Unternehmen suchen und wie unser Kursformat darauf vorbereitet.",
    category: "karriere",
    content: `## Profile rund um KI-Anwendung

KI verändert Teams – weniger „Laborforschung", mehr Integration in Produkte, Service und Projekte. Typische Rollen, die wir im Campus-Schwerpunkt vorbereiten:

### KI-Anwendungsspezialist:in
Du setzt KI-Tools im Unternehmen ein – von Chatbots über Dokumentenanalyse bis hin zu Prozessautomatisierung. Kein Programmierstudium nötig.

### Prompt Engineer
Du entwickelst optimale Eingaben (Prompts) für KI-Modelle wie ChatGPT oder Claude. Ein kreatives Berufsbild mit wachsender Nachfrage.

### Data Analyst mit KI-Fokus
Du nutzt Machine Learning und KI-Tools für Datenanalyse, Reporting und Business Intelligence.

### KI-Projektmanager:in
Du leitest Projekte zur Einführung von KI-Lösungen – von der Planung bis zum Rollout.

## Was verdienst Du mit KI-Kompetenz?

- **Einstiegsgehalt:** 40.000–55.000 € brutto/Jahr
- **Mit Erfahrung:** 60.000–90.000 € brutto/Jahr
- **Spezialist:innen:** 80.000–120.000 € brutto/Jahr

## Dein Weg in die KI-Karriere

Ein strukturiertes Kursprogramm vermittelt Grundlagen von Machine Learning, Prompt-Arbeit und KI im Geschäftsalltag – auch ohne IT-Vorkenntnisse. AZAV-Maßnahmen können mit staatlicher Kostenübernahme kombiniert werden, sofern die Agentur im Einzelfall bewilligt.`,
  },
  {
    slug: "azav-zertifizierung-was-bedeutet-das",
    title: "AZAV für Maßnahmen: was geprüft wird und warum es Dich betrifft",
    description:
      "Qualitätsrahmen für anerkannte Maßnahmen: Prüfpunkte, Abschlüsse und warum nur zertifizierte Angebote in staatlich unterstützte Qualifizierung passen.",
    category: "foerderung",
    content: `## Was ist die AZAV-Zertifizierung?

AZAV steht für „Akkreditierungs- und Zulassungsverordnung Arbeitsförderung". Sie regelt, welche Bildungsträger und Maßnahmen von der Agentur für Arbeit gefördert werden dürfen.

## Warum ist AZAV wichtig?

Nur AZAV-zertifizierte Maßnahmen passen in den üblichen Rahmen staatlicher Qualifizierungsförderung. Die Zertifizierung garantiert:
- **Qualitätsstandards** – Regelmäßige Prüfung der Lehrinhalte und Dozent:innen
- **Anerkannte Abschlüsse** – Zertifikate werden von Arbeitgebern akzeptiert
- **Förderungsfähigkeit** – bis zu 100 % Kostenübernahme durch die Agentur für Arbeit möglich

## Was wird geprüft?

- Qualifikation der Lehrenden
- Aktualität und Praxisrelevanz der Inhalte
- Infrastruktur und Lernumgebung
- Erfolgsquoten und Teilnehmerzufriedenheit

## Itera Campus ist AZAV-zertifiziert

Alle Programme in KI, tech-nahem Vertrieb und Projektmanagement sind als AZAV-Maßnahmen aufgestellt. Heißt konkret: Du kannst eine bewilligte Zusage der Agentur bei uns einlösen – ohne Lehrgangsgebühren aus eigener Tasche, sofern die Agentur die Kosten übernimmt.`,
  },
  {
    slug: "weiterbildung-waehrend-arbeitslosigkeit",
    title: "Qualifizieren, während Du suchst: Rechte, Pausen & sinnvolle Schritte",
    description:
      "Was Du im Beratungsgespräch klären solltest, wie Du Lücken im Lebenslauf sinnvoll füllst und wie ein strukturierter Kursstart dabei hilft.",
    category: "foerderung",
    content: `## Qualifizieren statt Leerlauf

Suchphasen lassen sich nutzen, um handfeste Kompetenzen und Nachweise aufzubauen – besonders, wenn Du später in KI-, Vertriebs- oder PM-Rollen einsteigen willst.

## Welche staatlichen Leistungen kommen infrage?

### Zusage der Agentur (häufig „Bildungsgutschein")
Die Agentur kann unter definierten Voraussetzungen bis zu 100 % der Kosten einer AZAV-Maßnahme übernehmen – Details stehen im Beratungsgespräch.

## Deine Rechte

- Du hast ein Recht auf Beratung durch die Agentur für Arbeit
- Einen Rechtsanspruch auf eine Zusage gibt es nicht, aber die Agentur muss Deinen Antrag wohlwollend prüfen
- Du darfst den Bildungsträger frei wählen (sofern AZAV-zertifiziert)

## So startest Du

1. Prüfe, welche Campus-Maßnahme zu Deinem Ziel passt (KI, Vertrieb, Projektmanagement)
2. Vereinbare ein Beratungsgespräch bei der Agentur für Arbeit
3. Lege ein konkretes Kursangebot vor (wir stellen Dir alle Unterlagen bereit)
4. Starte die Maßnahme und nutze die Zeit strukturiert

## Tipp

Kontaktiere uns für eine kostenlose Beratung – wir helfen Dir bei der Kurswahl und beim Unterlagenpaket für die Agentur.`,
  },
  {
    slug: "gehalt-it-vertrieb",
    title: "Fix, variabel, Region: Vergütung im tech-nahen Vertrieb",
    description:
      "Bandbreiten für SDR-, AE- und Lead-Rollen, Einflussfaktoren und was im Bewerbungsgespräch realistisch verhandelbar ist.",
    category: "karriere",
    content: `## Gehalt im IT-Vertrieb: Ein Überblick

Der IT-Vertrieb gehört zu den bestbezahlten Einstiegsbereichen – auch für Quereinsteiger:innen. Dein Gehalt hängt von Erfahrung, Region und Unternehmensgröße ab.

## Gehaltsübersicht

| Erfahrung | Fixgehalt (brutto/Jahr) | Variable (OTE) |
|-----------|------------------------|----------------|
| Einstieg (0–2 Jahre) | 35.000–45.000 € | + 10.000–20.000 € |
| Fortgeschritten (2–5 Jahre) | 45.000–65.000 € | + 20.000–40.000 € |
| Senior (5+ Jahre) | 65.000–90.000 € | + 30.000–60.000 € |
| Team Lead / Manager | 80.000–120.000 € | + 40.000–80.000 € |

OTE = On Target Earnings (Fixgehalt + erreichbare Provision)

## Was beeinflusst Dein Gehalt?

- **Unternehmensgröße** – Konzerne zahlen oft mehr als Startups (dafür weniger Provision)
- **Produkt** – Enterprise-Software-Vertrieb zahlt mehr als SMB-Produkte
- **Region** – München, Frankfurt und Berlin zahlen die höchsten Gehälter
- **Verhandlung** – Provisionsmodelle bieten hohe Verdienstmöglichkeiten

## IT-Sales als Quereinsteiger

Mit der strukturierten Vertriebsmaßnahme im Campus kannst Du auch ohne IT-Studium in diese lukrative Branche einsteigen. Wichtig sind Kommunikationsstärke, Beratungskompetenz und Grundverständnis für IT-Produkte – genau das trainieren wir im Sales-Kurs.`,
  },
  {
    slug: "was-ist-machine-learning",
    title: "Machine Learning im Alltag von Teams – Begriffe ohne Mathe-Falle",
    description:
      "Trainingsdaten, Modelle, Nutzen im Büroalltag: ein kompakter Leitfaden für Menschen, die KI-Anwendungen steuern, nicht Forschung betreiben.",
    category: "weiterbildung",
    content: `## Machine Learning ohne Mathe-Falle

Machine Learning (maschinelles Lernen) ist ein Teilbereich der Künstlichen Intelligenz. Statt jeden Schritt vorzuschreiben, erkennen Modelle Muster in Daten und verbessern Vorhersagen über Feedback.

## Wie funktioniert Machine Learning?

1. **Daten sammeln** – Der Algorithmus braucht Trainingsdaten (z. B. E-Mails, die als Spam markiert sind)
2. **Muster erkennen** – Das Modell findet Muster in den Daten
3. **Vorhersagen treffen** – Bei neuen Daten kann es Vorhersagen machen (z. B. „Diese E-Mail ist Spam")
4. **Sich verbessern** – Mit mehr Daten und Feedback wird das Modell genauer

## Arten von Machine Learning

- **Überwachtes Lernen** – Lernt aus Beispielen mit bekannten Ergebnissen
- **Unüberwachtes Lernen** – Findet selbständig Muster in Daten
- **Bestärkendes Lernen** – Lernt durch Ausprobieren und Belohnung

## Wo wird Machine Learning eingesetzt?

- Sprachassistenten (Siri, Alexa)
- Empfehlungssysteme (Netflix, Spotify)
- Betrugserkennung bei Banken
- Automatisierte Textgenerierung (ChatGPT)
- Bilderkennung und -verarbeitung
- Predictive Maintenance in der Industrie

## Machine Learning im KI-Programm

Im Campus-Kurs arbeitest Du die Grundlagen praxisnah ab – von der Idee bis zu kleinen Datenübungen. Programmierkenntnisse sind keine Pflicht.`,
  },
  {
    slug: "scrum-erklaert-agiles-projektmanagement",
    title: "Scrum im Kursalltag: Rollen, Rhythmus und was wirklich zählt",
    description:
      "Kurzüberblick für Einsteiger:innen, die agiles Arbeiten im Team verstehen wollen – passend zu Live-Projekten und Moderation im Unterricht.",
    category: "weiterbildung",
    content: `## Scrum in einem Satz

Scrum ist ein Framework für agiles Projektmanagement. Ursprünglich aus der Softwareentwicklung, heute Standard in vielen Teams – von Marketing bis Produktentwicklung.

## Die drei Scrum-Rollen

### Product Owner
Verantwortlich für das „Was": Priorisiert Aufgaben und vertritt die Interessen der Stakeholder.

### Scrum Master
Verantwortlich für das „Wie": Sorgt dafür, dass das Team effizient arbeitet und Hindernisse beseitigt werden.

### Development Team
Das Team, das die Arbeit umsetzt. Typischerweise 3–9 Personen, selbstorganisiert.

## Die Scrum-Events

| Event | Dauer | Zweck |
|-------|-------|-------|
| Sprint Planning | 2–4 Std. | Sprint-Ziele und Aufgaben festlegen |
| Daily Scrum | 15 Min. | Täglicher Statusaustausch |
| Sprint Review | 1–2 Std. | Ergebnisse präsentieren |
| Sprint Retrospective | 1–1,5 Std. | Zusammenarbeit verbessern |

## Der Sprint

Ein Sprint ist ein fester Zeitraum (meist 2 Wochen), in dem ein fertiges Inkrement geliefert wird. Am Ende jedes Sprints steht ein nutzbares Ergebnis.

## Scrum im PM-Programm

Wir starten mit Rollen, Events und einem echten Sprint-Setup – inklusive Vorbereitung auf gängige Scrum-Zertifizierungen.`,
  },
  {
    slug: "bildungsgutschein-tipps-beratungsgespraech",
    title: "Beratungsgespräch souverän führen: Argumente, Belege, typische Stolpersteine",
    description:
      "Checkliste aus der Begleitung von Kursstartern: welche Nachweise überzeugen, wie Du Dein Maßnahmenziel klar machst und welche Formulungen unnötig bremsen.",
    category: "foerderung",
    content: `## Beratungsgespräch bei der Agentur für Arbeit: So bereitest Du Dich vor

Das Beratungsgespräch ist der Dreh- und Angelpunkt für eine mögliche Zusage. Eine gute Vorbereitung erhöht Deine Chancen deutlich.

## Was Du mitbringen solltest

- **Konkretes Kursangebot** eines AZAV-zertifizierten Bildungsträgers (z. B. von Itera Campus)
- **Begründung**, warum die Weiterbildung Deine Jobchancen verbessert
- **Lebenslauf** – zeigt Deinen bisherigen Werdegang und die Lücke, die Du schließen willst
- **Stellenanzeigen** – zeige, dass es Jobs gibt, für die Du Dich mit der Weiterbildung qualifizierst

## Häufige Fehler vermeiden

### Zu vage sein
Sage nicht „Ich möchte mich weiterbilden". Sage stattdessen: „Ich möchte die AZAV-Maßnahme Künstliche Intelligenz bei Itera Campus absolvieren, um als KI-Anwendungsspezialist:in zu starten."

### Kein konkretes Angebot
Ohne ein Kursangebot kann die Agentur nicht prüfen, ob die Maßnahme förderfähig ist. Wir stellen Dir alle Unterlagen bereit.

### Arbeitsmarktbedarf nicht belegen
Zeige, dass es Nachfrage gibt: Stellenanzeigen, Branchenberichte oder Gehaltsvergleiche untermauern Dein Argument.

## So hilft Itera Campus

1. Wir erstellen Dir eine vollständige Maßnahmenübersicht mit AZAV-Nachweis
2. Wir bereiten Dich auf das Gespräch vor
3. Wir beantworten Rückfragen der Agentur für Arbeit
4. Wir begleiten Dich vom Antrag bis zum Kursstart

## Nächster Schritt

Kontaktiere uns für eine kostenlose Beratung – wir helfen Dir, das Beratungsgespräch optimal vorzubereiten.`,
  },

  // ─── Neue Artikel ─────────────────────────────────────────────────────────

  {
    slug: "bildungsgutschein-abgelehnt",
    title: "Wenn die Zusage ausbleibt: nächste Schritte ohne Panik",
    description:
      "Typische Ablehnungsgründe, saubere Nachfass-Strategie und wie Du Unterlagen schärfst, bevor Du erneut in die Beratung gehst.",
    category: "bildungsgutschein",
    content: `## Wenn die Zusage ausbleibt: Das kannst Du tun

Eine Ablehnung ist ärgerlich, aber kein Grund aufzugeben. In vielen Fällen lässt sich die Entscheidung mit besserer Dokumentation nachjustieren.

## Häufige Gründe für eine Ablehnung

- **Fehlende Begründung** – Du konntest nicht überzeugend darlegen, warum die Weiterbildung Deine Jobchancen verbessert
- **Kein konkretes Angebot** – Die Agentur braucht ein konkretes Kursangebot eines AZAV-zertifizierten Trägers
- **Alternative Maßnahmen** – Die Agentur sieht andere Wege als geeigneter an (z. B. Vermittlung statt Weiterbildung)
- **Formale Fehler** – Fehlende Unterlagen oder Fristen nicht eingehalten

## Was Du jetzt tun kannst

### 1. Widerspruch einlegen
Du hast einen Monat Zeit, schriftlich Widerspruch gegen den Bescheid einzulegen. Begründe, warum die Weiterbildung für Deinen beruflichen Wiedereinstieg notwendig ist.

### 2. Erneutes Beratungsgespräch
Bitte um ein neues Gespräch mit einem/einer anderen Berater:in. Bereite Dich besser vor und bringe alle Unterlagen mit.

### 3. Professionelle Unterstützung
Wir helfen Dir kostenlos bei der Vorbereitung: Welche Argumente funktionieren, welche Unterlagen Du brauchst und wie Du den Bedarf überzeugend darstellst.

## Tipp

Lass Dich nicht entmutigen. Viele Teilnehmer:innen bei uns haben die Zusage beim zweiten Anlauf erhalten – mit besserer Vorbereitung und den richtigen Argumenten.`,
  },
  {
    slug: "bildungsgutschein-voraussetzungen",
    title: "Wer bekommt die Zusage – und welche Nachweise die Agentur prüft",
    description:
      "Status, Beratungspflicht, Plausibilität der Maßnahme und AZAV-Pflicht: die Punkte, die in der Praxis am häufigsten eine Rolle spielen.",
    category: "bildungsgutschein",
    content: `## Wer bekommt eine Zusage?

Die Zusage erteilt die Agentur für Arbeit oder das Jobcenter nach Beratung. Es gibt keinen Rechtsanspruch, aber klare Voraussetzungen, die Deine Chancen erhöhen.

## Die wichtigsten Voraussetzungen

### 1. Beschäftigungsstatus
- Du bist arbeitslos und bei der Agentur für Arbeit gemeldet
- Du bist arbeitssuchend (z. B. befristeter Vertrag läuft aus)
- Du bist von Arbeitslosigkeit bedroht (Kündigung angekündigt oder wahrscheinlich)
- Du brauchst die Weiterbildung, um eine Arbeitslosigkeit zu beenden oder zu vermeiden

### 2. Beratungsgespräch
Du musst ein Beratungsgespräch bei Deiner Agentur für Arbeit geführt haben. Dort besprichst Du Deinen Weiterbildungsbedarf.

### 3. Notwendigkeit der Weiterbildung
Die Weiterbildung muss Deine Chancen auf dem Arbeitsmarkt verbessern – entweder um eine Arbeitslosigkeit zu beenden oder zu vermeiden.

### 4. AZAV-Zertifizierung
Der Kurs muss bei einem AZAV-zertifizierten Bildungsträger stattfinden. Alle Kurse von Itera Campus sind AZAV-zertifiziert.

## Was spricht für eine Bewilligung?

- Hohe Nachfrage in der Zielbranche (z. B. KI, IT-Sales, Projektmanagement)
- Klarer Zusammenhang zwischen Kurs und beruflichem Ziel
- Fehlende Qualifikation für den Wunschberuf
- Bereitschaft, die Weiterbildung konsequent durchzuziehen

## Was wird übernommen?

| Kostenart | Übernahme |
|-----------|-----------|
| Lehrgangsgebühren | Bis zu 100 % |
| Fahrtkosten | Ja |
| Kinderbetreuung | Ja (auf Antrag) |
| Unterbringung | Ja (falls nötig) |

## Nächster Schritt

Kontaktiere uns für eine kostenlose Beratung. Wir prüfen Deine Voraussetzungen und bereiten Dich auf das Gespräch mit der Agentur für Arbeit vor.`,
  },
  {
    slug: "bildungsgutschein-gueltigkeitsdauer",
    title: "Fristen auf dem Zettel: Gültigkeit, Kursstart und was bei Verzögerung passiert",
    description:
      "Wie Du Starttermine mit Gültigkeit abstimmst, wann ein Nachfassen sinnvoll ist und wie wir beim Timing der Kurswahl unterstützen.",
    category: "bildungsgutschein",
    content: `## Wie lange ist eine Zusage gültig?

Die Zusage ist in der Regel zeitlich befristet, regional begrenzt und auf ein bestimmtes Bildungsziel beschränkt. Die genaue Gültigkeit legt Deine Agentur im Beratungsgespräch fest.

## Was steht in der Zusage?

- **Bildungsziel** – Welche Art von Weiterbildung Du machen darfst (z. B. KI, Sales, Projektmanagement)
- **Gültigkeitsdauer** – Bis wann Du die Weiterbildung beginnen musst
- **Regionale Begrenzung** – In welcher Region die Weiterbildung stattfinden darf
- **Dauer der Maßnahme** – Wie lange die Weiterbildung maximal dauern darf

## Was passiert bei Fristablauf?

Wenn Du die Zusage nicht innerhalb der Gültigkeit einlöst, verfällt sie. Du kannst aber erneut einen Termin bei der Agentur vereinbaren und einen neuen Antrag stellen.

## Tipps zur Planung

1. **Schnell handeln** – Informiere Dich frühzeitig über passende Kurse
2. **Starttermine prüfen** – Stimme die Gültigkeitsdauer mit dem nächsten Kursstart ab
3. **Rücksprache halten** – Bei Verzögerungen mit der Agentur sprechen, ggf. Verlängerung beantragen

## Nächster Schritt

Kontaktiere uns für eine kostenlose Beratung. Wir helfen Dir, den passenden Kurs innerhalb Deiner Gültigkeitsdauer zu finden und alle Unterlagen rechtzeitig einzureichen.`,
  },
  {
    slug: "umschulung-mit-40",
    title: "Zweite Karrierehälfte planen: Erfahrung nutzen, Rolle neu schärfen",
    description:
      "Warum 40+ oft ein Vorteil ist, welche Rollen zu Softskills passen und wie Du Deinen Lernweg ohne Überforderung strukturierst.",
    category: "karriere",
    content: `## Umschulung mit 40: Warum es sich lohnt

Mit 40+ hast Du noch mindestens 25 Berufsjahre vor Dir. Eine Umschulung kann der Start in eine erfüllende zweite Karrierehälfte sein – und in vielen Branchen bist Du mit Deiner Lebenserfahrung sogar besonders gefragt.

## Vorteile einer Umschulung mit 40+

- **Lebenserfahrung** – Soft Skills wie Verantwortungsbewusstsein und Stressresilienz sind im Berufsalltag Gold wert
- **Klarheit** – Du weißt besser als mit 20, was Du willst und was nicht
- **Netzwerk** – Du hast bereits berufliche Kontakte, die Dir beim Wiedereinstieg helfen
- **Förderung** – bei bewilligter staatlicher Kostenübernahme entfallen die Lehrgangsgebühren für Dich

## Gefragte Bereiche für Quereinsteiger:innen 40+

### Projektmanagement
Organisationstalent und Erfahrung in der Zusammenarbeit mit Teams sind hier Dein größter Vorteil. Scrum Master und Projektmanager:innen werden branchenübergreifend gesucht.

### IT-Vertrieb (Sales)
Beratungskompetenz und Kundenorientierung zählen mehr als technisches Wissen. Quereinsteiger:innen mit Berufserfahrung sind im IT-Sales sehr erfolgreich.

### Künstliche Intelligenz
KI-Anwendungsspezialist:innen müssen nicht programmieren können. Der Fokus liegt auf der Nutzung von KI-Tools im Geschäftsalltag – ein Bereich, in dem Praxiserfahrung zählt.

## So startest Du Deine Umschulung

1. Informiere Dich über passende Weiterbildungen
2. Lass Dich bei der Agentur für Arbeit beraten
3. Beantrage die Zusage bei der Agentur (wir helfen Dir bei der Vorbereitung)
4. Starte Deine Weiterbildung – in 3–6 Monaten bist Du bereit

## Häufige Bedenken – und warum sie unbegründet sind

- **„Ich bin zu alt"** – Falsch. Unternehmen suchen Leute mit Erfahrung und Zuverlässigkeit.
- **„Ich kann mir das nicht leisten"** – bei bewilligter staatlicher Übernahme können bis zu 100 % der Maßnahmenkosten anfallen.
- **„Technologie überfordert mich"** – Unsere Kurse starten bei null und sind für Quereinsteiger:innen konzipiert.`,
  },
  {
    slug: "quereinsteiger-projektmanagement",
    title: "Vom Organisationstalent zur PM-Rolle – ohne klassischen Wirtschafts-Master",
    description:
      "Welche Methoden zuerst Sinn ergeben, welche Zertifikate im Gespräch zählen und wie Du Praxisbeispiele aus dem Kurs in Bewerbungen übersetzt.",
    category: "karriere",
    content: `## Projektmanagement: Der perfekte Quereinstieg

Projektmanagement ist einer der besten Bereiche für Quereinsteiger:innen. Warum? Organisationstalent, Kommunikation und Problemlösungsfähigkeit zählen mehr als ein bestimmtes Studium.

## Warum Projektmanagement?

- **Branchenübergreifend gefragt** – Jedes Unternehmen braucht Projektmanager:innen
- **Gute Gehälter** – Einstiegsgehalt 40.000–50.000 €, mit Erfahrung 60.000–80.000 €
- **Kein Fachstudium nötig** – Zertifizierungen (z. B. Scrum, PMP) sind oft wichtiger als der Studienabschluss
- **Vielfältige Rollen** – Vom Scrum Master über Product Owner bis zum klassischen Projektleiter

## Welche Skills brauchst Du?

### Methodenkenntnisse
- Agile Methoden: Scrum, Kanban
- Klassisches Projektmanagement: Wasserfall, PRINCE2
- Hybride Ansätze

### Soft Skills
- Kommunikation und Moderation
- Priorisierung und Zeitmanagement
- Konfliktmanagement
- Stakeholder-Management

### Tools
- Jira, Asana, Trello, MS Project
- Confluence, Miro
- Slack, Teams

## Dein Weg zum Projektmanager

1. **Weiterbildung** – Unser Kurs vermittelt Dir alle Methoden, Tools und Soft Skills in 3–6 Monaten
2. **Zertifizierung** – Scrum Master, Product Owner oder PMP – der Nachweis für Arbeitgeber
3. **Praxis** – Projekte im Kurs und anschließend im Unternehmen
4. **Karriereberatung** – Bewerbungscoaching und Jobvermittlung sind bei uns inklusive

## Förderung

AZAV-Maßnahmen können mit staatlicher Kostenübernahme kombiniert werden, sofern die Agentur im Einzelfall bewilligt. Wir beraten Dich kostenlos.`,
  },
  {
    slug: "quereinsteiger-sales",
    title: "Tech-naher Vertrieb: warum Persönlichkeit vor Studiengang kommt",
    description:
      "SDR- und AE-Pfade, typische Provisionsmodelle und welche Übungen im Live-Kurs später im Kundentermin helfen.",
    category: "karriere",
    content: `## Vertrieb als Quereinstieg: Warum gerade Sales?

Der Vertrieb – insbesondere IT-Sales – ist einer der zugänglichsten und bestbezahlten Bereiche für Quereinsteiger:innen. Unternehmen suchen Persönlichkeiten, nicht Abschlüsse.

## Warum IT-Sales?

- **Hohe Gehälter** – Fixgehalt plus Provision, oft 50.000–80.000 € im ersten Jahr
- **Keine Vorkenntnisse nötig** – Beratungskompetenz und Lernbereitschaft zählen
- **Schneller Einstieg** – Nach 3–6 Monaten Weiterbildung bist Du einsatzbereit
- **Karriereweg klar** – SDR → Account Executive → Team Lead → VP Sales

## Typischer Karriereverlauf

### 1. Sales Development Representative (SDR)
Du identifizierst und qualifizierst potenzielle Kunden. Dein Werkzeug: Telefon, E-Mail und LinkedIn.

### 2. Account Executive (AE)
Du führst Verkaufsgespräche und schließt Deals ab. Hier steigt die variable Vergütung deutlich.

### 3. Team Lead / Sales Manager
Du führst ein Team und verantwortest Umsatzziele.

## Was lernst Du in der Weiterbildung?

- Sales-Methoden: SPIN Selling, Challenger Sale, MEDDIC
- CRM-Systeme: Salesforce, HubSpot
- Kommunikation und Verhandlung
- Produkt- und Marktverständnis
- Bewerbungstraining und Rollenspiele

## Für wen ist Sales geeignet?

- Du bist kommunikativ und magst den Kontakt mit Menschen
- Du bist zielorientiert und lässt Dich von Rückschlägen nicht entmutigen
- Du möchtest ein gutes Gehalt mit variablem Anteil
- Du suchst einen klaren Karrierepfad mit schnellen Aufstiegsmöglichkeiten

## Förderung

Unsere Sales-Maßnahme ist AZAV-zertifiziert; staatliche Kostenübernahme ist im Einzelfall möglich. Kontaktiere uns für eine kostenlose Beratung.`,
  },
  {
    slug: "berufe-mit-zukunft",
    title: "Drei Wachstumsfelder, die wir im Campus täglich einstückeln",
    description:
      "KI-Anwendung, tech-naher Vertrieb, agiles Arbeiten: welche Profile konkret entstehen und wie schnell Du mit strukturierter Qualifizierung startklar wirst.",
    category: "karriere",
    content: `## Drei Felder, die wir im Campus täglich schärfen

Wir konzentrieren uns auf KI-Anwendung, tech-nahen Vertrieb und agiles Arbeiten – drei Bereiche mit hoher Nachfrage und klaren Nachweisen über AZAV-Maßnahmen.

## Die drei Schwerpunkte im Überblick

### 1. Künstliche Intelligenz
KI durchdringt alle Branchen. Gefragt sind nicht nur Entwickler:innen, sondern vor allem Anwendungsspezialist:innen, Prompt Engineers und KI-Projektmanager:innen.

- **Einstiegsgehalt:** 45.000–55.000 €
- **Perspektive:** Wachstumsmarkt mit jährlich steigendem Bedarf
- **Besonderheit:** Auch für Quereinsteiger:innen ohne IT-Hintergrund geeignet

### 2. IT-Sales
Jedes Tech-Unternehmen braucht Vertrieb. IT-Sales ist einer der bestbezahlten Einstiegsbereiche – mit klarem Karrierepfad und hoher variabler Vergütung.

- **Einstiegsgehalt:** 40.000–50.000 € + Provision
- **Perspektive:** Fachkräftemangel im tech-nahen Vertrieb
- **Besonderheit:** Kommunikation zählt mehr als Technikwissen

### 3. Projektmanagement
Agiles Arbeiten ist Standard. Scrum Master, Product Owner und Projektmanager:innen werden in jedem Unternehmen gebraucht.

- **Einstiegsgehalt:** 42.000–52.000 €
- **Perspektive:** Branchenübergreifend nachgefragt
- **Besonderheit:** Soft Skills und Methodenkompetenz stehen im Vordergrund

## Was diese Profile gemeinsam haben

- Hohe Nachfrage auf dem Arbeitsmarkt
- Gute Gehälter bereits beim Einstieg
- Kein Fachstudium zwingend erforderlich
- Strukturierter Einstieg über 3–6 Monate Live-Unterricht
- Staatliche Kostenübernahme möglich, sofern die Agentur bewilligt

## Dein nächster Schritt

Informiere Dich über unsere drei AZAV-Programme und lass Dich kostenlos beraten – wir matchen Kurs, Nachweise und Zeitplan.`,
  },
  {
    slug: "gehaltsvergleich-vor-nach-weiterbildung",
    title: "Sprünge nach Qualifizierung: realistische Spannen statt Marketingzahlen",
    description:
      "Bandbreiten für KI-, Vertriebs- und PM-Rollen, welche Hebel wirklich zählen und woran Du faire Angebote erkennst.",
    category: "karriere",
    content: `## Lohnt sich gezielte Qualifizierung finanziell?

Kurze Antwort: oft ja. Ein klarer Kompetenzsprung kann Dein Gehalt spürbar heben – besonders beim Branchenwechsel.

## Gehaltsvergleich: Vorher vs. Nachher

### Künstliche Intelligenz

| Situation | Gehalt (brutto/Jahr) |
|-----------|---------------------|
| Ohne KI-Kompetenz | 25.000–35.000 € |
| Nach KI-Qualifizierung (Einstieg) | 45.000–55.000 € |
| Mit 2–3 Jahren KI-Erfahrung | 60.000–80.000 € |

### IT-Sales

| Situation | Gehalt (brutto/Jahr) |
|-----------|---------------------|
| Ohne Sales-Erfahrung | 25.000–35.000 € |
| Nach Sales-Qualifizierung (SDR) | 40.000–55.000 € (+ Provision) |
| Account Executive (2–3 Jahre) | 65.000–100.000 € (inkl. Provision) |

### Projektmanagement

| Situation | Gehalt (brutto/Jahr) |
|-----------|---------------------|
| Ohne PM-Qualifikation | 28.000–38.000 € |
| Nach PM-Qualifizierung (Einstieg) | 42.000–52.000 € |
| Senior PM / Scrum Master (3+ Jahre) | 60.000–80.000 € |

## Was beeinflusst den Gehaltssprung?

- **Branche** – Tech und Beratung zahlen am besten
- **Region** – Großstädte wie München, Frankfurt und Berlin liegen vorn
- **Zertifizierung** – Anerkannte Zertifikate (Scrum, Google, etc.) steigern den Marktwert
- **Verhandlung** – Wer gut verhandelt, verdient mehr

## Die Rechnung: Investition vs. Ertrag

- **Lehrgangsgebühren:** 0 € aus eigener Tasche, sofern staatliche Kostenübernahme bewilligt wird
- **Dauer:** 3–6 Monate
- **Gehaltsplus:** häufig im mittleren fünfstelligen Bereich pro Jahr – abhängig von Rolle und Region
- **Risiko:** gering, wenn keine Eigenbeteiligung anfällt

## Fazit

Qualifizierung plus Nachweise ist oft der schnellste Hebel – besonders, wenn Du parallel Beratung und Bewerbung im Blick behältst.`,
  },
  {
    slug: "online-weiterbildung-vorteile",
    title: "Live online lernen: warum wir auf feste Sessions statt reiner Videos setzen",
    description:
      "Virtuelles Klassenzimmer, Fokus im Alltag, technische Voraussetzungen – und woran Du seriöse Angebote erkennst.",
    category: "weiterbildung",
    content: `## Warum Live online?

Live-Sessions sind kein Kompromiss, wenn Gruppen klein bleiben und Dozent:innen direkt reagieren. Für Berufswechsler:innen zählt vor allem planbare Zeitfenster ohne Pendelstress.

## Die Vorteile im Überblick

### Flexibilität
- Lerne von zu Hause aus – kein Pendeln, keine Anfahrtskosten
- Teilnahme von überall in Deutschland möglich
- Auch aus kleineren Städten Zugang zu Top-Weiterbildungen

### Qualität
- Live-Unterricht mit echten Dozent:innen (kein reines Selbststudium)
- Kleine Gruppen (max. 15 Teilnehmer:innen)
- Direktes Feedback und individuelle Betreuung

### Kosteneffizienz
- Kein Umzug nötig
- Keine Unterbringungskosten
- Bei bewilligter staatlicher Übernahme entfallen die Lehrgangsgebühren für Dich

### Technik
- Modernes virtuelles Klassenzimmer
- Bei Itera Campus: MacBook inklusive
- Professionelle Tools und Plattformen

## Tipps für erfolgreiches Online-Lernen

1. **Fester Arbeitsplatz** – Richte Dir einen ruhigen Platz ein, an dem Du konzentriert lernen kannst
2. **Tagesstruktur** – Behandle die Weiterbildung wie einen normalen Job mit festen Zeiten
3. **Aktiv teilnehmen** – Fragen stellen, Kamera an, mitmachen
4. **Pausen einplanen** – Bildschirmzeit braucht Pausen
5. **Austausch suchen** – Nutze Slack, Teams oder Lerngruppen für den Kontakt mit Mitlernenden

## Für wen eignet sich Online-Weiterbildung?

- Eltern, die zeitlich flexibel sein müssen
- Personen in ländlichen Regionen ohne lokale Bildungsangebote
- Menschen, die während der Weiterbildung zu Hause bleiben möchten
- Alle, die eine moderne Lernumgebung bevorzugen

## Online lernen bei Itera Campus

Unsere Kurse in KI, Sales und Projektmanagement finden komplett online statt – im Live-Unterricht mit persönlicher Betreuung. Staatliche Kostenübernahme ist möglich, sofern die Agentur im Einzelfall bewilligt.`,
  },
  {
    slug: "weiterbildung-lebenslauf",
    title: "Qualifizierung im CV: Platzierung, Formulierungen, Zertifikate sauber setzen",
    description:
      "Wie Du AZAV-Maßnahmen, Zeiträume und Skills so schreibst, dass Personaler sofort den Mehrwert erkennen.",
    category: "weiterbildung",
    content: `## Qualifizierung im Lebenslauf: Der richtige Platz

Eine abgeschlossene AZAV-Maßnahme gehört prominent in Deinen Lebenslauf. Sie zeigt Engagement, Lernbereitschaft und aktuelle Qualifikation.

## Wo im Lebenslauf?

### Option 1: Eigener Abschnitt „Weiterbildung"
Am besten direkt nach „Berufserfahrung". Das signalisiert: Du hast Dich aktiv weiterentwickelt.

### Option 2: Im Abschnitt „Bildung"
Wenn Du noch wenig Berufserfahrung hast, kann die Weiterbildung als letzter Bildungsabschnitt stehen.

## So formulierst Du es

**Gut:**
- Weiterbildung Projektmanagement (AZAV-zertifiziert), Itera Campus, 01/2026–06/2026
- Schwerpunkte: Agile Methoden (Scrum, Kanban), Stakeholder-Management, Praxisprojekte

**Schlecht:**
- Kurs gemacht bei Itera Campus

## Was gehört dazu?

- Name der Weiterbildung
- Zeitraum (Monat/Jahr – Monat/Jahr)
- Bildungsträger
- Zertifizierung (AZAV, Scrum Master, etc.)
- 2–3 konkrete Schwerpunkte oder Kompetenzen

## Tipps für das Anschreiben

- Erkläre kurz, warum Du Dich für die Weiterbildung entschieden hast
- Stelle den Bezug zum angestrebten Job her
- Betone praktische Projekte und konkrete Skills

## Lücke im Lebenslauf? Kein Problem

Eine Weiterbildung schließt Lücken im Lebenslauf. Statt einer unerklärten Pause zwischen zwei Jobs zeigst Du, dass Du die Zeit aktiv genutzt hast.

## Tipp

Bei Itera Campus bekommst Du nicht nur die Weiterbildung, sondern auch Bewerbungscoaching und Karriereberatung – damit Dein Lebenslauf und Deine Bewerbung überzeugen.`,
  },
  {
    slug: "ki-tools-im-beruf",
    title: "Tool-Landkarte für Teams: Text, Daten, Automatisierung im Alltag",
    description:
      "Auswahlhilfe statt Tool-Hype: wofür sich welche Klasse von Assistenz eignet und worauf Arbeitgeber bei sicherem Einsatz achten.",
    category: "weiterbildung",
    content: `## KI-Tools, die Deinen Berufsalltag verändern

Künstliche Intelligenz ist nicht mehr nur etwas für Tech-Unternehmen. KI-Tools helfen in fast jedem Beruf – von Textgenerierung über Datenanalyse bis zur Automatisierung.

## Die wichtigsten KI-Tools im Überblick

### Textgenerierung & Kommunikation
- **ChatGPT / Claude** – Texte schreiben, E-Mails formulieren, Brainstorming
- **Jasper** – Marketing-Texte und Content erstellen
- **DeepL** – Professionelle Übersetzungen

### Bildgenerierung & Design
- **Midjourney / DALL-E** – Bilder aus Textbeschreibungen generieren
- **Canva AI** – Design-Vorschläge und automatische Layoutanpassung
- **Remove.bg** – Hintergründe automatisch entfernen

### Datenanalyse
- **Julius AI** – Datenanalyse im Chat-Format
- **ChatGPT Code Interpreter** – Datenvisualisierung und Statistik
- **Tableau mit KI** – Business Intelligence mit KI-Unterstützung

### Automatisierung
- **Zapier AI** – Workflows zwischen Apps automatisieren
- **Make (Integromat)** – Komplexe Automatisierungen erstellen
- **Microsoft Copilot** – KI in Word, Excel, PowerPoint, Outlook

### Produktivität
- **Notion AI** – Notizen zusammenfassen, Aufgaben organisieren
- **Otter.ai** – Meetings transkribieren und zusammenfassen
- **Grammarly** – Texte korrigieren und verbessern

## Welche KI-Kompetenz braucht der Arbeitsmarkt?

Unternehmen suchen Mitarbeiter:innen, die:
- KI-Tools sicher anwenden können
- Wissen, welches Tool für welche Aufgabe passt
- Ergebnisse kritisch bewerten können
- Workflows mit KI-Unterstützung optimieren

## KI-Kompetenz aufbauen

Im KI-Programm des Itera Campus trainieren wir professionellen Umgang mit Tools, Prompt-Arbeit und den strategischen Einsatz im Team. AZAV-zertifiziert; staatliche Kostenübernahme im Einzelfall möglich.`,
  },
  {
    slug: "prompt-engineering-lernen",
    title: "Prompts schreiben, die liefern: Struktur, Kontext, Iteration",
    description:
      "Vom ersten Entwurf bis sauberem Output: Muster, die wir im Unterricht üben, und typische Fehler, die Modelle ausbremsen.",
    category: "weiterbildung",
    content: `## Was ist Prompt Engineering?

Prompt Engineering ist die Kunst, KI-Modelle wie ChatGPT, Claude oder Gemini mit gezielten Eingaben (Prompts) zu den besten Ergebnissen zu führen. Es ist eine der gefragtesten neuen Kompetenzen auf dem Arbeitsmarkt.

## Warum ist Prompt Engineering wichtig?

Ein guter Prompt kann den Unterschied machen zwischen einer mittelmäßigen und einer hervorragenden KI-Antwort. Unternehmen brauchen Mitarbeiter:innen, die KI-Tools effizient einsetzen können.

## Grundlagen: So schreibst Du bessere Prompts

### 1. Sei spezifisch
- **Schlecht:** „Schreib mir einen Text über Marketing"
- **Gut:** „Schreib einen 300-Wort-Blogbeitrag über Social-Media-Marketing für B2B-Startups. Zielgruppe: Marketing-Manager:innen. Ton: professionell, aber zugänglich."

### 2. Gib Kontext
Erkläre der KI, wer Du bist, was Du brauchst und für wen das Ergebnis bestimmt ist.

### 3. Nutze Rollen
„Du bist ein erfahrener Projektmanager. Erstelle einen Sprint-Plan für…"

### 4. Iteriere
Der erste Prompt ist selten perfekt. Verfeinere ihn Schritt für Schritt.

### 5. Nutze Beispiele (Few-Shot-Prompting)
Zeige der KI ein Beispiel für das gewünschte Ergebnis, bevor Du die eigentliche Aufgabe gibst.

## Fortgeschrittene Techniken

- **Chain-of-Thought** – Die KI Schritt für Schritt denken lassen
- **System-Prompts** – Grundlegende Anweisungen, die das Verhalten steuern
- **Output-Formatierung** – JSON, Tabellen, Markdown anfordern
- **Retrieval-Augmented Generation (RAG)** – KI mit eigenen Daten erweitern

## Berufsbild Prompt Engineer

| Aspekt | Details |
|--------|---------|
| Einstiegsgehalt | 45.000–55.000 € |
| Erfahrung (3+ Jahre) | 65.000–90.000 € |
| Branchen | Tech, Beratung, Marketing, Medien |
| Voraussetzung | KI-Verständnis, analytisches Denken |

## Prompt-Arbeit im KI-Programm des Campus

Prompts sind ein festes Modul: vom ersten Entwurf bis zu sauberen Outputs – immer mit echten Use Cases aus dem Unterricht.`,
  },
  {
    slug: "agiles-arbeiten-kanban-scrum",
    title: "Fluss oder Sprint? Wann Kanban, wann Scrum im Team Sinn macht",
    description:
      "Entscheidungshilfe für Praxisteams: Rhythmus, Rollen, Änderungsfrequenz – plus Hybrid-Ideen aus realen Projekten.",
    category: "weiterbildung",
    content: `## Scrum vs. Kanban: Zwei Wege zum agilen Arbeiten

Scrum und Kanban sind die beliebtesten agilen Methoden. Beide verbessern die Zusammenarbeit und Effizienz – aber auf unterschiedliche Weise.

## Scrum im Überblick

- **Feste Sprints** – Zeitboxen von 1–4 Wochen
- **Definierte Rollen** – Product Owner, Scrum Master, Development Team
- **Regelmäßige Events** – Planning, Daily, Review, Retrospective
- **Lieferung am Sprint-Ende** – Fertiges Inkrement nach jedem Sprint

### Wann Scrum?
- Produktentwicklung mit planbaren Releases
- Teams, die Struktur und klare Rollen brauchen
- Projekte mit fester Deadline und Scope

## Kanban im Überblick

- **Kontinuierlicher Fluss** – Keine festen Sprints, Aufgaben fließen durch das System
- **Work-in-Progress-Limits (WIP)** – Begrenzung gleichzeitiger Aufgaben
- **Visuelles Board** – Spalten wie „To Do", „In Progress", „Done"
- **Keine festen Rollen** – Flexibler als Scrum

### Wann Kanban?
- Support-Teams und Wartung
- Aufgaben, die nicht in Sprints passen
- Teams, die einen sanften Einstieg in Agilität suchen

## Direkter Vergleich

| Merkmal | Scrum | Kanban |
|---------|-------|--------|
| Zeitrahmen | Feste Sprints | Kontinuierlicher Fluss |
| Rollen | Product Owner, Scrum Master, Team | Keine festen Rollen |
| Planung | Sprint Planning | Auf Basis des Boards |
| Änderungen | Am besten zwischen Sprints | Jederzeit möglich |
| Metriken | Velocity, Burndown | Lead Time, Cycle Time |
| Ideal für | Produktentwicklung | Support, Wartung, Ops |

## Hybrid: Scrumban

Viele Teams kombinieren Scrum und Kanban – „Scrumban". Zum Beispiel:
- Sprint-Zyklen von Scrum mit WIP-Limits von Kanban
- Kanban-Board mit regelmäßigen Retrospektiven

## Agile Methoden im PM-Programm

Wir üben Scrum und Kanban hands-on – inklusive Vorbereitung auf gängige Zertifizierungen. AZAV-zertifiziert; staatliche Kostenübernahme im Einzelfall möglich.`,
  },
  {
    slug: "foerderung-weiterbildung-uebersicht",
    title: "Staatliche Qualifizierung: Leistungsarten, AZAV-Pflicht, typischer Ablauf",
    description:
      "Einordnung ohne Behördendeutsch: welche Posten oft übernommen werden, was die Agentur prüft und wie Du Unterlagen bündelst.",
    category: "foerderung",
    content: `## Staatliche Qualifizierung: was üblich ist

Die Agentur für Arbeit kann unter definierten Voraussetzungen Kosten einer beruflichen Maßnahme übernehmen – oft bis zu 100 % der Lehrgangsgebühren, sofern AZAV und Einzelfall passen.

## Welche Kostenposten können dabei sein?

Laut öffentlicher Darstellung der Agentur können u. a. folgende Positionen infrage kommen:
- **Lehrgangsgebühren** inkl. Lernmittel und Prüfungsgebühren
- **Fahrtkosten** zur Bildungsstätte
- **Kinderbetreuungskosten** während der Weiterbildung
- **Auswärtige Unterbringung und Verpflegung** (falls tägliches Pendeln nicht zumutbar ist)

Welche Kosten in Deinem Fall übernommen werden, klärst Du im persönlichen Beratungsgespräch mit der Agentur für Arbeit.

## Voraussetzungen

Eine Zusage ist möglich, wenn u. a.:
- Du arbeitslos, arbeitssuchend oder von Arbeitslosigkeit bedroht bist
- Die Weiterbildung notwendig ist, um Deine Arbeitsmarktchancen zu verbessern
- Der Bildungsträger und die Maßnahme AZAV-zertifiziert sind
- Du ein persönliches Beratungsgespräch bei der Agentur für Arbeit geführt hast

## Typischer Ablauf bis zum Kursstart

1. **Termin vereinbaren** – Kontaktiere Deine Agentur für Arbeit
2. **Beratungsgespräch** – Besprich Deinen Qualifizierungswunsch
3. **Zusage erhalten** – bei positiver Entscheidung bekommst Du die gebündelten Leistungen
4. **Kurs wählen** – wähle einen AZAV-zertifizierten Anbieter
5. **Maßnahme starten** – Abrechnung in der Regel direkt zwischen Agentur und Träger

## Nächster Schritt

Kontaktiere uns für eine kostenlose Beratung. Wir helfen Dir bei der Vorbereitung auf das Gespräch mit der Agentur für Arbeit und stellen Dir alle nötigen Unterlagen bereit.`,
  },

  // ─── mein NOW (Nationales Portal für berufliche Weiterbildung) ─────────────

  {
    slug: "was-ist-mein-now",
    title: "mein NOW nutzen: Orientierung, Tests, Kursfinder – ohne Portal-Stress",
    description:
      "Was die fünf Bereiche leisten, wie Du sie mit einer konkreten Maßnahmenberatung kombinierst und wann ein Anbieter wie Itera Campus sinnvoll nachschaltet.",
    category: "weiterbildung",
    content: `## Was ist mein NOW?

**mein NOW** (Schreibweise: „mein NOW") ist das **Nationale Onlineportal für berufliche Weiterbildung** in Deutschland. Es wurde von der Bundesagentur für Arbeit im Rahmen der Nationalen Weiterbildungsstrategie entwickelt und ist seit dem 1. Januar 2024 online. Das Portal bündelt Beratung, Förderungen, Kurse und Tests an einem Ort – für alle, die sich weiterbilden möchten.

## Für wen ist mein NOW?

- **Privatpersonen**, die eine Weiterbildung, Umschulung oder Teilqualifizierung suchen
- **Arbeitgeber**, die sich über Qualifizierung ihrer Mitarbeiter:innen informieren wollen
- **Weiterbildungsanbieter**, die ihr Angebot sichtbar machen

Du findest dort einen niedrigschwelligen Einstieg: Kein Vorwissen nötig, alles von Beratung bis Kursbuchung an einem Ort.

## Die fünf Bereiche von mein NOW

### 1. Beratung
Übersicht von Beratungsstellen zu Weiterbildung, Umschulung und Teilqualifizierung – in Deiner Nähe oder online.

### 2. Förderungen
Navigator für finanzielle Unterstützung: u. a. Zusage der Agentur, Bildungsurlaub, Aufstiegs-BAFöG und weitere Programme. Du siehst schnell, was auf Dich zutreffen könnte.

### 3. Weiterbildungen
Große Datenbank mit bundesweiten Weiterbildungsangeboten – Voll- oder Teilzeit, vor Ort oder online. Du kannst nach Thema, Ort und Format filtern.

### 4. Online-Tests
Tests zur Orientierung: Welche Weiterbildung passt zu Dir? Wie stehen Deine digitalen Kompetenzen? Die Ergebnisse helfen Dir bei der Entscheidung.

### 5. Perspektiven
Informationen zu Berufen, Branchen, Verdienst und Weiterbildungsmöglichkeiten. So siehst Du, wohin eine Qualifizierung führen kann.

## mein NOW und Itera Campus

Unsere Programme in KI, tech-nahem Vertrieb und Projektmanagement sind AZAV-zertifiziert – sie passen in dieselbe Kategorie von Angeboten, die Du auch über mein NOW filterst. Parallel zur Portalsuche klären wir mit Dir Kursfit, Unterlagen und Zeitplan – unverbindlich.`,
  },
  {
    slug: "weiterbildung-finden-mein-now",
    title: "Vom Filter zur festen Maßnahme: sinnvolle Reihenfolge im NOW-Portal",
    description:
      "Tests, Förder-Navigator, Kurssuche und Beratung: wie Du Ergebnisse dokumentierst, bevor Du mit einem AZAV-Anbieter ins Detail gehst.",
    category: "weiterbildung",
    content: `## Weiterbildung finden mit mein NOW: So gehst Du vor

mein NOW bringt Beratung, Förderung und Kurssuche an einen Ort. So nutzt Du das Portal effektiv.

## Schritt 1: Perspektiven und Tests (optional)

Bevor Du Kurse filterst, kannst Du Dich orientieren:
- **Perspektiven** – Welche Berufe und Branchen passen zu Dir? Welche Weiterbildungen führen dorthin?
- **Online-Tests** – Welche Weiterbildung passt zu Deinen Zielen? Wie ausgeprägt sind Deine digitalen Kompetenzen?

Das hilft Dir, klarer zu formulieren, was Du suchst.

## Schritt 2: Förderung prüfen

Unter **Förderungen** findest Du den Überblick: u. a. Zusage der Agentur (häufig als Bildungsgutschein bezeichnet), Bildungsurlaub, Aufstiegs-BAFöG und mehr. Für Arbeitssuchende und von Arbeitslosigkeit Bedrohte ist die staatliche Kostenübernahme einer AZAV-Maßnahme oft der relevante Hebel – bis zu 100 % der Lehrgangsgebühren sind im Einzelfall möglich.

## Schritt 3: Kurse suchen

Unter **Weiterbildungen** suchst Du nach Thema, Ort, Voll- oder Teilzeit und ob online oder vor Ort. Die Suche zeigt Dir zugelassene Anbieter und Kurse. Wichtig: Nur **AZAV-zertifizierte** Angebote lassen sich in der Regel mit einer Zusage der Agentur kombinieren. Das steht bei den Kursen in der Regel dabei.

## Schritt 4: Beratung nutzen

Wenn Du unsicher bist oder Förderung beantragen willst, führt an der **Beratung** kein Weg vorbei. Das Portal verweist auf Beratungsstellen in Deiner Nähe – oft Agentur für Arbeit oder Jobcenter. Dort besprichst Du Deinen Wunsch und beantragst bei Bedarf die Zusage.

## Tipp für die Praxis

Nutze mein NOW als Einstieg, und hole Dir danach eine **konkrete Beratung** bei einem Bildungsträger. Wir bei Itera Campus beraten Dich kostenlos: Welcher Kurs passt zu Dir, welche Förderung kommt infrage und wie Du das Gespräch mit der Agentur für Arbeit vorbereitest.`,
  },
  {
    slug: "mein-now-bildungsgutschein-foerderung",
    title: "NOW-Navigator + Zusage der Agentur: wie beide Welten zusammenpassen",
    description:
      "Was das Portal leistet, was nur im persönlichen Gespräch geklärt wird und welche Unterlagen Du parallel bei einem Träger vorbereitest.",
    category: "foerderung",
    content: `## mein NOW und Zusage der Agentur: So hängt es zusammen

mein NOW ist das nationale Portal der Bundesagentur für Arbeit für berufliche Weiterbildung. Dort findest Du nicht nur Kurse, sondern auch einen **Förder-Navigator**: Du siehst, welche finanziellen Hilfen es gibt – darunter die bekannte Zusage der Agentur (oft „Bildungsgutschein“ genannt).

## Förderungen auf mein NOW finden

Im Bereich **Förderungen** siehst Du auf einen Blick:
- **Zusage der Agentur** – Kostenübernahme für AZAV-zertifizierte Maßnahmen (bis zu 100 % im Einzelfall)
- **Bildungsurlaub** – bezahlte Freistellung für Weiterbildung (landesrechtlich geregelt)
- **Aufstiegs-BAFöG** – Förderung für Fortbildungen z. B. zum/zur Meister:in oder Fachwirt:in
- Weitere Programme je nach Bundesland und Zielgruppe

Du filterst nach Deiner Situation (z. B. arbeitslos, beschäftigt) und bekommst Hinweise, was für Dich infrage kommt.

## Zusage der Agentur: Das Wichtigste

Für viele unserer Teilnehmer:innen ist diese staatliche Kostenübernahme der zentrale Hebel. Wichtig zu wissen:
- **Kein Rechtsanspruch** – die Agentur für Arbeit entscheidet nach Beratung
- **Beratungsgespräch nötig** – nur danach wird die Zusage ausgestellt
- **Nur AZAV-zertifizierte Kurse** – der Anbieter und die Maßnahme müssen zertifiziert sein
- **Kosten** – Lehrgangsgebühren, Fahrt, Kinderbetreuung und ggf. Unterkunft können übernommen werden

mein NOW hilft Dir, passende Programme zu finden. Den Antrag stellst Du dann im Gespräch mit Deiner Agentur für Arbeit oder Deinem Jobcenter.

## Nach der Förder-Suche: Konkret werden

Wenn Du über mein NOW siehst, dass eine Zusage für Dich infrage kommt, solltest Du:
1. **Beratung buchen** – über mein NOW oder direkt bei der Agentur für Arbeit
2. **Konkretes Kursangebot besorgen** – z. B. von einem AZAV-zertifizierten Anbieter wie Itera Campus
3. **Unterlagen für die Agentur vorbereiten** – wir stellen Dir alle nötigen Nachweise und Infos für das Beratungsgespräch bereit

So verbindest Du das Portal mit dem nächsten Schritt: Beratung und Antrag.`,
  },
];
