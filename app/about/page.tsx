import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const experience = [
  {
    title: "Frontend Engineer — Zimmerman B.V (Remote, Netherlands)",
    points: [
      "React + TypeScript frontend development",
      "Data visualization with Apache ECharts & D3",
      "Auth0 OAuth integration",
      "CMS integration (Strapi, i18n)",
      "End-to-end testing with Cypress",
      "Performance optimization using Redis & LoopBack",
    ],
  },
  {
    title: "Full-Stack Engineer — Techsemester (Remote, Nigeria)",
    points: [
      "React + Django full-stack development",
      "Google authentication & password login",
      "Firebase Cloud Messaging notifications",
      "Dockerized microservices on AWS EC2",
      "CI/CD with GitHub Actions",
    ],
  },
  {
    title: "Full-Stack Engineer — Alajo (Lagos, Nigeria)",
    points: [
      "Live location tracking with Google Maps & Firebase",
      "Admin dashboards (React, Next.js)",
      "Data visualization (Chart.js)",
      "SMS notifications & USSD services",
    ],
  },
  {
    title: "Contract Roles",
    points: [
      "MyQuba — Next.js SSR & Docker deployments",
      "Duduzili — Django APIs & WebSocket real-time features",
    ],
  },
];

const projects = [
  {
    name: "Rie Ticket",
    description: "Event ticketing web app (React, Paystack).",
  },
  {
    name: "Billza",
    description: "Utility & bill payment platform (Django, Monnify, Tiqwa).",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Django",
  "FastAPI",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Redux Toolkit",
  "Recoil",
  "Docker",
  "GitHub Actions",
  "AWS",
  "Data visualization",
  "System design",
];

export default function AboutPage() {
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
          { label: "Projects", href: "/about#projects" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/about#contact" },
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

      <main className="max-w-6xl mx-auto px-6 lg:px-10 py-12 lg:py-20">
        <section className="text-center mb-16">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-[42px] lg:text-[56px] font-bold leading-tight pb-4 font-display">
            About Samuel
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Samuel Owhondah is a software engineer with a background in
            Electrical and Electronics Engineering and a Master's degree in
            Computing (Software Engineering). He specializes in building
            scalable, user-focused web applications using React, Next.js,
            TypeScript, and Python-based backends. Based in the United Kingdom,
            originally from Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-slate-500 dark:text-slate-400">
            <span>Frontend / Full-Stack Software Engineer</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>United Kingdom</span>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="bg-white dark:bg-[#192233] p-8 rounded-xl shadow-sm border border-slate-200 dark:border-[#324467]">
            <h2 className="text-2xl font-bold font-display mb-6">
              Education
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  MSc, Computing (Software Engineering)
                </p>
                <p>University of Northampton, UK</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  BEng, Electrical & Electronics Engineering
                </p>
                <p>Federal University of Technology, Owerri, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#192233] p-8 rounded-xl shadow-sm border border-slate-200 dark:border-[#324467]">
            <h2 className="text-2xl font-bold font-display mb-6">
              Contact
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-300">
              <a
                className="flex items-center gap-2 hover:text-primary transition-colors"
                href="mailto:me@psami.com"
              >
                <span className="material-symbols-outlined text-lg">
                  mail
                </span>
                me@psami.com
              </a>
              <a
                className="flex items-center gap-2 hover:text-primary transition-colors"
                href="https://x.com/psami"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-lg">
                  share
                </span>
                Twitter / X
              </a>
              <a
                className="flex items-center gap-2 hover:text-primary transition-colors"
                href="https://github.com/Psami-wondah"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-lg">
                  code
                </span>
                GitHub
              </a>
              <a
                className="flex items-center gap-2 hover:text-primary transition-colors"
                href="https://www.linkedin.com/in/okechukwu-samuel-owhondah-660328208/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-lg">
                  work
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold font-display mb-6">
            Professional Experience
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experience.map((role) => (
              <div
                key={role.title}
                className="bg-white dark:bg-[#192233] p-6 rounded-xl border border-slate-200 dark:border-[#324467]"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  {role.title}
                </h3>
                <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16" id="projects">
          <h2 className="text-3xl font-bold font-display mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white dark:bg-[#192233] p-6 rounded-xl border border-slate-200 dark:border-[#324467]"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold font-display mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-slate-200 dark:bg-[#232f48] text-slate-700 dark:text-slate-300 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          className="mb-16 bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6"
          id="contact"
        >
          <span className="material-symbols-outlined text-primary text-5xl">
            alternate_email
          </span>
          <h2 className="font-display text-3xl font-black dark:text-white">
            Let's build something together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            Open to interesting roles and freelance projects. If you have an
            idea or need help shipping a product, let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all font-display"
              href="mailto:me@psami.com"
            >
              Send an Email
            </a>
            <a
              className="h-14 w-14 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:text-primary transition-all text-slate-700 dark:text-slate-300"
              href="https://x.com/psami"
              aria-label="Twitter / X"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="h-14 w-14 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:text-primary transition-all text-slate-700 dark:text-slate-300"
              href="https://github.com/Psami-wondah"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
            <a
              className="h-14 w-14 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:text-primary transition-all text-slate-700 dark:text-slate-300"
              href="https://www.linkedin.com/in/okechukwu-samuel-owhondah-660328208/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined">work</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter variant="home" />
    </div>
  );
}
