import { certifications } from '../data/content';
import Section from './Section';

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="05 — Certifications" title="Certifications & courses">
      <div className="grid gap-3.5 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-md border border-l-[3px] p-4"
            style={{ borderColor: 'var(--border)', borderLeftColor: 'var(--accent)', backgroundColor: 'var(--surface)' }}
          >
            <h3 className="text-[14px] font-medium leading-snug">{cert.name}</h3>
            <p className="mt-1.5 text-[13px]" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
            {cert.date && (
              <p className="mt-1 font-mono text-[11.5px]" style={{ color: 'var(--accent)' }}>{cert.date}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
