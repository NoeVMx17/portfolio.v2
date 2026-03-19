import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-8 sm:py-14">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Let’s connect
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          Open to junior software opportunities and projects related to backend,
          cloud and data-oriented development.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.links.email}`}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Email
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}