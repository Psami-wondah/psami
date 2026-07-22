import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleEnhancements from "@/components/article-enhancements";
import GiscusComments from "@/components/giscus-comments";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import ShareButton from "@/components/share-button";
import { formatDate } from "@/lib/format";
import MdxRenderer from "@/lib/mdx";
import { getAllPosts, getPostBySlug, getPostHeadings } from "@/lib/posts";
import { siteLinks } from "@/lib/site-data";

type BlogPostPageProps = { params: { slug: string } };

export const generateStaticParams = async () => getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.frontmatter.title} | Okechukwu Samuel Owhondah`,
    description: post.frontmatter.description,
    authors: [{ name: "Okechukwu Samuel Owhondah", url: siteLinks.twitter }],
    openGraph: { title: post.frontmatter.title, description: post.frontmatter.description, type: "article", publishedTime: post.frontmatter.date, authors: ["Okechukwu Samuel Owhondah"] },
    twitter: { card: "summary", creator: "@psami", title: post.frontmatter.title, description: post.frontmatter.description },
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const allPosts = getAllPosts();
  const index = allPosts.findIndex((item) => item.slug === post.slug);
  const newer = index > 0 ? allPosts[index - 1] : null;
  const older = index < allPosts.length - 1 ? allPosts[index + 1] : null;
  const headings = getPostHeadings(post.content);
  const canonicalUrl = `https://psami.com/blog/${post.slug}`;

  return (
    <main id="main-content">
      <ArticleEnhancements />
      <article>
        <header className="relative overflow-hidden border-b border-line pb-14 pt-14 sm:pb-20 sm:pt-20">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="site-container relative max-w-[1100px]">
            <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.16em] text-muted transition hover:text-accent">← All notes</Link>
            <div className="mt-10 flex flex-wrap gap-2">{post.frontmatter.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
            <h1 className="mt-6 max-w-5xl text-balance font-display text-[clamp(2.7rem,8vw,7rem)] font-semibold leading-[.96] tracking-[-.06em]">{post.frontmatter.title}</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-xl">{post.frontmatter.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-muted"><span>{formatDate(post.frontmatter.date)}</span><span>·</span><span>{post.frontmatter.readingTime || "7 min read"}</span><span>·</span><span>{post.frontmatter.author || "Okechukwu Samuel Owhondah"}</span></div>
          </div>
        </header>

        <div className="site-container grid max-w-[1100px] gap-12 py-14 lg:grid-cols-[minmax(0,720px)_220px] lg:items-start lg:gap-20 lg:py-20">
          <div className="min-w-0">
            <div className="article-prose"><MdxRenderer source={post.content} /></div>

            <div className="mt-14 flex flex-wrap items-center gap-3 border-y border-line py-6">
              <span className="mr-auto font-mono text-[11px] uppercase tracking-wider text-muted">Share this note</span>
              <ShareButton title={post.frontmatter.title} url={canonicalUrl} />
              <a className="article-action" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="article-action" href={`https://x.com/intent/post?text=${encodeURIComponent(post.frontmatter.title)}&url=${encodeURIComponent(canonicalUrl)}`} target="_blank" rel="noreferrer">X / Twitter</a>
            </div>

            <section className="mt-12 rounded-2xl border border-line bg-surface/45 p-6 sm:p-8">
              <p className="eyebrow">About the author</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">Okechukwu Samuel Owhondah</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Frontend and full-stack software engineer building scalable, user-focused web applications with React, Next.js, TypeScript, and Python-based backends.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-accent"><a href={siteLinks.github} target="_blank" rel="noreferrer">GitHub</a><a href={siteLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={siteLinks.email}>Email</a></div>
            </section>

            <nav className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="Article navigation">
              {older ? <Link className="post-nav-card" href={`/blog/${older.slug}`}><span>← Older note</span><strong>{older.frontmatter.title}</strong></Link> : <div />}
              {newer && <Link className="post-nav-card text-right" href={`/blog/${newer.slug}`}><span>Newer note →</span><strong>{newer.frontmatter.title}</strong></Link>}
            </nav>

            <section className="mt-16 border-t border-line pt-10">
              <h2 className="font-display text-3xl font-semibold tracking-tight">Discussion</h2>
              <p className="mt-3 text-sm text-muted">Questions, corrections, and thoughtful additions are welcome.</p>
              <div className="mt-8"><GiscusComments /></div>
            </section>
          </div>

          <aside className="hidden lg:block lg:sticky lg:top-28">
            {headings.length > 0 && <nav aria-label="Table of contents"><p className="eyebrow">On this page</p><ol className="mt-5 space-y-3">{headings.map((heading) => <li key={heading.id} className={heading.level === 3 ? "pl-3" : ""}><a className="text-xs leading-5 text-muted transition hover:text-accent" href={`#${heading.id}`}>{heading.text}</a></li>)}</ol></nav>}
            <div className="mt-9 border-t border-line pt-6"><a className="inline-flex items-center gap-2 text-sm font-semibold text-accent" href={siteLinks.email}>Discuss a project<ArrowUpRight className="h-4 w-4" /></a></div>
          </aside>
        </div>
      </article>
      <div className="site-container max-w-[1100px] pb-20"><Link className="inline-flex items-center gap-2 text-sm font-semibold text-accent" href="/blog">Browse all notes<ArrowRight className="h-4 w-4" /></Link></div>
    </main>
  );
}
