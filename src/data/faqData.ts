export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "diff-edit-proof",
    category: "Editing",
    question: "What is the difference between editing and proofreading?",
    answer: "Editing focuses on improving the writing itself: structure and pacing (Developmental), tone and sentence rhythm (Line), and grammatical clarity and consistency (Copy). Proofreading is the crucial final safeguard performed after formatting to catch residual typos, punctuation slips, or layout errors before your book goes to print.",
  },
  {
    id: "tracked-changes",
    category: "Process",
    question: "Will I see every change you make to my manuscript?",
    answer: "Yes, 100%. All edits are delivered using Microsoft Word Track Changes. You will receive two files: one tracked version showing every suggestion, deletion, and margin comment with the rationale explained, and one clean version ready to use. You retain complete creative control to accept or reject any change.",
  },
  {
    id: "trim-sizes",
    category: "Formatting",
    question: "Which book trim sizes do you format?",
    answer: "Any trim size required for your publication. Standard sizes include 5 x 8 in, 5.5 x 8.5 in, 6 x 9 in (most popular for novels and nonfiction), 7 x 10 in, and 8.5 x 11 in (standard for workbooks and children's books). Simply specify your chosen dimension or target distributor.",
  },
  {
    id: "platforms",
    category: "Publishing",
    question: "Can you format for platforms other than Amazon KDP?",
    answer: "Absolutely. In addition to Amazon KDP (Kindle & Paperback), files can be formatted and configured for IngramSpark, Barnes & Noble Press, Apple Books, Kobo, Google Play Books, and Smashwords/Draft2Digital.",
  },
  {
    id: "cover-deliverables",
    category: "Design",
    question: "What deliverables are included with book cover design?",
    answer: "You receive a high-resolution 300 DPI print-ready PDF with bleed and spine dimensions calculated exactly for your page count, an eBook front cover (JPEG/WebP) optimized for digital marketplaces, and photorealistic 3D book mockups for social media and marketing campaigns.",
  },
  {
    id: "genres",
    category: "General",
    question: "Which genres do you work with?",
    answer: "I work with a diverse spectrum of genres including Fiction (Thriller, Romance, Sci-Fi, Fantasy, Historical), Nonfiction (Self-Help, Business, Memoirs, Biography), Children's Illustrated & Rhyming Books, Christian & Spiritual Literature, and Academic / Educational publications.",
  },
  {
    id: "how-to-start",
    category: "Getting Started",
    question: "How do I get started or request a custom quote?",
    answer: "Click the 'Hire me on Fiverr' or 'Get a Quote' button to send a message with your manuscript's total word count, genre, and target deadline. You can also use our on-page Estimate Calculator to assemble a customized project brief to paste directly into our Fiverr chat.",
  },
  {
    id: "confidentiality",
    category: "Security",
    question: "Is my manuscript kept confidential and safe?",
    answer: "Yes, completely. Your manuscript, intellectual property, and concepts remain 100% confidential. I never share, sell, or disclose author drafts with third parties.",
  },
];
