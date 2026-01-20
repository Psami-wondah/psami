type FooterVariant = "home" | "blog" | "post";

type SiteFooterProps = {
  variant?: FooterVariant;
};

const socialLinks = [
  { label: "Twitter / X", href: "https://x.com/psami" },
  { label: "GitHub", href: "https://github.com/Psami-wondah" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/okechukwu-samuel-owhondah-660328208/",
  },
  { label: "Email", href: "mailto:me@psami.com" },
];

const SiteFooter = ({ variant = "home" }: SiteFooterProps) => {
  if (variant === "blog") {
    return (
      <footer className="border-t border-slate-200 dark:border-[#232f48] py-10 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 opacity-60">
          <div className="size-5 text-slate-900 dark:text-white">
            <svg fill="currentColor" viewBox="0 0 48 48">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
            </svg>
          </div>
          <p className="text-sm font-medium">
            © 2024 Samuel Owhondah. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="text-slate-500 dark:text-[#92a4c9] hover:text-primary text-sm transition-colors"
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
          <a
            className="text-slate-500 dark:text-[#92a4c9] hover:text-primary text-sm transition-colors"
            href="/resume.pdf"
            download
          >
            Resume
          </a>
        </div>
      </footer>
    );
  }

  if (variant === "post") {
    return (
      <footer className="py-10 border-t border-slate-200 dark:border-[#232f48] bg-white/50 dark:bg-background-dark/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2024 Samuel Owhondah. Designed with care for the developer community.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                className="hover:text-primary"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <a className="hover:text-primary" href="/resume.pdf" download>
              Resume
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary font-bold">
              terminal
            </span>
            <span className="font-display font-bold text-lg dark:text-white">
              Psami
            </span>
            <span className="text-slate-500 text-sm ml-4">
              © 2024 Samuel Owhondah.
            </span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                className="hover:text-primary"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <a className="hover:text-primary" href="/resume.pdf" download>
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
