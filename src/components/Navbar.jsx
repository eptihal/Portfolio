import { useEffect, useState } from 'react';
import { nav, profile } from '../data/content';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full border-b transition-colors"
      style={{
        borderColor: scrolled ? 'var(--border)' : 'transparent',
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="flex h-9 w-9 items-center justify-center rounded border md:hidden"
            style={{ borderColor: 'var(--border)' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t px-5 py-4 md:hidden"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-sm"
                  style={{ color: 'var(--text)' }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
