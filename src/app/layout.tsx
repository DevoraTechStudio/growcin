import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Instrument_Serif, Playfair_Display, JetBrains_Mono, Manrope, Bebas_Neue } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/layout/FinalCTA";
import schemas from "../../public/schema-all.json";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.growcin.com"),
  title: {
    default: "Growcin | AI-Powered Growth & Campaign Intelligence Platform",
    template: "%s | Growcin",
  },
  description:
    "Growcin monitors your ad campaigns 24/7, detects budget leaks and CPA spikes early, and qualifies inbound leads automatically on WhatsApp and Instagram.",
  applicationName: "Growcin",
  authors: [{ name: "Growcin", url: "https://www.growcin.com" }],
  creator: "Growcin",
  publisher: "Growcin",
  keywords: [
    "Growcin",
    "AI campaign intelligence",
    "free Meta Ads audit",
    "ad spend protection",
    "CPA guardrails",
    "creative fatigue detection",
    "WhatsApp lead qualification",
    "ad automation software",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.growcin.com/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Growcin | AI-Powered Growth & Campaign Intelligence Platform",
    description:
      "Growcin monitors your ad campaigns 24/7, detects budget leaks and CPA spikes early, and qualifies inbound leads automatically on WhatsApp and Instagram.",
    url: "https://www.growcin.com/",
    siteName: "Growcin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.growcin.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Growcin — AI-Powered Growth & Campaign Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@growcin",
    creator: "@growcin",
    title: "Growcin | AI-Powered Growth & Campaign Intelligence Platform",
    description:
      "Growcin monitors your ad campaigns 24/7, detects budget leaks and CPA spikes early, and qualifies inbound leads automatically on WhatsApp and Instagram.",
    images: ["https://www.growcin.com/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${instrumentSerif.variable} ${playfair.variable} ${jetbrainsMono.variable} ${bebasNeue.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#A855F7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://aichatassist.pages.dev" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          rel="stylesheet"
        />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* Meta Pixel Stub - Prevents window.fbq errors from third-party chat and analytics scripts */}
        <script
          id="fbq-stub"
          dangerouslySetInnerHTML={{
            __html: `!function(){if(typeof window!=="undefined"&&!window.fbq){var n=window.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!window._fbq)window._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];}}();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased selection:bg-purple-500/20 bg-[#FAF8FD] text-slate-900">
        <Navbar />
        <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
        <main className="flex-1 relative z-10">{children}</main>
        <FinalCTA />
        <Footer />

        {/* Live web component assistant */}
        <ai-assist-bot />
        <link id="aca-bot-styles" rel="stylesheet" href="https://aichatassist.pages.dev/styles.css" media="print" />
        <Script id="aca-bot-styles-activate" strategy="lazyOnload">
          {`document.getElementById('aca-bot-styles')?.setAttribute('media','all');`}
        </Script>
        <Script id="helper" src="https://aichatassist.pages.dev/bundle.js?key=abc1234" strategy="lazyOnload" />
      </body>
    </html>
  );
}
