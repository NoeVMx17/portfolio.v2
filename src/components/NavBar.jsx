export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-[0.18em] text-slate-200 uppercase">
          Noè Villanueva
        </a>

        <nav className="hidden gap-6 text-sm text-slate-400 md:flex">
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#education" className="transition hover:text-white">Education</a>
          <a href="#certificates" className="transition hover:text-white">Certificates</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}