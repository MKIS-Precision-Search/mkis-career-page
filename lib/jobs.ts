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
  /* MKIS-AUTO:senior-power-supply-design-engineer-20 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'senior-power-supply-design-engineer-20',
      title: 'Senior Power Supply Design Engineer',
      reference: 'MKIS-JO-20',
      location: 'Rochester, NY',
      locationType: 'On-site',
      city: 'Rochester',
      region: 'NY',
      country: 'US',
      classification: 'Executive Search',
      summary: 'Role Title: Senior Power Supply Design Engineer',
      description: 'Role Title: Senior Power Supply Design Engineer\nLocation: Rochester, NY\n\nRequired Skills:\nDC-DC and AC-DC analog and digital power converter experience\nLeading projects within power supply design\nUnderstanding of technical requirements, development of schematics and layouts (Rigid and Rigid-Flex)\nImplementation of validation test plans\nSimulation and analysis on Power Supply circuitry\nBring-up and integration at board and system levels\nSubsystem and system level verification and validation testing\nQuidance and mentoring of engineering resources\n4+ years (Graduate Deg) or 6+ years (Bachelor\'s Deg) experience in a power supply design role\n3+ years of experience with schematic capture tool usage (DxDesigner and PADS preferable)\nBS in Electrical Engineering (BSEE) or equivalent discipline\nUS citizenship is required\nAbility to obtain US Government Secret Security Clearance\n\nPreferred Skills:\nExperience with Power Supply simulation tools (LTSPICE, Matlab, etc.)\nExperience with Isolated Converter topologies and design principles including PFC\nExperience designing and evaluating power supplies for compliance with MIL-STD-704 or MIL-STD-1275\nKnowledge of EMI design and test techniques for conducted and radiated emissions/susceptibility (MIL-STD-461)\nExperience with continuous improvement techniques for manufacturing\nExperience with Configuration Management software (Agile preferred)',
      responsibilities: [],
      requirements: [],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-15',
      validThrough: '2026-12-14',
      confidential: true,
    },
  /* MKIS-AUTO:senior-power-supply-design-engineer-20 END */
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
