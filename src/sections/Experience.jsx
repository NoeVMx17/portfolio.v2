import { profile } from "../data/profile";

export default function Experience() {
  const exp = profile.experience;

  return (
    <section id="experience" className="py-8 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Professional Background
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Experience
        </h2>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-white">
            {exp.title} — {exp.company}
          </h3>
          <span className="text-sm text-slate-400">{exp.period}</span>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {exp.summary}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {exp.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}