'use client'

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217,122,46,0.10), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div
        className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(100,80,255,0.05), transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  )
}
