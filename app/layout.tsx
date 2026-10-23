import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/lib/site"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-syne",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: ["Mohammed Ali Yassin", "architecture", "architecture student", "portfolio", "spatial design", "Baghdad", "University of Technology"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
    images: [{ url: "/CommunityPrimarySchool.jpg", width: 1280, height: 720, alt: "Community Primary School by Mohammed Ali Yassin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/CommunityPrimarySchool.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
