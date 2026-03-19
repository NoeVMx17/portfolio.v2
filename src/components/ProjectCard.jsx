export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-300">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        <a
          href={project.links.repo}
          className="text-blue-400 transition hover:text-blue-300"
        >
          Repository
        </a>
        <a
          href={project.links.demo}
          className="text-blue-400 transition hover:text-blue-300"
        >
          Demo
        </a>
      </div>
    </article>
  );
}