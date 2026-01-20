"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import { clsx } from "@/utils/utils";

type NavItem = {
  label: string;
  href: string;
};

type Brand = {
  name: string;
  accent?: string;
  icon?: React.ReactNode;
};

type SiteHeaderProps = {
  brand: Brand;
  navItems: NavItem[];
  rightSlot?: React.ReactNode;
};

const SiteHeader = ({
  brand,
  navItems,
  rightSlot,
}: SiteHeaderProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const baseClasses =
    "w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50";
  const containerClasses =
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3";

  return (
    <header className={baseClasses}>
      <div className={`${containerClasses} flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="text-primary">{brand.icon}</div>
          <span className="text-xl font-display font-bold tracking-tight dark:text-white">
            {brand.name}
            {brand.accent && (
              <span className="text-primary">{brand.accent}</span>
            )}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-medium transition-colors py-1",
                isActive(item.href)
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {rightSlot}
          <ThemeToggle mode="single" />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
