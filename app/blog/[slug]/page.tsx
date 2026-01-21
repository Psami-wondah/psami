import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GiscusComments from "@/components/giscus-comments";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import MdxRenderer from "@/lib/mdx";
import Image from "next/image";

type BlogPostPageProps = {
  params: { slug: string };
};

export const generateStaticParams = async () => {
  return getAllPosts().map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({ params }: BlogPostPageProps) => {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: [
      {
        name: "Owhondah Okechukwu Samuel",
        url: "https://x.com/psami",
      },
    ],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      authors: ["Owhondah Okechukwu Samuel"],
      images: post.frontmatter.cover
        ? [
            {
              url: post.frontmatter.cover,
              width: 1200,
              height: 630,
              alt: post.frontmatter.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@psami",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.cover ? [post.frontmatter.cover] : undefined,
    },
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <SiteHeader
        brand={{
          name: "Psami",
          accent: ".",
          icon: (
            <span className="material-symbols-outlined text-3xl font-bold">
              terminal
            </span>
          ),
        }}
        navItems={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/#projects" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/#contact" },
        ]}
        rightSlot={
          <>
            <a
              className="hidden sm:flex items-center gap-2 border border-primary/30 text-primary px-4 py-1.5 rounded-lg text-sm font-bold transition-all font-display hover:bg-primary/5"
              href="/resume.pdf"
              download
            >
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Resume
            </a>
            <a
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all font-display"
              href="mailto:me@psami.com"
            >
              Hire Me
            </a>
          </>
        }
      />

      <main className="flex-grow">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">
              <span className="h-1 w-10 bg-primary rounded-full"></span>
              Article
            </div>
            <h1 className="text-slate-900 dark:text-white tracking-tight text-[42px] lg:text-[56px] font-bold leading-tight pb-4 font-display">
              {post.frontmatter.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-[760px] font-normal leading-relaxed px-4">
              {post.frontmatter.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-slate-500 dark:text-slate-400">
              <span>{formatDate(post.frontmatter.date)}</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span>By {post.frontmatter.author || "Samuel Owhondah"}</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span>{post.frontmatter.readingTime || "7 min read"}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-200 dark:bg-[#232f48] text-slate-700 dark:text-slate-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <article className="bg-white dark:bg-[#192233] p-8 rounded-xl shadow-sm border border-slate-200 dark:border-[#324467]">
              <MdxRenderer source={post.content} />
              <div className="mt-10 border-t border-slate-200 dark:border-[#324467] pt-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  About the author
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Samuel Owhondah is a software engineer with a background in
                  Electrical and Electronics Engineering and a Master&apos;s
                  degree in Computing (Software Engineering). He specializes in
                  building scalable, user-focused web applications using React,
                  Next.js, TypeScript, and Python-based backends.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <a
                    className="text-primary hover:underline underline-offset-4"
                    href="https://x.com/psami"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter / X
                  </a>
                  <a
                    className="text-primary hover:underline underline-offset-4"
                    href="https://github.com/Psami-wondah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="text-primary hover:underline underline-offset-4"
                    href="https://www.linkedin.com/in/okechukwu-samuel-owhondah-660328208/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="text-primary hover:underline underline-offset-4"
                    href="mailto:me@psami.com"
                  >
                    Email
                  </a>
                </div>
              </div>
              <div className="mt-10 border-t border-slate-200 dark:border-[#324467] pt-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Comments
                </h4>
                <GiscusComments />
              </div>
            </article>
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-bold font-display mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                  Enjoyed the article? Reach out or follow along for more
                  practical engineering notes and deep dives.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      label: "GitHub",
                      description: "Check out my latest repositories",
                      icon: "code",
                      href: "https://github.com/Psami-wondah",
                    },
                    {
                      label: "LinkedIn",
                      description: "Professional networking & career",
                      icon: "work",
                      href: "https://www.linkedin.com/in/okechukwu-samuel-owhondah-660328208/",
                    },
                    {
                      label: "Twitter / X",
                      description: "Daily tech thoughts and updates",
                      icon: "alternate_email",
                      href: "https://x.com/psami",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#324467] hover:border-primary dark:hover:border-primary transition-all group"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">
                          {item.label}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">verified</span>
                  <span className="font-bold">Available for Work</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  I am currently open to freelance projects and full-time senior
                  developer roles. Let&apos;s build something amazing together.
                </p>
              </div>

              <div className="relative h-[200px] w-full rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 transition-all">
                <Image
                  layout="fill"
                  alt="Map view of developer location"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2cRZ9h3606uXR_-4vc7Q0KJzM3acmfhfZEeN6xHLLfzAtMm8gU2_qwdEG0IxNEtgsNssHyfYriJm1nvgl3-vrnFStMS7WJHfhZxeogDvTDJo_7tRCnGd9h1hjZ8_O8Yn6NYlDzizKvbHTjdu_s0BOoyCQq6kJ3CRgE4Igd0FQvF3HLHSsPU_xVkUiX9nWUhFgQQCtckvUNWLE2WsGIY4nylQlj3mjtTsf0TBR4fjMhrJ2QIhZhb0jmSKMOAgz5k9nUqjNagDmLrul"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-white p-2 rounded-full shadow-xl">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter variant="post" />
    </div>
  );
}
