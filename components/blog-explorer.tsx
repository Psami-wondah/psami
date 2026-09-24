"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/posts";

export default function BlogExplorer({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const tags = useMemo(() => ["All", ...Array.from(new Set(posts.flatMap((post) => post.frontmatter.tags)))], [posts]);
  const filtered = posts.filter((post) => (tag === "All" || post.frontmatter.tags.includes(tag)) && `${post.frontmatter.title} ${post.frontmatter.description} ${post.frontmatter.tags.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="blog-explorer"><div className="blog-controls"><label htmlFor="article-search" className="sr-only">Search articles</label><input id="article-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the archive"/><div className="blog-tags" aria-label="Filter by topic">{tags.map((item) => <button key={item} type="button" aria-pressed={tag === item} onClick={() => setTag(item)}>{item}</button>)}</div></div><p className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "entry" : "entries"}</p><div className="writing-index">{filtered.map((post) => <Link className="writing-row" href={`/blog/${post.slug}`} key={post.slug}><time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time><span><strong>{post.frontmatter.title}</strong><small>{post.frontmatter.description} · {post.frontmatter.readingTime}</small></span><b aria-hidden="true">↗</b></Link>)}{filtered.length === 0 && <div className="empty-state">No notes found. <button type="button" onClick={() => { setQuery(""); setTag("All"); }}>Clear filters</button></div>}</div></div>;
}
