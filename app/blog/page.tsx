import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PostCard from "@/components/cards/post-card";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

const popularTopics = ["#TypeScript", "#AWS", "#Nextjs", "#TDD", "#Docker", "#GraphQL"];

export default function BlogIndexPage() {
  const posts = getAllPosts();

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

      <main className="flex flex-1 justify-center py-10 px-6 md:px-20 lg:px-40">
        <div className="flex flex-col max-w-[1200px] flex-1">
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1 w-10 bg-primary rounded-full"></span>
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Archive
              </span>
            </div>
            <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-tight">
              Journal
            </h1>
            <p className="text-slate-600 dark:text-[#92a4c9] text-lg max-w-2xl font-normal leading-relaxed">
              A collection of my thoughts on software engineering, distributed
              systems, clean code, and the evolving landscape of the modern web.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col gap-2">
              <div className="mb-6 overflow-x-auto">
                <div className="flex border-b border-slate-200 dark:border-[#324467] gap-8 min-w-max">
                  {[
                    "All Posts",
                    "React",
                    "Backend",
                    "Career",
                    "DevOps",
                    "JavaScript",
                  ].map((label, index) => (
                    <span
                      key={label}
                      className={
                        index === 0
                          ? "flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 pt-4 font-bold text-sm"
                          : "flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-[#92a4c9] hover:text-primary dark:hover:text-primary pb-3 pt-4 font-bold text-sm transition-colors"
                      }
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {posts.map((post) => (
                  <PostCard
                    key={post.slug}
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    date={formatDate(post.frontmatter.date)}
                    readingTime={post.frontmatter.readingTime || "6 min read"}
                    tag={post.frontmatter.tags[0] || "Tech"}
                    cover={
                      post.frontmatter.cover ||
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNzd2Vz3goOCtvp2--FS6Hq4ioUVIDRpswntheE1w-Vai9PEPybxEhZyxgGDf8BWyH2Rr6LSCClfl9IyffbTfLb6UOQzbty35LocYhv9nmIbrfSshzA5kpP1x1Gs_2ZxbkYlldfNy5LpqSlsZXVplAnDPhPMkC_wz7kXfEIuo4Lp9zD9Jf9VDFIX26u8Y5Ox3JvrpxPRBQQKrSmu4cPtJrhWrxATqUeKrVdKMxCSdl-OCrHwsnygQ1qG9edTjJ2BIFMWYVb-n_G5hg"
                    }
                    href={`/blog/${post.slug}`}
                  />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <button className="flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02]">
                  <span>Load More Articles</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
              </div>
            </div>

            <aside className="w-full lg:w-80 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h4 className="text-slate-900 dark:text-white text-lg font-bold">
                  Search
                </h4>
                <div className="flex w-full items-stretch rounded-lg h-11 border border-slate-200 dark:border-[#232f48] overflow-hidden">
                  <div className="text-slate-400 dark:text-[#92a4c9] flex bg-white dark:bg-[#1a2333] items-center justify-center pl-4">
                    <span className="material-symbols-outlined text-xl">
                      search
                    </span>
                  </div>
                  <input
                    className="flex w-full min-w-0 border-none bg-white dark:bg-[#1a2333] text-slate-900 dark:text-white focus:ring-0 h-full placeholder:text-slate-400 dark:placeholder:text-[#92a4c9] px-4 text-sm font-normal"
                    placeholder="Search articles..."
                  />
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-100 dark:bg-[#1a2333] border border-slate-200 dark:border-[#232f48]">
                <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-4">
                  About the Author
                </h4>
                <p className="text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed mb-4">
                  Samuel Owhondah is a software engineer focused on scalable,
                  user-focused web applications and modern frontend
                  architecture.
                </p>
                <div className="flex gap-4">
                  <a
                    className="text-slate-500 hover:text-primary transition-colors"
                    href="mailto:me@psami.com"
                  >
                    <span className="material-symbols-outlined">
                      alternate_email
                    </span>
                  </a>
                  <a
                    className="text-slate-500 hover:text-primary transition-colors"
                    href="https://github.com/Psami-wondah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined">code</span>
                  </a>
                  <a
                    className="text-slate-500 hover:text-primary transition-colors"
                    href="https://x.com/psami"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined">share</span>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-2">
                  Dev Insights Weekly
                </h4>
                <p className="text-slate-600 dark:text-[#92a4c9] text-sm mb-4">
                  Get the latest articles and curated tech resources directly
                  in your inbox.
                </p>
                <div className="flex flex-col gap-3">
                  <input
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#101622] border border-slate-200 dark:border-[#232f48] text-sm focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Email address"
                    type="email"
                  />
                  <button className="w-full py-2 bg-primary text-white font-bold rounded-lg text-sm hover:brightness-110 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-slate-900 dark:text-white text-lg font-bold">
                  Popular Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-full bg-slate-200 dark:bg-[#232f48] text-slate-700 dark:text-slate-300 text-xs font-medium cursor-pointer hover:bg-primary hover:text-white transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter variant="blog" />
    </div>
  );
}
