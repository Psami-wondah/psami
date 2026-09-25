"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/site-data";

type VisualProps = { project: Project; active?: boolean };
type Screenshot = NonNullable<Project["screenshots"]>[number];

function KoinoveraVisual() {
  return <div className="preview-art preview-koinovera" aria-hidden="true">
    <div className="preview-topline"><span>KOINOVERA</span><span>Evidence / 001</span></div>
    <div className="claim-card"><span className="micro-label">CLAIM</span><p>What supports this claim?</p><div className="claim-rule" /></div>
    <div className="evidence-stack"><div><span>01</span><p>Source material</p><b>↗</b></div><div><span>02</span><p>Context & analysis</p><b>↗</b></div><div><span>03</span><p>Community notes</p><b>↗</b></div></div>
  </div>;
}
function VisionVisual() {
  return <div className="preview-art preview-vision" aria-hidden="true">
    <div className="preview-topline"><span>VISION DISPLAY</span><span>Research / 002</span></div>
    <div className="vision-frame"><span className="vision-corner tl"/><span className="vision-corner tr"/><span className="vision-corner bl"/><span className="vision-corner br"/><div className="vision-object"><span>TEXT RECOGNITION</span><strong>Read what is in view.</strong></div><span className="vision-cross">+</span></div>
    <div className="vision-controls"><span>CAMERA INPUT</span><span>OCR · VIEWPORT · DISPLAY</span></div>
  </div>;
}
function SkyeHealthVisual() {
  return <div className="preview-art preview-skye" aria-hidden="true">
    <div className="preview-topline"><span>PROMEASE</span><span>Recovery / 003</span></div>
    <div className="skye-overview"><span className="micro-label">POST-OP RECOVERY</span><strong>Care beyond<br/>the clinic.</strong><p>Patient-reported outcomes, in view.</p></div>
    <div className="skye-pathway"><div><span>01</span><p>Patient enrolled</p><i>○</i></div><div><span>02</span><p>Outcome reported</p><i>○</i></div><div><span>03</span><p>Care team review</p><i>○</i></div></div>
    <div className="skye-foot"><span>CARE PATHWAY</span><span>CLINICIAN VIEW ↗</span></div>
  </div>;
}
function CopyytVisual() {
  return <div className="preview-art preview-copyyt" aria-hidden="true">
    <div className="preview-topline"><span>COPYYT</span><span>Utility / 004</span></div>
    <div className="copyyt-transfer"><div className="copyyt-device"><span>DESKTOP</span><p>Something worth keeping, wherever you go.</p><small>Copied ✓</small></div><div className="copyyt-arrow">→</div><div className="copyyt-device compact"><span>MOBILE</span><p>Something worth keeping, wherever you go.</p><small>Received</small></div></div>
  </div>;
}
function ScreenshotVisual({ project, screenshots, active }: { project: Project; screenshots: Screenshot[]; active: boolean }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!active) { setCurrent(0); return; }
    if (screenshots.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setCurrent((index) => (index + 1) % screenshots.length), 2200);
    return () => window.clearInterval(timer);
  }, [active, screenshots.length]);

  return <div className="preview-art preview-screens" aria-hidden="true">
    <div className="preview-topline"><span>{project.name.toUpperCase()}</span><span>{screenshots[current].label}</span></div>
    <div className="screens-window">
      <div className="screens-bar"><i /><i /><i /><span>{project.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span></div>
      <div className="screens-viewport">{screenshots.map((shot, index) => <Image key={shot.src} src={shot.src} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" className={index === current ? "is-current" : ""} />)}</div>
    </div>
    <div className="screens-dots">{screenshots.map((shot, index) => <span key={shot.src} className={index === current ? "is-current" : ""} />)}</div>
  </div>;
}
const visuals = { koinovera: KoinoveraVisual, vision: VisionVisual, "skye-health": SkyeHealthVisual, copyyt: CopyytVisual };
export default function ProjectVisual({ project, active = false }: VisualProps) {
  if (project.screenshots?.length) return <ScreenshotVisual project={project} screenshots={project.screenshots} active={active} />;
  const Visual = project.visual ? visuals[project.visual] : null;
  return Visual ? <Visual /> : null;
}
