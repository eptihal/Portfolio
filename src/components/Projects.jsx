import { projects, socials } from '../data/content';
import Section from './Section';

function ProjectCard({ project }) {
  return (
    <div
      className="flex flex-col rounded-md border p-5"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="mb-4 aspect-video w-full rounded object-cover"
        />
      )}

      <h3 className="font-display text-base font-semibold">{project.title}</h3>

      <p
        className="mt-2 text-[13.5px] leading-relaxed"
        style={{ color: 'var(--text-muted)' }}
      >
        {project.description}
      </p>

      {project.tech?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded border px-2 py-0.5 font-mono text-[11px]"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--accent)',
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      {project.features?.length > 0 && (
        <ul className="mt-4 flex flex-col gap-1.5">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex gap-2 text-[13px]"
              style={{ color: 'var(--text-muted)' }}
            >
              <span aria-hidden="true" style={{ color: 'var(--accent)' }}>
                —
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex gap-4">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] underline underline-offset-4"
          >
            Repository
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] underline underline-offset-4"
          >
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="06 — Projects"
      title="Projects"
      description="A selection of my data analysis and business intelligence projects."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          className="text-[13.5px]"
          style={{ color: 'var(--text-muted)' }}
        >
          In the meantime, my code and experiments are on GitHub.
        </p>

        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="rounded border px-4 py-2 text-sm font-medium"
          style={{ borderColor: 'var(--border)' }}
        >
          View my GitHub
        </a>
      </div>
    </Section>
  );
}