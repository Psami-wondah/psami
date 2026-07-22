import { ArrowUpRight, Download, Github, Linkedin, Mail } from "@/components/icons";
import Reveal from "@/components/reveal";
import { siteLinks } from "@/lib/site-data";

export default function ContactCta() {
  return (
    <section id="contact" className="section-space pt-0 scroll-mt-28">
      <div className="site-container">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-grid" aria-hidden="true" />
            <p className="eyebrow relative">Start a conversation</p>
            <h2 className="relative mt-5 max-w-4xl text-balance font-display text-[clamp(2.4rem,7vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-strong">
              Have an ambitious product to build?
            </h2>
            <p className="relative mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              I&apos;m open to frontend, full-stack and product engineering opportunities, as well as selected freelance collaborations.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center gap-3">
              <a className="button-primary" href={siteLinks.email}><Mail className="h-4 w-4" />Send an email</a>
              <a className="button-quiet" href={siteLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn<ArrowUpRight className="h-3.5 w-3.5" /></a>
              <a className="button-quiet" href={siteLinks.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub<ArrowUpRight className="h-3.5 w-3.5" /></a>
              <a className="button-quiet" href={siteLinks.resume} download><Download className="h-4 w-4" />Résumé</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
