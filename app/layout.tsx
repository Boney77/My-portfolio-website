import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { BackgroundEffects } from "@/components/background-effects";
import { MotionProvider } from "@/components/motion-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boney-mechery.dev"),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Premium developer portfolio for Boney Mechery, a Java Backend Developer specializing in Spring Boot, REST APIs, databases, Docker, AWS, and secure backend platforms.",
  keywords: [
    "Boney Mechery",
    "Java Backend Developer",
    "Spring Boot",
    "REST APIs",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MySQL",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description:
      "Java backend portfolio featuring scalable APIs, secure systems, cloud-ready architecture, and full-stack projects.",
    url: "https://boney-mechery.dev",
    siteName: `${profile.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description:
      "Java backend portfolio featuring scalable APIs, secure systems, cloud-ready architecture, and full-stack projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        <MotionProvider>
          <ScrollProgress />
          <BackgroundEffects />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
