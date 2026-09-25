"use client";

import { useState } from "react";
import ProjectVisual from "@/components/project-visual";
import type { Project } from "@/lib/site-data";

export default function ProjectIndex({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const preview = projects.find((project) => project.id === (active || expanded));

  return <div className="project-index" onMouseLeave={() => setActive(null)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(null); }}>
    <div className="project-list">
      {projects.map((project, index) => {
        const open = expanded === project.id;
        return <article className={`index-item ${active && active !== project.id ? "is-dimmed" : ""} ${open ? "is-open" : ""}`} key={project.id}>
          <h3><button type="button" className="project-trigger" aria-expanded={open} aria-controls={`project-${project.id}`} onMouseEnter={() => setActive(project.id)} onFocus={() => setActive(project.id)} onClick={() => { setActive(project.id); setExpanded(open ? null : project.id); }}>
            <span className="index-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-name">{project.name}</span>
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
            <span className="project-indicator" aria-hidden="true">{open ? "−" : "+"}</span>
          </button></h3>
          <div id={`project-${project.id}`} className="project-expansion" hidden={!open}>
            <div className="project-expanded-inner">
              {(project.visual || project.screenshots) && <div className="project-mobile-visual"><ProjectVisual project={project} active={open} /></div>}
              <p className="project-summary">{project.summary}</p>
              <dl className="project-meta"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Focus</dt><dd>{project.focus}</dd></div><div><dt>Tools</dt><dd>{project.technologies.join(", ")}</dd></div>{project.status && <div><dt>Status</dt><dd>{project.status}</dd></div>}</dl>
              <div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit ↗<span className="sr-only"> {project.name} (opens in a new tab)</span></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source ↗<span className="sr-only"> (opens in a new tab)</span></a>}{project.caseStudyUrl && <a href={project.caseStudyUrl}>Case study →</a>}</div>
            </div>
          </div>
        </article>;
      })}
    </div>
    <div className="project-preview" aria-hidden="true">
      <div className={`project-preview-stage ${preview ? "has-preview" : ""}`}>
        {projects.map((project) => <div key={project.id} className={`preview-layer ${preview?.id === project.id ? "is-visible" : ""}`}><ProjectVisual project={project} active={preview?.id === project.id} /></div>)}
        <span className="preview-placeholder">Select a project to look closer.</span>
      </div>
      <div className="preview-caption"><span>{preview ? preview.name : "Selected work"}</span><span>{preview ? preview.category : `01 — ${String(projects.length).padStart(2, "0")}`}</span></div>
    </div>
  </div>;
}
