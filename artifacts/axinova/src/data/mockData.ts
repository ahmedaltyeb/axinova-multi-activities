export const mockSectors = [
  {
    id: "industrial",
    name: "Industrial",
    arabicName: "الصناعة",
    description: "Building the backbone of the region's industrial capacity with heavy manufacturing and processing facilities.",
    arabicDescription: "بناء العمود الفقري للقدرة الصناعية في المنطقة من خلال مرافق التصنيع والمعالجة الثقيلة.",
    icon: "Factory",
    activities: ["Steel Manufacturing", "Chemical Processing", "Equipment Fabrication", "Industrial Plant Operations"],
    targetClients: "Government agencies, state-owned enterprises, and heavy industry operators"
  },
  {
    id: "trading",
    name: "Trading",
    arabicName: "التجارة",
    description: "Facilitating global commerce with robust supply chains and strategic commodity trading across MENA.",
    arabicDescription: "تسهيل التجارة العالمية من خلال سلاسل التوريد القوية وتجارة السلع الاستراتيجية عبر منطقة الشرق الأوسط وشمال أفريقيا.",
    icon: "Globe",
    activities: ["Commodities Trading", "Machinery Sourcing", "Import/Export Operations", "Strategic Procurement"],
    targetClients: "B2B companies, wholesalers, distributors, and government procurement agencies"
  },
  {
    id: "technical",
    name: "Technical Services",
    arabicName: "الخدمات الفنية",
    description: "Providing advanced engineering and technical support for complex infrastructure and industrial projects.",
    arabicDescription: "توفير الدعم الهندسي والفني المتقدم لمشاريع البنية التحتية والصناعية المعقدة.",
    icon: "Wrench",
    activities: ["Maintenance & Repair", "Facility Management", "Engineering Consulting", "Technical Inspections"],
    targetClients: "Commercial real estate operators, industrial facilities, and public infrastructure owners"
  },
  {
    id: "logistics",
    name: "Logistics",
    arabicName: "الخدمات اللوجستية",
    description: "End-to-end supply chain solutions, moving cargo seamlessly across GCC borders and global trade lanes.",
    arabicDescription: "حلول سلسلة التوريد الشاملة، ونقل البضائع بسلاسة عبر حدود دول الخليج ومسارات التجارة العالمية.",
    icon: "Truck",
    activities: ["Freight Forwarding", "Warehousing & Distribution", "Customs Clearance", "Last-Mile Delivery"],
    targetClients: "Retail chains, manufacturing companies, and e-commerce enterprises"
  },
  {
    id: "construction",
    name: "Construction",
    arabicName: "البناء والتشييد",
    description: "Delivering monumental architecture and vital civil infrastructure that defines the GCC skyline.",
    arabicDescription: "تقديم الهندسة المعمارية الضخمة والبنية التحتية المدنية الحيوية التي تحدد أفق منطقة الخليج العربي.",
    icon: "Building2",
    activities: ["Civil Engineering", "Commercial Real Estate", "Infrastructure Development", "Project Management"],
    targetClients: "Government ministries, real estate developers, and industrial zone authorities"
  }
];

export const mockProjects = [
  {
    id: "p1",
    title: "Jubail Steel Plant Expansion",
    category: "Industrial",
    location: "Saudi Arabia",
    year: "2023",
    description: "A $400M expansion project increasing production capacity by 2M tons annually.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1533422902779-babd002f6ae1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p2",
    title: "Port of Salalah Logistics Hub",
    category: "Logistics",
    location: "Oman",
    year: "2024",
    description: "State-of-the-art automated warehousing facility spanning 500,000 sq ft.",
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8ed745eb33?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p3",
    title: "Riyadh Metro Technical Support",
    category: "Technical Services",
    location: "Saudi Arabia",
    year: "2022",
    description: "Comprehensive electromechanical maintenance contract for lines 1 and 2.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p4",
    title: "Dubai Financial District Towers",
    category: "Construction",
    location: "UAE",
    year: "2025",
    description: "Twin 50-story commercial towers featuring sustainable LEED Platinum design.",
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p5",
    title: "Kuwait Petrochemical Trading Hub",
    category: "Trading",
    location: "Kuwait",
    year: "2023",
    description: "Regional commodities trading desk managing $2B annual volume of petrochemical products.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450e7f08d45b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p6",
    title: "Abu Dhabi Hospital Complex",
    category: "Construction",
    location: "UAE",
    year: "2022",
    description: "1,200-bed tertiary care hospital with full infrastructure fit-out.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p7",
    title: "Bahrain Dry Dock Modernization",
    category: "Industrial",
    location: "Bahrain",
    year: "2024",
    description: "Full refurbishment of naval dry dock facilities with advanced lifting systems.",
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p8",
    title: "Qatar LNG Distribution Network",
    category: "Logistics",
    location: "Qatar",
    year: "2021",
    description: "Inland LNG distribution infrastructure serving 14 industrial zones.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  }
];

export const mockStats = [
  { value: 25, suffix: "+", label: "Years Experience", arabicLabel: "سنوات الخبرة" },
  { value: 5, suffix: "", label: "Business Sectors", arabicLabel: "قطاعات الأعمال" },
  { value: 12, suffix: "+", label: "Countries", arabicLabel: "دولة" },
  { value: 500, suffix: "+", label: "Projects Completed", arabicLabel: "مشروع منجز" }
];

export const mockTeam = [
  {
    id: "t1",
    name: "Tariq Al-Mansour",
    title: "Chief Executive Officer",
    arabicName: "طارق المنصور",
    arabicTitle: "الرئيس التنفيذي",
    bio: "Over 30 years of experience in industrial management and corporate strategy across the GCC."
  },
  {
    id: "t2",
    name: "Sarah Al-Rashid",
    title: "Chief Financial Officer",
    arabicName: "سارة الراشد",
    arabicTitle: "المدير المالي",
    bio: "Former investment banker with deep expertise in infrastructure financing and capital markets."
  },
  {
    id: "t3",
    name: "Omar Hassan",
    title: "Head of Construction",
    arabicName: "عمر حسن",
    arabicTitle: "رئيس قطاع البناء",
    bio: "Led over 100 mega-projects across MENA with a focus on sustainable development."
  },
  {
    id: "t4",
    name: "Nora Al-Farsi",
    title: "Chief Operations Officer",
    arabicName: "نورة الفارسي",
    arabicTitle: "مدير العمليات",
    bio: "Specialist in supply chain optimization and cross-border logistics operations."
  },
  {
    id: "t5",
    name: "Khalid Ibrahim",
    title: "Head of Trading",
    arabicName: "خالد إبراهيم",
    arabicTitle: "رئيس قطاع التجارة",
    bio: "International commodity trader with 20 years in MENA energy and materials markets."
  },
  {
    id: "t6",
    name: "Layla Mahmoud",
    title: "General Counsel",
    arabicName: "ليلى محمود",
    arabicTitle: "المستشار القانوني العام",
    bio: "Expert in regional corporate law, M&A transactions, and government contracts."
  }
];

export const mockServices = [
  { id: "s1", name: "Steel Manufacturing", sector: "Industrial", description: "Large-scale steel production using EAF and BOF processes." },
  { id: "s2", name: "Chemical Processing", sector: "Industrial", description: "Downstream petrochemical processing and specialty chemicals." },
  { id: "s3", name: "Equipment Fabrication", sector: "Industrial", description: "Custom industrial equipment design and fabrication to spec." },
  { id: "s4", name: "Commodities Trading", sector: "Trading", description: "Strategic trading of metals, energy, and agricultural commodities." },
  { id: "s5", name: "Machinery Sourcing", sector: "Trading", description: "Global sourcing of industrial machinery and equipment." },
  { id: "s6", name: "Maintenance & Repair", sector: "Technical Services", description: "Scheduled and emergency maintenance for industrial assets." },
  { id: "s7", name: "Engineering Consulting", sector: "Technical Services", description: "Feasibility studies, design reviews, and technical audits." },
  { id: "s8", name: "Freight Forwarding", sector: "Logistics", description: "Air, sea, and land freight across 12+ countries." },
  { id: "s9", name: "Warehousing", sector: "Logistics", description: "Bonded and free-zone warehousing across GCC." },
  { id: "s10", name: "Civil Engineering", sector: "Construction", description: "Bridges, roads, and heavy civil infrastructure." },
  { id: "s11", name: "Commercial Real Estate", sector: "Construction", description: "Office towers, mixed-use complexes, and retail developments." },
  { id: "s12", name: "Customs Clearance", sector: "Logistics", description: "Expert customs documentation and duty optimization." }
];

export const mockNews = [
  {
    id: "n1",
    title: "Axinova Wins $600M Saudi Infrastructure Contract",
    arabicTitle: "أكسينوفا تفوز بعقد بنية تحتية سعودي بقيمة 600 مليون دولار",
    category: "Business",
    date: "2024-11-15",
    summary: "The new contract covers civil engineering and electromechanical works for a major industrial zone expansion.",
    body: "Axinova Multi Activities Company has been awarded a landmark $600 million contract by the Saudi Industrial Development Authority for the expansion of the Al-Jubail Industrial Zone. The project spans 48 months and will create over 2,000 direct jobs.",
    author: "Corporate Communications"
  },
  {
    id: "n2",
    title: "Axinova Expands Logistics Network to East Africa",
    arabicTitle: "أكسينوفا تُوسّع شبكتها اللوجستية إلى شرق أفريقيا",
    category: "Operations",
    date: "2024-10-03",
    summary: "New freight corridors link GCC industrial zones with East African ports via a fleet of 200 heavy vehicles.",
    body: "Expanding its logistics footprint beyond MENA, Axinova has launched dedicated freight corridors connecting Saudi Arabia, UAE, and Oman to the ports of Mombasa and Dar es Salaam.",
    author: "Logistics Division"
  },
  {
    id: "n3",
    title: "2024 Annual ESG Report Released",
    arabicTitle: "إصدار تقرير الاستدامة السنوي 2024",
    category: "Sustainability",
    date: "2024-09-20",
    summary: "Axinova reports a 22% reduction in Scope 1 emissions and launches its Net Zero 2040 roadmap.",
    body: "In its annual ESG disclosure, Axinova highlights major progress on its sustainability agenda, including a 22% year-on-year reduction in direct carbon emissions and the launch of solar-powered warehousing across three countries.",
    author: "Sustainability Office"
  },
  {
    id: "n4",
    title: "Partnership with Abu Dhabi Ports for Smart Logistics",
    arabicTitle: "شراكة مع موانئ أبوظبي للخدمات اللوجستية الذكية",
    category: "Partnerships",
    date: "2024-08-11",
    summary: "A five-year MoU covers digital customs integration, automated warehousing, and smart freight tracking.",
    body: "Axinova and Abu Dhabi Ports Group have signed a strategic MoU covering digital customs integration, automated warehousing systems, and AI-powered freight tracking to streamline trade through Khalifa Port.",
    author: "Corporate Communications"
  },
  {
    id: "n5",
    title: "Axinova Steel Achieves ISO 9001:2015 Recertification",
    arabicTitle: "أكسينوفا للصلب تحصل على إعادة شهادة ISO 9001:2015",
    category: "Quality",
    date: "2024-07-29",
    summary: "All industrial facilities have been recertified after a rigorous third-party audit.",
    body: "Following a comprehensive third-party quality audit, all Axinova industrial manufacturing facilities have successfully achieved recertification to ISO 9001:2015 standards.",
    author: "Quality Assurance"
  },
  {
    id: "n6",
    title: "New Regional HQ Opens in Riyadh",
    arabicTitle: "افتتاح مقر إقليمي جديد في الرياض",
    category: "Corporate",
    date: "2024-06-05",
    summary: "The 12-floor headquarters in King Abdullah Financial District houses 800 employees.",
    body: "Axinova has inaugurated its new regional headquarters in the King Abdullah Financial District in Riyadh. The 12-story tower consolidates operations from five previous offices and will serve as the company's GCC hub.",
    author: "Corporate Communications"
  },
  {
    id: "n7",
    title: "Axinova Launches Graduate Talent Program",
    arabicTitle: "أكسينوفا تطلق برنامج المواهب للخريجين",
    category: "Careers",
    date: "2024-05-18",
    summary: "The two-year rotational program targets 150 engineering and business graduates across the GCC.",
    body: "Axinova's new Graduate Talent Program offers a two-year rotational placement across the company's five business sectors, targeting 150 fresh graduates in engineering, finance, and supply chain management.",
    author: "Human Resources"
  },
  {
    id: "n8",
    title: "Q2 2024 Financial Results: Revenue Up 18%",
    arabicTitle: "نتائج الربع الثاني 2024: نمو الإيرادات 18%",
    category: "Financial",
    date: "2024-08-01",
    summary: "Strong performance across Construction and Logistics sectors drives group-wide revenue growth.",
    body: "Axinova reports Q2 2024 revenue of AED 2.8 billion, up 18% year-on-year. Construction division revenues grew 27%, driven by the Jubail and Dubai mega-projects. The Logistics segment saw a 15% increase in volume.",
    author: "Investor Relations"
  }
];

export const mockCareers = [
  {
    id: "j1",
    title: "Senior Civil Engineer",
    department: "Construction",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    description: "Lead structural design and site supervision for large-scale infrastructure projects in Saudi Arabia.",
    requirements: ["10+ years civil engineering experience", "Saudi Aramco or SABIC project experience a plus", "PMP or PE certification preferred", "Arabic language proficiency"]
  },
  {
    id: "j2",
    title: "Logistics Operations Manager",
    department: "Logistics",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Oversee cross-border freight operations across 12 countries, managing a team of 50+ staff.",
    requirements: ["8+ years in logistics/supply chain management", "GCC operations experience required", "WMS/TMS systems proficiency", "CILT certification preferred"]
  },
  {
    id: "j3",
    title: "Industrial Plant Supervisor",
    department: "Industrial",
    location: "Jubail, Saudi Arabia",
    type: "Full-time",
    description: "Manage daily operations of a steel manufacturing facility with 400-employee workforce.",
    requirements: ["7+ years plant operations experience", "Steel or petrochemical background", "NEBOSH HSE certification", "Bilingual English/Arabic"]
  },
  {
    id: "j4",
    title: "Commodity Trader – Energy",
    department: "Trading",
    location: "Abu Dhabi, UAE",
    type: "Full-time",
    description: "Execute energy commodity trades across GCC markets, manage risk, and develop counterparty relationships.",
    requirements: ["5+ years commodity trading experience", "Energy sector focus (oil, gas, LNG)", "CFA or CAIA certification a plus", "Bloomberg/Reuters terminals proficiency"]
  },
  {
    id: "j5",
    title: "Technical Services Engineer",
    department: "Technical Services",
    location: "Kuwait City, Kuwait",
    type: "Contract",
    description: "Provide on-site engineering support and maintenance management for industrial clients.",
    requirements: ["5+ years maintenance engineering experience", "HVAC, electrical, or mechanical specialty", "CMMS software proficiency", "Available for site rotations"]
  },
  {
    id: "j6",
    title: "Graduate Trainee – Business Development",
    department: "Corporate",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    description: "Two-year rotational program covering all five business sectors, leading to a permanent role.",
    requirements: ["Bachelor's degree in Business, Engineering, or Finance", "GPA 3.5+ or equivalent", "GCC national preferred", "Fluent in English and Arabic"]
  }
];

export const mockProducts = [
  { id: "pr1", name: "Structural Steel Beams (HEA/HEB)", category: "Industrial Materials", description: "Hot-rolled structural steel sections for commercial and industrial construction.", specs: "Grade S275/S355 | Lengths up to 18m" },
  { id: "pr2", name: "Carbon Steel Pipes", category: "Industrial Materials", description: "Seamless and welded carbon steel pipes for oil, gas, and water applications.", specs: "OD 21.3–508mm | ASTM A106/A53" },
  { id: "pr3", name: "Industrial Generator Sets", category: "Power Equipment", description: "Heavy-duty diesel generators for continuous industrial power supply.", specs: "100kVA–3000kVA | Perkins/Cummins engines" },
  { id: "pr4", name: "Mobile Hydraulic Cranes", category: "Heavy Equipment", description: "All-terrain cranes for construction and industrial lifting operations.", specs: "50–500 tonne capacity | Liebherr/Tadano" },
  { id: "pr5", name: "Overhead Bridge Cranes", category: "Heavy Equipment", description: "Fixed overhead cranes for factory and warehouse material handling.", specs: "5–100 tonne SWL | Spans up to 32m" },
  { id: "pr6", name: "Industrial Air Compressors", category: "Power Equipment", description: "Rotary screw and piston compressors for high-demand industrial applications.", specs: "7–30 bar | 5–200 kW drive motors" },
  { id: "pr7", name: "Container Forklifts", category: "Logistics Equipment", description: "Heavy-duty forklifts rated for container yard and port operations.", specs: "8–45 tonne capacity | Diesel/LPG" },
  { id: "pr8", name: "Automated Pallet Racking", category: "Warehousing", description: "Selective and drive-in racking systems for high-density warehouse storage.", specs: "Load up to 4,000 kg/level | Heights to 12m" },
  { id: "pr9", name: "Conveyor Belt Systems", category: "Industrial Materials", description: "Modular belt conveyors for bulk material handling in industrial plants.", specs: "Widths 500–2,000mm | Speeds to 4 m/s" },
  { id: "pr10", name: "Flat-Bed Semi-Trailers", category: "Logistics Equipment", description: "Heavy-haul trailers for oversized and project cargo transport.", specs: "Up to 80 tonne payload | Extendable options" },
  { id: "pr11", name: "Electric Transformers", category: "Power Equipment", description: "Step-up/step-down power transformers for industrial and utility substations.", specs: "11kV–132kV | Oil & dry-type" },
  { id: "pr12", name: "Safety & PPE Supplies", category: "Safety Equipment", description: "Full range of personal protective equipment and site safety materials.", specs: "EN/ANSI certified | Hard hats, harnesses, eyewear" },
  { id: "pr13", name: "Water Treatment Plants", category: "Industrial Materials", description: "Modular desalination and water recycling systems for industrial use.", specs: "1,000–50,000 m³/day capacity" },
  { id: "pr14", name: "Pre-engineered Steel Buildings", category: "Construction", description: "Custom-designed prefab steel structures for warehouses and factories.", specs: "Spans up to 80m | 30-year structural warranty" },
  { id: "pr15", name: "Automated Gate Systems", category: "Logistics Equipment", description: "RFID-integrated gate management systems for logistics parks and ports.", specs: "RFID + ANPR | 99.8% uptime SLA" }
];

export const mockPartners: { name: string; logo: string }[] = [
  { name: "Saudi Aramco",     logo: "https://logo.clearbit.com/aramco.com" },
  { name: "ADNOC",            logo: "https://logo.clearbit.com/adnoc.ae" },
  { name: "DP World",         logo: "https://logo.clearbit.com/dpworld.com" },
  { name: "SABIC",            logo: "https://logo.clearbit.com/sabic.com" },
  { name: "QatarEnergy",      logo: "https://logo.clearbit.com/qatarenergy.qa" },
  { name: "Bechtel",          logo: "https://logo.clearbit.com/bechtel.com" },
  { name: "Honeywell",        logo: "https://logo.clearbit.com/honeywell.com" },
  { name: "Siemens",          logo: "https://logo.clearbit.com/siemens.com" },
  { name: "ABB",              logo: "https://logo.clearbit.com/abb.com" },
  { name: "Emerson",          logo: "https://logo.clearbit.com/emerson.com" },
  { name: "Schneider Electric", logo: "https://logo.clearbit.com/se.com" },
  { name: "Fluor",            logo: "https://logo.clearbit.com/fluor.com" },
  { name: "Wood Group",       logo: "https://logo.clearbit.com/woodplc.com" },
  { name: "Mott MacDonald",   logo: "https://logo.clearbit.com/mottmac.com" },
  { name: "Jacobs",           logo: "https://logo.clearbit.com/jacobs.com" },
];
