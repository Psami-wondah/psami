import type { Metadata } from "next";
import Link from "next/link";
import BlogExplorer from "@/components/blog-explorer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing | Samuel Owhondah", description: "Notes on software engineering, testing, databases and systems by Samuel Owhondah." };
export default function BlogIndexPage() {
  return <main id="main-content" className="site-container inner-page"><div className="page-overline"><span>03 / NOTES</span><Link href="/">← Index</Link></div><header className="inner-hero"><p className="micro-label">Writing / Archive</p><h1>Notes from<br/><em>the work.</em></h1><p>Practical explanations, small discoveries and things worth remembering.</p></header><section className="inner-section blog-section"><div className="section-intro"><span className="section-number">INDEX / {String(getAllPosts().length).padStart(2,"0")}</span><h2>All writing.</h2></div><BlogExplorer posts={getAllPosts()}/></section></main>;
}
