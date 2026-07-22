import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Noto_Sans, Space_Grotesk } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psami.com"),
  title: "Okechukwu Samuel Owhondah | Frontend / Full-Stack Software Engineer",
  description:
    "Okechukwu Samuel Owhondah is a Frontend / Full-Stack Software Engineer building scalable, user-focused web applications.",
  icons: { icon: "/favicon.svg" },
  authors: [
    {
      name: "Okechukwu Samuel Owhondah",
      url: "https://x.com/psami_",
    },
  ],
  creator: "Okechukwu Samuel Owhondah",
  publisher: "Okechukwu Samuel Owhondah",
  openGraph: {
    title:
      "Okechukwu Samuel Owhondah | Frontend / Full-Stack Software Engineer",
    description:
      "Frontend / Full-Stack Software Engineer specializing in React, Next.js, TypeScript, and Python-based backends.",
    type: "website",
    locale: "en_GB",
    siteName: "Okechukwu Samuel Owhondah",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@psami",
    title:
      "Okechukwu Samuel Owhondah | Frontend / Full-Stack Software Engineer",
    description:
      "Frontend / Full-Stack Software Engineer specializing in React, Next.js, TypeScript, and Python-based backends.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${notoSans.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
