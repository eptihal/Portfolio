import { experience } from '../data/content';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Experience & training">
      <ol className="relative flex flex-col gap-10 border-l pl-7" style={{ borderColor: 'var(--border)' }}>
        {experience.map((item) => (
          <li key={item.role + item.period} className="relative">
            <span
              className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2"
              style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--bg)' }}
              aria-hidden="true"
            />
            <p className="font-mono text-[12.5px]" style={{ color: 'var(--accent)' }}>{item.period}</p>
            <h3 className="font-display mt-1 text-lg font-semibold">{item.role}</h3>
            <p className="text-[13.5px]" style={{ color: 'var(--text-muted)' }}>{item.org}</p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {item.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-[14px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--accent)' }}>—</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
