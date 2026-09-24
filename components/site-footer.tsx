import Link from "next/link";
import { siteLinks } from "@/lib/site-data";

export default function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-inner">
    <div><Link href="/" className="footer-name">Samuel Owhondah</Link><p>Software engineer<br/>Northampton, UK</p></div>
    <div className="footer-links"><a href={siteLinks.email}>Email ↗</a><a href={siteLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={siteLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={siteLinks.resume} download>Résumé ↓</a></div>
    <p className="footer-year">© {new Date().getFullYear()}</p>
  </div></footer>;
}
