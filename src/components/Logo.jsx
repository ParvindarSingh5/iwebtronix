export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: { box: 'w-9 h-9', text: 'text-sm', name: 'text-lg' },
    md: { box: 'w-12 h-12', text: 'text-base', name: 'text-2xl' },
    lg: { box: 'w-16 h-16', text: 'text-xl', name: 'text-3xl' },
  }
  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`${s.box} bg-brand-500 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
        <span className={`${s.text} font-black text-white tracking-tight`}>iW</span>
      </div>
      <div className="leading-none">
        <span className={`${s.name} font-extrabold tracking-tight`}>
          <span className="text-brand-500">i</span>
          <span className="text-slate-800">Webtronix</span>
        </span>
      </div>
    </div>
  )
}
