export default function Logo({ variant = 'full', className = '' }) {
  if (variant === 'mark') {
    return <img src="/logo-mark.svg" alt="iWebtronix" className={className} />
  }
  return <img src="/logo.svg" alt="iWebtronix - We Design Your Business" className={className} />
}
