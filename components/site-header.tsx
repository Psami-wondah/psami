"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { Close, Download, Menu } from "@/components/icons";
import { navigation, siteLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = menuRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>("a, button:not([disabled])"),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-container flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="brand-mark" aria-label="Psami — home">
          <span className="brand-prompt" aria-hidden="true">~/</span>
          <span>psami</span><span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a className="button-quiet hidden sm:inline-flex" href={siteLinks.resume} download>
            <Download className="h-4 w-4" />
            Résumé
          </a>
          <a className="button-primary hidden md:inline-flex" href={siteLinks.email}>
            Let&apos;s talk
          </a>
          <button
            ref={triggerRef}
            type="button"
            className="icon-button lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-backdrop ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        onMouseDown={(event) => {
          if (event.currentTarget === event.target) setOpen(false);
        }}
      >
        <div ref={menuRef} id="mobile-navigation" className="mobile-nav-panel">
          <p className="eyebrow mb-5">Navigation</p>
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${isActive(item.href) ? "is-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
            <a className="button-quiet justify-center" href={siteLinks.resume} download>
              Résumé
            </a>
            <a className="button-primary justify-center" href={siteLinks.email}>
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
