import { getAllJobs } from '@/lib/jobs'
import { siteConfig } from '@/lib/site-config'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JobListingCard } from '@/components/job-listing-card'
import { HeroGraphic } from '@/components/hero-graphic'

export default function Home() {
  const jobs = getAllJobs()

  return (
    <main className="min-h-screen bg-[#c2c8cd] text-[#12243a]">
      <SiteHeader />

      <section className="relative min-h-[440px] overflow-hidden bg-[#12243a] text-white md:min-h-[520px]">
        <HeroGraphic />
        <div className="relative mx-auto flex min-h-[440px] max-w-[1240px] items-center justify-center px-6 py-14 text-center md:min-h-[520px] lg:px-10 lg:py-20">
          <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ebddd]">
            Current Roles
          </p>
          <h1 className="mx-auto max-w-5xl text-xl font-bold leading-[1.2] tracking-[-0.02em] md:text-3xl">
            {siteConfig.orgName} conducts confidential, technical executive searches in
            semiconductor, aerospace, and defense.
            <span className="mt-3 block">Review current openings below.</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#3e9bd7]/50" aria-hidden="true" />
      </section>

      <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col items-center gap-5 rounded-xl border-[5px] border-[#0d1b2d] bg-white px-6 py-6 text-center">
          <p className="max-w-2xl text-[16px] leading-7 text-[#4c5d6c]">
            The roles below do not represent all positions available. If you would
            like to submit your resume for current and future searches, click Upload Resume.
          </p>
          <p className="max-w-2xl text-[14px] leading-6 text-[#7b8794]">
            If there are any technical issues, please simply email your resume to{' '}
            <a href="mailto:mkis@mkis.us" className="font-medium text-[#1f72b7] hover:underline">
              mkis@mkis.us
            </a>
            .
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeQp0jlRDpvi2wNf1TdunLjDhGSV9jBHHsEcEK-4durwoMFfw/viewform?usp=pp_url&entry.657177684=Manual+Upload"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-[#0d1b2d] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#12243a]"
          >
            Upload Resume
          </a>
        </div>
        {jobs.length === 0 ? (
          <p className="text-[16px] leading-7 text-[#4c5d6c]">
            No open roles are posted right now. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <JobListingCard key={job.slug} job={job} />
            ))}
          </div>
        )}
      </div>

      <SiteFooter />
    </main>
  )
}
