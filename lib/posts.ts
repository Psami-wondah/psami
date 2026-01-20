import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  cover?: string;
  readingTime?: string;
  author?: string;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

const normalizeSlug = (slug: string) => slug.replace(/\.mdx$/, "");

export const getPostSlugs = () => {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map(normalizeSlug);
};

export const getPostBySlug = (slug: string): Post | null => {
  const safeSlug = normalizeSlug(slug);
  const fullPath = path.join(postsDirectory, `${safeSlug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: safeSlug,
    frontmatter: {
      title: data.title || safeSlug,
      date: data.date || "",
      description: data.description || "",
      tags: data.tags || [],
      cover: data.cover || "",
      readingTime: data.readingTime || "",
      author: data.author || "",
    },
    content,
  };
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => Boolean(post));

  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
};
