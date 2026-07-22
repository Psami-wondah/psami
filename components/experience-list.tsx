import Reveal from "@/components/reveal";
import { experience } from "@/lib/site-data";

export default function ExperienceList({ compact = false }: { compact?: boolean }) {
  const roles = compact ? experience.slice(0, 3) : experience;
  return (
    <div className="timeline">
      {roles.map((role, index) => (
        <Reveal key={role.company} delay={index * 60}>
          <article className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"><span /></div>
            <div className="timeline-meta">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{role.arrangement || "On-site"}</p>
              <p className="mt-2 text-sm text-muted">{role.location}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-strong sm:text-2xl">{role.role}</h3>
              <p className="mt-1 text-base font-medium text-accent-soft">{role.company}</p>
              <p className="mt-4 max-w-2xl leading-7 text-muted">{role.summary}</p>
              {!compact && (
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                  {role.contributions.map((contribution) => (
                    <li key={contribution} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{contribution}</li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
                {role.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
