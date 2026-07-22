"use client";

import { useEffect, useState } from "react";

export default function ArticleEnhancements() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".article-prose");
    if (!article) return;

    const buttons: HTMLButtonElement[] = [];
    article.querySelectorAll("pre").forEach((block) => {
      const source = block.querySelector("code")?.textContent || block.textContent || "";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "copy-code-button";
      button.textContent = "Copy";
      button.setAttribute("aria-label", "Copy code to clipboard");
      button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(source);
        button.textContent = "Copied";
        window.setTimeout(() => { button.textContent = "Copy"; }, 1600);
      });
      block.appendChild(button);
      buttons.push(button);
    });

    const updateProgress = () => {
      const rect = article.getBoundingClientRect();
      const distance = Math.max(1, article.offsetHeight - window.innerHeight * 0.55);
      setProgress(Math.min(100, Math.max(0, (-rect.top + window.innerHeight * 0.2) / distance * 100)));
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      buttons.forEach((button) => button.remove());
    };
  }, []);

  return <div className="reading-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
}
