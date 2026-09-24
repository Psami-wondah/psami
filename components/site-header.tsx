"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { navigation } from "@/lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="site-container header-inner">
      <Link href="/" className="brand-mark" aria-label="Psami, home" onClick={() => setOpen(false)}>PSAMI<span className="brand-dot">.</span></Link>
      <nav className="header-nav" aria-label="Primary navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-link is-active" : "nav-link"}>{item.label}</Link>)}
      </nav>
      <div className="header-actions"><ThemeToggle /><button className="menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button></div>
    </div>
    <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
      {navigation.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}<span>↗</span></Link>)}
    </nav>
  </header>;
}
