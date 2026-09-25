import Link from "next/link";
import ProjectIndex from "@/components/project-index";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { projects, professionalProjects, siteLinks } from "@/lib/site-data";

const sections = [
  { number: "01", label: "Selected work", href: "#work" },
  { number: "02", label: "Experiments", href: "#experiments" },
  { number: "03", label: "Writing", href: "#writing" },
  { number: "04", label: "About", href: "#about" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return <main id="main-content">
    <section className="home-hero site-container" aria-labelledby="home-title">
      <div className="hero-overline"><span>Personal index / 001</span><span>2026</span></div>
      <div className="hero-content"><p className="micro-label">Samuel Owhondah · Software engineer</p><h1 id="home-title">A practice in building<br/><em>useful things.</em></h1><p className="hero-description">Products, tools and experiments made with care and curiosity.</p></div>
      <div className="hero-bottom"><nav className="hero-index" aria-label="Explore this page">{sections.map((section) => <a href={section.href} key={section.number}><span>{section.number}</span><strong>{section.label}</strong><span>↗</span></a>)}</nav><div className="hero-aside"><span>Northampton / UK</span><a href="#about">Currently open to selected work ↓</a></div></div>
    </section>

    <section id="work" className="archive-section site-container" aria-labelledby="work-heading"><div className="section-intro"><span className="section-number">01 / INDEX</span><div><h2 id="work-heading">Selected work<span className="section-period">.</span></h2><p>Five entries across product, research and client work. Select a row to read more.</p></div></div><ProjectIndex projects={projects}/></section>

    <section id="experiments" className="archive-section site-container" aria-labelledby="experiments-heading"><div className="section-intro"><span className="section-number">02 / IN PROGRESS</span><div><h2 id="experiments-heading">Experiments<span className="section-period">.</span></h2><p>Smaller inquiries that sit between research and product.</p></div></div><div className="simple-index"><a href="#work"><span>01</span><strong>Assistive vision</strong><span>Camera input, reading and external display</span><b>↗</b></a><a href="#work"><span>02</span><strong>Cross-device text</strong><span>A quicker path from one screen to another</span><b>↗</b></a></div></section>

    <section id="writing" className="archive-section site-container" aria-labelledby="writing-heading"><div className="section-intro"><span className="section-number">03 / NOTES</span><div><h2 id="writing-heading">Writing<span className="section-period">.</span></h2><p>Observations from the work, filed as they come.</p></div></div><div className="writing-index">{posts.map((post) => <Link href={`/blog/${post.slug}`} key={post.slug} className="writing-row"><time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time><span><strong>{post.frontmatter.title}</strong><small>{post.frontmatter.description} · {post.frontmatter.readingTime}</small></span><b aria-hidden="true">↗</b></Link>)}</div><Link className="text-link section-tail" href="/blog">All writing <span>↗</span></Link></section>

    <section id="about" className="archive-section site-container about-home" aria-labelledby="about-heading"><div className="section-intro"><span className="section-number">04 / PERSON</span><div><h2 id="about-heading">About<span className="section-period">.</span></h2></div></div><div className="about-home-grid"><p className="about-statement">I build software across product engineering, frontend systems and applied experimentation.</p><div className="about-details"><details><summary>Experience <span>+</span></summary><p>Product engineering across healthcare, data-rich interfaces, payments and early-stage teams. <Link href="/about">More about my work ↗</Link></p></details><details><summary>Education <span>+</span></summary><p>MSc Computing (Software Engineering), University of Northampton; BEng Electrical & Electronics Engineering, FUTO.</p></details><details><summary>Professional work <span>+</span></summary><ul>{professionalProjects.map((project) => <li key={project.id}><strong>{project.name}</strong><span>{project.category}</span></li>)}</ul></details><details><summary>Contact & availability <span>+</span></summary><p>Based in Northampton, UK. Open to selected engineering and product collaborations.</p><div className="about-contact"><a href={siteLinks.email}>Email ↗</a><a href={siteLinks.resume} download>Résumé ↓</a><a href={siteLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></details></div></div></section>
  </main>;
}
