export function HeroGraphic() {
  return (
    <>
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 1440 620" preserveAspectRatio="none" fill="none">
          <path
            d="M870 0V94H760V184H925V294H1110V396H1010V520H1440M1030 0V54H1190V180H1320V310H1170V440H1280V620M650 620V500H530V420H625V280H455V190H560V0"
            stroke="#77b5dd"
            strokeWidth="1"
          />
          <path
            d="M720 0V130H850V205H740V330H920V430H810V620M1440 120H1280V240H1370V390H1220V520H1115V620"
            stroke="#3e9bd7"
            strokeWidth="1"
            strokeDasharray="3 8"
          />
          <circle cx="925" cy="294" r="4" fill="#3e9bd7" />
          <circle cx="1110" cy="396" r="4" fill="#3e9bd7" />
          <circle cx="530" cy="420" r="4" fill="#77b5dd" />
          <circle cx="1280" cy="520" r="4" fill="#77b5dd" />
          <path d="M0 548H480M80 490H400M1080 110H1440" stroke="#fff" strokeOpacity=".16" />
        </svg>
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(45,112,166,0.22),transparent_34%)]"
        aria-hidden="true"
      />
    </>
  )
}
