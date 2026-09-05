export function BackgroundGrid() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid bg-radial-fade absolute inset-0" />
      <div
        className="animate-float-slow absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full blur-[110px]"
        style={{ background: 'var(--glow-a)' }}
      />
      <div
        className="animate-float-slow absolute -right-40 top-[20%] h-[480px] w-[480px] rounded-full blur-[110px]"
        style={{ background: 'var(--glow-b)', animationDelay: '-4s' }}
      />
      <div
        className="animate-float-slow absolute bottom-[-10%] left-1/3 h-[420px] w-[420px] rounded-full blur-[110px]"
        style={{ background: 'var(--glow-a)', animationDelay: '-8s' }}
      />
    </div>
  )
}
