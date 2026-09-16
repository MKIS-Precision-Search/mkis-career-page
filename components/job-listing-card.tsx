import { ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react'
import type { Job } from '@/lib/jobs'

export function JobListingCard({ job }: { job: Job }) {
  return (
    <a
      href={`/roles/${job.slug}`}
      className="group flex flex-col gap-5 border-[3px] border-[#0d1b2d] bg-white p-8 transition-colors hover:border-[#1f72b7]"
    >
      <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#1f72b7]">
        <span className="border border-[#1f72b7]/40 px-3 py-1.5">{job.classification}</span>
        {job.confidential && (
          <span className="flex items-center gap-2 text-[#66778a]">
            <ShieldCheck className="size-3.5" aria-hidden="true" /> Confidential
          </span>
        )}
      </div>
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#12243a]">{job.title}</h2>
      <p className="text-[15px] leading-7 text-[#4c5d6c]">{job.summary}</p>
      <div className="flex items-center gap-2 text-sm text-[#66778a]">
        <MapPin className="size-4 text-[#1f72b7]" aria-hidden="true" />
        {job.location} · {job.locationType}
      </div>
      <span className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1f72b7]">
        View Role <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </a>
  )
}
