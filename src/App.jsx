import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:border focus:px-4 focus:py-2"
        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <About />
        </div>
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <Skills />
        </div>
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <Experience />
        </div>
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <Education />
        </div>
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <Certifications />
        </div>
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <Projects />
        </div>
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <Services />
        </div>
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
