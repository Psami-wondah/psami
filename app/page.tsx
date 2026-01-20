import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProjectCard from "@/components/cards/project-card";
import PostRow from "@/components/cards/post-row";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

const projects = [
  {
    title: "Copyyt",
    description:
      "Copy text on one device and access it instantly on another with a simple Chrome extension workflow.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNzd2Vz3goOCtvp2--FS6Hq4ioUVIDRpswntheE1w-Vai9PEPybxEhZyxgGDf8BWyH2Rr6LSCClfl9IyffbTfLb6UOQzbty35LocYhv9nmIbrfSshzA5kpP1x1Gs_2ZxbkYlldfNy5LpqSlsZXVplAnDPhPMkC_wz7kXfEIuo4Lp9zD9Jf9VDFIX26u8Y5Ox3JvrpxPRBQQKrSmu4cPtJrhWrxATqUeKrVdKMxCSdl-OCrHwsnygQ1qG9edTjJ2BIFMWYVb-n_G5hg",
    icon: "content_copy",
    tags: ["Chrome Extension", "Productivity", "Web"],
  },
  {
    title: "E-commerce Engine",
    description:
      "Full-stack marketplace with real-time inventory, secure Stripe payments, and admin dashboard.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYrCdgQa5JtQg-ZS2vRLGu3Dqv7LDHiGsnXW-hEGPllLx7ebQB-l4vwwXFvhKL7iGaehyuskIStvztB-3lZxtf9jTx7HuYWrc2pDsLyJUeuwDCdxePucX1OgoOQ2WoAzXXcR1APlEC37ONz9eBJwbC2gzX7lWaco4cuett2R3qu_mPiBJ0wFhfbg2NbznJ4jfoDb8BQSsww46bmuSnMufYXeGCa7MyWFO9cI-ts20kbl_Nt0v2-UHQo3wiq55ZaIOY4oPqabbHUDrH",
    icon: "terminal",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "AI Chat Dashboard",
    description:
      "Generative AI integration with streaming responses, conversation history, and persona selection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmDvnytxTSMfQb7jIi3bHhnqf_wA2UHUreu-CiJnc5kctk1S6n8Ly5Bdg4rdCNeHZ064UBdGnYD2k8dKIsDM7Q6BsizhKMZuIUxsm41N0TOb8PLqiQbssx_5x7fdKf3k8yDq74AnYHMBMXfinsazHevAfbptgyIthv7rY8_NgqG3Yc1QKwx3V4EFS1ob20UkmGi82-_ofQ5BBF3ILMEhanALgwxkqnpflFlRIwrcg2tkJQk4fCiFk7TWt9SMsp-of1aj2WATCR350q",
    icon: "smart_toy",
    tags: ["Python", "OpenAI", "LangChain"],
  },
  {
    title: "FinTech API",
    description:
      "Secure banking middleware with 99.9% uptime, distributed locking, and event-driven architecture.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_meZXTFq9hxvbs_FSan_YoEDy38Ofr84Kx1aS6xp1-AqwL1isACXFgYQiPxCAKF2eW-8Cp7mDUoaZKgn3s441tycH2AKo7DEUlbEfgSQwA9co6XyS-JlMx5DZwKDjTiIOU7bHzjdNLQV7ZofHc39-KyE3QhrPW1ShHqRWJ590Y8ZhUQ61OoraiBYt_041od9dwKOOnm2hlXmK8PLVkyBiaw-zHzDrcwWcmL2s_oKN0-qN27_KBwgfYEROa1M68ZuKlVxaOQEw-Ax9",
    icon: "account_balance",
    tags: ["Go", "Docker", "Redis"],
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "AWS",
  "Docker",
];

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <div>
      <SiteHeader
        brand={{
          name: "Psami",
          accent: ".",
          icon: (
            <span className="material-symbols-outlined text-3xl font-bold">
              terminal
            </span>
          ),
        }}
        navItems={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/#projects" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/#contact" },
        ]}
        rightSlot={
          <>
            <a
              className="hidden sm:flex items-center gap-2 border border-primary/30 text-primary px-4 py-1.5 rounded-lg text-sm font-bold transition-all font-display hover:bg-primary/5"
              href="/resume.pdf"
              download
            >
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Resume
            </a>
            <a
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all font-display"
              href="mailto:me@psami.com"
            >
              Hire Me
            </a>
          </>
        }
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-10">
            <div className="flex-1 flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new projects
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-display text-5xl md:text-7xl font-black leading-tight tracking-tight dark:text-white">
                  Building digital products with{" "}
                  <span className="text-primary">precision</span> and code.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                  Hi, I&apos;m Samuel, a Frontend / Full-Stack Software Engineer
                  specializing in high-performance web applications and scalable
                  system architecture. I turn complex problems into elegant
                  code.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 font-display"
                  href="/resume.pdf"
                  download
                >
                  <span className="material-symbols-outlined">download</span>
                  Download Resume
                </a>
                <a
                  className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-all flex items-center gap-2 font-display"
                  href="https://github.com/Psami-wondah"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">code</span>
                  View GitHub
                </a>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden aspect-square">
                  <div
                    className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center bg-cover bg-center"
                    role="img"
                    aria-label="Modern workspace with high-end computer monitors showing code"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPce0ejcqsIRnhTa6RNky-74eXTSbogp_EXFgpKb9nUqUuteHlAqBq3drUOnoSlvPt4Shj4BRXic8AVxeJZB9R9ZkwBMwbUTYYGABoR2Stnfqwop6XNTQQ7SsqFEMqbJ8ghoKD0B2hTmvsWReWUVV40cp6dYpKDpAqtMsqIKBEgBkTOK9UvTNlPzLJUlrg-n36c79TNnnjLQhWhlmF6d-I6hwDvEs06uZh_AFPfOlLKjdmLmFkaoZ018qbNfG8JmFKfeV7wiaHe3mE')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex gap-2 mb-4">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                        <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                      </div>
                      <code className="text-primary font-mono text-sm leading-relaxed block">
                        const profile = {"{"}
                        <br />
                        &nbsp;&nbsp;name: &apos;Samuel Owhondah&apos;,
                        <br />
                        &nbsp;&nbsp;role: &apos;Frontend / Full-Stack
                        Engineer&apos;,
                        <br />
                        &nbsp;&nbsp;focus: [&apos;Performance&apos;,
                        &apos;Scalability&apos;],
                        <br />
                        &nbsp;&nbsp;experience: &apos;8+ Years&apos;
                        <br />
                        {"};"}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 mb-6 text-center">
            Core Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-slate-200 dark:bg-slate-800 px-5 border border-transparent hover:border-primary/30 transition-all cursor-default"
              >
                <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal font-display">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24" id="projects">
          <div className="flex items-center justify-between mb-10">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-3xl font-bold dark:text-white">
                Featured Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                A selection of my best work and side projects.
              </p>
            </div>
            <Link
              className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              href="#"
            >
              View all projects
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section
          className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12"
          id="blog"
        >
          <div className="lg:col-span-1">
            <h2 className="font-display text-3xl font-bold dark:text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Writing about software architecture, career growth, and the future
              of web development.
            </p>
            <Link
              className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              href="/blog"
            >
              Read the blog
              <span className="material-symbols-outlined">arrow_outward</span>
            </Link>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-8">
            {posts.map((post) => (
              <PostRow
                key={post.slug}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                date={formatDate(post.frontmatter.date).toUpperCase()}
                readingTime={post.frontmatter.readingTime || "6 min read"}
                tag={post.frontmatter.tags[0] || "Tech"}
                href={`/blog/${post.slug}`}
              />
            ))}
          </div>
        </section>

        <section
          className="mb-20 bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6"
          id="contact"
        >
          <span className="material-symbols-outlined text-primary text-5xl">
            alternate_email
          </span>
          <h2 className="font-display text-4xl font-black dark:text-white">
            Let&apos;s build something together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            Currently looking for new opportunities and interesting freelance
            projects. If you have an idea or just want to chat, feel free to
            drop me a message.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all font-display"
              href="mailto:me@psami.com"
            >
              Send an Email
            </Link>
            <div className="flex gap-4 items-center">
              <Link
                className="h-14 w-14 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:text-primary transition-all text-slate-700 dark:text-slate-300"
                href="https://github.com/Psami-wondah"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </Link>
              <Link
                className="h-14 w-14 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:text-primary transition-all text-slate-700 dark:text-slate-300"
                href="https://www.linkedin.com/in/okechukwu-samuel-owhondah-660328208/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="home" />
    </div>
  );
}
