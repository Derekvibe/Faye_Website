export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  priceNote: string;
  turnaround: string;
  features: string[];
  icon: "check-circle" | "pen-tool" | "book-open" | "layers" | "layout" | "sparkles";
}

export const servicesData: ServiceItem[] = [
  {
    id: "proofreading",
    title: "Proofreading",
    tagline: "The final polish before your book meets readers",
    description: "A meticulous final check catching spelling, grammar, punctuation, typos, and formatting inconsistencies so your published pages are immaculate.",
    priceNote: "From $20 on Fiverr",
    turnaround: "2-4 days",
    features: [
      "Spelling, grammar & typos",
      "Punctuation & capitalization",
      "Homophones & repeated words",
      "Tracked Changes in MS Word",
      "Clean copy + tracked version",
    ],
    icon: "check-circle",
  },
  {
    id: "copy-editing",
    title: "Copy Editing",
    tagline: "Clarity, consistency, and professional polish",
    description: "Sentence-by-sentence refinement ensuring grammatical accuracy, syntax flow, style consistency, and factual clarity—while keeping your authentic voice untouched.",
    priceNote: "Included in editing packages",
    turnaround: "3-5 days",
    features: [
      "Sentence structure & clarity",
      "Consistency in tense & voice",
      "Word choice & vocabulary enrichment",
      "Dialogue punctuation & flow",
      "Detailed style sheet included",
    ],
    icon: "pen-tool",
  },
  {
    id: "line-editing",
    title: "Line Editing",
    tagline: "Tone, cadence, and emotional resonance",
    description: "Deep stylistic work on tone, voice, rhythm, and lyrical flow. Ideal for children's books, rhyme and meter, and atmospheric fiction that demands evocative prose.",
    priceNote: "From $20 on Fiverr",
    turnaround: "3-6 days",
    features: [
      "Rhythm, cadence & meter",
      "Show vs. tell optimization",
      "Eliminating redundancy & clichés",
      "Sensory details & pacing",
      "Constructive margin commentary",
    ],
    icon: "sparkles",
  },
  {
    id: "developmental-editing",
    title: "Developmental Editing",
    tagline: "Big-picture story craft and structural mastery",
    description: "High-level analysis of your manuscript's architecture: narrative arc, pacing, character development, plot holes, themes, and reader engagement.",
    priceNote: "From $40 on Fiverr",
    turnaround: "5-10 days",
    features: [
      "Plot structure & chapter transitions",
      "Character motivation & arc depth",
      "Pacing & narrative tension",
      "In-depth editorial letter",
      "Chapter-by-chapter annotated notes",
    ],
    icon: "book-open",
  },
  {
    id: "book-formatting",
    title: "Book Interior Formatting",
    tagline: "Flawless Amazon KDP interiors for print & eBook",
    description: "Professional interior typesetting for Amazon KDP, IngramSpark, Barnes & Noble, and Apple Books. Custom fonts, headers, page numbers, margins, and drop caps.",
    priceNote: "Available in packages",
    turnaround: "2-4 days",
    features: [
      "Amazon KDP paperback & hardcover PDF",
      "EPUB & Kindle eBook formatting",
      "Custom drop caps & chapter flourishes",
      "Clickable Table of Contents",
      "Editable Word source files on request",
    ],
    icon: "layout",
  },
  {
    id: "cover-design",
    title: "Book Cover Design",
    tagline: "High-impact covers engineered to stop the scroll",
    description: "Eye-catching cover art tailored to your genre conventions. Full wraps including front, spine with precise barcode sizing, back cover blurb, and 3D mockups.",
    priceNote: "Available in packages",
    turnaround: "2-5 days",
    features: [
      "Front cover + Full paperback wrap",
      "Exact KDP spine width calculation",
      "High-res 300 DPI print-ready CMYK",
      "Kindle / eBook RGB cover",
      "3D photorealistic promotion mockups",
    ],
    icon: "layers",
  },
];
