import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllJobs, getJobBySlug } from '@/lib/jobs'
import { siteConfig } from '@/lib/site-config'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JobDetail } from '@/components/job-detail'
import { JobPostingJsonLd } from '@/components/job-posting-jsonld'

export function generateStaticParams() {
  return getAllJobs().map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) return {}
  return {
    title: `${job.title} | ${siteConfig.orgName}`,
    description: job.summary,
  }
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) notFound()

  return (
    <main className="min-h-screen bg-[#f4f6f8] text-[#12243a]">
      <JobPostingJsonLd job={job} />
      <SiteHeader />
      <JobDetail job={job} />
      <SiteFooter />
    </main>
  )
}
