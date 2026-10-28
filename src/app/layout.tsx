import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://favour-website.pages.dev"),
  title: "Favour | Professional Book Editor, KDP Formatter & Cover Designer",
  description:
    "Professional book proofreading, copy editing, line editing, developmental editing, Amazon KDP formatting, and bespoke cover design for authors of all genres. 7+ years of experience.",
  keywords: [
    "book editor",
    "book proofreading",
    "copy editing",
    "line editing",
    "developmental editing",
    "Amazon KDP formatting",
    "Kindle formatting",
    "book cover design",
    "manuscript formatting",
    "Fiverr book editor",
  ],
  authors: [{ name: "Favour", url: "https://www.fiverr.com/s/X00Ar10" }],
  creator: "Favour",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fiverr.com/s/X00Ar10",
    title: "Favour | Book Editor, KDP Formatter & Cover Designer",
    description:
      "From manuscript to publication-ready masterpiece. Tracked changes proofreading, editing, Amazon KDP interiors, and high-impact book covers.",
    siteName: "Favour Book Publishing Services",
    images: [
      {
        url: "/assets/img/og.jpg",
        width: 1200,
        height: 630,
        alt: "Favour - Professional Book Editor and Book Cover Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Favour | Book Editor, KDP Formatter & Cover Designer",
    description: "From first draft to published book. 7+ years editing and formatting experience.",
    images: ["/assets/img/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#F7F3EB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Favour | Book Editor and Book Cover Designer",
              description:
                "Book proofreading, copy editing, developmental editing, Amazon KDP formatting, and book cover design.",
              url: "https://www.fiverr.com/s/X00Ar10",
              areaServed: "Worldwide",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "74",
              },
              serviceType: [
                "Book proofreading",
                "Copy editing",
                "Line editing",
                "Developmental editing",
                "Book formatting",
                "Book cover design",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Script id="theme-preference" strategy="beforeInteractive">
          {`try {
            var savedTheme = localStorage.getItem("favour-theme");
            var initialTheme = savedTheme === "light" || savedTheme === "dark"
              ? savedTheme
              : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            document.documentElement.dataset.theme = initialTheme;
            document.documentElement.style.colorScheme = initialTheme;
            var themeColor = document.querySelector('meta[name="theme-color"]');
            if (themeColor) themeColor.content = initialTheme === "dark" ? "#141311" : "#F7F3EB";
          } catch {
            document.documentElement.dataset.theme = "light";
          }`}
        </Script>
      </body>
    </html>
  );
}
