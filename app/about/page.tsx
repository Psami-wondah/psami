import type { Metadata } from "next";
import ContactCta from "@/components/contact-cta";
import ExperienceList from "@/components/experience-list";
import ProjectShowcase from "@/components/project-showcase";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { capabilities, education, projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Okechukwu Samuel Owhondah | Software Engineer",
  description: "The experience, approach, and technical capabilities behind Okechukwu Samuel Owhondah's frontend and full-stack engineering work.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="site-container relative">
          <p className="eyebrow">About / Okechukwu Samuel Owhondah</p>
          <h1 className="mt-7 max-w-6xl text-balance font-display text-[clamp(3.2rem,9vw,8.5rem)] font-semibold leading-[.92] tracking-[-.065em] text-strong">
            Engineer by practice. <span className="text-accent">Problem solver</span> by instinct.
          </h1>
          <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-[.85fr_1.15fr] md:gap-16">
            <p className="font-mono text-xs uppercase tracking-[.16em] text-muted">Based in the United Kingdom<br />Originally from Nigeria</p>
            <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>I&apos;m Okechukwu Samuel Owhondah, a frontend and full-stack software engineer interested in the point where product clarity and technical depth meet.</p>
              <p>My work has moved between data-rich React interfaces, real-time product features, Python services, third-party integrations, and the infrastructure that gets them safely into users&apos; hands.</p>
              <p>An earlier foundation in Electrical and Electronics Engineering still shapes how I think: understand the system, find the signal, and make the whole thing easier to reason about.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-surface/35">
        <div className="site-container grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <Reveal><SectionHeading eyebrow="Philosophy" title="The interface is part of the system." description="I care about the details users notice and the architecture they never should have to." /></Reveal>
          <Reveal delay={80}>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {[
                ["Clarity", "Make state, intent, and next actions obvious."],
                ["Performance", "Treat speed and responsiveness as product behavior."],
                ["Resilience", "Design graceful paths through failure and change."],
                ["Ownership", "Follow the problem from discovery to production."],
              ].map(([title, copy], index) => (
                <article key={title} className="bg-canvas p-6 sm:p-8"><span className="font-mono text-xs text-accent">0{index + 1}</span><h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{copy}</p></article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <Reveal><div className="lg:sticky lg:top-28"><SectionHeading eyebrow="Career timeline" title="Work built across disciplines." description="From complex charts and authentication flows to real-time location systems and deployment pipelines." /></div></Reveal>
          <ExperienceList />
        </div>
      </section>

      <section className="section-space border-y border-line bg-surface/35">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Education" title="Two ways of thinking about systems." /></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 70}>
                <article className="h-full rounded-2xl border border-line bg-canvas p-7 sm:p-9">
                  <span className="font-mono text-xs text-accent">0{index + 1} / DEGREE</span>
                  <h3 className="mt-8 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{item.degree}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted">{item.school}<br />{item.location}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-[.62fr_1.38fr] lg:gap-24">
          <Reveal><SectionHeading eyebrow="Core capabilities" title="Breadth with a frontend centre of gravity." /></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 35}>
                <article className="h-full rounded-2xl border border-line bg-surface/40 p-6 transition hover:border-accent/40 sm:p-7">
                  <span className="font-mono text-xs text-accent">{capability.index}</span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{capability.description}</p>
                  <p className="mt-5 font-mono text-[10px] leading-5 text-muted">{capability.technologies.join(" · ")}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-line">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Selected projects" title="Small enough to understand. Useful enough to ship." description="The same project data powers this view and the homepage, keeping every detail consistent." /></Reveal>
          <div className="mt-12 sm:mt-16">{projects.slice(0, 2).map((project, index) => <ProjectShowcase key={project.id} project={project} index={index} />)}</div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
