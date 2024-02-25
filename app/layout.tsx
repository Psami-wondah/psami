import NavBar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Owhondah Okechukwu Samuel",
  description: "Psami's Portfolio",
  icons: { icon: "./favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
