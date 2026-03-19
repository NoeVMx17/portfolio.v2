export default function Education() {
  return (
    <section id="education" className="py-8 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Education
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Academic Background
        </h2>
      </div>

      <div className="space-y-6">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            BSc Computer Engineering
          </h3>
          <p className="text-sm text-slate-400">
            Universitat Oberta de Catalunya — Sep 2025 · In progress
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Mobile Application Development Bootcamp
          </h3>
          <p className="text-sm text-slate-400">
            Eurecat Academy — Mar 2024 · Jul 2024
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Multiplatform Application Development (DAM)
          </h3>
          <p className="text-sm text-slate-400">
            Institut Tecnològic de Barcelona — Sep 2021 · Jun 2023
          </p>
        </div>

      </div>
    </section>
  );
}