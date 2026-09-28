import { profile, socials } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p className="font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5 font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>
          <a href={`mailto:${socials.email}`}>Email</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
