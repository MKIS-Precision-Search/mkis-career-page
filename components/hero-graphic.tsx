export function HeroGraphic() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src="/hero-semiconductor-defense.png"
        alt=""
        className="h-full w-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-[#12243a]/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,36,58,0.2),rgba(7,18,31,0.78)_82%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#12243a]/30 via-transparent to-[#12243a]" />
    </div>
  )
}
