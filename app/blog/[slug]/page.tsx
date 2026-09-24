import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleEnhancements from "@/components/article-enhancements";
import GiscusComments from "@/components/giscus-comments";
import ShareButton from "@/components/share-button";
import MdxRenderer from "@/lib/mdx";
import { formatDate } from "@/lib/format";
import { getAllPosts, getPostBySlug, getPostHeadings } from "@/lib/posts";
import { siteLinks } from "@/lib/site-data";

type BlogPostPageProps = { params: { slug: string } };
export const generateStaticParams = async () => getAllPosts().map((post) => ({ slug: post.slug }));
export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return { title: `${post.frontmatter.title} | Samuel Owhondah`, description: post.frontmatter.description, authors: [{ name: "Okechukwu Samuel Owhondah", url: siteLinks.twitter }], openGraph: { title: post.frontmatter.title, description: post.frontmatter.description, type: "article", publishedTime: post.frontmatter.date, authors: ["Okechukwu Samuel Owhondah"] }, twitter: { card: "summary", creator: "@psami", title: post.frontmatter.title, description: post.frontmatter.description } };
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
  return <main id="main-content" className="article-page"><ArticleEnhancements/><article><header className="site-container article-header"><div className="page-overline"><span>03 / NOTES</span><Link href="/blog">← All writing</Link></div><p className="micro-label">{post.frontmatter.tags.join(" / ")}</p><h1>{post.frontmatter.title}</h1><p className="article-deck">{post.frontmatter.description}</p><div className="article-byline"><time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time><span>{post.frontmatter.readingTime || "7 min read"}</span><span>Samuel Owhondah</span></div></header><div className="site-container article-layout"><div><div className="article-prose"><MdxRenderer source={post.content}/></div><div className="article-share"><span>Share this note</span><ShareButton title={post.frontmatter.title} url={canonicalUrl}/><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`} target="_blank" rel="noreferrer">LinkedIn ↗</a></div><div className="author-note"><span className="micro-label">ABOUT THE AUTHOR</span><h2>Samuel Owhondah</h2><p>Software engineer working across product engineering, frontend systems and applied experimentation.</p><Link href="/about">Read more ↗</Link></div><nav className="article-adjacent" aria-label="Article navigation">{older && <Link href={`/blog/${older.slug}`}><span>← Older note</span><strong>{older.frontmatter.title}</strong></Link>}{newer && <Link href={`/blog/${newer.slug}`}><span>Newer note →</span><strong>{newer.frontmatter.title}</strong></Link>}</nav><section className="article-discussion"><h2>Discussion</h2><p>Questions, corrections and thoughtful additions are welcome.</p><GiscusComments/></section></div><aside className="article-toc">{headings.length > 0 && <nav aria-label="Table of contents"><p className="micro-label">ON THIS PAGE</p><ol>{headings.map((heading) => <li key={heading.id} className={heading.level === 3 ? "is-nested" : ""}><a href={`#${heading.id}`}>{heading.text}</a></li>)}</ol></nav>}</aside></div></article></main>;
}
