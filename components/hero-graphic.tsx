export function HeroGraphic() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src="/hero-reference.png"
        alt=""
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#06192a]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06192a]/45 via-[#06192a]/10 to-[#06192a]/55" />
    </div>
  )
}
