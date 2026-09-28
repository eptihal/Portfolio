import { profile } from '../data/content';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="reveal">
          <p className="font-mono text-[13px]" style={{ color: 'var(--accent)' }}>
            {profile.location}
          </p>

          <h1 className="font-display mt-4 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.name}
          </h1>

          <p className="font-display mt-3 text-lg font-medium sm:text-xl" style={{ color: 'var(--text-muted)' }}>
            {profile.headline} <span aria-hidden="true" style={{ color: 'var(--border)' }}>/</span> {profile.subheadline}
          </p>

          <p className="mt-6 max-w-[54ch] text-[15px] leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              View my work
            </a>
            <a
              href={profile.cvPath}
              download
              className="rounded border px-5 py-2.5 text-sm font-medium transition-colors"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-2 py-2.5 text-sm font-medium underline decoration-1 underline-offset-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[340px]" style={{ animationDelay: '0.1s' }}>
          <div
            className="absolute -inset-3 rounded-lg border"
            style={{ borderColor: 'var(--border)' }}
            aria-hidden="true"
          />
          <div
            className="relative overflow-hidden rounded-md border"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full object-cover object-top"
              width="900"
              height="1125"
            />
          </div>
          <div
            className="absolute -bottom-4 -right-4 rounded border px-3 py-2 font-mono text-[11px]"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)', color: 'var(--accent)' }}
            aria-hidden="true"
          >
            model_status: training
          </div>
        </div>
      </div>
    </section>
  );
}
