/**
 * LEXVANGUARD — Dynamic Multi-Practice Service Details Controller
 * Enables seamless client-side switching between all 6 core IP practice areas.
 */
(function () {
  'use strict';

  const SERVICES_DATA = {
    trademark: {
      key: 'trademark',
      name: 'Trademark Registration & Docketing',
      shortName: 'Trademark Registration',
      icon: 'bi-r-circle',
      badge: 'Core Practice — Brand Governance',
      heroTitle: 'Trademark Search & Federal Registration',
      heroDesc: 'Secure the exclusive statutory right to your commercial name, logo, packaging, or slogan. We handle full conflict clearance, Class 1–45 goods drafting, and official trademark office prosecution across USPTO, EUIPO, UKIPO, and WIPO.',
      heroCtaText: 'Start Trademark Clearance',
      scopeBadge: 'Comprehensive Scope',
      scopeTitle: 'The Foundation of Commercial Brand Ownership',
      scopeLead: 'A registered trademark transforms your brand identity from an unprotected marketing concept into an enforceable legal monopoly.',
      scopeDesc: 'Without formal registration with the USPTO, EUIPO, or UKIPO, your business relies solely on fragile "common law" geographic rights. Federal registration confers a nationwide legal presumption of ownership, blocking competitors from adopting confusingly similar marks across all 50 states and international treaty partner nations.',
      callout1Title: 'Section 1(a) — Use in Commerce',
      callout1Desc: 'For marks currently used in commerce across state lines or international trade, filed with validated specimens of use.',
      callout2Title: 'Section 1(b) — Intent-to-Use (ITU)',
      callout2Desc: 'Reserve nationwide priority for your brand before your product launches, locking down your filing date early.',
      inclusions: [
        'Exhaustive Multi-Tier Clearance Search',
        'Attorney Likelihood-of-Confusion Opinion',
        'Nice International Classification Specification',
        'Specimen Review & Audit Compliance',
        'Direct Government Electronic Submission',
        'Procedural Office Action Response Filing'
      ],
      profilesTitle: 'Who Requires Comprehensive Trademark Filing?',
      profilesDesc: 'Federal trademark protection is essential for any enterprise investing capital in customer acquisition and brand equity.',
      profiles: [
        { icon: 'bi-cart-check-fill', title: 'E-Commerce & Amazon', desc: 'Amazon Brand Registry 2.0 requires an active or pending registered trademark. Unlock Project Zero counterfeit protections and A+ Content.' },
        { icon: 'bi-laptop-fill', title: 'SaaS & Tech Platforms', desc: 'Prevent competing platforms from launching confusion-inducing software names, app store clones, or purchasing your brand keywords in PPC.' },
        { icon: 'bi-box2-heart-fill', title: 'Consumer Goods (CPG)', desc: 'National wholesale distributors (Target, Walmart, Whole Foods) require proof of federal trademark registration before granting shelf space.' },
        { icon: 'bi-shop-window', title: 'Franchises & Chains', desc: 'Franchise Disclosure Documents (FDD) legally mandate registered trademarks to license brand operations to regional franchisees.' }
      ],
      rightsTitle: 'Conferred Legal Rights of the Registered \u00AE Symbol',
      rightsLead: 'Using the coveted circle-R symbol legally notifies the public that your mark is recorded on the Principal Register.',
      rights: [
        { icon: 'bi-bank', title: 'Federal Court Jurisdiction & Treble Damages', desc: 'Direct standing to sue infringers in U.S. Federal Court with eligibility to recover infringer profits and triple statutory damages.' },
        { icon: 'bi-shield-lock', title: 'Customs & Border Protection (CBP) Recordation', desc: 'Record your registration with border authorities to intercept and seize counterfeit imported merchandise before reaching domestic markets.' },
        { icon: 'bi-globe', title: 'International Treaty Priority (Madrid Protocol)', desc: 'Use your home application to obtain international trademark protection in up to 130 countries via a single WIPO filing.' }
      ],
      checklistTitle: 'Client Preparation Checklist',
      checklistSubtitle: 'To expedite your trademark filing, our team will review the following details during onboarding:',
      checklist: [
        { label: '1. Mark Representation', desc: 'Standard character wordmark, or high-resolution vector/PNG logo file.' },
        { label: '2. Owner Legal Entity', desc: 'Legal entity name, state of incorporation (e.g., Delaware LLC), or individual owner citizenship.' },
        { label: '3. Goods / Services List', desc: 'Clear explanation of what products or commercial services are sold under the mark.' },
        { label: '4. Specimen of Use (For 1(a) filings)', desc: 'Unedited photos of labels, packaging, product tags, or live checkout screenshots showing the mark with price.' }
      ],
      lifecycleTitle: 'The Trademark Registration Lifecycle',
      lifecycleDesc: 'Understanding each statutory milestone from clearance search to official registration certificate.',
      lifecycle: [
        { step: 1, title: 'Stage 1: Clearance Search & Attorney Opinion', desc: 'We conduct an in-depth audit across federal databases, state registries, common law domains, and trademark gazettes to flag potential likelihood-of-confusion conflicts.' },
        { step: 2, title: 'Stage 2: Application Drafting & Class Specification', desc: 'Drafting precise Nice Class descriptions to ensure maximum statutory coverage without overbreadth rejections. Client approves draft prior to docketing.' },
        { step: 3, title: 'Stage 3: Official Electronic Filing & Serial Number', desc: 'Direct electronic submission through the national registry portal. Serial number and official filing receipt are issued immediately, locking your priority date.' },
        { step: 4, title: 'Stage 4: Government Examining Attorney Review', desc: 'The application is assigned to an examining attorney. If procedural queries arise, LexVanguard prepares and files formal legal responses.' },
        { step: 5, title: 'Stage 5: Publication for Opposition & Certificate Issuance', desc: 'The mark is published in the Official Gazette for a 30-day public opposition window. Once cleared, the official Certificate of Registration is issued.' }
      ],
      faqsTitle: 'Frequently Asked Questions on Trademark Filing',
      faqsDesc: 'Answers to key procedural and legal questions regarding trademark protection.',
      faqs: [
        { q: 'What is the difference between \u2122 and \u00AE?', a: 'The \u2122 symbol can be used by anyone claiming common law rights in a brand name, without any official registration. The \u00AE circle-R symbol may ONLY be legally used after the government trademark office has officially issued a Certificate of Registration.' },
        { q: 'How long does trademark registration take?', a: 'Statutory government processing timelines vary. In the United States (USPTO), examination currently begins around 8 to 11 months after filing, with complete registration taking 12 to 15 months on average. EUIPO and UKIPO examinations typically proceed faster (3 to 6 months if no oppositions).' },
        { q: 'What happens if another party opposes my mark?', a: 'If an opposition is filed during the 30-day publication window, our trademark litigators review the opposer\'s grounds, negotiate coexistence agreements or carve-outs, or defend your application before the Trademark Trial and Appeal Board (TTAB).' },
        { q: 'Can I register a trademark internationally through a single filing?', a: 'Yes. Once your base application is filed with the USPTO or your home registry, we can file an international Madrid Protocol application through WIPO, designating up to 130 countries in a single filing with unified renewal deadlines.' }
      ],
      specialistName: 'Marcus Sterling, J.D.',
      specialistRole: 'Senior Brand Prosecution Counsel',
      specialistExp: '18+ years USPTO & WIPO docketing experience',
      formHeading: 'Schedule a Dedicated Trademark Review',
      formPlaceholder: 'e.g. Apex Innovations',
      heroImg: 'assets/images/services/trademark-docket.jpg',
      heroImgAlt: 'Official Registered Trademark Certificate with UKIPO Embossed Gold Crest and Binder',
      scopeImg: 'assets/images/services/registered-mark-seal.jpg',
      scopeImgAlt: 'Official Trademark Seal and Registration Certificate',
      checklistImg: 'assets/images/services/checklist-review.jpg',
      checklistImgAlt: 'Trademark Client Preparation and Specimen Checklist Review'
    },

    clearance: {
      key: 'clearance',
      name: 'Comprehensive Clearance Search',
      shortName: 'Clearance Search',
      icon: 'bi-search',
      badge: 'Pre-Filing Risk Mitigation — Clearance',
      heroTitle: 'Exhaustive Trademark Clearance & Conflict Audit',
      heroDesc: 'Eliminate costly rebrands and infringement lawsuits before committing capital. We perform phonetic, visual, and conceptual multi-database audits across federal registers, state corporate filings, and common-law commerce.',
      heroCtaText: 'Request Clearance Search',
      scopeBadge: 'Pre-Filing Audit',
      scopeTitle: 'Mitigate Legal & Financial Risk Before Investing Capital',
      scopeLead: 'Over 85% of trademark office refusals stem from conflicting prior marks that could have been identified prior to submission.',
      scopeDesc: 'A comprehensive clearance search analyzes federal registered marks, pending applications, common-law commercial use, domain registrations, social media handles, and state business registries. Our legal opinion provides actionable likelihood-of-confusion risk scoring before you print packaging or launch advertising campaigns.',
      callout1Title: 'Phonetic & Visual Similarity Matrix',
      callout1Desc: 'Evaluates sound-alike marks, translations, anagrams, and optical logo likenesses under Polaroid and DuPont evidentiary standards.',
      callout2Title: 'Common Law Commerce Screening',
      callout2Desc: 'Detects unregistered regional businesses with senior geographic common law priority that could enjoin your national rollout.',
      inclusions: [
        'Federal USPTO & WIPO International Database Search',
        'All 50 US State Business Entity & Trademark Registry Audit',
        'Common-Law Commercial Use & Domain Name Screening',
        '10-Point DuPont Likelihood-of-Confusion Risk Scoring',
        'Formal Attorney Clearance Opinion Letter',
        'Recommended Alternative Mark Variations & Nice Classes'
      ],
      profilesTitle: 'Who Needs a Comprehensive Clearance Search?',
      profilesDesc: 'Crucial for any company investing in naming, branding, rebranding, or market expansion.',
      profiles: [
        { icon: 'bi-arrow-repeat', title: 'Corporate Rebrands', desc: 'Companies executing expensive corporate rebranding where post-launch trademark disputes would cause catastrophic financial losses.' },
        { icon: 'bi-rocket-takeoff-fill', title: 'Funded Startups', desc: 'Startups preparing for seed or venture capital rounds where clean intellectual property title is an institutional diligence requirement.' },
        { icon: 'bi-globe-americas', title: 'Global Exporters', desc: 'Businesses entering European, UK, or Asian markets that require verification against regional marks and confusing phonetic translations.' },
        { icon: 'bi-megaphone-fill', title: 'Marketing & Ad Agencies', desc: 'Creative agencies delivering naming deliverables to enterprise clients who require attorney-backed clearance signoffs.' }
      ],
      rightsTitle: 'Strategic Benefits of Formal Clearance Searches',
      rightsLead: 'A professional clearance opinion acts as both an operational roadmap and a legal shield.',
      rights: [
        { icon: 'bi-shield-check', title: 'Willful Infringement Defense Shield', desc: 'Demonstrates good faith reliance on legal counsel, shielding your company from punitive treble damages in subsequent trademark disputes.' },
        { icon: 'bi-cash-coin', title: 'Avoid Sunk Packaging & Tooling Costs', desc: 'Discover conflicts before expending hundreds of thousands of dollars on physical molds, domain acquisitions, and marketing collateral.' },
        { icon: 'bi-speedometer2', title: 'Accelerated Government Approval', desc: 'Applications filed following thorough clearance audits experience a 70% lower rate of substantive Section 2(d) office actions.' }
      ],
      checklistTitle: 'Clearance Onboarding Checklist',
      checklistSubtitle: 'To initiate an exhaustive clearance audit, provide our analysts with:',
      checklist: [
        { label: '1. Proposed Mark Name(s)', desc: 'Exact wording, alternate spellings, or stylized font choices you are considering.' },
        { label: '2. Core Commercial Products', desc: 'Detailed breakdown of the exact goods sold or services rendered under the mark.' },
        { label: '3. Target Geographic Markets', desc: 'Primary target country jurisdictions (e.g. United States, European Union, United Kingdom, Canada).' },
        { label: '4. Known Competitors', desc: 'Names of existing industry competitors operating in the same market vertical.' }
      ],
      lifecycleTitle: 'The Clearance Audit Workflow',
      lifecycleDesc: 'From database query formulation to comprehensive legal risk opinion delivery.',
      lifecycle: [
        { step: 1, title: 'Stage 1: Search Query & Synonym Formulation', desc: 'Our analysts formulate Boolean and phonetic search algorithms to capture sound-alikes, truncations, and multilingual equivalents.' },
        { step: 2, title: 'Stage 2: Federal & International Registry Query', desc: 'Exhaustive interrogation of USPTO, EUIPO, UKIPO, and WIPO Madrid databases across related Nice Classification groups.' },
        { step: 3, title: 'Stage 3: Common-Law & Digital Footprint Audit', desc: 'Screening state corporate databases, domain registrations, major marketplaces, and specialized industry directories.' },
        { step: 4, title: 'Stage 4: Attorney Risk Grading & Legal Analysis', desc: 'A senior trademark attorney evaluates retrieved marks against statutory DuPont likelihood-of-confusion factors.' },
        { step: 5, title: 'Stage 5: Clearance Opinion Letter Delivery', desc: 'You receive a detailed written report with risk ratings (Low, Moderate, High) and strategic recommendations for safe filing.' }
      ],
      faqsTitle: 'Frequently Asked Questions on Clearance Searches',
      faqsDesc: 'Key insights into clearance depth, common law rights, and risk interpretation.',
      faqs: [
        { q: 'Why isn\'t a simple Google search or USPTO TESS search sufficient?', a: 'Basic text searches miss sound-alike marks (e.g., "Klear" vs "Clear"), foreign language equivalents, stylized logos, and related-class conflicts that government examiners cite under Section 2(d) likelihood of confusion.' },
        { q: 'What is "Common Law" trademark priority?', a: 'In the United States, rights arise from actual use in commerce, not just registration. An unregistered business using a mark locally can stop a federal applicant in their geographic territory, which only our comprehensive search detects.' },
        { q: 'How fast is a clearance search completed?', a: 'Our standard comprehensive clearance search and attorney opinion letter is delivered within 3 to 5 business days. Expedited 24-hour delivery is also available upon request.' },
        { q: 'What happens if a potentially conflicting mark is uncovered during the search?', a: 'If a high-risk conflict is identified, our attorneys provide actionable strategic remedies: negotiating a coexistence agreement, narrowing your specification of goods, or adjusting the mark design to establish a distinct commercial impression.' }
      ],
      specialistName: 'Elena Vance, Esq.',
      specialistRole: 'Principal Trademark Clearance Analyst',
      specialistExp: '14+ years intellectual property due diligence & conflict analysis',
      formHeading: 'Order a Comprehensive Clearance Search',
      formPlaceholder: 'e.g. Lumina Health'
    },

    patent: {
      key: 'patent',
      name: 'Provisional & Utility Patent Filing',
      shortName: 'Utility Patent Filing',
      icon: 'bi-cpu',
      badge: 'Patent Practice — Engineering & Technology',
      heroTitle: 'Provisional & Non-Provisional Utility Patent Prosecution',
      heroDesc: 'Secure 20-year statutory monopolies on groundbreaking technical inventions, hardware architectures, chemical formulations, and proprietary software systems across domestic and international registries.',
      heroCtaText: 'Inquire on Patent Prosecution',
      scopeBadge: 'Patent Prosecution',
      scopeTitle: 'Transforming Technical Innovation into Exclusive Market Power',
      scopeLead: 'A granted utility patent is the strongest commercial moat in modern business, granting the exclusive legal right to exclude all competitors.',
      scopeDesc: 'Our registered patent attorneys combine deep engineering and computer science backgrounds with aggressive prosecution skills before the USPTO and EPO. We draft broad independent claims, defensible dependent claims, and formal engineering drawings that survive scrutiny in patent office rejections and adversarial litigation.',
      callout1Title: 'Provisional Patent Applications',
      callout1Desc: 'Establish an immediate 12-month priority date at minimal cost, allowing "Patent Pending" marketing while finalizing commercial development.',
      callout2Title: 'Non-Provisional & PCT Filings',
      callout2Desc: 'Full examination docketing leading to granted 20-year statutory monopoly rights across the United States and up to 157 PCT member countries.',
      inclusions: [
        'Comprehensive Invention Disclosure Assessment',
        'Section 101 Subject-Matter Patentability Analysis',
        'Independent & Dependent Claim Drafting Architecture',
        'Formal Patent Office Orthographic Drawings & Schematics',
        'USPTO / EPO Direct Electronic Docket Submission',
        'Examiner Interview Prosecution & Office Action Responses'
      ],
      profilesTitle: 'Who Needs Utility Patent Protection?',
      profilesDesc: 'Essential for technical founders, hardware creators, and enterprise engineering teams.',
      profiles: [
        { icon: 'bi-cpu-fill', title: 'Hardware & IoT Pioneers', desc: 'Teams developing novel mechanical assemblies, sensor configurations, consumer electronics, and robotic actuators.' },
        { icon: 'bi-code-slash', title: 'SaaS & Enterprise Algorithms', desc: 'Software companies innovating proprietary data processing pipelines, cryptographic protocols, and specialized machine learning models.' },
        { icon: 'bi-capsule', title: 'Biotech & Medical Devices', desc: 'Biomedical engineering companies and clinical diagnostic ventures requiring multi-layered patent barriers for FDA approval pathways.' },
        { icon: 'bi-building-gear', title: 'Manufacturing & CleanTech', desc: 'Industrial engineers creating proprietary manufacturing processes, renewable energy apparatus, and novel material compositions.' }
      ],
      rightsTitle: 'Conferred Legal Rights of a Granted Utility Patent',
      rightsLead: 'A granted utility patent confers the supreme legal authority to exclude others from making, using, or selling your invention.',
      rights: [
        { icon: 'bi-trophy', title: '20-Year Exclusive Monopoly Rights', desc: 'Complete legal exclusivity preventing competitors from manufacturing or distributing equivalent mechanical or algorithmic solutions.' },
        { icon: 'bi-graph-up-arrow', title: 'Venture Capital Valuation Multiplier', desc: 'Patented technology increases acquisition multiples and serves as collateral for non-dilutive IP-backed venture debt.' },
        { icon: 'bi-currency-exchange', title: 'Substantial Licensing Royalty Streams', desc: 'Monetize your technical IP through lucrative licensing agreements, cross-licensing partnerships, or outright asset sale.' }
      ],
      checklistTitle: 'Patent Filing Preparation Checklist',
      checklistSubtitle: 'To begin drafting your patent application, our patent prosecution team will require:',
      checklist: [
        { label: '1. Technical Invention Disclosure', desc: 'Written description explaining the technical problem solved, how the system works, and novel components.' },
        { label: '2. System Flowcharts & Schematics', desc: 'Block diagrams, engineering schematics, algorithmic process flowcharts, or CAD models.' },
        { label: '3. Complete Inventor List', desc: 'Names, citizenship, and residential addresses of all individuals who contributed to the inventive claims.' },
        { label: '4. Critical Disclosure Dates', desc: 'Any past public disclosures, website releases, demo presentations, or commercial sales (1-year US grace period).' }
      ],
      lifecycleTitle: 'The Patent Prosecution Lifecycle',
      lifecycleDesc: 'From invention disclosure to formal grant by national patent authorities.',
      lifecycle: [
        { step: 1, title: 'Stage 1: Technical Disclosure & Scope Interview', desc: 'We conduct a deep technical intake interview with your engineering team to identify novel inventive concepts and differentiators.' },
        { step: 2, title: 'Stage 2: Technical Claim & Specification Drafting', desc: 'Drafting independent and dependent claims, comprehensive background, embodiments, and formal patent illustrations.' },
        { step: 3, title: 'Stage 3: Filing & Patent Pending Status', desc: 'Electronic submission to the patent office, securing priority serial number and formal authorization to mark "Patent Pending".' },
        { step: 4, title: 'Stage 4: Examiner Prosecution & Office Action Defense', desc: 'Responding to examiner prior art citations, conducting examiner interviews, and negotiating allowed claim scopes.' },
        { step: 5, title: 'Stage 5: Notice of Allowance & Patent Issuance', desc: 'Payment of government issue fee, formal patent deed grant, and docketing into statutory maintenance schedules.' }
      ],
      faqsTitle: 'Frequently Asked Questions on Utility Patents',
      faqsDesc: 'Answers to common patentability, software, and international filing questions.',
      faqs: [
        { q: 'Can computer software and AI models be patented?', a: 'Yes, provided the software produces a concrete, practical, and non-abstract technical result. We draft claims directed to system architectures, data transformations, and computer memory management that comfortably pass Section 101 Alice/Mayo eligibility standards.' },
        { q: 'What is the advantage of a provisional patent application?', a: 'A provisional application locks in your international priority date for 12 months at significantly lower upfront expense, giving you one full year to test market demand, raise venture funding, or refine the prototype.' },
        { q: 'How does international patent protection work via PCT?', a: 'A Patent Cooperation Treaty (PCT) filing preserves your right to file patent applications in up to 157 countries for up to 30 months from your initial priority date, spreading foreign filing expenses across several years.' },
        { q: 'Can I publicly demo or pitch my invention before filing a patent application?', a: 'We strongly advise filing at least a provisional application prior to any public disclosure. While the US provides a 12-month inventor grace period, most international jurisdictions follow strict absolute novelty standards where public disclosure forfeits all patent rights.' }
      ],
      specialistName: 'Dr. Aris Thorne, Ph.D., Reg. Patent Attorney',
      specialistRole: 'Lead Patent Prosecution Counsel',
      specialistExp: '22+ years USPTO & EPO patent prosecution (Ph.D. Computer Engineering)',
      formHeading: 'Consult a Registered Patent Attorney',
      formPlaceholder: 'e.g. Distributed Neural Compute Architecture'
    },

    'prior-art': {
      key: 'prior-art',
      name: 'Prior Art & Novelty Search',
      shortName: 'Prior Art Search',
      icon: 'bi-journal-text',
      badge: 'Patent Intelligence — Novelty Clearance',
      heroTitle: 'Global Prior Art & Patentability Novelty Investigation',
      heroDesc: 'Discover existing patents, published applications, and scientific literature worldwide before committing tens of thousands of dollars to patent drafting and prosecution.',
      heroCtaText: 'Request Prior Art Investigation',
      scopeBadge: 'Patentability Due Diligence',
      scopeTitle: 'Evaluating Novelty & Non-Obviousness Under Statutory Rules',
      scopeLead: 'Over 40% of first-time patent applications face severe 35 U.S.C. 102/103 rejections due to unspotted prior art.',
      scopeDesc: 'Our patent research team deploys advanced Boolean search syntax across global patent databases (USPTO, EPO, WIPO, JPO, CNIPA) and millions of non-patent scientific publications (IEEE, ACM, arXiv, PubMed). We identify the closest existing references to guide your inventors in claiming only truly novel subject matter.',
      callout1Title: 'Freedom-to-Operate (FTO) Screening',
      callout1Desc: 'Identify active third-party patent claims that your planned commercial product could infringe, preventing costly future litigation.',
      callout2Title: 'Patentability Assessment Report',
      callout2Desc: 'Detailed matrix comparing your invention against cited references with attorney recommendations on allowable claim scope.',
      inclusions: [
        'Worldwide Patent Database Investigation (USPTO, EPO, WIPO, JPO)',
        'Non-Patent Literature & Academic Journal Searches',
        '35 U.S.C. 102 Novelty & 103 Obviousness Analysis',
        'Competitor Patent Landscape Mapping',
        'Freedom-to-Operate (FTO) Infringement Exposure Audit',
        'Attorney Patentability Memorandum & Claim Strategies'
      ],
      profilesTitle: 'Who Needs a Prior Art & Novelty Investigation?',
      profilesDesc: 'Crucial for R&D labs, institutional inventors, and technology startups.',
      profiles: [
        { icon: 'bi-lightbulb-fill', title: 'Independent Inventors', desc: 'Inventors wanting objective legal confirmation that their concept is novel before spending capital on patent drafting.' },
        { icon: 'bi-buildings-fill', title: 'Corporate R&D Divisions', desc: 'Enterprise teams validating technical roadmaps and avoiding competitor patents before manufacturing retooling.' },
        { icon: 'bi-mortarboard-fill', title: 'University Tech Transfer', desc: 'Academic institutions evaluating whether laboratory breakthroughs warrant patent docketing and commercial licensing.' },
        { icon: 'bi-shield-shaded', title: 'M&A Deal Teams', desc: 'Investors auditing the novelty and defensibility of target company patent portfolios during acquisition diligence.' }
      ],
      rightsTitle: 'Strategic Value of a Thorough Prior Art Search',
      rightsLead: 'Knowing the prior art landscape transforms blind guessing into precise patent claim engineering.',
      rights: [
        { icon: 'bi-bullseye', title: 'Precision Claim Formulation', desc: 'Draft patent claims that deliberately circumvent known references, resulting in faster allowances and lower legal prosecution fees.' },
        { icon: 'bi-slash-circle', title: 'Eliminate Unpatentable Inventions Early', desc: 'Save tens of thousands of dollars by identifying anticipatory prior art before entering expensive patent prosecution.' },
        { icon: 'bi-compass', title: 'Competitor Intelligence', desc: 'Map out exactly which technologies your competitors are filing and discover uncrowded white space in the market.' }
      ],
      checklistTitle: 'Prior Art Intake Checklist',
      checklistSubtitle: 'To initiate an exhaustive global prior art investigation, please provide:',
      checklist: [
        { label: '1. Core Inventive Concepts', desc: 'A concise 1–2 page description highlighting what you believe is new compared to existing solutions.' },
        { label: '2. Functional Diagrams', desc: 'Drawings, architectural diagrams, or schematics illustrating the novel mechanisms or software flow.' },
        { label: '3. Known Benchmark Solutions', desc: 'Existing commercial products or competitor technologies that perform similar functions.' },
        { label: '4. Keywords & Technical Terminology', desc: 'Key industry jargon, acronyms, or standard scientific terms used in your technology domain.' }
      ],
      lifecycleTitle: 'Prior Art Investigation Methodology',
      lifecycleDesc: 'Our structured 5-step investigative workflow for comprehensive prior art discovery.',
      lifecycle: [
        { step: 1, title: 'Stage 1: Invention Decomposition', desc: 'We decompose your invention into its essential functional elements and technical mechanisms.' },
        { step: 2, title: 'Stage 2: CPC & IPC Classification Mapping', desc: 'Identifying Cooperative Patent Classification (CPC) and International Patent Classification (IPC) subclass groups.' },
        { step: 3, title: 'Stage 3: Deep Database & Literature Query', desc: 'Running complex Boolean search strings across global patent registries and non-patent literature repositories.' },
        { step: 4, title: 'Stage 4: Comparative Claim Matrix Analysis', desc: 'Mapping the retrieved references against each element of your invention to determine novelty obstacles.' },
        { step: 5, title: 'Stage 5: Final Patentability Report Delivery', desc: 'Delivering an attorney-authored report with actionable recommendations on whether and how to file.' }
      ],
      faqsTitle: 'Frequently Asked Questions on Prior Art Searches',
      faqsDesc: 'Key clarifications on prior art scope, timing, and examiner citations.',
      faqs: [
        { q: 'What legally counts as prior art?', a: 'Prior art includes anything publicly available before your filing date anywhere in the world — including issued patents, published applications, YouTube videos, academic dissertations, and commercial websites.' },
        { q: 'Does my own website or Kickstarter campaign count as prior art?', a: 'Yes! In many countries, any public disclosure destroys patent novelty immediately. In the US, you have a 1-year grace period from your own disclosure to file, making prompt investigation essential.' },
        { q: 'Is a patent search guaranteed to find everything?', a: 'Patent applications remain confidential for 18 months from filing before publication. While no search can uncover secret pending applications, our search captures 100% of published worldwide references.' },
        { q: 'What patent classification systems are analyzed during your novelty audit?', a: 'Our searchers query both the Cooperative Patent Classification (CPC) and International Patent Classification (IPC) schemes across US, European, PCT, and Asian patent offices, combined with semantic non-patent literature indexing.' }
      ],
      specialistName: 'Dr. Aris Thorne, Ph.D., Reg. Patent Attorney',
      specialistRole: 'Lead Patent Prosecution Counsel',
      specialistExp: '22+ years USPTO & EPO patent prosecution (Ph.D. Computer Engineering)',
      formHeading: 'Order a Prior Art & Novelty Investigation',
      formPlaceholder: 'e.g. Solid-State Battery Cathode Formulation'
    },

    copyright: {
      key: 'copyright',
      name: 'Software & Digital Copyright Filing',
      shortName: 'Copyright Registration',
      icon: 'bi-c-circle',
      badge: 'Digital Assets — Copyright & Code',
      heroTitle: 'Software Code & Digital Asset Copyright Registration',
      heroDesc: 'Rapid federal registration of computer codebases, mobile applications, proprietary databases, UI layouts, digital artwork, and training datasets to unlock statutory damages standing in federal court.',
      heroCtaText: 'Register Digital Copyright',
      scopeBadge: 'Digital Asset Protection',
      scopeTitle: 'Statutory Protection for Codebases, Software, & Creative IP',
      scopeLead: 'Under current U.S. Supreme Court precedent (Fourth Estate), you CANNOT file a copyright infringement lawsuit until the Copyright Office has officially issued a registration.',
      scopeDesc: 'While copyright exists upon creation, unregistered code or content leaves you vulnerable. Timely federal registration unlocks the right to statutory damages up to $150,000 per willful infringement without needing to prove actual financial loss, plus recovery of attorney fees.',
      callout1Title: 'Redacted Source Code Deposits',
      callout1Desc: 'We legally redact proprietary trade secrets and confidential algorithms from code deposits, preserving statutory secrecy while securing registration.',
      callout2Title: 'Berne Convention International Coverage',
      callout2Desc: 'Automated reciprocal copyright protection across 181 member nations under the Berne Convention treaty framework.',
      inclusions: [
        'Source Code Deposit Redaction for Trade Secret Preservation',
        'U.S. Copyright Office Direct Electronic Portal Filing',
        'Work-for-Hire & Contractor Assignment Audit',
        'Statutory Damages Standing Qualification ($150,000 / work)',
        'Digital Millennium Copyright Act (DMCA) Vault Verification',
        'Official Certificate of Copyright Registration Dispatch'
      ],
      profilesTitle: 'Who Needs Software & Digital Copyright Filing?',
      profilesDesc: 'Crucial for software houses, digital creators, and content publishers.',
      profiles: [
        { icon: 'bi-code-square', title: 'SaaS & Mobile App Startups', desc: 'Protecting front-end user interface code, back-end API architectures, and mobile applications from scraper sites and former contractors.' },
        { icon: 'bi-database-fill', title: 'Database & AI Model Curators', desc: 'Securing legal title over proprietary datasets, structured database schemas, and commercial curation architectures.' },
        { icon: 'bi-controller', title: 'Game Studios & Media Houses', desc: 'Protecting 3D game assets, soundtracks, character scripts, and marketing animations from offshore copycats.' },
        { icon: 'bi-book-fill', title: 'Corporate Publishers & EdTech', desc: 'Safeguarding training manuals, online course curriculums, and proprietary enterprise whitepapers.' }
      ],
      rightsTitle: 'Conferred Legal Rights of Federal Copyright Registration',
      rightsLead: 'Federal registration elevates your digital content into an aggressive litigation instrument.',
      rights: [
        { icon: 'bi-shield-fill-exclamation', title: 'Statutory Damages Standing ($150,000)', desc: 'Recover up to $150,000 per infringed work in statutory damages without having to prove out-of-pocket revenue loss.' },
        { icon: 'bi-award-fill', title: 'Full Recovery of Attorney Fees', desc: 'Prevailing plaintiffs with timely registrations can compel infringers to reimburse all legal and attorney fees incurred in litigation.' },
        { icon: 'bi-file-earmark-lock-fill', title: 'Prima Facie Evidence of Validity', desc: 'Registrations issued within 5 years of publication constitute statutory prima facie proof of copyright validity in court.' }
      ],
      checklistTitle: 'Copyright Filing Intake Checklist',
      checklistSubtitle: 'To complete your software or digital copyright registration, provide our team with:',
      checklist: [
        { label: '1. Source Code Excerpt', desc: 'The first and last 25 pages of source code (with confidential API keys and trade secrets redacted).' },
        { label: '2. Author & Work-for-Hire Agreements', desc: 'Proof that contractors, employees, or founders have legally assigned their copyright to the corporate entity.' },
        { label: '3. Publication & Completion Dates', desc: 'The exact year of work creation and the date the software was first made available to the public.' },
        { label: '4. Title of Work & Version Number', desc: 'The official commercial title of the software release (e.g., "Vanguard Cloud Engine v2.4").' }
      ],
      lifecycleTitle: 'The Copyright Registration Workflow',
      lifecycleDesc: 'From deposit redaction to official copyright certificate issuance.',
      lifecycle: [
        { step: 1, title: 'Stage 1: Asset Intake & Ownership Verification', desc: 'We verify work-for-hire agreements and copyright chain-of-title to confirm proper corporate ownership.' },
        { step: 2, title: 'Stage 2: Deposit Preparation & Trade Secret Redaction', desc: 'Our team formats the required deposit copies and applies statutory redactions to preserve proprietary code secrecy.' },
        { step: 3, title: 'Stage 3: U.S. Copyright Office Electronic Submission', desc: 'Filing the formal eCO application and paying government filing fees directly to the Copyright Office.' },
        { step: 4, title: 'Stage 4: Examiner Deposit Verification', desc: 'The copyright examiner inspects the deposit material for statutory completeness and compliance.' },
        { step: 5, title: 'Stage 5: Official Certificate of Registration Grant', desc: 'The official seal and certificate are issued, establishing your permanent public record of ownership.' }
      ],
      faqsTitle: 'Frequently Asked Questions on Copyright Filing',
      faqsDesc: 'Key clarifications on code deposits, trade secrets, and timing.',
      faqs: [
        { q: 'Will my proprietary source code become public if I register it?', a: 'No! Under 37 C.F.R. § 202.20, applicants are permitted to redact up to 50% of source code containing trade secrets or deposit object code with a rule-of-doubt statement, ensuring your algorithms remain strictly confidential.' },
        { q: 'When must I register my copyright to qualify for statutory damages?', a: 'In the US, you must register before the infringement occurs OR within 3 months of first commercial publication. Waiting until after someone steals your code forfeits statutory damages and attorney fees.' },
        { q: 'Does copyright protect functionality or ideas?', a: 'Copyright protects the specific literal and non-literal creative expression (code, structure, sequence, organization), but not the underlying technical idea or functionality (which is protected by utility patents).' },
        { q: 'Are AI-generated code snippets or creative assets eligible for copyright registration?', a: 'Under current Copyright Office guidance, works generated purely by AI without human creative authorship cannot be copyrighted. However, code architecture, custom human prompting, and modified frameworks containing substantial human expression remain fully protectable.' }
      ],
      specialistName: 'David Sterling, J.D.',
      specialistRole: 'Lead Copyright & Digital Media Attorney',
      specialistExp: '16+ years software licensing, DMCA enforcement & copyright litigation',
      formHeading: 'Consult a Digital Copyright Attorney',
      formPlaceholder: 'e.g. Cloud API Microservices Engine'
    },

    advisory: {
      key: 'advisory',
      name: 'Brand Portfolio Strategic Advisory',
      shortName: 'Strategic Advisory',
      icon: 'bi-briefcase',
      badge: 'Corporate Strategy — Asset Monetization',
      heroTitle: 'Global IP Portfolio Optimization & Licensing Strategy',
      heroDesc: 'Architect defensible multi-layered IP moats, streamline Madrid Protocol international filings, structure high-yield licensing frameworks, and maximize valuation for venture funding and M&A transactions.',
      heroCtaText: 'Book Strategy Advisory',
      scopeBadge: 'Executive Advisory',
      scopeTitle: 'Aligning Intellectual Property with Enterprise Valuation',
      scopeLead: 'Unorganized patent and trademark filings drain budgets without creating real commercial defensibility.',
      scopeDesc: 'Our senior partners conduct comprehensive intellectual property portfolio audits for established enterprises and high-growth ventures. We evaluate your existing marks, patents, domain names, and trade secrets, consolidating filings across jurisdictions to eliminate redundancies and eliminate enforcement blind spots.',
      callout1Title: 'Madrid & PCT Centralization',
      callout1Desc: 'Centralize disparate regional national filings into unified international treaty registries, reducing recurring maintenance and renewal costs by up to 40%.',
      callout2Title: 'Licensing & Royalty Structuring',
      callout2Desc: 'Design legally enforceable franchise, distribution, and technology licensing agreements that generate recurring, protected royalty streams.',
      inclusions: [
        'Comprehensive Multi-Jurisdiction Portfolio Audit',
        'Madrid Protocol Global Centralization Strategy',
        'IP Commercial Licensing & Royalty Agreement Structuring',
        'Competitor IP Moat Mapping & Acquisition Strategy',
        'Trade Secret Governance & Employee Restrictive Covenants',
        'M&A Intellectual Property Due Diligence Preparation'
      ],
      profilesTitle: 'Who Needs Strategic IP Portfolio Advisory?',
      profilesDesc: 'Designed for executive teams, general counsels, and founders.',
      profiles: [
        { icon: 'bi-diagram-3-fill', title: 'Multi-Brand Enterprises', desc: 'Companies managing dozens of marks and patents across multiple corporate entities needing unified governance.' },
        { icon: 'bi-globe2', title: 'International Exporters', desc: 'Brands scaling distribution into Europe, Asia, and Latin America needing coordinated treaty priority management.' },
        { icon: 'bi-bank2', title: 'Private Equity & VCs', desc: 'Funds auditing portfolio company intellectual property health, chain-of-title hygiene, and patent defensibility.' },
        { icon: 'bi-share-fill', title: 'Franchisors & Licensors', desc: 'Enterprises licensing commercial concepts and proprietary software to third-party operators globally.' }
      ],
      rightsTitle: 'Commercial Returns of Strategic IP Governance',
      rightsLead: 'Transform IP management from a reactive legal expense into a core value driver.',
      rights: [
        { icon: 'bi-cash-stack', title: 'Substantial Administrative Cost Reductions', desc: 'Eliminate duplicate agency fees and unnecessary class filings through coordinated treaty consolidation.' },
        { icon: 'bi-shield-lock-fill', title: 'Impenetrable Market Moat Architecture', desc: 'Synchronize trademarks, patents, design registrations, and trade secrets to prevent competitor workarounds.' },
        { icon: 'bi-graph-up', title: 'Increased Acquisition Valuation', desc: 'Flawless chain-of-title assignments and documented IP assets accelerate diligence and unlock higher acquisition multiples.' }
      ],
      checklistTitle: 'Advisory Consultation Checklist',
      checklistSubtitle: 'To maximize the output of your strategic advisory session, please assemble:',
      checklist: [
        { label: '1. Current IP Docket Summary', desc: 'A list of all active registered trademarks, pending patent applications, and registered domain names.' },
        { label: '2. Target Expansion Jurisdictions', desc: 'Countries and regions where you plan to manufacture, sell, or distribute over the next 3–5 years.' },
        { label: '3. Existing Commercial Agreements', desc: 'Current licensing contracts, distribution terms, or joint-venture ownership arrangements.' },
        { label: '4. Corporate Organizational Chart', desc: 'Parent, subsidiary, or holding company structures holding title to commercial assets.' }
      ],
      lifecycleTitle: 'Strategic Advisory Execution Roadmap',
      lifecycleDesc: 'Our end-to-end framework for intellectual property governance and asset optimization.',
      lifecycle: [
        { step: 1, title: 'Stage 1: Portfolio Discovery & Docket Audit', desc: 'We review every active registration, renewal date, and ownership assignment across all jurisdictions.' },
        { step: 2, title: 'Stage 2: Gap, Overlap, & Exposure Analysis', desc: 'Identifying vulnerable product lines, duplicate filing costs, and geographical blind spots.' },
        { step: 3, title: 'Stage 3: Treaty Centralization Strategy', desc: 'Consolidating national filings into Madrid Protocol and PCT frameworks to minimize overhead.' },
        { step: 4, title: 'Stage 4: Licensing & Contract Governance', desc: 'Drafting standardized IP assignment agreements, non-disclosures, and commercial licensing terms.' },
        { step: 5, title: 'Stage 5: Ongoing Docket Governance & Monitoring', desc: 'Automated monitoring of statutory renewal deadlines and competitor filings across worldwide gazettes.' }
      ],
      faqsTitle: 'Frequently Asked Questions on IP Strategy',
      faqsDesc: 'Key insights into portfolio consolidation, licensing, and international filing.',
      faqs: [
        { q: 'How does the Madrid Protocol save money on international trademark protection?', a: 'Rather than hiring separate law firms in each foreign country and paying separate national currency fees, the Madrid System allows you to designate up to 130 countries through a single centralized application in one language with one set of renewal fees.' },
        { q: 'What is the biggest IP mistake companies make before raising capital or selling?', a: 'Defective chain-of-title. If contractors or early founders did not sign written intellectual property assignments, the company may not legally own the software or trademarks, which stalls funding rounds and lowers valuations.' },
        { q: 'How often should a company conduct an IP portfolio audit?', a: 'We recommend a comprehensive review annually, or immediately prior to any major new product launch, geographical expansion, or investment round.' },
        { q: 'How do we ensure independent contractors and agencies assign all IP rights to our company?', a: 'Under intellectual property law, independent contractors own the copyrights and patents they create unless a written Assignment Agreement and Work-for-Hire clause is executed prior to commencement. We draft airtight assignment schedules to secure complete chain-of-title.' }
      ],
      specialistName: 'Marcus Sterling, J.D.',
      specialistRole: 'Senior Brand Prosecution Counsel & IP Strategist',
      specialistExp: '18+ years corporate trademark governance & WIPO docketing experience',
      formHeading: 'Book a Strategic IP Advisory Session',
      formPlaceholder: 'e.g. Multi-Brand European Expansion'
    }
  };

  /**
   * Render all service details dynamically on the page
   */
  function renderService(serviceKey, shouldPushState) {
    const service = SERVICES_DATA[serviceKey] || SERVICES_DATA['trademark'];

    if (shouldPushState) {
      const newUrl = window.location.pathname + '?service=' + service.key;
      history.pushState({ service: service.key }, '', newUrl);
    }

    // 1. Page Title
    document.title = service.heroTitle + ' — LexVanguard';

    // 2. Breadcrumb
    const breadcrumbEl = document.getElementById('service-breadcrumb-current');
    if (breadcrumbEl) breadcrumbEl.textContent = service.shortName;

    // 3. Hero Section
    const heroBadgeEl = document.getElementById('service-hero-badge');
    if (heroBadgeEl) heroBadgeEl.innerHTML = `<i class="bi ${service.icon} me-1"></i> ${service.badge}`;

    const heroTitleEl = document.getElementById('service-hero-title');
    if (heroTitleEl) heroTitleEl.textContent = service.heroTitle;

    const heroDescEl = document.getElementById('service-hero-desc');
    if (heroDescEl) heroDescEl.textContent = service.heroDesc;

    const heroCtaEl = document.getElementById('service-hero-cta');
    if (heroCtaEl) heroCtaEl.innerHTML = `<i class="bi bi-calendar-check"></i> ${service.heroCtaText}`;

    // Dynamic Service Imagery
    const heroImgEl = document.getElementById('service-hero-img');
    if (heroImgEl && service.heroImg) {
      heroImgEl.src = service.heroImg;
      if (service.heroImgAlt) heroImgEl.alt = service.heroImgAlt;
    }

    const scopeImgEl = document.getElementById('service-scope-img');
    if (scopeImgEl && service.scopeImg) {
      scopeImgEl.src = service.scopeImg;
      if (service.scopeImgAlt) scopeImgEl.alt = service.scopeImgAlt;
    }

    const checklistImgEl = document.getElementById('service-checklist-img');
    if (checklistImgEl && service.checklistImg) {
      checklistImgEl.src = service.checklistImg;
      if (service.checklistImgAlt) checklistImgEl.alt = service.checklistImgAlt;
    }

    // 4. Scope Section
    const scopeBadgeEl = document.getElementById('service-scope-badge');
    if (scopeBadgeEl) scopeBadgeEl.textContent = service.scopeBadge;

    const scopeTitleEl = document.getElementById('service-scope-title');
    if (scopeTitleEl) scopeTitleEl.textContent = service.scopeTitle;

    const scopeLeadEl = document.getElementById('service-scope-lead');
    if (scopeLeadEl) scopeLeadEl.textContent = service.scopeLead;

    const scopeDescEl = document.getElementById('service-scope-desc');
    if (scopeDescEl) scopeDescEl.textContent = service.scopeDesc;

    const callout1TitleEl = document.getElementById('service-callout-1-title');
    if (callout1TitleEl) callout1TitleEl.innerHTML = `<i class="bi bi-check2-square me-1"></i> ${service.callout1Title}`;

    const callout1DescEl = document.getElementById('service-callout-1-desc');
    if (callout1DescEl) callout1DescEl.textContent = service.callout1Desc;

    const callout2TitleEl = document.getElementById('service-callout-2-title');
    if (callout2TitleEl) callout2TitleEl.innerHTML = `<i class="bi bi-shield-check me-1"></i> ${service.callout2Title}`;

    const callout2DescEl = document.getElementById('service-callout-2-desc');
    if (callout2DescEl) callout2DescEl.textContent = service.callout2Desc;

    const inclusionsListEl = document.getElementById('service-inclusions-list');
    if (inclusionsListEl) {
      inclusionsListEl.innerHTML = service.inclusions.map((item, idx) => `
        <li class="d-flex align-items-center gap-2 ${idx < service.inclusions.length - 1 ? 'mb-3 pb-2 border-bottom' : ''}">
          <i class="bi bi-check-circle-fill text-accent"></i>
          <span>${item}</span>
        </li>
      `).join('');
    }

    // 5. Target Profiles Section
    const profilesTitleEl = document.getElementById('service-profiles-title');
    if (profilesTitleEl) profilesTitleEl.textContent = service.profilesTitle;

    const profilesDescEl = document.getElementById('service-profiles-desc');
    if (profilesDescEl) profilesDescEl.textContent = service.profilesDesc;

    const profilesGridEl = document.getElementById('service-profiles-grid');
    if (profilesGridEl) {
      profilesGridEl.innerHTML = service.profiles.map(p => `
        <div class="col-md-6 col-lg-3">
          <div class="ip-card h-100 d-flex flex-column">
            <div class="ip-card-icon"><i class="bi ${p.icon}"></i></div>
            <h4 class="ip-card-title">${p.title}</h4>
            <p class="ip-card-desc flex-grow-1 mb-0">${p.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 6. Conferred Rights Section
    const rightsTitleEl = document.getElementById('service-rights-title');
    if (rightsTitleEl) rightsTitleEl.textContent = service.rightsTitle;

    const rightsLeadEl = document.getElementById('service-rights-lead');
    if (rightsLeadEl) rightsLeadEl.textContent = service.rightsLead;

    const rightsListEl = document.getElementById('service-rights-list');
    if (rightsListEl) {
      rightsListEl.innerHTML = service.rights.map(r => `
        <div class="p-3 bg-surface rounded-3 border d-flex align-items-start gap-3 shadow-xs">
          <div class="ip-card-icon mb-0 flex-shrink-0" style="width: 44px; height: 44px; font-size: 1.1rem;">
            <i class="bi ${r.icon}"></i>
          </div>
          <div>
            <h5 class="mb-1">${r.title}</h5>
            <p class="text-secondary small mb-0">${r.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 7. Client Prep Checklist
    const checklistTitleEl = document.getElementById('service-checklist-title');
    if (checklistTitleEl) checklistTitleEl.innerHTML = `<i class="bi bi-card-checklist text-accent me-2"></i> ${service.checklistTitle}`;

    const checklistSubtitleEl = document.getElementById('service-checklist-subtitle');
    if (checklistSubtitleEl) checklistSubtitleEl.textContent = service.checklistSubtitle;

    const checklistItemsEl = document.getElementById('service-checklist-items');
    if (checklistItemsEl) {
      checklistItemsEl.innerHTML = service.checklist.map((c, idx) => `
        <div class="p-3 bg-alt-section rounded-3 border">
          <strong class="d-block small text-primary">${c.label}</strong>
          <span class="text-secondary small">${c.desc}</span>
        </div>
      `).join('');
    }

    // 8. Lifecycle Section
    const lifecycleTitleEl = document.getElementById('service-lifecycle-title');
    if (lifecycleTitleEl) lifecycleTitleEl.textContent = service.lifecycleTitle;

    const lifecycleDescEl = document.getElementById('service-lifecycle-desc');
    if (lifecycleDescEl) lifecycleDescEl.textContent = service.lifecycleDesc;

    const lifecycleStepsEl = document.getElementById('service-lifecycle-steps');
    if (lifecycleStepsEl) {
      lifecycleStepsEl.innerHTML = service.lifecycle.map(s => `
        <div class="timeline-step">
          <div class="timeline-node">${s.step}</div>
          <div class="timeline-content">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h4 class="mb-0">${s.title}</h4>
              <span class="badge bg-accent-light text-accent">Stage ${s.step}</span>
            </div>
            <p class="text-secondary small mb-0">${s.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 9. FAQs Section
    const faqsTitleEl = document.getElementById('service-faqs-title');
    if (faqsTitleEl) faqsTitleEl.innerHTML = `<i class="bi bi-patch-question text-accent me-2"></i> ${service.faqsTitle}`;

    const faqsDescEl = document.getElementById('service-faqs-desc');
    if (faqsDescEl) faqsDescEl.textContent = service.faqsDesc;

    const faqsAccordionEl = document.getElementById('faqServicesAccordion');
    if (faqsAccordionEl) {
      faqsAccordionEl.innerHTML = service.faqs.map((f, idx) => `
        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button ${idx > 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#svcDetailsFaq${idx}" aria-expanded="${idx === 0}">
              ${f.q}
            </button>
          </h3>
          <div id="svcDetailsFaq${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" data-bs-parent="#faqServicesAccordion">
            <div class="accordion-body">
              ${f.a}
            </div>
          </div>
        </div>
      `).join('');
    }

    // 10. Specialist & Consultation Form
    const specialistNameEl = document.getElementById('service-specialist-name');
    if (specialistNameEl) specialistNameEl.textContent = service.specialistName;

    const specialistRoleEl = document.getElementById('service-specialist-role');
    if (specialistRoleEl) specialistRoleEl.textContent = service.specialistRole;

    const specialistExpEl = document.getElementById('service-specialist-exp');
    if (specialistExpEl) specialistExpEl.textContent = service.specialistExp;

    const formHeadingEl = document.getElementById('service-form-heading');
    if (formHeadingEl) formHeadingEl.textContent = service.formHeading;

    const formInputEl = document.getElementById('service-form-input');
    if (formInputEl) formInputEl.placeholder = service.formPlaceholder;

    // 11. Highlight active pill
    document.querySelectorAll('.service-pill-btn').forEach(btn => {
      if (btn.getAttribute('data-service') === service.key) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Get initial service key from URL query param or hash
  function getRequestedService() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('service');
    if (q && SERVICES_DATA[q]) return q;

    const hash = window.location.hash.replace('#', '');
    if (hash && SERVICES_DATA[hash]) return hash;

    return 'trademark';
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    const initialKey = getRequestedService();
    renderService(initialKey, false);

    // Global Click Delegation for Service Switch Links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-service], a[href*="service-details.html?service="]');
      if (link) {
        const href = link.getAttribute('href');
        const dataService = link.getAttribute('data-service');
        let key = dataService;

        if (!key && href) {
          const match = href.match(/service=([a-z0-9-]+)/i);
          if (match) key = match[1];
        }

        if (key && SERVICES_DATA[key]) {
          e.preventDefault();
          renderService(key, true);

          // If clicked from footer or bottom, scroll to practice selector
          if (link.closest('footer') || link.classList.contains('service-footer-link')) {
            const selectorEl = document.getElementById('service-selector-bar');
            if (selectorEl) {
              selectorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      }
    });

    // Handle Browser Back / Forward Navigation
    window.addEventListener('popstate', () => {
      const popKey = getRequestedService();
      renderService(popKey, false);
    });
  });

})();
