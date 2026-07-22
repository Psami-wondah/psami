import type { Metadata } from "next";
import Link from "next/link";
import BlogExplorer from "@/components/blog-explorer";
import { ArrowUpRight } from "@/components/icons";
import { formatDate } from "@/lib/format";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Engineering Notes | Okechukwu Samuel Owhondah",
  description: "Practical notes on frontend engineering, backend systems, testing, security, and building dependable software.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [latest, ...archive] = posts;

  return (
    <main id="main-content">
      <section className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="site-container relative">
          <p className="eyebrow">Engineering notes</p>
          <h1 className="mt-7 max-w-5xl text-balance font-display text-[clamp(3.4rem,9vw,8rem)] font-semibold leading-[.91] tracking-[-.065em]">Ideas made <span className="text-accent">useful.</span></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">Practical field notes on interface engineering, testing, databases, security, and the small decisions that make systems dependable.</p>
        </div>
      </section>

      {latest && (
        <section className="pb-20 sm:pb-28">
          <div className="site-container">
            <Link href={`/blog/${latest.slug}`} className="featured-article group">
              <div className="featured-code" aria-hidden="true">
                <span>SELECT note</span><br /><span className="text-accent-soft">FROM</span> engineering<br /><span className="text-accent-soft">WHERE</span> useful = true;<br /><br /><i>→ latest_entry</i>
              </div>
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted"><span>Latest note</span><span>·</span><span>{formatDate(latest.frontmatter.date)}</span><span>·</span><span>{latest.frontmatter.readingTime}</span></div>
                <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-.05em] transition-colors group-hover:text-accent">{latest.frontmatter.title}</h2>
                <p className="mt-5 max-w-2xl leading-7 text-muted">{latest.frontmatter.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">Read the article<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="section-space border-t border-line bg-surface/30">
        <div className="site-container">
          <div className="mb-10"><p className="eyebrow">Archive</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Browse all notes.</h2></div>
          <BlogExplorer posts={latest ? [latest, ...archive] : []} />
        </div>
      </section>
    </main>
  );
}
