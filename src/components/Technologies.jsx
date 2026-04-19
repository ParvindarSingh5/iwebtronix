const techs = [
  'React', 'Next.js', 'Node.js', 'Laravel', 'WordPress', 'Flutter',
  'React Native', 'Python', 'MySQL', 'MongoDB', 'AWS', 'Docker',
  'Tailwind CSS', 'TypeScript', 'GraphQL', 'REST APIs',
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-50 text-brand-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Tech Stack</span>
          <h2 className="section-title">Technologies We Excel In</h2>
          <p className="section-sub">Modern tools chosen for performance, scalability, and maintainability.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map(t => (
            <span
              key={t}
              className="bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold text-sm px-5 py-2.5 rounded-xl border border-brand-100 hover:border-brand-200 transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
