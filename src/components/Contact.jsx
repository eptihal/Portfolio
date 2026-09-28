import { profile, socials } from '../data/content';
import Section from './Section';

const links = [
  {
    label: 'Email',
    value: socials.email,
    href: `mailto:${socials.email}`,
    icon: (
      <path d="M3 6.5h18v11H3v-11Zm0 0 9 6.5 9-6.5" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/eptihal-alhawy',
    href: socials.linkedin,
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
        <path d="M7.6 10.2v6.3M7.6 7.8v.1M11.4 16.5v-3.7c0-1.4 1-2.2 2-2.2 1.1 0 1.9.8 1.9 2.2v3.7" />
      </>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/eptihal',
    href: socials.github,
    icon: (
      <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4v-1.6c-2.4.5-2.9-1-2.9-1-.4-1-1-1.3-1-1.3-.8-.6.1-.5.1-.5.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.7.1-.6.3-1 .6-1.2-1.9-.2-3.9-1-3.9-4.3 0-1 .3-1.7.9-2.3-.1-.3-.4-1.2.1-2.4 0 0 .8-.2 2.5 1a8.6 8.6 0 0 1 4.6 0c1.7-1.2 2.5-1 2.5-1 .5 1.2.2 2.1.1 2.4.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.3.3.3.6.8.6 1.7v2.5c0 .2.2.5.6.4A8.5 8.5 0 0 0 12 3.5Z" />
    ),
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="08 — Contact"
      title="Get in touch"
      description="Open to machine learning and data science opportunities, internships, and relevant freelance work."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel={link.label === 'Email' ? undefined : 'noreferrer'}
            className="flex items-start gap-3.5 rounded-md border p-5 transition-transform hover:-translate-y-0.5"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
              {link.icon}
            </svg>
            <div>
              <p className="font-mono text-[11.5px]" style={{ color: 'var(--text-muted)' }}>{link.label}</p>
              <p className="mt-0.5 text-[13.5px] break-all">{link.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <a
          href={profile.cvPath}
          download
          className="inline-block rounded px-5 py-2.5 text-sm font-medium"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          Download CV
        </a>
      </div>
    </Section>
  );
}
