import { profile } from '../data/content';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Background">
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
        <p className="text-[15px] leading-relaxed sm:col-span-2" style={{ color: 'var(--text-muted)' }}>
          {profile.about}
        </p>
        <dl
          className="h-fit rounded-md border p-5 font-mono text-[13px]"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
        >
          <div className="flex justify-between gap-4 py-1.5">
            <dt style={{ color: 'var(--text-muted)' }}>Focus</dt>
            <dd className="text-right">Machine Learning</dd>
          </div>
          <div className="flex justify-between gap-4 border-t py-1.5" style={{ borderColor: 'var(--border)' }}>
            <dt style={{ color: 'var(--text-muted)' }}>Track</dt>
            <dd className="text-right">DEPI — ML</dd>
          </div>
          <div className="flex justify-between gap-4 border-t py-1.5" style={{ borderColor: 'var(--border)' }}>
            <dt style={{ color: 'var(--text-muted)' }}>Grad. Year</dt>
            <dd className="text-right">2026</dd>
          </div>
          <div className="flex justify-between gap-4 border-t py-1.5" style={{ borderColor: 'var(--border)' }}>
            <dt style={{ color: 'var(--text-muted)' }}>Based in</dt>
            <dd className="text-right">{profile.location}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
