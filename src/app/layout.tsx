import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://clinica-fisioterapia-marica.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Clínica de Fisioterapia, Pilates e Reabilitação Maricá | Espaço Reabilitar",
  description: "Especialistas em fisioterapia moderna, pilates clínico, reabilitação física, fonoaudiologia e nutrição em Maricá. Atendimento humanizado e personalizado.",
  keywords: ["fisioterapia Maricá", "pilates Maricá", "reabilitação Maricá", "clínica de pilates", "fisioterapeuta Maricá", "dor nas costas Maricá", "reabilitação física", "RPG Maricá"],
  authors: [{ name: "Siknode Digital" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clínica de Fisioterapia, Pilates e Reabilitação Maricá | Espaço Reabilitar",
    description: "Recupere sua mobilidade e viva sem dor. Equipe multidisciplinar com tecnologia avançada aplicada à saúde física em Maricá.",
    url: "https://espacoreabilitarmarica.com.br",
    siteName: "Espaço Reabilitar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Espaço Reabilitar Maricá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica de Fisioterapia, Pilates e Reabilitação Maricá | Espaço Reabilitar",
    description: "Especialistas em fisioterapia moderna, pilates clínico e reabilitação física em Maricá.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema LocalBusiness em formato JSON-LD com dados reais da clínica
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Espaço Reabilitar - Clínica de Fisioterapia, Pilates e Reabilitação",
    "alternateName": "Clínica Espaço Reabilitar Maricá",
    "description": "Clínica premium especializada em Fisioterapia, Pilates Clínico, Fonoaudiologia, Nutrição e Reabilitação Física de Alta Performance em Maricá.",
    "url": "https://espacoreabilitarmarica.com.br",
    "telephone": "+5521968993480",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Maysa, entre a rua 87 e 88 - Cordeirinho",
      "addressLocality": "Maricá",
      "addressRegion": "RJ",
      "postalCode": "24921-456",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.95577,
      "longitude": -42.74475
    },
    "hasMap": "https://maps.google.com/?q=26VV%2B72+Maric%C3%A1,+Rio+de+Janeiro",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/espacoreabilitarmarica",
      "https://facebook.com/espacoreabilitarmarica"
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-brand-blue selection:text-white">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
