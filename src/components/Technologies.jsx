const stacks = [
  {
    title: 'Frontend',
    color: 'from-sky-400 to-blue-600',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Backend',
    color: 'from-emerald-400 to-green-600',
    techs: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Python & AI',
    color: 'from-amber-400 to-orange-500',
    techs: ['Python', 'Django', 'FastAPI', 'Pandas', 'TensorFlow'],
  },
  {
    title: 'Mobile',
    color: 'from-pink-400 to-rose-500',
    techs: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    title: 'Database & Cloud',
    color: 'from-violet-400 to-purple-600',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'AWS', 'Docker'],
  },
  {
    title: 'DevOps',
    color: 'from-slate-500 to-ink-800',
    techs: ['GitHub Actions', 'CI/CD', 'Nginx', 'Linux', 'Monitoring'],
  },
]

export default function Technologies() {
  return (
    <section id="tech" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="pill">Our Tech Stack</span>
          <h2 className="section-title mt-5">
            Built with <span className="text-brand-500">Modern Technology</span>
          </h2>
          <p className="section-sub">
            React · Node.js · Python — we use the right tool for the job, so your software scales with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map(s => (
            <div key={s.title} className="card card-hover">
              <div className={`inline-block text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-4`}>
                {s.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.techs.map(t => (
                  <span key={t} className="bg-ink-50 hover:bg-brand-50 text-ink-700 hover:text-brand-600 text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
