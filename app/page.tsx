import Link from "next/link";
import ContactCta from "@/components/contact-cta";
import ExperienceList from "@/components/experience-list";
import { ArrowRight, ArrowUpRight, Download, Github } from "@/components/icons";
import ProjectShowcase from "@/components/project-showcase";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { formatDate } from "@/lib/format";
import { getAllPosts } from "@/lib/posts";
import { capabilities, principles, projects, siteLinks } from "@/lib/site-data";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main id="main-content">
      <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-28">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="site-container relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr] lg:gap-10">
            <div>
              <div className="hero-enter inline-flex items-center gap-3 rounded-full border border-line bg-surface/60 px-4 py-2 text-xs font-medium text-muted">
                <span className="availability-dot" aria-hidden="true" />
                Available for selected projects and opportunities
              </div>
              <h1 className="hero-heading hero-enter mt-8 [animation-delay:80ms]">
                I build thoughtful digital products <span className="gradient-text">that perform.</span>
              </h1>
              <p className="hero-enter mt-7 max-w-2xl text-base leading-8 text-muted [animation-delay:160ms] sm:text-lg">
                I&apos;m Okechukwu Samuel Owhondah, a Frontend / Full-Stack Software Engineer focused on high-performance interfaces, scalable applications and complex data-driven products.
              </p>
              <div className="hero-enter mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
                <Link className="button-primary" href="#work">Explore my work<ArrowRight className="h-4 w-4" /></Link>
                <a className="button-quiet" href={siteLinks.resume} download><Download className="h-4 w-4" />Download résumé</a>
                <a className="button-quiet" href={siteLinks.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a>
              </div>
            </div>

            <div className="hero-enter [animation-delay:300ms]">
              <div className="hero-visual" aria-label="Code transforming into a data product interface" role="img">
                <div className="code-window">
                  <div className="window-bar"><i /><i /><i /><span>product.tsx</span></div>
                  <div className="code-body">
                    <p><b>type</b> Product = {"{"}</p>
                    <p>&nbsp;&nbsp;clarity: <em>true</em>;</p>
                    <p>&nbsp;&nbsp;performance: <em>&quot;fast&quot;</em>;</p>
                    <p>&nbsp;&nbsp;architecture: <em>&quot;scalable&quot;</em>;</p>
                    <p>{"}"};</p>
                    <br />
                    <p><b>export</b> function build</p>
                    <p>&nbsp;&nbsp;(problem: Complex) → Product</p>
                  </div>
                </div>
                <div className="product-window">
                  <p className="visual-kicker">SYSTEM / HEALTHY</p>
                  <div className="metric-row mt-3">
                    <div className="metric"><span>UX</span><strong>Clear</strong></div>
                    <div className="metric"><span>STATE</span><strong>Stable</strong></div>
                    <div className="metric"><span>LOAD</span><strong>Fast</strong></div>
                  </div>
                  <div className="mini-chart">
                    {[34, 52, 45, 72, 59, 86, 78, 96].map((height, index) => <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 50}ms` }} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="credibility-grid mt-16 lg:mt-24">
            {[
              ["8+ years", "Building software"],
              ["Frontend + full-stack", "Across the product stack"],
              ["React · Next.js · TS", "Primary toolkit"],
              ["Remote experience", "UK · NL · Nigeria"],
            ].map(([value, label]) => <div className="credibility-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="work" className="section-space scroll-mt-24">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Selected work" title="Products shaped around real problems." description="A selection of product work spanning browser tools, event technology and payments—presented with the engineering decisions that matter." /></Reveal>
          <div className="mt-12 sm:mt-16">
            {projects.map((project, index) => <ProjectShowcase key={project.id} project={project} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-surface/35">
        <div className="site-container grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <Reveal><div className="lg:sticky lg:top-28"><SectionHeading eyebrow="Experience" title="Engineering across products and teams." description="A concise view of roles where I have shipped interfaces, services, integrations, and delivery systems." /><Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent" href="/about">Full career story<ArrowRight className="h-4 w-4" /></Link></div></Reveal>
          <ExperienceList compact />
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-[.68fr_1.32fr] lg:gap-20">
          <Reveal><SectionHeading eyebrow="Capabilities" title="Useful depth, across the stack." description="Technology is supporting detail. The focus is what the system needs to do well." /></Reveal>
          <div>
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 35}>
                <article className="capability-row">
                  <span className="font-mono text-xs text-accent">{capability.index}</span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-strong">{capability.title}</h3>
                  <div><p className="text-sm leading-7 text-muted">{capability.description}</p><p className="mt-3 font-mono text-[11px] leading-5 text-muted">{capability.technologies.join(" · ")}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-surface/35">
        <div className="site-container grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal><SectionHeading eyebrow="Engineering principles" title="How I make decisions when the answer is not obvious." /></Reveal>
          <div>{principles.map((principle, index) => <Reveal key={principle} delay={index * 45}><div className="principle-row"><span className="font-mono text-xs text-accent">0{index + 1}</span><p className="font-display text-xl font-medium tracking-tight text-strong sm:text-2xl">{principle}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <Reveal><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading eyebrow="Latest writing" title="Notes from the work." description="Practical explanations of testing, backend systems, security, and the decisions behind dependable software." /><Link className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent" href="/blog">View all articles<ArrowRight className="h-4 w-4" /></Link></div></Reveal>
          <div className="mt-10 border-t border-line">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 55}>
                <Link className="article-row group" href={`/blog/${post.slug}`}>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted">{formatDate(post.frontmatter.date)}<span className="mx-2">·</span>{post.frontmatter.readingTime}</div>
                  <div><h3 className="font-display text-xl font-semibold tracking-tight text-strong transition-colors group-hover:text-accent sm:text-2xl">{post.frontmatter.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{post.frontmatter.description}</p></div>
                  <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
