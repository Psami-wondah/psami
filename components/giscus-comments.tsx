"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef } from "react";

const GiscusComments = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const giscusTheme = useMemo(() => {
    if (theme === "light") {
      return "light";
    }
    if (theme === "dark") {
      return "dark";
    }
    return "preferred_color_scheme";
  }, [theme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.hasChildNodes()) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "Psami-wondah/psami");
    script.setAttribute("data-repo-id", "R_kgDOJdVQ1A");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOJdVQ1M4C1O75");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", giscusTheme);
    script.setAttribute("data-lang", "en");

    container.appendChild(script);
  }, [giscusTheme]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );

    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      "https://giscus.app"
    );
  }, [giscusTheme]);

  return <div ref={containerRef} className="giscus" />;
};

export default GiscusComments;
