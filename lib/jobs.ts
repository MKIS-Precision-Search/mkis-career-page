export type Job = {
  /** URL-safe id, used as /roles/[slug] */
  slug: string
  title: string
  /** Reference code shown to candidates, e.g. MKIS-ASE-042 */
  reference: string
  /** Display string shown on the page, e.g. "Phoenix, Arizona" */
  location: string
  locationType: 'On-site' | 'Hybrid' | 'Remote'
  /** Structured location, required for Google Jobs markup */
  city: string
  region: string
  country: string
  classification: string
  summary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  compensationDisplay: string
  /** Optional numeric range, used only in the Google Jobs markup, never required */
  salaryMin?: number
  salaryMax?: number
  salaryCurrency?: string
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'TEMPORARY'
  /** ISO dates, both required by Google Jobs */
  datePosted: string
  validThrough: string
  confidential: boolean
}

// TEMPORARY: hand-maintained list. This is the exact shape the ATS
// "Publish to MKIS Job Board" button should send when that's wired up.
// Swapping this for a real data source later means replacing this file's
// export, not touching any page or component.
export const jobs: Job[] = [
  /* MKIS-AUTO:manager-eng-product-support-11 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'manager-eng-product-support-11',
      title: 'Manager, Eng & Product Support',
      reference: 'MKIS-JO-11',
      location: 'Vero Beach, FL',
      locationType: 'On-site',
      city: 'Vero Beach',
      region: 'FL',
      country: 'US',
      classification: 'Executive Search',
      summary: 'A growing manufacturer is seeking a Manager of Engineering and Product Support to lead a highly technical engineering team while serving as a critical bridge between product development, operations, sales, marketing, and customers.',
      description: 'A growing manufacturer is seeking a Manager of Engineering and Product Support to lead a highly technical engineering team while serving as a critical bridge between product development, operations, sales, marketing, and customers.\nThis is a unique opportunity for an experienced lighting industry professional who understands that great products are not created in an engineering vacuum. The successful candidate will bring a strong understanding of lighting, customer applications, product management, and engineering while helping shape and continually improve the company\'s product offering for the North American market.\nThe majority of product development is performed by an international R&D organization. This position will work closely with international R&D leadership and company management to translate North American customer and market requirements into successful products and product improvements.\nThe role is approximately 50% team leadership and development, with the balance focused on product management, applications engineering, product development, customer support, market intelligence, and continuous improvement.\nThis is an opportunity to have a significant voice in how the U.S. business develops. The engineering team is experienced, highly technical, engaged, and hardworking. The successful candidate will have considerable opportunity to influence products, processes, and the future direction of the organization.',
      responsibilities: [
        'Manage approximately five mechanical and electrical engineers.',
        'Provide direction, mentoring, coaching, and technical leadership to a highly technical team.',
        'Manage the product lifecycle from implementation through end-of-life.',
        'Help manage and continually improve the North American product offering.',
        'Gather product ideas and requirements from customers, sales professionals, and engineers.',
        'Identify market needs and emerging opportunities within the lighting industry.',
        'Provide technical information and applications support to customers and the sales organization.',
        'Assist customers with product applications and technical solutions.',
        'Coordinate engineering activities with production and operations.',
        'Manage and coordinate product certifications.',
      ],
      requirements: [
        'Significant professional experience within the lighting industry.',
        'Demonstrated knowledge of lighting products and applications.',
        'Experience managing and developing technical engineering personnel.',
        'Strong product management or product development experience.',
        'Experience working directly with customers on technical applications.',
        'Engineering or other technical degree.',
        'Experience with **SolidWorks**.',
        'Applications engineering experience.',
        'Previous experience as an Engineering Manager, Director of Engineering, Product Manager, or Applications Engineering Manager.',
        'Experience with commercial lighting; residential lighting experience may also be relevant.',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-16',
      validThrough: '2026-12-14',
      confidential: true,
    },
  /* MKIS-AUTO:manager-eng-product-support-11 END */
  {
    slug: 'director-advanced-packaging-engineering',
    title: 'Director, Advanced Packaging Engineering',
    reference: 'MKIS-ASE-042',
    location: 'Phoenix, Arizona',
    locationType: 'On-site',
    city: 'Phoenix',
    region: 'AZ',
    country: 'US',
    classification: 'Executive Search / Semiconductor',
    summary:
      'Lead the next generation of high-reliability packaging for mission-critical semiconductor systems.',
    description:
      'MKIS Precision Search is conducting a confidential search for a Director of Advanced Packaging Engineering on behalf of an established semiconductor innovator. This leader will set the technical direction for packaging platforms that enable performance, reliability, and scale across demanding commercial and defense applications.',
    responsibilities: [
      'Define and execute the advanced packaging technology roadmap across 2.5D, 3D, and heterogeneous integration platforms.',
      'Build, mentor, and direct a multidisciplinary engineering organization spanning design, process, reliability, and operations.',
      'Partner with executive leadership, customers, and external foundry and OSAT partners to move programs from concept to production.',
      'Establish the operating cadence, technical standards, and decision frameworks required to deliver against critical program milestones.',
    ],
    requirements: [
      '12+ years of progressive experience in semiconductor packaging, integration, or a closely related discipline.',
      'Demonstrated leadership of technical teams and complex, cross-functional development programs.',
      'Deep working knowledge of advanced packaging architectures, materials, thermal management, and reliability qualification.',
      'B.S. in Electrical, Mechanical, Materials Science, or Chemical Engineering; advanced degree preferred.',
      'U.S. citizenship required. Ability to obtain and maintain a security clearance is preferred.',
    ],
    compensationDisplay:
      '$220,000 – $285,000 base salary · Executive incentive plan · Full benefits',
    salaryMin: 220000,
    salaryMax: 285000,
    salaryCurrency: 'USD',
    employmentType: 'FULL_TIME',
    datePosted: '2026-09-14',
    validThrough: '2026-12-14',
    confidential: true,
  },
]

export function getAllJobs(): Job[] {
  return jobs
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug)
}
