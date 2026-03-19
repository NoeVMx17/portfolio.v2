const certificates = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    date: "In progress",
    link: "#",
  },
  {
    title: "Introduction to AI Development",
    issuer: "BIG School",
    date: "Feb 2026",
    link: "/certificates/IA_NoeVillanueva.pdf",
  },
  {
    title: "German A1 – Goethe Zertifikat",
    issuer: "Goethe Institut",
    date: "",
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-8 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Certifications
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Certificates & Licenses
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold text-white">
              {cert.title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {cert.issuer}
            </p>

            {cert.date && (
              <p className="mt-1 text-xs text-slate-500">
                Issued: {cert.date}
              </p>
            )}

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
              >
                View certificate
              </a>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}