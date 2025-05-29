import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Shubh Verma | Full-Stack Web Developer & Software Engineer",
    template: "%s | Shubh Verma",
  },
  description:
    "Shubh Verma is a passionate Full-Stack Web Developer specializing in MERN stack, Next.js, React.js, and modern web technologies. Building scalable applications with expertise in JavaScript, Node.js, MongoDB, and SaaS development. Computer Science student and tech enthusiast from Indore, India.",
  keywords: [
    "Shubh Verma",
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "SaaS Developer",
    "Indore Developer",
    "Computer Science Student",
    "Portfolio",
    "Freelancer",
  ],
  authors: [{ name: "Shubh Verma", url: "https://shubhverma.me" }],
  creator: "Shubh Verma",
  publisher: "Shubh Verma",
  verification: {
    google: "3Mi2PLSmwfA6DNdxoRjmaOKr4-kaqcwuCXgbJMddmjI",
  },
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhverma.me",
    siteName: "Shubh Verma - Full-Stack Web Developer",
    title: "Shubh Verma | Full-Stack Web Developer & Software Engineer",
    description:
      "Passionate Full-Stack Web Developer specializing in MERN stack, Next.js, and modern web technologies. Building scalable applications and SaaS solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shubh Verma - Full-Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shubhverma21",
    creator: "@shubhverma21",
    title: "Shubh Verma | Full-Stack Web Developer & Software Engineer",
    description:
      "Portfolio of Shubh Verma — MERN & Next.js developer, building scalable web applications and learning in public.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shubhverma.me",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://shubhverma.me/#person",
      name: "Shubh Verma",
      url: "https://shubhverma.me",
      image: {
        "@type": "ImageObject",
        url: "/shubh-verma-photo.jpg",
        width: 400,
        height: 400,
      },
      description:
        "Full-Stack Web Developer specializing in MERN stack, Next.js, and modern web technologies",
      jobTitle: "Full-Stack Web Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Acropolis Institute of Technology and Research",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          addressCountry: "India",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "India",
      },
      email: "mailto:shubhverma2003@gmail.com",
      sameAs: [
        "https://github.com/shubh-v21",
        "https://linkedin.com/in/shubhverma21",
        "https://twitter.com/shubhverma21",
      ],
      knowsAbout: [
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TailwindCSS",
        "MERN Stack",
        "Full-Stack Development",
        "Web Development",
        "SaaS Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://shubhverma.me/#website",
      url: "https://shubhverma.me",
      name: "Shubh Verma - Full-Stack Web Developer",
      description:
        "Portfolio website of Shubh Verma, showcasing full-stack web development projects and skills",
      publisher: {
        "@id": "https://shubhverma.me/#person",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://shubhverma.me/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://shubhverma.me/#profilepage",
      url: "https://shubhverma.me",
      name: "Shubh Verma Portfolio",
      isPartOf: {
        "@id": "https://shubhverma.me/#website",
      },
      about: {
        "@id": "https://shubhverma.me/#person",
      },
      description:
        "Professional portfolio showcasing Shubh Verma's expertise in full-stack web development, projects, and skills",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://shubhverma.me" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7196;75.8577" />
        <meta name="ICBM" content="22.7196, 75.8577" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
