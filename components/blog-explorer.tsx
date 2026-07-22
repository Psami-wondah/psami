"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/posts";

export default function BlogExplorer({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const tags = useMemo(() => ["All", ...Array.from(new Set(posts.flatMap((post) => post.frontmatter.tags)))], [posts]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = tag === "All" || post.frontmatter.tags.includes(tag);
      const searchable = `${post.frontmatter.title} ${post.frontmatter.description} ${post.frontmatter.tags.join(" ")}`.toLowerCase();
      return matchesTag && (!needle || searchable.includes(needle));
    });
  }, [posts, query, tag]);

  return (
    <div>
      <div className="blog-tools">
        <div className="min-w-0 flex-1">
          <label htmlFor="article-search" className="sr-only">Search articles</label>
          <input id="article-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search notes…" className="blog-search" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter articles by topic">
          {tags.map((item) => (
            <button key={item} type="button" onClick={() => setTag(item)} aria-pressed={tag === item} className={`filter-chip ${tag === item ? "is-active" : ""}`}>{item}</button>
          ))}
        </div>
      </div>

      <p className="mt-8 font-mono text-[11px] uppercase tracking-[.16em] text-muted" aria-live="polite">{filtered.length} {filtered.length === 1 ? "article" : "articles"}</p>
      <div className="mt-3 border-t border-line">
        {filtered.map((post, index) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-index-row group">
            <div className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted"><span>{formatDate(post.frontmatter.date)}</span><span>·</span><span>{post.frontmatter.readingTime}</span></div>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-.04em] text-strong transition-colors group-hover:text-accent">{post.frontmatter.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{post.frontmatter.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{post.frontmatter.tags.map((postTag) => <span className="tech-tag" key={postTag}>{postTag}</span>)}</div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        ))}
        {filtered.length === 0 && <div className="py-16 text-center"><p className="font-display text-2xl font-semibold">No notes found.</p><button type="button" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent" onClick={() => { setQuery(""); setTag("All"); }}>Clear filters<ArrowRight className="h-4 w-4" /></button></div>}
      </div>
    </div>
  );
}
