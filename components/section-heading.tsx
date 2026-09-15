export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-7 flex items-start gap-4">
      <span className="mt-2 h-8 w-1 shrink-0 bg-[#1f72b7]" />
      <div>
        <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#1f72b7]">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#12243a] md:text-[28px]">{title}</h2>
      </div>
    </div>
  )
}
