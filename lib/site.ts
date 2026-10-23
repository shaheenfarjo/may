// Single source of truth for site content and metadata.

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const site = {
  name: "Mohammed Ali Yassin",
  title: "Mohammed Ali Yassin — Architecture Portfolio",
  description:
    "Portfolio of Mohammed Ali Yassin, a senior architecture student at the University of Technology in Baghdad exploring the intersection of futuristic aesthetics and functional environments.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  locale: "en_US",
  location: "Baghdad, Iraq",
  email: "hello@mohammedaliyassin.com",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/mohammed.ali.yassin" },
    { label: "Behance", href: "https://www.behance.net/mohammedaliyassin" },
  ],
} as const

export type Project = {
  slug: string
  title: string
  category: string
  year: number
  image: string
  alt: string
}

export const projects: Project[] = [
  {
    slug: "primary-school",
    title: "Primary School",
    category: "Community",
    year: 2025,
    image: "/CommunityPrimarySchool.jpg",
    alt: "Architectural rendering of the Community Primary School project",
  },
  {
    slug: "tedx-baghdad",
    title: "Booth Exhibition",
    category: "TEDxBaghdad",
    year: 2024,
    image: "/TEDxBaghdad.jpg",
    alt: "Exhibition booth designed for TEDxBaghdad",
  },
]
