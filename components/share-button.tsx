"use client";

import { useState } from "react";

export default function ShareButton({ title, url }: { title: string; url: string }) {
  const [label, setLabel] = useState("Copy link");
  return (
    <button
      type="button"
      className="article-action"
      onClick={async () => {
        if (navigator.share) {
          await navigator.share({ title, url });
          return;
        }
        await navigator.clipboard.writeText(url);
        setLabel("Link copied");
        window.setTimeout(() => setLabel("Copy link"), 1600);
      }}
    >
      {label}
    </button>
  );
}
