import { services } from '../data/content';
import Section from './Section';

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="07 — Services"
      title="How I can help"
      description="Suited to early-stage ML/data needs, internship scope, or small freelance tasks."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-md border p-5"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <h3 className="font-display text-base font-semibold">{service.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
