import { ArrowUpRight, Check, MapPin, ShieldCheck } from 'lucide-react'
import type { Job } from '@/lib/jobs'
import { siteConfig } from '@/lib/site-config'
import { SectionHeading } from '@/components/section-heading'
import { HeroGraphic } from '@/components/hero-graphic'

export function JobDetail({ job }: { job: Job }) {
    const applyUrl = `${siteConfig.applyFormBaseUrl}?entry.657177684=${encodeURIComponent(job.reference)}`

  return (
    <>
      <section className="relative overflow-hidden bg-[#12243a] text-white">
        <HeroGraphic />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ebddd]">
              <span className="border border-[#3e9bd7]/60 px-3 py-1.5">{job.classification}</span>
              {job.confidential && (
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-3.5" aria-hidden="true" /> Confidential search
                </span>
              )}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.04em] md:text-6xl lg:text-[72px]">
              {job.title}
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-[#55a4d7]" aria-hidden="true" /> {job.location} · {job.locationType}
              </span>
              <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden="true" />
              <span>Reference: {job.reference}</span>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">{job.summary}</p>
            <a
              href="#apply"
              className="mt-9 inline-flex items-center gap-3 bg-[#3e9bd7] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#55aee8]"
            >
              Apply Now <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#3e9bd7]/50" aria-hidden="true" />
      </section>

      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-24 lg:py-20">
          <article className="max-w-3xl">
            {job.description.trim() && (
              <section className="border-b border-[#d6dde4] pb-12">
              <SectionHeading eyebrow="01 / Mission" title="The Role" />
              <div className="mt-6 space-y-5">
                {job.description.split(/\n{2,}/).filter((p) => p.trim()).map((para, i) => (
                  <p key={i} className="text-[17px] leading-8 text-[#4c5d6c]">
                    {para}
                  </p>
                ))}
              </div>
            </section>
            )}
            {job.responsibilities.length > 0 && (
              <section className="border-b border-[#d6dde4] py-12">
              <SectionHeading eyebrow="02 / Execution" title="What You'll Do" />
              <ul className="flex flex-col gap-5">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-4 text-[16px] leading-7 text-[#4c5d6c]">
                    <Check className="mt-1 size-4 shrink-0 text-[#1f72b7]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            )}
            {job.requirements.length > 0 && (
              <section className="border-b border-[#d6dde4] py-12">
              <SectionHeading eyebrow="03 / Readiness" title="What We're Looking For" />
              <ul className="flex flex-col gap-5">
                {job.requirements.map((item) => (
                  <li key={item} className="flex gap-4 text-[16px] leading-7 text-[#4c5d6c]">
                    <Check className="mt-1 size-4 shrink-0 text-[#1f72b7]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            )}
            <section className="py-12">
              <SectionHeading eyebrow="04 / Terms" title="Compensation Range" />
              <p className="text-[16px] leading-7 text-[#4c5d6c]">{job.compensationDisplay}</p>
            </section>
          </article>

          <aside className="lg:pt-2">
            <div
              className="sticky top-8 border-t-4 border-[#1f72b7] bg-white p-7 shadow-[0_12px_35px_rgba(18,36,58,0.07)]"
              id="apply"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#1f72b7]">
                Candidate Submission
              </p>
              <h2 className="mt-4 text-xl font-bold tracking-[-0.02em] text-[#12243a]">
                Ready to discuss the mission?
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#66778a]">
                Submit your credentials for confidential review by the MKIS search team.
              </p>
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-3 bg-[#1f72b7] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#155b92]"
              >
                Apply Now <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-[#8b9aa8]">
                All inquiries treated in confidence
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
