import { profile } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Technical Stack
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Skills
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {profile.skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}