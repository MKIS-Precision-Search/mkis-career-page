import type { Job } from '@/lib/jobs'
import { siteConfig } from '@/lib/site-config'

/**
 * Emits the schema.org JobPosting JSON-LD Google Jobs requires to index a
 * page. This is the piece that makes a published role show up on Google
 * for Jobs without ever submitting anything to Google directly - Google's
 * crawler just needs to find this markup on a public, indexable page.
 */
export function JobPostingJsonLd({ job }: { job: Job }) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: job.title,
    description: buildDescriptionHtml(job),
    identifier: {
      '@type': 'PropertyValue',
      name: siteConfig.orgName,
      value: job.reference,
    },
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: siteConfig.orgName,
      sameAs: siteConfig.parentSiteUrl,
      logo: siteConfig.logoUrl,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.city,
        addressRegion: job.region,
        addressCountry: job.country,
      },
    },
    directApply: false,
  }

  // Google requires salary info to be a real number, not a range string
  // like the page displays - only include this when both bounds are set.
  if (job.salaryMin && job.salaryMax) {
    jsonLd.baseSalary = {
      '@type': 'MonetaryAmount',
      currency: job.salaryCurrency ?? 'USD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: 'YEAR',
      },
    }
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Google wants the description as a single HTML string, not separate
// fields - this stitches the page's own sections back together for the
// crawler so the structured data and the visible page never disagree.
function buildDescriptionHtml(job: Job): string {
  const responsibilities = job.responsibilities.map((item) => `<li>${item}</li>`).join('')
  const requirements = job.requirements.map((item) => `<li>${item}</li>`).join('')
  return [
    `<p>${job.description}</p>`,
    `<p><strong>What you'll do:</strong></p><ul>${responsibilities}</ul>`,
    `<p><strong>What we're looking for:</strong></p><ul>${requirements}</ul>`,
  ].join('')
}
