import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-2xl shadow-black/20 sm:px-10 sm:py-14">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          {profile.role}
        </p>

        <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.heroSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}