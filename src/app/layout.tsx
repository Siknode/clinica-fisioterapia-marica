import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";
import { site } from "@/lib/site";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16308f",
};

const siteUrl = "https://clinica-fisioterapia-marica.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Clínica de Fisioterapia, Pilates e Reabilitação Maricá | Espaço Reabilitar",
  description: "Pilates com fisioterapeuta, fisioterapia, massoterapia, psicologia, nutrição, psicopedagogia e jiu-jitsu kids em Cordeirinho, Maricá. Saúde completa para toda família.",
  keywords: ["fisioterapia Maricá", "pilates Maricá", "pilates Cordeirinho", "massoterapia Maricá", "psicologia Maricá", "nutricionista Maricá", "psicopedagogia Maricá", "jiu-jitsu kids Maricá"],
  authors: [{ name: "Siknode Digital" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Clínica de Fisioterapia, Pilates e Reabilitação Maricá | Espaço Reabilitar",
    description: "Pilates com fisioterapeuta, fisioterapia, massoterapia, psicologia, nutrição e mais em Cordeirinho, Maricá. Saúde completa para toda família.",
    url: siteUrl,
    siteName: "Espaço Reabilitar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Espaço Reabilitar Maricá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica de Fisioterapia, Pilates e Reabilitação Maricá | Espaço Reabilitar",
    description: "Pilates com fisioterapeuta, fisioterapia e saúde completa para toda família em Cordeirinho, Maricá.",
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  // Site de prospecção: fica fora do Google até a clínica aprovar (ver src/lib/site.ts)
  robots: site.preview ? { index: false, follow: false } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema LocalBusiness com dados conferidos no Instagram da clínica
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": site.name,
    "description": "Pilates com fisioterapeuta, fisioterapia, massoterapia, psicologia, nutrição, psicopedagogia e jiu-jitsu kids em Cordeirinho, Maricá.",
    "url": siteUrl,
    "telephone": `+${site.phoneE164}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${site.address.street} - ${site.address.district}`,
      "addressLocality": site.address.city,
      "addressRegion": site.address.state,
      "postalCode": site.address.postalCode,
      "addressCountry": "BR"
    },
    "sameAs": [site.instagramUrl]
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
        <WhatsAppFlutuante />
      </body>
    </html>
  );
}
