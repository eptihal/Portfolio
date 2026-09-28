import { skills } from '../data/content';
import Section from './Section';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="What I work with"
      description="Grouped by area, with an honest read on where each skill currently stands."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-md border p-5"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <h3 className="font-display text-sm font-semibold">{group.category}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-3 text-[13.5px]">
                  <span>{item.name}</span>
                  <span
                    className="font-mono text-[11px] shrink-0"
                    style={{ color: 'var(--accent)' }}
                  >
                    {item.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
