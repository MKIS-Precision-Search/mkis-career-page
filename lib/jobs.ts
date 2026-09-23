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
  /* MKIS-AUTO:senior-accountant-23 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'senior-accountant-23',
      title: 'Senior Accountant',
      reference: 'MKIS-JO-23',
      location: 'Mayfield, OH',
      locationType: 'On-site',
      city: 'Mayfield',
      region: 'OH',
      country: 'US',
      classification: 'Executive Search',
      summary: 'Senior Accountant If you\'re an accountant who enjoys solving complex problems, improving processes, and understanding the "why" behind the numbers, this could be the opportunity for you.',
      description: 'Senior Accountant\n\nIf you\'re an accountant who enjoys solving complex problems, improving processes, and understanding the "why" behind the numbers, this could be the opportunity for you. We\'re looking for a Senior Accountant who is highly-detailed, curious, and motivated to take ownership of their work. In this role, you\'ll play a key part in ensuring the accuracy of our financial reporting, supporting audits and compliance efforts, and helping drive continuous improvements across our accounting processes. You\'ll have the opportunity to work on meaningful projects, collaborate with teams across the business, and contribute to the integration of newly acquired companies as we continue to grow. This role is ideal for someone who enjoys working independently, takes pride in producing accurate work, and is always looking for ways to make processes more efficient and effective.',
      responsibilities: [
        'Support monthly, quarterly, and annual financial close activities, including preparing journal entries, reconciliations, and financial analyses',
        'Prepare and finalize financial results for assigned operating and holding company subsidiaries',
        'Analyze balance sheet and income statement accounts to ensure accuracy and completeness',
        'Perform variance analysis and identify the business drivers behind financial results',
        'Support global statutory audits, tax reporting requirements, and other compliance-related activities',
        'Prepare and maintain financial models, reconciliations, reports, and analysis using Microsoft Excel',
        'Assist with budgeting, cash flow analysis, contract reviews, and special projects',
        'Review and provide guidance on work completed by Staff Accountants',
        'Complete inventory analysis, reserve calculations, in-transit validations, and inventory reconciliations',
        'Support financial integrations and operational initiatives related to acquisitions',
      ],
      requirements: [
        '3-5 years of accounting experience',
        'Strong understanding of the full accounting cycle and generally accepted accounting principles',
        'Experience with financial analysis, financial reporting, data analysis, general ledger systems, month-end close processes, statutory compliance, and tax-related reporting',
        'Ability to independently manage projects, solve problems, and drive issues to completion',
        'Public accounting experience',
        'Experience with Microsoft Dynamics 365 Finance & Operations (D365FO) or Microsoft Dynamics',
        'Experience supporting mergers, acquisitions, and business integrations',
        'Experience working with foreign currency transactions and intercompany eliminations',
        'Bachelors degree required',
        'CPA certification is preferred',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-22',
      validThrough: '2026-12-21',
      confidential: true,
    },
  /* MKIS-AUTO:senior-accountant-23 END */
  /* MKIS-AUTO:specification-sales-representative-detroit-22 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'specification-sales-representative-detroit-22',
      title: 'Specification Sales Representative - Detroit',
      reference: 'MKIS-JO-22',
      location: 'Detroit, MI',
      locationType: 'On-site',
      city: 'Detroit',
      region: 'MI',
      country: 'US',
      classification: 'Executive Search',
      summary: 'A growing representation organization is seeking a Specification Sales Representative to support lighting specification activity throughout the Detroit metropolitan market and surrounding Southeast Michigan territory.',
      description: 'A growing representation organization is seeking a Specification Sales Representative to support lighting specification activity throughout the Detroit metropolitan market and surrounding Southeast Michigan territory. This role combines specification sales, lighting applications, customer education, project support, and technical guidance.\n\nThe successful candidate will work closely with lighting specifiers, designers, engineers, contractors, distributors, and other project stakeholders. The ideal professional is a knowledgeable and consultative lighting resource who can help customers evaluate options, facilitate productive design discussions, and build trusted long-term relationships.',
      responsibilities: [
        'Develop and maintain relationships with lighting specifiers, designers, engineering firms, and other key customer stakeholders.',
        'Attend customer meetings and participate in design charrettes to help project teams clarify goals and evaluate lighting options.',
        'Provide lighting product knowledge, application guidance, and technology education to customers and internal teams.',
        'Deliver presentations and educational sessions to design firms and, as appropriate, electrical contractors and distributors.',
        'Support lighting applications across a broad range of lighting types and project requirements.',
        'Guide customers and internal personnel through product selection, application questions, and project-specific considerations.',
        'Support multiple projects and customer relationships across the assigned Southeast Michigan territory.',
        'Build trusted, long-term customer relationships through clear communication, strong follow-up, and consultative service.',
        'Collaborate with internal teams to share customer feedback, project insight, and application knowledge.',
        'Help stakeholders identify solutions that align with project goals, design intent, and practical application requirements.',
      ],
      requirements: [
        'Relevant experience in lighting specification, lighting design, electrical engineering, applications engineering, or sales specification work.',
        'Ability to communicate effectively with design professionals, engineers, specifiers, contractors, distributors, and internal teams.',
        'Strong customer-facing, presentation, and relationship-management skills.',
        'Ability to listen carefully, ask thoughtful questions, and act as a trusted advisor.',
        'Ability to manage multiple projects and customer relationships while maintaining timely follow-up.',
        'Broad knowledge of lighting technologies and applications across multiple lighting categories.',
        'Experience as a lighting designer, electrical engineer, applications engineer, specification sales representative, or similar technical professional is preferred.',
        'Experience working for a lighting representative agency or manufacturer with direct customer interaction is preferred.',
        'Experience conducting design charrettes or presenting to architecture, engineering, or lighting design firms is beneficial.',
        'Theatrical lighting experience is a plus but is not essential.',
        'Ability and willingness to cover the Detroit metropolitan and Southeast Michigan territory.',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-22',
      validThrough: '2026-12-21',
      confidential: true,
    },
  /* MKIS-AUTO:specification-sales-representative-detroit-22 END */
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
      summary: 'This role is responsible for the design and development of circuitry and PWB layout best practices in power supply development for ruggedized radios and accessories.',
      description: 'This role is responsible for the design and development of circuitry and PWB layout best practices in power supply development for ruggedized radios and accessories. The individual participates as a member of a cross functional development team through the integrated product development lifecycle.\n\nThe candidate should be experienced in leading projects within power supply design. They should be able to influence collaborative efforts across the engineering organization with an understanding of technical requirements, development of schematics and layouts (Rigid and Rigid-Flex), and implementation of validation test plans.',
      responsibilities: [
        'Support Power Supply hardware design and development of DC-DC and AC-DC (3-phase and single-phase) topologies for applications with power consumption ranging from 50W to 2kW',
        'Perform simulation and analysis on Power Supply circuitry',
        'Perform bring-up and integration at board and system levels',
        'Perform subsystem and system level verification and validation testing',
        'Provide guidance and mentoring of engineering resources as required',
      ],
      requirements: [
        'DC-DC and AC-DC analog and digital power converter experience',
        'Understanding of technical requirements, development of schematics and layouts (Rigid and Rigid-Flex)',
        '4+ years (Graduate Deg) or 6+ years (Bachelor\'s Deg) experience in a power supply design role',
        '3+ years of experience with schematic capture tool usage (DxDesigner and PADS preferable)',
        'BS in Electrical Engineering (BSEE) or equivalent discipline',
        'US citizenship is required',
        'Ability to obtain US Government Secret Security Clearance',
        'Experience with Power Supply simulation tools (LTSPICE, Matlab, etc.)',
        'Experience with Isolated Converter topologies and design principles including PFC',
        'Experience designing and evaluating power supplies for compliance with MIL-STD-704 or MIL-STD-1275',
        'Knowledge of EMI design and test techniques for conducted and radiated emissions/susceptibility (MIL-STD-461)',
        'Experience with continuous improvement techniques for manufacturing',
        'Experience with Configuration Management software (Agile preferred)',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-16',
      validThrough: '2026-12-14',
      confidential: true,
    },
  /* MKIS-AUTO:senior-power-supply-design-engineer-20 END */
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
  /* MKIS-AUTO:senior-construction-accountant-18 START (provisional slug -- managed by the MKIS ATS, do not edit by hand) */
    {
      slug: 'senior-construction-accountant-18',
      title: 'Senior Construction Accountant',
      reference: 'MKIS-JO-18',
      location: 'Beachwood, Ohio',
      locationType: 'On-site',
      city: 'Beachwood',
      region: 'Ohio',
      country: 'US',
      classification: 'Executive Search',
      summary: 'The Senior Construction Accountant will be responsible for key accounting and financial reporting activities supporting service-based construction operations, including roofing and general contracting services.',
      description: 'The Senior Construction Accountant will be responsible for key accounting and financial reporting activities supporting service-based construction operations, including roofing and general contracting services.\n\nThis role requires a strong understanding of U.S. Generally Accepted Accounting Principles (GAAP), revenue recognition, and internal controls, with particular emphasis on percentage-of-completion (POC) accounting and ASC 606 revenue recognition.\n\nThe Senior Construction Accountant will work closely with construction managers, contract administration, operations, and audit teams to ensure accurate financial reporting, effective controls, and timely month-end and year-end close activities.\n\nThis is a highly visible role that will also contribute to improving accounting policies, procedures, systems, and reporting processes, as well as supporting special financial projects.',
      responsibilities: [
        'Manage critical accounting and financial reporting activities for service-based construction and contracting operations.',
        'Execute and support timely month-end and year-end close processes.',
        'Work closely with construction and operations teams to perform monthly controls related to percentage-of-completion revenue recognition.',
        'Prepare and review monthly reconciliations related to contract assets, work-in-process (WIP), and other construction-related accounts.',
        'Apply ASC 606 revenue recognition principles to service and construction contracts.',
        'Review balance sheet and income statement activity to identify unusual trends, discrepancies, or accounting issues.',
        'Perform monthly and quarterly internal control procedures in accordance with established policies and accounting standards.',
        'Partner with contract administration and operational teams to document processes and strengthen the overall control environment.',
        'Support internal and external audits by providing accurate documentation and responding to audit requests in a timely manner.',
        'Research accounting issues and recommend appropriate solutions consistent with GAAP and company policies.',
      ],
      requirements: [
        '4+ years of accounting or public accounting/audit experience required.',
        'Demonstrated experience accounting for service contracts, construction contracts, general contracting, roofing, or similar project-based businesses required.',
        'Strong knowledge of U.S. GAAP required.',
        'Experience with percentage-of-completion accounting and ASC 606 revenue recognition strongly preferred.',
        'Experience with Sarbanes-Oxley (SOX) controls and internal control processes required.',
        'Construction, contracting, manufacturing, or other project-based business experience preferred.',
        'Experience with SAP, particularly FI, CO, or PA modules, is a plus.',
        'Experience with consolidation or financial reporting platforms such as OneStream is a plus.',
        'CPA license or progress toward CPA certification is preferred.',
        'Strong analytical, organizational, and problem-solving abilities.',
      ],
      compensationDisplay: 'Compensation discussed confidentially during the search process.',
      employmentType: 'FULL_TIME',
      datePosted: '2026-09-16',
      validThrough: '2026-12-15',
      confidential: true,
    },
  /* MKIS-AUTO:senior-construction-accountant-18 END */
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
