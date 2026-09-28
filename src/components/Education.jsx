import { education } from '../data/content';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" eyebrow="04 — Education" title="Education">
      <div
        className="reveal rounded-md border p-6 sm:p-7"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
      >
        <p className="font-mono text-[12.5px]" style={{ color: 'var(--accent)' }}>{education.period}</p>
        <h3 className="font-display mt-1 text-lg font-semibold sm:text-xl">{education.degree}</h3>
        <p className="mt-1 text-[14px]" style={{ color: 'var(--text-muted)' }}>{education.university}</p>
        <p className="mt-3 font-mono text-[13px]" style={{ color: 'var(--text)' }}>{education.detail}</p>
      </div>
    </Section>
  );
}
