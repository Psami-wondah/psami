import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Noto_Sans, Space_Grotesk } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Samuel Owhondah | Frontend / Full-Stack Software Engineer",
  description:
    "Samuel Owhondah is a Frontend / Full-Stack Software Engineer building scalable, user-focused web applications.",
  icons: { icon: "./favicon.svg" },
  authors: [
    {
      name: "Owhondah Okechukwu Samuel",
      url: "https://x.com/psami",
    },
  ],
  creator: "Owhondah Okechukwu Samuel",
  publisher: "Owhondah Okechukwu Samuel",
  openGraph: {
    title: "Samuel Owhondah | Frontend / Full-Stack Software Engineer",
    description:
      "Frontend / Full-Stack Software Engineer specializing in React, Next.js, TypeScript, and Python-based backends.",
    type: "website",
    locale: "en_GB",
    siteName: "Samuel Owhondah",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPce0ejcqsIRnhTa6RNky-74eXTSbogp_EXFgpKb9nUqUuteHlAqBq3drUOnoSlvPt4Shj4BRXic8AVxeJZB9R9ZkwBMwbUTYYGABoR2Stnfqwop6XNTQQ7SsqFEMqbJ8ghoKD0B2hTmvsWReWUVV40cp6dYpKDpAqtMsqIKBEgBkTOK9UvTNlPzLJUlrg-n36c79TNnnjLQhWhlmF6d-I6hwDvEs06uZh_AFPfOlLKjdmLmFkaoZ018qbNfG8JmFKfeV7wiaHe3mE",
        width: 1200,
        height: 630,
        alt: "Samuel Owhondah portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@psami",
    title: "Samuel Owhondah | Frontend / Full-Stack Software Engineer",
    description:
      "Frontend / Full-Stack Software Engineer specializing in React, Next.js, TypeScript, and Python-based backends.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPce0ejcqsIRnhTa6RNky-74eXTSbogp_EXFgpKb9nUqUuteHlAqBq3drUOnoSlvPt4Shj4BRXic8AVxeJZB9R9ZkwBMwbUTYYGABoR2Stnfqwop6XNTQQ7SsqFEMqbJ8ghoKD0B2hTmvsWReWUVV40cp6dYpKDpAqtMsqIKBEgBkTOK9UvTNlPzLJUlrg-n36c79TNnnjLQhWhlmF6d-I6hwDvEs06uZh_AFPfOlLKjdmLmFkaoZ018qbNfG8JmFKfeV7wiaHe3mE",
    ],
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
      className={`${notoSans.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
