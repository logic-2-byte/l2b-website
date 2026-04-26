import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#d4c1ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Logic2byte | Leading Software Solutions & Digital Products",
    template: "%s | Logic2byte"
  },
  description: "Logic2byte (Logic 2 Byte) provides world-class software management solutions, custom eCommerce platforms, and SaaS products. The ultimate destination for Logic and Byte-driven innovation.",
  keywords: [
    "Logic2byte", "Logic 2 Byte", "Logic Software", "Byte Solutions", 
    "Software Development", "eCommerce Management", "SaaS Products", 
    "Management Software", "Business Automation", "Logic Solutions", "Byte Apps"
  ],
  authors: [{ name: "Logic2byte Team" }],
  creator: "Logic2byte",
  publisher: "Logic2byte",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://logic2byte.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Logic2byte | World-Class Software & Byte Solutions",
    description: "Empowering brands with visual excellence. Specialized Logic and Byte-driven management solutions for every business sector.",
    url: "https://logic2byte.com",
    siteName: "Logic2byte",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logic2byte | Innovation in Logic & Byte",
    description: "Custom software and management products built for global scale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD for Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Logic2byte",
    "alternateName": ["Logic 2 Byte", "Logic2Byte Software"],
    "url": "https://logic2byte.com",
    "logo": "https://logic2byte.com/logo.png", // Ensure you have this
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "support@logic2byte.com"
    },
    "sameAs": [
      "https://twitter.com/logic2byte",
      "https://linkedin.com/company/logic2byte"
    ],
    "description": "Logic2byte provides premium software management solutions and custom digital products for businesses worldwide."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col selection:bg-[#d4c1ff]/30 antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
