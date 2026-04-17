import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getOrganizationSchema } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iván Calás | Diseño Web y SEO para toda España",
  description: "Creo páginas web rápidas y optimizadas para Google, pensadas para convertir visitas en clientes. +20 años de experiencia en diseño web profesional y SEO.",
  keywords: "diseño web, SEO, posicionamiento google, diseño web rápido, fotografía profesional",
  authors: [{ name: "Iván Calás" }],
  creator: "Iván Calás",
  publisher: "Iván Calás",
  openGraph: {
    title: "Iván Calás | Diseño Web y SEO para toda España",
    description: "Creo páginas web rápidas y optimizadas para Google, pensadas para convertir visitas en clientes.",
    type: "website",
    locale: "es_ES",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d0d0d" />
        
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
