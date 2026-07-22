import { ArrowUpRight } from "@/components/icons";
import ProjectVisual from "@/components/project-visual";
import Reveal from "@/components/reveal";
import type { Project } from "@/lib/site-data";

export default function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className="project-shell" delay={index * 70}>
      <article className={`project-item ${index === 0 ? "project-featured" : ""}`}>
        <div className="project-media-wrap">
          <ProjectVisual project={project} />
          <span className="project-number">0{index + 1}</span>
        </div>
        <div className="project-details">
          <p className="eyebrow">{project.eyebrow}</p>
          <div className="mt-4 flex items-start justify-between gap-4">
            <h3 className="project-title">{project.name}</h3>
            {project.liveUrl && (
              <a className="round-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live site`}>
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )}
          </div>
          <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>
          <dl className="project-facts mt-7">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Engineering focus</dt><dd>{project.challenge}</dd></div>
            <div><dt>Delivered</dt><dd>{project.outcome}</dd></div>
          </dl>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
