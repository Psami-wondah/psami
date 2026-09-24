import type { Project } from "@/lib/site-data";

type VisualProps = { project: Project };

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
function NinewellsVisual() {
  return <div className="preview-art preview-ninewells" aria-hidden="true">
    <div className="preview-topline"><span>NINEWELLS</span><span>Legal practice</span></div>
    <div className="ninewells-editorial"><span>Clarity in every decision.</span><strong>Counsel for<br/>what comes next.</strong><i>Thoughtful legal guidance, grounded in experience.</i></div>
    <div className="ninewells-rule"><span>EXPERTISE</span><span>PEOPLE</span><span>CONTACT</span></div>
  </div>;
}
function CopyytVisual() {
  return <div className="preview-art preview-copyyt" aria-hidden="true">
    <div className="preview-topline"><span>COPYYT</span><span>Utility / 004</span></div>
    <div className="copyyt-transfer"><div className="copyyt-device"><span>DESKTOP</span><p>Something worth keeping, wherever you go.</p><small>Copied ✓</small></div><div className="copyyt-arrow">→</div><div className="copyyt-device compact"><span>MOBILE</span><p>Something worth keeping, wherever you go.</p><small>Received</small></div></div>
  </div>;
}
const visuals = { koinovera: KoinoveraVisual, vision: VisionVisual, ninewells: NinewellsVisual, copyyt: CopyytVisual };
export default function ProjectVisual({ project }: VisualProps) {
  const Visual = project.visual ? visuals[project.visual] : null;
  return Visual ? <Visual /> : null;
}
