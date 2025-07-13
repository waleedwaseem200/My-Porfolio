import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import AnimatedCursor from "@/components/AnimatedCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://abdulrehman-code.vercel.app";
console.log(process.env.NEXT_PUBLIC_BASE_URL);

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Waleed Waseem - Full Stack Developer",
    default: "Waleed Waseem | Full Stack Developer",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies with a focus on performance and user experience.",
  keywords: [
    "full stack developer",
    "react developer",
    "nextjs developer",
    "web developer",
    "typescript",
    "Waleed Waseem",
    "software engineer",
    "pakistan developer",
  ],
  authors: [{ name: "Waleed Waseem Waseem" }],
  creator: "Waleed Waseem Waseem",
  publisher: "Waleed Waseem Waseem",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Waleed Waseem Waseem | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies",
    siteName: "Waleed Waseem Portfolio",
    images: [
      {
        url: `${baseUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: "Waleed Waseem Waseem - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Waseem Waseem | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    images: [`${baseUrl}/api/twitter`],
    creator: "@abdulrehmn_code",
  },
  icons: {
    other: [
      {
        rel: "image",
        url: "/api/linkedin",
      },
    ],
  },
  verification: {
    google: "your-google-verification-id",
  },
  appleWebApp: {
    title: "Waleed Waseem",
    statusBarStyle: "black-translucent",
  },
  applicationName: "Waleed Waseem Portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
    { media: "(prefers-color-scheme: light)", color: "#fca311" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="view-transition" content="same-origin" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${spaceGrotesk.className} antialiased`}
        suppressHydrationWarning
      >
        {/* <CustomCursor /> */}
        <AnimatedCursor />

        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Waleed Waseem Waseem",
              url: baseUrl,
              sameAs: [
                "https://github.com/waleedwaseem",
                "https://pk.linkedin.com/in/waleedwaseem",
                "https://x.com/abdulrehmn_code",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              image: `${baseUrl}/profile-photo.webp`,
              description:
                "Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies",
              nationality: "Pakistani",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Pakistan",
                addressRegion: "Sindh",
                addressLocality: "Hyderabad",
              },
              knowsLanguage: ["English", "Urdu"],
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
