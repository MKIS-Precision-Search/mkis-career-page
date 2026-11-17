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
  /* MKIS-AUTO:estimator-36 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'estimator-36',
      title: 'Construction Estimator',
      reference: 'MKIS-JO-36',
      location: 'Mentor, Ohio',
      locationType: 'On-site',
      city: 'Mentor',
      region: 'Ohio',
      country: 'US',
      classification: 'Executive Search',
      summary: 'Prepare accurate, complete bids by reviewing plans and specifications, performing quantity takeoffs, soliciting and organizing pricing from subcontractors and suppliers.',
      description: 'Prepare accurate, complete bids by reviewing plans and specifications, performing quantity takeoffs, soliciting and organizing pricing from subcontractors and suppliers. Keep bid documentation complete and orderly so that nothing is missed ahead of a deadline. This is an excellent opportunity for someone who wants to improve construction estimating from the ground up and grow toward a career in estimating or project management.',
      responsibilities: [
        'Read construction drawings, plans, and specifications for upcoming bids.',
        'Perform quantity takeoffs: measure, count, and list the materials, labor, and work items a job requires.',
        'Send bid invitations to subcontractors and suppliers, and track responses.',
        'Collect and compare quotes, and follow up so pricing is in before the bid deadline.',
        'Enter quantities and pricing into spreadsheets and estimating documents.',
        'Keep bid lists, contact lists, and project files organized and current.',
        'Help assemble bid packages so forms and documents are complete and on time.',
        'Support the project team with estimating documents after a bid is won, as needed.',
      ],
      requirements: [
        'Some experience with, or a real interest in, the construction industry.',
        'Comfort with numbers and basic math, and the care to get figures right.',
        'Ability to read, or willingness to learn to read, construction plans and specifications.',
        'Working comfort with computers, email, and spreadsheets such as Microsoft Excel.',
        'Strong attention to detail and good follow-through on deadlines.',
        'Clear, professional communication.',
        'Experience with quantity takeoff or estimating software.',
        'Construction field experience, including summer or part-time job site work.',
        'Coursework in blueprint reading, construction estimating, or construction management.',
        'Any exposure to gathering quotes or pricing from vendors or subcontractors.',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-11-07',
      validThrough: '2027-02-05',
      confidential: true,
    },
  /* MKIS-AUTO:estimator-36 END */
  /* MKIS-AUTO:it-support-specialist-35 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'it-support-specialist-35',
      title: 'IT Support Specialist',
      reference: 'MKIS-JO-35',
      location: 'Mentor, Ohio',
      locationType: 'On-site',
      city: 'Mentor',
      region: 'Ohio',
      country: 'US',
      classification: 'Executive Search',
      summary: 'A growing construction company needs one reliable IT person to keep its systems running.',
      description: 'A growing construction company needs one reliable IT person to keep its systems running. This is a generalist role. You will manage servers and Microsoft 365, take care of computers, email, and passwords, and help staff when something stops working.\n\nThis is not a systems redesign role. This role  is keeping what is in place running well. Familiarity with AI-assisted coding tools is a plus for small fixes.',
      responsibilities: [
        'Maintain company servers: routine checks, updates, backups, and basic troubleshooting.',
        'Administer Microsoft 365 for the whole company: Outlook, Word, Excel, Teams, OneDrive, and SharePoint.',
        'Set up computers and accounts for new staff. Remove access when people leave.',
        'Fix day-to-day problems with hardware, software, email, and connections.',
        'Manage email accounts, distribution lists, shared mailboxes, passwords, and multi-factor authentication.',
        'Keep printers, shared drives, and office systems working. Track IT equipment.',
        'Apply updates and patches. Follow basic security practices.',
        'Help with social media posts and small website updates as needed.',
      ],
      requirements: [
        'Associate degree in computer science, information technology, or a related field. -or- Self-taught, with hands-on experience supporting systems or users.',
        'Hands-on IT support experience in a work setting.',
        'Working knowledge of Windows, Microsoft 365 administration, email, and basic networking.',
        'Basic familiarity with servers, backups, and user accounts.',
        'Patient and clear with non-technical staff.',
        'Reliable follow-through. You close the loop and do not leave problems half-finished.',
        'Careful with passwords and company information.',
        'Must be a U.S. citizen or a lawful permanent resident (green card holder).',
        'Experience as the sole IT support person for a small or mid-size business.',
        'Familiarity with AI-assisted coding tools for small fixes or automations.',
        'Comfort with social media and simple website edits.',
        'An entry-level IT certification. Welcome, but hands-on ability matters more.',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-11-06',
      validThrough: '2027-02-04',
      confidential: true,
    },
  /* MKIS-AUTO:it-support-specialist-35 END */
  /* MKIS-AUTO:federal-projects-healthcare-construction-supervisor-26 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'federal-projects-healthcare-construction-supervisor-26',
      title: 'Federal Projects: Healthcare Construction Supervisor',
      reference: 'MKIS-JO-26',
      location: 'Cleveland, OH',
      locationType: 'On-site',
      city: 'Cleveland',
      region: 'OH',
      country: 'US',
      classification: 'Executive Search',
      summary: 'Lead day-to-day field operations for a major VA healthcare construction project in Cleveland, Ohio.',
      description: 'Lead day-to-day field operations for a major VA healthcare construction project in Cleveland, Ohio. This hands-on leadership role coordinates crews and subcontractors performing MEP and concrete work in an active hospital environment, with a focus on safety, quality, scheduling, and infection control (ICRA).',
      responsibilities: [
        'Oversee daily construction activities, field crews, and subcontractors.',
        'Coordinate MEP and concrete work to maintain project schedules and quality standards.',
        'Ensure safe construction practices and compliance with hospital infection-control requirements.',
        'Coordinate with project management, trade partners, and VA facility representatives.',
        'Monitor progress, resolve field issues, and maintain accurate project documentation.',
      ],
      requirements: [
        'Minimum 10 years of healthcare construction experience, including hospital construction or renovation in active medical facilities.',
        'Demonstrated career progression with increasing responsibility in construction field supervision and leadership.',
        'Experience overseeing construction crews, subcontractors, and multiple trades on complex projects.',
        'Strong working knowledge of mechanical, electrical, plumbing (MEP), and concrete construction.',
        'Working knowledge of ICRA (Infection Control Risk Assessment) and infection-control requirements for construction in active healthcare environments.',
        'Previous experience with VA, federal government, or other public-sector construction projects.',
        'Experience working in occupied hospitals, sterile environments, or critical patient-care areas.',
        'Experience coordinating MEP system shutdowns, tie-ins, inspections, and commissioning.',
        'Ability to interpret complex construction drawings, specifications, and project schedules.',
        'OSHA 30 certification or additional healthcare construction safety training.',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-10-15',
      validThrough: '2027-01-13',
      confidential: true,
    },
  /* MKIS-AUTO:federal-projects-healthcare-construction-supervisor-26 END */
  /* MKIS-AUTO:contractor-sales-representative-24 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'contractor-sales-representative-24',
      title: 'Contractor Sales Representative',
      reference: 'MKIS-JO-24',
      location: 'Orange County, CA',
      locationType: 'On-site',
      city: 'Orange County',
      region: 'CA',
      country: 'US',
      classification: 'Executive Search',
      summary: 'A growing lighting and controls organization is seeking a Contractor Sales Representative to develop and expand relationships with electrical contractors across the assigned territory.',
      description: 'A growing lighting and controls organization is seeking a Contractor Sales Representative to develop and expand relationships with electrical contractors across the assigned territory. This individual will focus on supporting an established contractor customer base while pursuing targeted new business and helping customers identify effective lighting and controls solutions.\n\nThe ideal candidate combines contractor-facing sales experience with practical knowledge of electrical products, lighting, or controls. The position is well suited to a hands-on relationship builder who can communicate technical value, coordinate internal resources, and develop long-term customer partnerships.',
      responsibilities: [
        'Develop, maintain, and expand relationships with electrical contractors throughout the Orange County, CA territory.',
        'Manage and grow an established customer base while pursuing targeted new-account opportunities.',
        'Promote and support lighting-control solutions, with particular emphasis on controls applications and contractor adoption.',
        'Represent and support lighting products in addition to controls offerings.',
        'Conduct contractor visits, account calls, product discussions, and opportunity-development activities.',
        'Identify customer needs, coordinate with internal support resources, and advance opportunities through the sales process.',
        'Maintain consistent follow-up and provide responsive service to existing and prospective customers.',
        'Collaborate with inside sales and internal teams to support customer satisfaction, project progress, and business growth.',
        'Stay informed on relevant products, applications, and competitive activity within the territory.',
      ],
      requirements: [
        'Professional experience calling on electrical contractors or working directly with contractor customers.',
        'Demonstrated ability to develop and maintain business relationships within the electrical, lighting, controls, or related channel.',
        'Strong communication, organization, follow-up, and territory-management skills.',
        'Willingness and ability to travel throughout the Orange County, CA territory.',
        'Ability to work independently while collaborating effectively with internal support teams.',
        'Experience working directly for an electrical contractor or within the contractor channel is valuable.',
        'Candidates with strong controls expertise but limited contractor experience may be considered.',
        'Direct Lutron controls experience is highly preferred.',
        'Experience working for a lighting or controls representative agency is highly preferred.',
        'Background with electrical contractors, electrical distribution, lighting controls, lighting manufacturers, or related manufacturers.',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-23',
      validThrough: '2026-12-22',
      confidential: true,
    },
  /* MKIS-AUTO:contractor-sales-representative-24 END */
  /* MKIS-AUTO:technical-sales-manager-17 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'technical-sales-manager-17',
      title: 'Technical Sales Manager',
      reference: 'MKIS-JO-17',
      location: 'Northwest Philadelphia Area',
      locationType: 'On-site',
      city: 'Spring City',
      region: 'PA',
      country: 'US',
      classification: 'Executive Search',
      summary: 'Working closely with engineers, architects, municipalities, contractors, and other key stakeholders, this individual will drive revenue growth, develop strategic customer relationships, manage key accounts, and represent a premium, U.S.-manufactured product line.',
      description: 'Working closely with engineers, architects, municipalities, contractors, and other key stakeholders, this individual will drive revenue growth, develop strategic customer relationships, manage key accounts, and represent a premium, U.S.-manufactured product line.  Represent a respected product line supported by domestic manufacturing, strong market presence, and a commitment to quality and specification compliance.\n\nThe ideal candidate combines technical aptitude with strong relationship-building and strategic account management skills. This is primarily an in-office position with some flexibility and limited travel.\n\nCareer Growth - The company offers opportunities for long-term career development and advancement, supported by a culture of internal promotion and strong employee tenure.\n\nWork-Life Balance - Enjoy a flexible and professional work environment with minimal bureaucracy and an emphasis on sustainable work practices.\n\nCompetitive Market Position - The company\'s products are engineered for durability, performance, and compliance, providing meaningful differentiation in a competitive marketplace.',
      responsibilities: [
        'Identify, prospect, develop, and close new business opportunities with architects, engineers, municipal agencies, Departments of Transportation, universities, public works departments, contractors, and other relevant customers.',
        'Develop and maintain strong relationships with key decision-makers and influencers.',
        'Serve as the technical liaison between internal engineering resources and external customers and stakeholders.',
        'Help ensure product specifications, design intent, and project requirements are clearly understood and successfully executed.',
        'Support customers throughout the project lifecycle, from initial opportunity and bid preparation through project completion and final handoff.',
        'Coordinate with sales representatives, contractors, subcontractors, and internal teams to support successful project execution.',
        'Analyze market trends, competitive activity, and customer feedback to identify opportunities and refine sales strategies.',
        'Provide market intelligence and customer insights to sales, marketing, engineering, and product teams.',
        'Support product positioning and pricing strategies that emphasize quality, durability, service, performance, and specification compliance rather than competing solely on price.',
      ],
      requirements: [
        'Bachelor\'s degree preferred.',
        'A degree in Electrical Engineering, Civil Engineering, or a related technical discipline is desirable.',
        'Minimum of 5 to 7 years of experience in technical sales within the lighting, electrical, construction products, or related industries.',
        'Demonstrated experience developing new business and managing customer relationships.',
        'Proven success meeting or exceeding sales goals in a performance-driven or commission-based environment.',
        'Equivalent technical knowledge and relevant industry experience will also be considered.',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-16',
      validThrough: '2026-12-15',
      confidential: true,
    },
  /* MKIS-AUTO:technical-sales-manager-17 END */
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
      description: 'A growing manufacturer is seeking a Manager of Engineering and Product Support to lead a highly technical engineering team while serving as a critical bridge between product development, operations, sales, marketing, and customers.\n\nThis is a unique opportunity for an experienced lighting industry professional who understands that great products are not created in an engineering vacuum. The successful candidate will bring a strong understanding of lighting, customer applications, product management, and engineering while helping shape and continually improve the company\'s product offering for the North American market.\n\nThe majority of product development is performed by an international R&D organization. This position will work closely with international R&D leadership and company management to translate North American customer and market requirements into successful products and product improvements.\n\nThe role is approximately 50% team leadership and development, with the balance focused on product management, applications engineering, product development, customer support, market intelligence, and continuous improvement.\n\nThis is an opportunity to have a significant voice in how the U.S. business develops. The engineering team is experienced, highly technical, engaged, and hardworking. The successful candidate will have considerable opportunity to influence products, processes, and the future direction of the organization.\n\nHelp shape the future of the company\'s U.S. product offering. Have a meaningful voice in product development and market strategy. Work directly with company leadership and an international R&D organization. Lead an experienced and highly engaged engineering team. See ideas move from concept to implementation quickly. Help improve the company\'s product lifecycle and internal processes. Make a visible impact rather than becoming "a cog in the machine." Work in a new facility with a showroom and strong working conditions. Build toward a potential executive leadership opportunity within the U.S. organization over the next 3-5 years.',
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
        'Experience with SolidWorks.',
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
