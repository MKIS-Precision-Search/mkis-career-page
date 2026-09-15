import { getAllJobs } from '@/lib/jobs'
import { siteConfig } from '@/lib/site-config'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JobListingCard } from '@/components/job-listing-card'
import { HeroGraphic } from '@/components/hero-graphic'

export default function Home() {
  const jobs = getAllJobs()

  return (
    <main className="min-h-screen bg-[#f4f6f8] text-[#12243a]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#12243a] text-white">
        <HeroGraphic />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-14 text-center lg:px-10 lg:pb-24 lg:pt-20">
          <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ebddd]">
            Current Roles
          </p>
          <h1 className="mx-auto max-w-5xl text-2xl font-bold leading-[1.2] tracking-[-0.02em] md:text-4xl">
            {siteConfig.orgName} conducts confidential, technical executive searches in
            semiconductor, aerospace, and defense.
            <br />
            Review current openings below.
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#3e9bd7]/50" aria-hidden="true" />
      </section>

      <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
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
