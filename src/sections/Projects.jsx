import { featuredProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-8 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Featured Projects
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          A selection of projects focused on software development, APIs, structured data and application architecture.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}