import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  metadataBase: new URL("https://psami.com"),
  title: "Samuel Owhondah | Software Engineer & Product Builder",
  description: "The work, experiments and writing of Samuel Owhondah, a software engineer building products and tools with care and curiosity.",
  icons: { icon: "/favicon.svg" },
  authors: [{ name: "Okechukwu Samuel Owhondah", url: "https://x.com/psami_" }],
  creator: "Okechukwu Samuel Owhondah",
  publisher: "Okechukwu Samuel Owhondah",
  openGraph: { title: "Samuel Owhondah | Software Engineer & Product Builder", description: "An index of products, experiments and writing by Samuel Owhondah.", type: "website", locale: "en_GB", siteName: "Psami" },
  twitter: { card: "summary", creator: "@psami", title: "Samuel Owhondah | Software Engineer & Product Builder", description: "Products, experiments and writing by Samuel Owhondah." },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning className={notoSans.variable}><body><ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader/>{children}<SiteFooter/></ThemeProvider></body></html>;
}
