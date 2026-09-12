/**
 * LEXVANGUARD — Dynamic Multi-Article Blog Details Controller
 * Enables client-side rendering and URL parameter routing for all 7 articles.
 */
(function () {
  'use strict';

  const ARTICLES_DATA = {
    'dupont-doctrine': {
      id: 'dupont-doctrine',
      title: 'Navigating Likelihood-of-Confusion Refusals: The 2026 DuPont Doctrine in Practice',
      category: 'Trademark Litigation & Prosecution',
      badge: 'Featured Landmark Case',
      date: 'October 15, 2026',
      readTime: '8 Min Read',
      author: 'Sarah Al-Mansoor, LL.M.',
      authorRole: 'Director of Brand Defense & Trademark Litigation at LexVanguard. Formerly examining attorney at international IP registry tribunals.',
      authorImg: 'assets/images/team/author-elena.jpg',
      heroBg: 'assets/images/hero/hero-bg-blog-details.jpg',
      mainImg: 'assets/images/blog/article-deepdive.jpg',
      mainImgAlt: 'Corporate Trademark Strategy and Judicial Likelihood of Confusion Analysis',
      takeaway: 'Receiving an official Section 2(d) refusal under the Lanham Act is not fatal to a trademark application. By rigorously decomposing the cited mark across the 13 DuPont evidentiary factors—specifically focusing on trade channel segregation, price disparity, and buyer sophistication—attorneys routinely overcome examiner objections without costly litigation.',
      section1Title: '1. The Statutory Framework: Section 2(d) of the Lanham Act',
      section1Html: `
        <p class="text-secondary">
          Under 15 U.S.C. &sect; 1052(d), a trademark application must be refused registration on the Principal Register if the applied-for mark so resembles a previously registered mark as to be likely, when used on or in connection with the goods of the applicant, to cause confusion, mistake, or deception among the purchasing public.
        </p>
        <p class="text-secondary">
          Crucially, actual confusion is never required. The examining attorney must solely establish that a reasonable probability of consumer confusion exists in commercial trade. To make this determination, the USPTO relies on the landmark precedent established in <em>In re E. I. DuPont DeNemours & Co.</em>, 476 F.2d 1357 (C.C.P.A. 1973).
        </p>
      `,
      quote: 'The test is not whether the marks can be distinguished when subjected to side-by-side comparison, but whether the marks are sufficiently similar that a consumer viewing the marks individually in the marketplace would assume a common source.',
      quoteAuthor: 'U.S. Court of Appeals for the Federal Circuit',
      section2Title: '2. Deconstructing the Primary DuPont Factors',
      section2Html: `
        <p class="text-secondary">
          While the DuPont court outlined thirteen distinct factors, trademark examiners and the Trademark Trial and Appeal Board (TTAB) consistently accord primary weight to two foundational prongs:
        </p>
        <ul class="text-secondary mb-4">
          <li class="mb-2"><strong>The similarity or dissimilarity of the marks:</strong> Evaluated in their entireties as to appearance, sound, connotation, and commercial impression.</li>
          <li class="mb-2"><strong>The relatedness of the goods or services:</strong> Evaluated based on how the goods are described in the identification clauses, not necessarily how they are used in real-world marketing.</li>
        </ul>
      `,
      tableHeaders: ['Rebuttal Ground', 'Legal Precedent Basis', 'Target Evidentiary Proof'],
      tableRows: [
        ['Commercial Impression Disparity', 'DuPont Factor 1', 'Dictionary definitions, distinct visual logos, contrasting semantic connotations.'],
        ['Channels of Trade Segregation', 'DuPont Factor 3', 'Wholesale B2B enterprise sales vs. impulse retail consumer grocery channels.'],
        ['Buyer Sophistication Standard', 'DuPont Factor 4', 'High unit cost ($10,000+), multi-week procurement cycles, institutional engineers.'],
        ['Crowded Trademark Field', 'DuPont Factor 6', 'Dozens of active third-party registrations utilizing identical root terms in the same class.']
      ],
      section3Title: '3. Tactical Strategies for Drafting Office Action Rebuttals',
      section3Html: `
        <p class="text-secondary">
          When responding to an examining attorney\'s initial refusal, counsel should employ a multi-layered escalation strategy:
        </p>
        <ol class="text-secondary mb-4">
          <li class="mb-3">
            <strong>Narrowing the Goods/Services Identification:</strong> Often, the simplest path to registration is amending your description to carve out the specific sector occupied by the cited registrant (e.g., adding <em>"excluding medical diagnostics hardware"</em>).
          </li>
          <li class="mb-3">
            <strong>Establishing Third-Party Dilution:</strong> Demonstrating that the root mark is conceptually weak by presenting evidence of 15+ existing registrations where the USPTO permitted coexistence in the same industry.
          </li>
          <li>
            <strong>Negotiating a Formal Consent Agreement:</strong> If the cited owner is not a direct competitor, entering into a written Trademark Coexistence Agreement—expressly affirming that both parties agree no likelihood of confusion exists—carries substantial legal weight under DuPont Factor 10.
          </li>
        </ol>
      `,
      takeaways: [
        { icon: 'bi-shield-slash', title: 'Avoid Mere Phonetic Twins', desc: 'Spelling variations (e.g., "Kool" vs. "Cool") almost never overcome Section 2(d) objections when underlying commercial classes overlap.' },
        { icon: 'bi-file-earmark-diff', title: 'Carve Out Scope Early', desc: 'Narrowing class descriptions to eliminate commercial overlap resolves over 60% of examiner refusals without litigation.' },
        { icon: 'bi-handshake', title: 'Consent Agreements Prevail', desc: 'Courts give paramount deference to coexistence agreements signed between sophisticated business entities.' }
      ],
      related: [
        { id: 'ai-inventorship', title: 'AI-Generated Inventions and the Human Inventorship Standard', cat: 'Patent Law', date: 'Oct 12, 2026', img: 'assets/images/blog/blog-post-1.jpg' },
        { id: 'madrid-protocol', title: 'Madrid Protocol vs. Direct National Trademark Filings', cat: 'International', date: 'Sep 28, 2026', img: 'assets/images/blog/blog-post-2.jpg' },
        { id: 'section-2d', title: 'Navigating Section 2(d) Refusals: A Step-by-Step Response Playbook', cat: 'Trademark', date: 'Aug 24, 2026', img: 'assets/images/blog/blog-post-5.jpg' }
      ],
      sidebarCtaTitle: 'Received a 2(d) Office Action?',
      sidebarCtaText: 'Do not abandon your mark. Have our senior trademark litigators conduct a complimentary preliminary refusal review.',
      sidebarCtaBtn: 'Request Refusal Review',
      bottomCtaTitle: 'Need Assistance Overcoming a Trademark Refusal?',
      bottomCtaText: 'Our registered attorneys prepare defensible, precedential office action responses for applications pending before the USPTO and global trademark offices.'
    },

    'ai-inventorship': {
      id: 'ai-inventorship',
      title: 'AI-Generated Inventions and the Human Inventorship Standard',
      category: 'Patent Law & Artificial Intelligence',
      badge: 'Patent Practice Guide',
      date: 'October 12, 2026',
      readTime: '6 Min Read',
      author: 'Dr. Marcus Chen, Ph.D.',
      authorRole: 'Senior Patent Attorney & Head of Computer Science & Robotics Practice. Former USPTO Technical Examiner.',
      authorImg: 'assets/images/team/attorney-2.jpg',
      heroBg: 'assets/images/hero/hero-bg-coming-soon.jpg',
      mainImg: 'assets/images/blog/blog-post-1.jpg',
      mainImgAlt: 'Abstract Artificial Intelligence Neural Network Representation and Patent Claim Structure',
      takeaway: 'Under prevailing USPTO guidance and the Federal Circuit Thaler v. Vidal holding, artificial intelligence cannot be credited as an inventor on a patent. However, patent protection remains fully attainable for AI-assisted breakthroughs as long as human engineers provided a significant contribution to the conception of each individual claim.',
      section1Title: '1. The Human Inventorship Mandate Under 35 U.S.C. 100(f)',
      section1Html: `
        <p class="text-secondary">
          The Patent Act explicitly defines an inventor as the "individual or, if a joint invention, the individuals collectively who invented or discovered the subject matter of the invention." In <em>Thaler v. Vidal</em>, 43 F.4th 1207 (Fed. Cir. 2022), the Federal Circuit cemented that "individual" refers strictly to a natural person.
        </p>
        <p class="text-secondary">
          Consequently, assigning inventorship to an autonomous neural network, LLM, or generative agent invalidates the patent on threshold procedural grounds. However, the subsequent 2024–2026 USPTO Inventorship Guidance on AI-Assisted Inventions clarifies that the use of an AI system does not disqualify a human inventor from obtaining a patent.
        </p>
      `,
      quote: 'Patent law protects human ingenuity. A natural person who uses an AI tool as an instrument—much like a chemist uses a spectrometer—is fully entitled to patent protection provided they made a significant conceptual contribution.',
      quoteAuthor: 'USPTO Official Examination Guidance on AI-Assisted Inventions',
      section2Title: '2. The Pannu Factors: Measuring Significant Human Contribution',
      section2Html: `
        <p class="text-secondary">
          To validate that human contribution meets statutory thresholds, patent examiners evaluate applications against the venerable <em>Pannu v. Iolab Corp.</em> factors:
        </p>
        <ul class="text-secondary mb-4">
          <li class="mb-2"><strong>Significant Conception Contribution:</strong> The human inventor must contribute significantly to the conception or reduction to practice of the claimed invention.</li>
          <li class="mb-2"><strong>Not Mere State-of-the-Art Prompts:</strong> Merely presenting an AI model with a problem and asking it for an answer without iterative structural guidance is insufficient.</li>
          <li class="mb-2"><strong>Claim-by-Claim Scrutiny:</strong> Every independent and dependent claim must embody the intellectual imprint of a natural human inventor.</li>
        </ul>
      `,
      tableHeaders: ['AI Contribution Level', 'Patentability Status', 'Required Documentation'],
      tableRows: [
        ['Autonomous Model Generation', 'Ineligible / Unpatentable', 'Model logs show no human prompt iteration or physical tuning.'],
        ['Human Problem Framing & Verification', 'Fully Patentable', 'Engineering notebook logs showing prompt engineering, hypothesis structuring, and validation.'],
        ['AI Component within Broader System', 'Fully Patentable', 'System claim drafts emphasizing human hardware architecture and sensor integration.'],
        ['Model Fine-Tuning & Weight Architecture', 'Patentable as Process', 'Training data curation scripts, loss function designs, and proprietary weighting hyperparameters.']
      ],
      section3Title: '3. Strategic Best Practices for Enterprise AI Patenting',
      section3Html: `
        <p class="text-secondary">
          Technology enterprises deploying generative AI in R&D departments must establish strict compliance safeguards:
        </p>
        <ol class="text-secondary mb-4">
          <li class="mb-3">
            <strong>Maintain Verifiable Engineering Logs:</strong> Document every human refinement step between an initial AI code output and the final physical or algorithmic claim draft.
          </li>
          <li class="mb-3">
            <strong>Focus Claims on Real-World Technical Execution:</strong> Rather than patenting abstract outputs, patent the end-to-end integration, custom preprocessing pipelines, and hardware accelerators.
          </li>
          <li>
            <strong>Disclose AI Collaboration Honestly:</strong> Rule 56 Duty of Disclosure mandates full candor to the patent office; transparent disclosures avoid later inequitable conduct challenges.
          </li>
        </ol>
      `,
      takeaways: [
        { icon: 'bi-cpu-fill', title: 'Human Must Conceive the Claim', desc: 'Simply running queries into an off-the-shelf LLM does not confer inventorship without structural human engineering.' },
        { icon: 'bi-journal-code', title: 'Audit Prompt Engineering Logs', desc: 'Detailed version-controlled Git commit logs and prompt histories prove human conception during patent examination.' },
        { icon: 'bi-shield-check', title: 'Protect Algorithms via System Claims', desc: 'Draft apparatus and system claims linking AI software to real-world memory buffers, sensors, and network nodes.' }
      ],
      related: [
        { id: 'dupont-doctrine', title: 'Navigating Likelihood-of-Confusion Refusals: The 2026 DuPont Doctrine', cat: 'Trademark', date: 'Oct 15, 2026', img: 'assets/images/blog/trademark-infringement.jpg' },
        { id: 'open-source', title: 'Open-Source Software & Commercial IP: Mitigating Contamination', cat: 'Software', date: 'Aug 10, 2026', img: 'assets/images/blog/blog-post-6.jpg' },
        { id: 'trade-secrets', title: 'Trade Secrets in the Era of Remote Engineering Teams', cat: 'Trade Secrets', date: 'Sep 15, 2026', img: 'assets/images/blog/blog-post-3.jpg' }
      ],
      sidebarCtaTitle: 'Filing an AI-Driven Patent?',
      sidebarCtaText: 'Our registered patent attorneys audit your invention disclosure against Section 101 thresholds and draft robust claims.',
      sidebarCtaBtn: 'Schedule Patent Consultation',
      bottomCtaTitle: 'Ready to Protect Your Machine Learning & Software Inventions?',
      bottomCtaText: 'Our patent prosecution group drafts defensible utility claims across artificial intelligence, semiconductor hardware, and cloud distributed systems.'
    },

    'madrid-protocol': {
      id: 'madrid-protocol',
      title: 'Madrid Protocol vs. Direct National Trademark Filings',
      category: 'Cross-Border Trademark Law',
      badge: 'Global Strategy',
      date: 'September 28, 2026',
      readTime: '5 Min Read',
      author: 'David Sterling, J.D.',
      authorRole: 'International IP Treaty Lead & WIPO Madrid Protocol Counsel at LexVanguard.',
      authorImg: 'assets/images/team/attorney-4.jpg',
      heroBg: 'assets/images/hero/hero-bg-services.jpg',
      mainImg: 'assets/images/blog/blog-post-2.jpg',
      mainImgAlt: 'Global Financial Market Map and International Shipping Routes for Madrid Trademark Filings',
      takeaway: 'Expanding a commercial brand overseas requires a strategic decision between centralized WIPO Madrid Protocol registration and direct national applications through local foreign counsel. While the Madrid Protocol slashes initial filing fees and translation overhead, it introduces the critical vulnerability of the "central attack" during the first five statutory years.',
      section1Title: '1. The Mechanism of the Madrid System',
      section1Html: `
        <p class="text-secondary">
          Administered by the World Intellectual Property Organization (WIPO) in Geneva, the Madrid Protocol allows an applicant with an existing home trademark application or registration (the "basic mark") to designate up to 130 member nations through a single centralized electronic application.
        </p>
        <p class="text-secondary">
          Instead of hiring separate attorneys in London, Paris, Tokyo, and Sydney—each requiring separate power-of-attorney documents, language translations, and local bank currency transfers—the enterprise pays one set of fees in Swiss Francs (CHF) directly through their home registry (such as the USPTO or UKIPO).
        </p>
      `,
      quote: 'The Madrid Protocol transforms international trademark management from a fragmented multi-jurisdictional nightmare into a consolidated, centrally docketed enterprise asset.',
      quoteAuthor: 'WIPO International Bureau Legal Directorate',
      section2Title: '2. The Critical Risk: Central Attack and Dependency',
      section2Html: `
        <p class="text-secondary">
          The greatest caveat of the Madrid Protocol is the Five-Year Dependency Rule under Article 6. If the home country application is rejected, successfully opposed, canceled, or narrowed within five years from its registration date, all international extensions dependent upon it automatically fail simultaneously across every designated country.
        </p>
        <p class="text-secondary">
          This catastrophic scenario—known in international trademark law as a <strong>Central Attack</strong>—leaves the brand owner forced to convert their international registrations into direct national filings at significant legal expense.
        </p>
      `,
      tableHeaders: ['Strategic Dimension', 'Madrid Protocol Filing', 'Direct National Filings'],
      tableRows: [
        ['Initial Legal & Filing Cost', 'Low: 1 application, 1 set of fees in CHF, no mandatory local foreign counsel.', 'High: Separate foreign counsel fees, statutory translations, and notarized powers-of-attorney in each country.'],
        ['Five-Year Dependency Vulnerability', 'High: Basic mark refusal automatically kills all designated country extensions.', 'None: Each national application is independent; rejection in one country does not affect others.'],
        ['Maintenance & Portfolio Renewals', 'Effortless: Single renewal date and unified recordal of ownership changes with WIPO.', 'Complex: Staggered renewal dates (every 10 years per country) with diverse national registries.'],
        ['Customized Country Descriptions', 'Rigid: International classes must mirror the narrow scope of the home mark.', 'Flexible: Can broaden or tailor descriptions to match local consumer terminology and classification rules.']
      ],
      section3Title: '3. When to Choose Direct National Filing Over Madrid',
      section3Html: `
        <p class="text-secondary">
          While Madrid is the default choice for cost-conscious startups, direct national filings remain essential in high-risk strategic markets:
        </p>
        <ol class="text-secondary mb-4">
          <li class="mb-3">
            <strong>When the Home Mark is Unsettled:</strong> If your US or UK home application faces pending oppositions or vulnerable prior art, never anchor an international expansion to it.
          </li>
          <li class="mb-3">
            <strong>Key Revenue Jurisdictions (e.g., China & Gulf States):</strong> China operates unique sub-class classification systems where standard Madrid Nice Class descriptions often fail to protect core commercial goods without local attorney intervention.
          </li>
          <li>
            <strong>Non-Member Territories:</strong> Several key economies (such as Taiwan and Saudi Arabia) are not Madrid Protocol contracting parties and must be filed directly through accredited local counsel.
          </li>
        </ol>
      `,
      takeaways: [
        { icon: 'bi-globe2', title: 'Single WIPO Docket Hub', desc: 'Manage trademark renewals, address changes, and assignments across 130+ nations through a single Geneva portal.' },
        { icon: 'bi-shield-exclamation', title: 'Beware the 5-Year Dependency', desc: 'Ensure your domestic application is rock-solid and past opposition windows before linking foreign registrations to it.' },
        { icon: 'bi-translate', title: 'Target China with Local Sub-Classes', desc: 'Combine Madrid for Europe and Latin America with direct national filings for nuanced jurisdictions like China.' }
      ],
      related: [
        { id: 'dupont-doctrine', title: 'Navigating Likelihood-of-Confusion Refusals: The 2026 DuPont Doctrine', cat: 'Trademark', date: 'Oct 15, 2026', img: 'assets/images/blog/article-deepdive.jpg' },
        { id: 'section-2d', title: 'Navigating Section 2(d) Refusals: A Step-by-Step Response Playbook', cat: 'Trademark', date: 'Aug 24, 2026', img: 'assets/images/blog/blog-post-5.jpg' },
        { id: 'design-patents', title: 'Industrial Design Patents vs. Copyright for Hardware Startups', cat: 'Industrial Design', date: 'Sep 02, 2026', img: 'assets/images/blog/blog-post-4.jpg' }
      ],
      sidebarCtaTitle: 'Expanding Internationally?',
      sidebarCtaText: 'Have our international IP treaty counsel design a cost-optimized Madrid Protocol vs. direct filing road-map.',
      sidebarCtaBtn: 'Book International Review',
      bottomCtaTitle: 'Protect Your Brand Across 130+ Treaty Partner Nations',
      bottomCtaText: 'We structure global trademark portfolios utilizing Madrid Protocol extensions, Paris Convention 6-month priority claims, and direct national foreign filings.'
    },

    'trade-secrets': {
      id: 'trade-secrets',
      title: 'Trade Secrets in the Era of Remote Engineering Teams',
      category: 'Corporate Governance & Startup IP',
      badge: 'Trade Secret Shield',
      date: 'September 15, 2026',
      readTime: '7 Min Read',
      author: 'Eliza Vance, Managing Partner',
      authorRole: 'Managing Partner at LexVanguard, Specializing in High-Stakes IP Transactions and Trade Secret Defense.',
      authorImg: 'assets/images/team/attorney-1.jpg',
      heroBg: 'assets/images/hero/hero-bg-maintenance.jpg',
      mainImg: 'assets/images/blog/blog-post-3.jpg',
      mainImgAlt: 'Cybersecurity Vault and Encrypted Trade Secret Shield for Remote Teams',
      takeaway: 'Unlike patents—which require public disclosure of your source code and technical architecture—trade secrets provide perpetual protection without statutory expiration. However, under the Defend Trade Secrets Act (DTSA) and Uniform Trade Secrets Act (UTSA), protection is immediately extinguished if the company fails to prove it took "reasonable measures" under the circumstances to preserve confidentiality.',
      section1Title: '1. The "Reasonable Measures" Evidentiary Burden',
      section1Html: `
        <p class="text-secondary">
          In high-stakes trade secret misappropriation litigation, defendant ex-employees rarely argue that the stolen source code or customer pricing models lacked commercial value. Instead, their primary defense is almost always: <em>"The company did not take reasonable measures to maintain secrecy, and therefore no statutory trade secret exists."</em>
        </p>
        <p class="text-secondary">
          With distributed engineering teams spanning multiple home Wi-Fi networks, personal GitHub repositories, and AI coding assistants, standard non-disclosure agreements (NDAs) are no longer sufficient to meet the evidentiary standard in federal courts.
        </p>
      `,
      quote: 'A trade secret is only as defensible as the operational rigor used to protect it. A single slip in access control or code repository hygiene can extinguish a multi-billion dollar intangible asset overnight.',
      quoteAuthor: 'LexVanguard Trade Secret Enforcement Group',
      section2Title: '2. Deconstructing the Remote Engineering Vulnerability Stack',
      section2Html: `
        <p class="text-secondary">
          Judges examining trade secret misappropriation claims under 18 U.S.C. &sect; 1836 look for demonstrable layers of administrative, legal, and technical safeguards:
        </p>
        <ul class="text-secondary mb-4">
          <li class="mb-2"><strong>Role-Based Access Control (RBAC):</strong> Engineers should only have access to the specific repositories and microservices necessary for their immediate sprints, rather than blanket root access to the entire company codebase.</li>
          <li class="mb-2"><strong>AI Assistant & LLM Policy:</strong> Strict technical bans on pasting proprietary algorithms, database schemas, or customer lists into commercial public AI model training windows.</li>
          <li class="mb-2"><strong>Automated Departure Forensic Audits:</strong> Instant automated revocation of credentials, SSH keys, and cloud tokens the second notice of resignation is given.</li>
        </ul>
      `,
      tableHeaders: ['Security Dimension', 'Weak Practice (Loses Court Protection)', 'Defensible Practice (Wins DTSA Damages)'],
      tableRows: [
        ['Contractual Notice', 'Generic boilerplate NDA signed on day 1 with no subsequent training.', 'Specific Proprietary Information Agreements (PIIA) with explicit DTSA immunity notice clauses and annual renewals.'],
        ['Code Repository Access', 'All 50 developers have full read/write access to root production codebase.', 'Segmented microservice repositories; confidential core algorithms stored in air-gapped repositories with mandatory 2FA.'],
        ['Hardware Policies', 'BYOD (Bring Your Own Device) with no mobile device management (MDM).', 'Company-issued laptops with encrypted drives (FileVault/BitLocker), MDM software, and blocked USB external export.'],
        ['Departure Protocols', 'Informal exit chat; laptop returned a week later via mail with no forensic snapshot.', 'Forensic snapshot of local drive; signed exit certification affirming return and deletion of all copies.']
      ],
      section3Title: '3. Tactical Blueprint for Remote Startup IP Governance',
      section3Html: `
        <p class="text-secondary">
          To ensure your proprietary formulas, algorithms, and pricing matrices withstand litigation scrutiny:
        </p>
        <ol class="text-secondary mb-4">
          <li class="mb-3">
            <strong>Audit Trade Secret Classifications Bi-Annually:</strong> Maintain an internal confidential docket indexing your top proprietary assets (e.g., matching algorithms, proprietary training weights, vendor cost tables).
          </li>
          <li class="mb-3">
            <strong>Implement Defend Trade Secrets Act (DTSA) Whistleblower Notice:</strong> Under 18 U.S.C. &sect; 1833(b), failing to include the statutory whistleblower immunity notice in your employee agreements forfeits your right to recover punitive damages and attorney fees in federal court.
          </li>
          <li>
            <strong>Pair Trade Secrets with Defensive Patents:</strong> Protect customer-facing interfaces with utility patents while keeping back-end training pipelines and server-side heuristics guarded as strict trade secrets.
          </li>
        </ol>
      `,
      takeaways: [
        { icon: 'bi-shield-lock-fill', title: 'RBAC is Legally Mandated', desc: 'Restricting source code access on a need-to-know basis is the #1 proof factor judges cite when granting trade secret injunctions.' },
        { icon: 'bi-laptop', title: 'Enforce MDM & Remote Wipe', desc: 'Company-managed devices with remote wipe capabilities prevent departing staff from taking local backups.' },
        { icon: 'bi-file-earmark-lock', title: 'Include DTSA Immunity Clauses', desc: 'Omitting statutory whistleblower immunity clauses in contractor NDAs strips your company of treble damages.' }
      ],
      related: [
        { id: 'open-source', title: 'Open-Source Software & Commercial IP: Mitigating License Contamination', cat: 'Software', date: 'Aug 10, 2026', img: 'assets/images/blog/blog-post-6.jpg' },
        { id: 'ai-inventorship', title: 'AI-Generated Inventions and the Human Inventorship Standard', cat: 'Patent Law', date: 'Oct 12, 2026', img: 'assets/images/blog/blog-post-1.jpg' },
        { id: 'design-patents', title: 'Industrial Design Patents vs. Copyright for Hardware Startups', cat: 'Industrial Design', date: 'Sep 02, 2026', img: 'assets/images/blog/blog-post-4.jpg' }
      ],
      sidebarCtaTitle: 'Auditing Remote IP Risks?',
      sidebarCtaText: 'Have our trade secret litigators conduct a comprehensive confidential DTSA compliance review for your remote workforce.',
      sidebarCtaBtn: 'Book Trade Secret Audit',
      bottomCtaTitle: 'Fortify Your Proprietary Code and Trade Secrets',
      bottomCtaText: 'We structure robust PIIA agreements, vendor NDAs, trade secret identification schedules, and remote engineering security protocols.'
    },

    'design-patents': {
      id: 'design-patents',
      title: 'Industrial Design Patents vs. Copyright for Hardware Startups',
      category: 'Industrial Design & Hague System',
      badge: 'Hardware Architecture',
      date: 'September 02, 2026',
      readTime: '6 Min Read',
      author: 'Dr. Marcus Chen, Ph.D.',
      authorRole: 'Senior Patent Attorney & Head of Computer Science & Robotics Practice at LexVanguard.',
      authorImg: 'assets/images/team/attorney-2.jpg',
      heroBg: 'assets/images/hero/hero-bg-home-2.jpg',
      mainImg: 'assets/images/blog/blog-post-4.jpg',
      mainImgAlt: 'Industrial Hardware CAD Prototype and Ergonomic Design Blueprint',
      takeaway: 'For consumer hardware startups, medical device companies, and consumer electronics brands, visual product appearance is often the primary driver of enterprise valuation. However, founders frequently mistake copyright protection for design patent protection. Under the landmark Star Athletica doctrine, copyright covers only "separable" artistic features, making design patents the sole robust vehicle for protecting physical product silhouettes.',
      section1Title: '1. The Separability Doctrine Under Star Athletica',
      section1Html: `
        <p class="text-secondary">
          Under U.S. copyright law, "useful articles" (items with an intrinsic utilitarian function, like a smart thermostat, ergonomic mouse, or wearable sensor) cannot be copyrighted. The Supreme Court\'s decision in <em>Star Athletica, L.L.C. v. Varsity Brands, Inc.</em>, 137 S. Ct. 1002 (2017) established that copyright only protects two- or three-dimensional design elements if they can be perceived as a work of art separate from the utilitarian aspects of the article.
        </p>
        <p class="text-secondary">
          Because the overall form-factor and ergonomic curves of electronic hardware are inextricably intertwined with their utility, copyright registration will routinely be rejected by the Copyright Office. Design patents, by contrast, are specifically created to protect the ornamental design of a functional item.
        </p>
      `,
      quote: 'If you can visually swap the look of a competitor\'s product with yours in an Amazon search result and deceive an ordinary observer, design patent infringement has occurred, regardless of whether your internal circuit boards differ.',
      quoteAuthor: 'U.S. Court of Appeals for the Federal Circuit, Egyptian Goddess Doctrine',
      section2Title: '2. The Ordinary Observer Test: Egyptian Goddess Standard',
      section2Html: `
        <p class="text-secondary">
          Design patent infringement is determined under the <em>Egyptian Goddess</em> standard: whether an ordinary observer, familiar with the prior art, would find the overall appearance of the accused design substantially the same as the patented design, such that they would be deceived into purchasing one thinking it was the other.
        </p>
        <p class="text-secondary">
          Crucially, under 35 U.S.C. &sect; 289, an owner of an infringed design patent is entitled to recover the <strong>total profit</strong> of the infringer on the article of manufacture—a massive statutory remedy unavailable in standard utility patent disputes.
        </p>
      `,
      tableHeaders: ['Statutory Feature', 'U.S. Design Patent', 'Copyright Registration'],
      tableRows: [
        ['Subject Matter Protected', 'New, original, and ornamental designs for an article of manufacture (physical contours, GUI screens, surface textures).', 'Original works of authorship; separable 2D surface graphics only (cannot protect the shape of a functional gadget).'],
        ['Statutory Term of Protection', '15 years from date of grant (no maintenance fees required).', 'Life of the author + 70 years, or 95 years from publication for corporate works-for-hire.'],
        ['Examination Process & Speed', 'Formal USPTO examination with novelty search (average pendency: 12 to 18 months; expedited Rocket Docket available in 3 months).', 'Fast administrative review by US Copyright Office (3 to 6 months; no prior art examination).'],
        ['Damages & Remedies', 'Total infringer profits (35 U.S.C. 289), reasonable royalty, and automatic Amazon Project Zero brand take-downs.', 'Statutory damages up to $150,000 per willful infringement and attorney fees (if timely registered).']
      ],
      section3Title: '3. Strategic Best Practices for Hardware Startups',
      section3Html: `
        <p class="text-secondary">
          Hardware and consumer brand enterprises should deploy a dual-track filing strategy:
        </p>
        <ol class="text-secondary mb-4">
          <li class="mb-3">
            <strong>File Design Patents Before First Public Disclosure:</strong> Unlike utility patents (which offer a 1-year US grace period), international jurisdictions (Europe, China, Japan) demand absolute novelty. Publicly showing your product at CES or Kickstarter prior to filing invalidates foreign design rights.
          </li>
          <li class="mb-3">
            <strong>Leverage Broken Line Claim Strategy:</strong> Use dashed lines in patent drawings for generic components (ports, screw holes, display bezels) and solid lines solely for your distinctive iconic aesthetic contours.
          </li>
          <li>
            <strong>Use the Hague Agreement for Global Extension:</strong> File a single international design application through WIPO to secure design protection in up to 96 countries simultaneously.
          </li>
        </ol>
      `,
      takeaways: [
        { icon: 'bi-box-seam', title: 'Design Patents Block Amazon Clones', desc: 'Amazon Brand Registry immediately honors design patent numbers to execute automated takedowns of Chinese lookalike clones.' },
        { icon: 'bi-cash-coin', title: 'Total Infringer Profits Remedy', desc: 'Section 289 allows you to confiscate 100% of the knockoff seller\'s gross profits, not merely a standard royalty.' },
        { icon: 'bi-file-earmark-ruled', title: 'Broken Lines Maximize Breadth', desc: 'Drafting drawings with dashed lines disclaims non-essential buttons and locks competitors out of your core aesthetic.' }
      ],
      related: [
        { id: 'ai-inventorship', title: 'AI-Generated Inventions and the Human Inventorship Standard', cat: 'Patent Law', date: 'Oct 12, 2026', img: 'assets/images/blog/blog-post-1.jpg' },
        { id: 'open-source', title: 'Open-Source Software & Commercial IP: Mitigating Contamination', cat: 'Software', date: 'Aug 10, 2026', img: 'assets/images/blog/blog-post-6.jpg' },
        { id: 'dupont-doctrine', title: 'Navigating Likelihood-of-Confusion Refusals: The 2026 DuPont Doctrine', cat: 'Trademark', date: 'Oct 15, 2026', img: 'assets/images/blog/trademark-infringement.jpg' }
      ],
      sidebarCtaTitle: 'Launching Hardware or Packaging?',
      sidebarCtaText: 'Our design patent group prepares 7-view orthographic drawings and executes Hague international filings.',
      sidebarCtaBtn: 'Book Design Patent Consultation',
      bottomCtaTitle: 'Protect Your Product Contours and Industrial Aesthetic',
      bottomCtaText: 'We prepare precision design patent applications for consumer electronics, luxury accessories, medical equipment, and graphical user interfaces.'
    },

    'section-2d': {
      id: 'section-2d',
      title: 'Navigating Section 2(d) Refusals: A Step-by-Step Response Playbook',
      category: 'Trademark Office Action Defense',
      badge: 'Litigation Playbook',
      date: 'August 24, 2026',
      readTime: '8 Min Read',
      author: 'Marcus Sterling, J.D.',
      authorRole: 'Senior Brand Prosecution Counsel & Former TTAB Litigator at LexVanguard.',
      authorImg: 'assets/images/team/attorney-lead.jpg',
      heroBg: 'assets/images/hero/hero-bg-services.jpg',
      mainImg: 'assets/images/blog/blog-post-5.jpg',
      mainImgAlt: 'Legal Gavel and Trademark Gazette Documents on Walnut Table for Section 2d Office Action',
      takeaway: 'Receiving a substantive Section 2(d) Likelihood of Confusion refusal from a USPTO examining attorney is stressful, but it represents the beginning of legal negotiation—not a final death sentence. With statutory 3-month response windows, strategic trademark counsel leverages targeted goods narrowing, crowded-field dilution evidence, and formal consent agreements to overturn refusals in over 70% of docketed cases.',
      section1Title: '1. Anatomy of a Section 2(d) Refusal Letter',
      section1Html: `
        <p class="text-secondary">
          When the USPTO issues an Office Action citing Section 2(d), the examining attorney identifies one or more prior registered marks (or pending applications with earlier filing dates) that they believe would cause confusion with your mark.
        </p>
        <p class="text-secondary">
          Under the revised 2024–2026 USPTO Examination Rules, applicants have strictly <strong>3 months</strong> (with an optional 3-month extension for an official government fee) to submit a formal legal response. Failing to respond by the deadline results in immediate statutory abandonment of the application.
        </p>
      `,
      quote: 'The examining attorney is not an adversary; they are a government examiner applying mechanical guidelines. If you feed them the evidentiary record and legal rationale that satisfies their internal manual (TMEP), they will withdraw the refusal.',
      quoteAuthor: 'Marcus Sterling, J.D., Former Trademark Litigation Counsel',
      section2Title: '2. The 4-Tier Defense Escalation Hierarchy',
      section2Html: `
        <p class="text-secondary">
          Experienced trademark practitioners evaluate refusals across four progressive tiers of defense:
        </p>
        <ul class="text-secondary mb-4">
          <li class="mb-2"><strong>Tier 1: Semantic & Commercial Impression Contrast:</strong> Demonstrating through linguistic analysis that while the words share letters, their connotations in the marketplace are completely distinct (e.g., "APPLE" for records vs. computers).</li>
          <li class="mb-2"><strong>Tier 2: Restricting Identification Clauses:</strong> Eliminating overlapping terminology in Class 9, 35, or 42 descriptions to sever commercial contact channels.</li>
          <li class="mb-2"><strong>Tier 3: Crowded Field & Third-Party Coexistence:</strong> Proving that the cited mark is weak because dozens of other entities already coexist with the same root term in the registry.</li>
          <li class="mb-2"><strong>Tier 4: Coexistence & Consent Agreements:</strong> Approaching the cited owner to negotiate a formal written consent agreement under TMEP 1207.01(d)(viii).</li>
        </ul>
      `,
      tableHeaders: ['Examiner Argument', 'Legal Rebuttal Strategy', 'Key Evidentiary Exhibits'],
      tableRows: [
        ['"Marks are phonetically identical"', 'Argue visual design dominance and distinct packaging typography under DuPont 1.', 'Side-by-side logo specimens showing distinct font geometry and brand heraldry.'],
        ['"Both entities offer software in Class 42"', 'Distinguish specialized B2B industrial algorithms from consumer mobile apps under DuPont 2.', 'Customer procurement contracts, pricing comparisons ($50k vs $5/mo), and channel audits.'],
        ['"Goods travel in common trade channels"', 'Showcase segregated distribution (direct enterprise sales vs retail shelves) under DuPont 3.', 'Screenshots of restricted login enterprise portals vs public App Store links.'],
        ['"Cited mark is entitled to broad protection"', 'Produce active trademark register audits showing 12+ coexisting marks with identical prefix/suffix.', 'USPTO TSDR docket printouts showing marks coexisting without confusion.']
      ],
      section3Title: '3. What NOT to Do When Responding to an Office Action',
      section3Html: `
        <p class="text-secondary">
          Avoid these common pitfalls that guarantee a Final Refusal:
        </p>
        <ol class="text-secondary mb-4">
          <li class="mb-3">
            <strong>Never Attack the Validity of the Cited Mark:</strong> An examining attorney has no jurisdiction to invalidate a prior registered mark. Arguing that the cited mark is descriptive or shouldn\'t have been granted will immediately be rejected.
          </li>
          <li class="mb-3">
            <strong>Avoid Mere Argument Without Evidence:</strong> Bare attorney argument carries virtually zero weight. You must attach third-party registry printouts, dictionary definitions, and marketing channel specimens to the official TEAS response.
          </li>
          <li>
            <strong>Do Not File an Incomplete Response:</strong> Ensure every single procedural issue (disclaimers, entity status, specimen queries) is addressed alongside the substantive 2(d) refusal.
          </li>
        </ol>
      `,
      takeaways: [
        { icon: 'bi-clock-history', title: 'Mind the 3-Month Clock', desc: 'Missing the response deadline causes automatic abandonment. Request a 3-month extension early if negotiating consent.' },
        { icon: 'bi-paperclip', title: 'Evidence Trumps Rhetoric', desc: 'Attaching third-party registration printouts and pricing disparity evidence is essential to flip the examiner.' },
        { icon: 'bi-pen', title: 'Consider TTAB Appeal if Finalized', desc: 'If an examiner issues a Final Refusal, a Request for Reconsideration and Notice of Appeal to the TTAB preserves rights.' }
      ],
      related: [
        { id: 'dupont-doctrine', title: 'Navigating Likelihood-of-Confusion Refusals: The 2026 DuPont Doctrine', cat: 'Trademark', date: 'Oct 15, 2026', img: 'assets/images/blog/article-deepdive.jpg' },
        { id: 'madrid-protocol', title: 'Madrid Protocol vs. Direct National Trademark Filings', cat: 'International', date: 'Sep 28, 2026', img: 'assets/images/blog/blog-post-2.jpg' },
        { id: 'open-source', title: 'Open-Source Software & Commercial IP: Mitigating Contamination', cat: 'Software', date: 'Aug 10, 2026', img: 'assets/images/blog/blog-post-6.jpg' }
      ],
      sidebarCtaTitle: 'Office Action Deadline Approaching?',
      sidebarCtaText: 'Our trademark attorneys analyze the cited registration and draft comprehensive, precedential TEAS responses.',
      sidebarCtaBtn: 'Analyze My Refusal',
      bottomCtaTitle: 'Turn Your Office Action Refusal Into an Official Registration',
      bottomCtaText: 'We prepare evidence-backed responses, negotiate coexistence carve-outs, and defend marks before the Trademark Trial and Appeal Board.'
    },

    'open-source': {
      id: 'open-source',
      title: 'Open-Source Software & Commercial IP: Mitigating License Contamination',
      category: 'Software Copyright & Licensing',
      badge: 'SaaS IP Governance',
      date: 'August 10, 2026',
      readTime: '7 Min Read',
      author: 'Dr. Tariq Al-Mansoor, CTO',
      authorRole: 'Technical Advisor & Software IP Specialist at LexVanguard.',
      authorImg: 'assets/images/team/client-2.jpg',
      heroBg: 'assets/images/hero/hero-bg-services.jpg',
      mainImg: 'assets/images/blog/blog-post-6.jpg',
      mainImgAlt: 'Computer Source Code on Monitor in Modern Engineering Workspace for Open Source Software IP',
      takeaway: 'Modern software engineering is built on open-source libraries. Over 90% of commercial enterprise applications contain open-source code. However, without strict license governance, integrating copyleft dependencies (such as GPL v2/v3, AGPL, or SSPL) can legally compel a company to publish its proprietary source code publicly or forfeit its copyright infringement enforcement remedies during venture funding due diligence.',
      section1Title: '1. The Spectrum of Open-Source Licenses: Permissive vs. Copyleft',
      section1Html: `
        <p class="text-secondary">
          Software licenses operate on a legal continuum defined by their reciprocity requirements:
        </p>
        <ul class="text-secondary mb-4">
          <li class="mb-2"><strong>Permissive Licenses (MIT, BSD, Apache 2.0):</strong> Permit commercial incorporation, modification, and redistribution in proprietary closed-source binaries with minimal obligations (chiefly retaining copyright notices and disclaimer notices).</li>
          <li class="mb-2"><strong>Weak Copyleft Licenses (LGPL, MPL 2.0):</strong> Allow proprietary linking, but require any modifications directly made to the library itself to remain open source.</li>
          <li class="mb-2"><strong>Strong Copyleft (GPL v2/v3, AGPL):</strong> Require any "derivative work" or statically linked composite program to be distributed entirely under the same open-source terms, making proprietary closed-source licensing illegal.</li>
        </ul>
      `,
      quote: 'In M&A and Series B due diligence, code audit tools like Black Duck scan your entire repository. Finding unquarantined AGPL dependencies in your core revenue engine is the fastest way to slash $20M off your enterprise valuation.',
      quoteAuthor: 'LexVanguard Technology Transactions Group',
      section2Title: '2. The AGPL and Cloud SaaS Conundrum',
      section2Html: `
        <p class="text-secondary">
          Under standard GPL v2, the copyleft trigger is "distribution" of compiled software binaries. For over a decade, SaaS platforms avoided this trigger because software ran entirely on cloud servers and was never physically distributed to the user\'s machine.
        </p>
        <p class="text-secondary">
          The <strong>Affero General Public License (AGPL)</strong> was engineered specifically to close this "SaaS loophole." Under Section 13 of the AGPL, interacting with the software remotely through a computer network triggers mandatory disclosure of the complete source code to all network users.
        </p>
      `,
      tableHeaders: ['Open-Source License', 'SaaS Risk Level', 'Permitted Enterprise Commercial Usage'],
      tableRows: [
        ['MIT / BSD 3-Clause', 'Zero / Negligible', 'Unrestricted commercial use, closed-source bundling, and SaaS hosting with copyright attribution.'],
        ['Apache 2.0', 'Low', 'Safe for enterprise; includes explicit patent license grant and anti-patent retaliation protections.'],
        ['LGPL v3', 'Moderate', 'Safe if dynamically linked via shared DLLs; high risk if compiled into static binary.'],
        ['GPL v3 / AGPL v3', 'Extreme Risk for SaaS', 'Prohibited in proprietary microservices; requires strict clean-room isolation across network REST/gRPC boundaries.']
      ],
      section3Title: '3. Engineering Best Practices for Open-Source Compliance',
      section3Html: `
        <p class="text-secondary">
          To protect enterprise equity and ensure painless investor IP due diligence audits:
        </p>
        <ol class="text-secondary mb-4">
          <li class="mb-3">
            <strong>Implement Automated CI/CD Dependency Scanners:</strong> Integrate automated tools (Snyk, FOSSA, Dependabot) in GitHub Actions to automatically fail pull requests that introduce AGPL or unapproved copyleft packages.
          </li>
          <li class="mb-3">
            <strong>Maintain Architectural Isolation:</strong> If an open-source database or tool under AGPL must be used, isolate it behind independent containerized microservices communicating strictly via network APIs (gRPC/HTTP) rather than in-process library linking.
          </li>
          <li>
            <strong>Register Formal Copyright on Proprietary Modules:</strong> Register federal copyright with the Copyright Office for your core proprietary codebase, submitting redacted source code deposits that shield trade secret algorithms while conferring statutory damages rights.
          </li>
        </ol>
      `,
      takeaways: [
        { icon: 'bi-file-earmark-code-fill', title: 'Automate PR Dependency Scans', desc: 'Block unauthorized copyleft packages in pull requests before contaminated code merges into production.' },
        { icon: 'bi-diagram-2', title: 'Separate via Network APIs', desc: 'Isolating third-party microservices behind network APIs prevents derivative work contagion under copyright law.' },
        { icon: 'bi-shield-check', title: 'Deposit Redacted Code at USCO', desc: 'Federal copyright registration for proprietary code unlocks up to $150,000 statutory damages against code thieves.' }
      ],
      related: [
        { id: 'trade-secrets', title: 'Trade Secrets in the Era of Remote Engineering Teams', cat: 'Trade Secrets', date: 'Sep 15, 2026', img: 'assets/images/blog/blog-post-3.jpg' },
        { id: 'ai-inventorship', title: 'AI-Generated Inventions and the Human Inventorship Standard', cat: 'Patent Law', date: 'Oct 12, 2026', img: 'assets/images/blog/blog-post-1.jpg' },
        { id: 'section-2d', title: 'Navigating Section 2(d) Refusals: A Step-by-Step Response Playbook', cat: 'Trademark', date: 'Aug 24, 2026', img: 'assets/images/blog/blog-post-5.jpg' }
      ],
      sidebarCtaTitle: 'Preparing for Tech Due Diligence?',
      sidebarCtaText: 'Have our software IP team perform an open-source license audit and clean-room remediation before your next round.',
      sidebarCtaBtn: 'Request Code Audit',
      bottomCtaTitle: 'Safeguard Your Proprietary Codebase & Software Copyrights',
      bottomCtaText: 'We help SaaS platforms, AI startups, and enterprise tech companies audit open-source licenses, execute clean-room isolation, and secure copyright registrations.'
    }
  };

  /**
   * Render Article into DOM
   */
  function renderArticle(articleId) {
    const article = ARTICLES_DATA[articleId] || ARTICLES_DATA['dupont-doctrine'];
    if (!article) return;

    // 1. Page Title
    document.title = article.title + ' — LexVanguard Insights';

    // 2. Breadcrumb
    const bcCatEl = document.getElementById('article-breadcrumb-category');
    if (bcCatEl) bcCatEl.textContent = article.category;

    // 3. Hero Header
    const heroBgEl = document.getElementById('article-hero-bg');
    if (heroBgEl && article.heroBg) heroBgEl.src = article.heroBg;

    const catBadgeEl = document.getElementById('article-category-badge');
    if (catBadgeEl) catBadgeEl.textContent = article.category;

    const titleEl = document.getElementById('article-title');
    if (titleEl) titleEl.textContent = article.title;

    const authorEl = document.getElementById('article-author');
    if (authorEl) authorEl.innerHTML = `<i class="bi bi-person-circle text-accent me-1"></i> ${article.author}`;

    const dateEl = document.getElementById('article-date');
    if (dateEl) dateEl.innerHTML = `<i class="bi bi-calendar-check text-accent me-1"></i> ${article.date}`;

    const readTimeEl = document.getElementById('article-read-time');
    if (readTimeEl) readTimeEl.innerHTML = `<i class="bi bi-clock text-accent me-1"></i> ${article.readTime}`;

    // 4. Main Featured Image
    const mainImgEl = document.getElementById('article-featured-img');
    if (mainImgEl && article.mainImg) {
      mainImgEl.src = article.mainImg;
      if (article.mainImgAlt) mainImgEl.alt = article.mainImgAlt;
    }

    // 5. Executive Takeaway
    const takeawayEl = document.getElementById('article-takeaway-text');
    if (takeawayEl) takeawayEl.textContent = article.takeaway;

    // 6. Section 1
    const sec1TitleEl = document.getElementById('article-sec1-title');
    if (sec1TitleEl) sec1TitleEl.textContent = article.section1Title;

    const sec1BodyEl = document.getElementById('article-sec1-body');
    if (sec1BodyEl) sec1BodyEl.innerHTML = article.section1Html;

    // 7. Quote
    const quoteTextEl = document.getElementById('article-quote-text');
    if (quoteTextEl) quoteTextEl.textContent = `"${article.quote}"`;

    const quoteAuthEl = document.getElementById('article-quote-author');
    if (quoteAuthEl) quoteAuthEl.textContent = `— ${article.quoteAuthor}`;

    // 8. Section 2
    const sec2TitleEl = document.getElementById('article-sec2-title');
    if (sec2TitleEl) sec2TitleEl.textContent = article.section2Title;

    const sec2BodyEl = document.getElementById('article-sec2-body');
    if (sec2BodyEl) sec2BodyEl.innerHTML = article.section2Html;

    // 9. Comparison Table
    const tableHeaderEl = document.getElementById('article-table-header');
    if (tableHeaderEl && article.tableHeaders) {
      tableHeaderEl.innerHTML = `<tr>${article.tableHeaders.map(h => `<th>${h}</th>`).join('')}</tr>`;
    }

    const tableBodyEl = document.getElementById('article-table-body');
    if (tableBodyEl && article.tableRows) {
      tableBodyEl.innerHTML = article.tableRows.map(row => `
        <tr>
          <td><strong>${row[0]}</strong></td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
        </tr>
      `).join('');
    }


    // 11. Section 3
    const sec3TitleEl = document.getElementById('article-sec3-title');
    if (sec3TitleEl) sec3TitleEl.textContent = article.section3Title;

    const sec3BodyEl = document.getElementById('article-sec3-body');
    if (sec3BodyEl) sec3BodyEl.innerHTML = article.section3Html;

    // 12. Author Bio Card
    const authorCardImgEl = document.getElementById('article-author-card-img');
    if (authorCardImgEl && article.authorImg) {
      authorCardImgEl.src = article.authorImg;
      authorCardImgEl.alt = article.author;
    }

    const authorCardNameEl = document.getElementById('article-author-card-name');
    if (authorCardNameEl) authorCardNameEl.textContent = `Written by ${article.author}`;

    const authorCardBioEl = document.getElementById('article-author-card-bio');
    if (authorCardBioEl) authorCardBioEl.textContent = article.authorRole;

    // 13. Sidebar Consultation Widget
    const sideCtaTitleEl = document.getElementById('article-sidebar-cta-title');
    if (sideCtaTitleEl) sideCtaTitleEl.textContent = article.sidebarCtaTitle;

    const sideCtaTextEl = document.getElementById('article-sidebar-cta-text');
    if (sideCtaTextEl) sideCtaTextEl.textContent = article.sidebarCtaText;

    const sideCtaBtnEl = document.getElementById('article-sidebar-cta-btn');
    if (sideCtaBtnEl) sideCtaBtnEl.textContent = article.sidebarCtaBtn;

    // 14. Key Takeaways (3 Cards)
    const takeawaysGridEl = document.getElementById('article-takeaways-grid');
    if (takeawaysGridEl && article.takeaways) {
      takeawaysGridEl.innerHTML = article.takeaways.map(t => `
        <div class="col-md-4">
          <div class="stat-box h-100 text-start">
            <i class="bi ${t.icon} text-accent fs-3 mb-2 d-block"></i>
            <h5 class="fw-bold mb-2">${t.title}</h5>
            <p class="small text-secondary mb-0">${t.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 15. Related Articles Grid (3 Cards)
    const relatedGridEl = document.getElementById('article-related-grid');
    if (relatedGridEl && article.related) {
      relatedGridEl.innerHTML = article.related.map(r => `
        <div class="col-md-4">
          <div class="blog-card h-100 d-flex flex-column">
            <div class="blog-card-img">
              <img src="${r.img}" alt="${r.title}">
              <span class="blog-card-category">${r.cat}</span>
            </div>
            <div class="blog-card-body d-flex flex-column flex-grow-1">
              <h5 class="blog-card-title">
                <a href="blog-details.html?post=${r.id}">${r.title}</a>
              </h5>
              <div class="text-muted small mb-2"><i class="bi bi-calendar3 me-1"></i> ${r.date}</div>
              <a href="blog-details.html?post=${r.id}" class="ip-card-link small mt-auto">Read Article <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 16. Bottom CTA Section
    const btmCtaTitleEl = document.getElementById('article-bottom-cta-title');
    if (btmCtaTitleEl) btmCtaTitleEl.textContent = article.bottomCtaTitle;

    const btmCtaTextEl = document.getElementById('article-bottom-cta-text');
    if (btmCtaTextEl) btmCtaTextEl.textContent = article.bottomCtaText;
  }

  /**
   * Parse active post key from URL query or hash
   */
  function getActivePostKey() {
    const params = new URLSearchParams(window.location.search);
    const postQuery = params.get('post') || params.get('article');
    if (postQuery && ARTICLES_DATA[postQuery.toLowerCase()]) {
      return postQuery.toLowerCase();
    }

    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash && ARTICLES_DATA[hash]) {
      return hash;
    }

    return 'dupont-doctrine';
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    const currentPost = getActivePostKey();
    renderArticle(currentPost);

    // Support browser back/forward buttons
    window.addEventListener('popstate', function () {
      const postKey = getActivePostKey();
      renderArticle(postKey);
    });

    // Delegate clicks on internal related article links for seamless client-side transition
    document.addEventListener('click', function (e) {
      const link = e.target.closest('a[href*="blog-details.html?post="]');
      if (link) {
        const url = new URL(link.href, window.location.origin);
        const postParam = url.searchParams.get('post');
        if (postParam && ARTICLES_DATA[postParam]) {
          e.preventDefault();
          window.history.pushState({ post: postParam }, '', `blog-details.html?post=${postParam}`);
          renderArticle(postParam);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

})();
