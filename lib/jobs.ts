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
      summary: 'Manager of Engineering and Product Support',
      description: 'Manager of Engineering and Product Support\n\nLocation: Florida\nWork Arrangement: In Office, No Hybrid\nTravel: Approximately 10%\nReports To: Company Leadership\nDirect Reports: Approximately 5 Engineers, Mechanical and Electrical\nBenefits: Medical, dental, profit sharing, 401(k), tuition assistance, relocation assistance\n\nAbout the Opportunity\nA growing manufacturer is seeking a Manager of Engineering and Product Support to lead a highly technical engineering team while serving as a critical bridge between product development, operations, sales, marketing, and customers.\n\nThis is a unique opportunity for an experienced lighting industry professional who understands that great products are not created in an engineering vacuum. The successful candidate will bring a strong understanding of lighting, customer applications, product management, and engineering while helping shape and continually improve the company\'s product offering for the North American market.\n\nThe majority of product development is performed by an international R&D organization. This position will work closely with international R&D leadership and company management to translate North American customer and market requirements into successful products and product improvements.\n\nThe role is approximately 50% team leadership and development, with the balance focused on product management, applications engineering, product development, customer support, market intelligence, and continuous improvement.\n\nThis is an opportunity to have a significant voice in how the U.S. business develops. The engineering team is experienced, highly technical, engaged, and hardworking. The successful candidate will have considerable opportunity to influence products, processes, and the future direction of the organization.\n\nWhat You\'ll Do\nLead and Develop the Engineering Team\nManage approximately five mechanical and electrical engineers.\nProvide direction, mentoring, coaching, and technical leadership to a highly technical team.\nChallenge team members intellectually and encourage continuous professional development.\nEvaluate team performance and identify opportunities for growth and development.\nLead by example and create an environment of ownership, accountability, collaboration, and proactive problem solving.\nEncourage the team to work independently while providing the leadership and coordination necessary to keep projects moving.\nBuild and improve engineering processes as the organization evolves.\n\nOwn the Product Management Process\nManage the product lifecycle from implementation through end-of-life.\nHelp manage and continually improve the North American product offering.\nEvaluate existing products and identify opportunities for improvement, conversion, or expansion.\nWork within the company\'s product management process and recommend improvements where appropriate.\nCoordinate product development activities with the international R&D organization.\nProvide input into new product development based on customer requirements, market needs, competitive information, and sales feedback.\nHelp determine which product ideas have sufficient market value to warrant development.\nSupport the balance between adapting existing products for the U.S. market and creating new products.\n\nServe as the Voice of the Customer\nGather product ideas and requirements from customers, sales professionals, and engineers.\nIdentify market needs and emerging opportunities within the lighting industry.\nTranslate customer requirements into actionable product recommendations.\nHelp ensure that product decisions reflect the needs of the North American market.\nMaintain strong relationships throughout the lighting industry and use those relationships to identify opportunities and trends.\nParticipate in trade shows and occasional customer visits.\n\nProvide Applications and Technical Support\nProvide technical information and applications support to customers and the sales organization.\nAssist customers with product applications and technical solutions.\nWork directly with customers using SolidWorks where appropriate.\nDevelop product presentations and technical information for sales, marketing, and customer service.\nHelp the sales organization clearly communicate product features, capabilities, and value.\nWork closely with sales and operations leadership.\n\nCoordinate Across the Organization\nA major component of this role is serving as the **bridge between Product, Engineering, Operations, Sales, and Marketing.\n\nCoordinate engineering activities with production and operations.\nWork closely with Sales to understand customer needs and market opportunities.\nPartner with Marketing to effectively communicate product features and capabilities.\nCoordinate product information and launches with customer service.\nEnsure information moves effectively between technical and commercial functions.\nIdentify gaps in existing processes and recommend practical improvements.\nHelp the organization execute rather than simply develop ideas.\n\nProduct Certifications and Continuous Improvement:\nManage and coordinate product certifications.\nLearn existing company processes and identify opportunities to improve them.\nRecommend and, when appropriate, help implement new processes.\nDrive continuous improvement throughout engineering and product support.\nBring forward ideas for making the company, team, and product lifecycle more effective.\n\nWhat We\'re Looking For:\nThe ideal candidate is a "lighting industry professional first and an engineer/product leader second*" You should understand lighting products, applications, customers, and the marketplace and be capable of translating that knowledge into effective product and engineering decisions.\n\nRequired:\nSignificant professional experience within the lighting industry.\nDemonstrated knowledge of lighting products and applications.\nExperience managing and developing technical engineering personnel.\nStrong product management or product development experience.\nExperience working directly with customers on technical applications.\nAbility to coordinate effectively across Engineering, Sales, Marketing, Operations, and Production.\nStrong communication and interpersonal skills.\nDemonstrated ability to take ownership and work independently.\nA proactive approach to problem solving and continuous improvement.\nAbility to challenge, mentor, and intellectually engage a highly technical engineering team.\nAbility to work effectively with an international R&D organization.\nWillingness to work fully in office.\nWillingness to travel approximately 10%.\n\nPreferred:\nEngineering or other technical degree.\nExperience with **SolidWorks**.\nApplications engineering experience.\nPrevious experience as an Engineering Manager, Director of Engineering, Product Manager, or Applications Engineering Manager.\nExperience with commercial lighting; residential lighting experience may also be relevant.\nExperience with product certifications and product lifecycle management.\nExperience presenting technical products to sales teams, customers, or other stakeholders.\n\nThe Leadership Profile\nThe company is looking for someone who acts like an owner.\n\nThe right person will be:\nProactive rather than reactive.\nHands-on without needing to personally do everything.\nComfortable making decisions and taking responsibility for the outcome.\nA strong people manager and mentor.\nAble to push a technical team to think harder and perform better.\nHighly organized and an excellent coordinator.\nPersonable and comfortable working with customers and colleagues across the organization.\nCapable of working within established structure while recognizing opportunities to improve it.\nSomeone who gives the team credit and develops people rather than taking credit for the team\'s work.\n\nThis person should be comfortable moving between technical engineering discussions, customer conversations, product strategy, sales meetings, and operational issues.\n\nWhy Consider This Opportunity?\nThis position offers considerably more influence than a typical engineering management role.\n\nThe successful candidate will have the opportunity to:\nHelp shape the future of the company\'s U.S. product offering.\nHave a meaningful voice in product development and market strategy.\nWork directly with company leadership and an international R&D organization.\nLead an experienced and highly engaged engineering team.\nSee ideas move from concept to implementation quickly.\nHelp improve the company\'s product lifecycle and internal processes.\nMake a visible impact rather than becoming "a cog in the machine."\nWork in a new facility with a showroom and strong working conditions.\nBuild toward a potential executive leadership opportunity within the U.S. organization over the next 3-5 years.\n\nBenefits:\nMedical insurance\nDental insurance\nProfit sharing\n401(k)\nTuition assistance\nRelocation assistance\nNo commission/incentive component\n\nA Strong Fit Will Have:\nThe strongest candidates will likely have progressed through some combination of:\n\nLighting Industry Applications Engineering Product Management / Product Development Engineering Leadership\n\nCandidates who understand lighting from both the technical and commercial sides will be particularly well positioned for success.\n\nIf you are an experienced lighting professional who wants to lead a strong engineering team while having a real voice in the products and direction of a growing U.S. business, this is an opportunity worth exploring.',
      responsibilities: [],
      requirements: [],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-15',
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
