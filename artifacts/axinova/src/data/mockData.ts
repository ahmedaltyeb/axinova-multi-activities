export const mockSectors = [
  {
    id: "industrial",
    name: "Industrial",
    arabicName: "الصناعة",
    description: "Building the backbone of the region's industrial capacity with heavy manufacturing and processing facilities.",
    arabicDescription: "بناء العمود الفقري للقدرة الصناعية في المنطقة من خلال مرافق التصنيع والمعالجة الثقيلة.",
    icon: "Factory",
    activities: ["Steel Manufacturing", "Chemical Processing", "Equipment Fabrication", "Industrial Plant Operations"],
    arabicActivities: ["تصنيع الصلب", "معالجة المواد الكيميائية", "تصنيع المعدات", "تشغيل المنشآت الصناعية"],
    targetClients: "Government agencies, state-owned enterprises, and heavy industry operators",
    arabicTargetClients: "الجهات الحكومية والمؤسسات المملوكة للدولة ومشغلو الصناعات الثقيلة"
  },
  {
    id: "trading",
    name: "Trading",
    arabicName: "التجارة",
    description: "Facilitating global commerce with robust supply chains and strategic commodity trading across MENA.",
    arabicDescription: "تسهيل التجارة العالمية من خلال سلاسل التوريد القوية وتجارة السلع الاستراتيجية عبر منطقة الشرق الأوسط وشمال أفريقيا.",
    icon: "Globe",
    activities: ["Commodities Trading", "Machinery Sourcing", "Import/Export Operations", "Strategic Procurement"],
    arabicActivities: ["تداول السلع", "توريد الآلات", "عمليات الاستيراد والتصدير", "المشتريات الاستراتيجية"],
    targetClients: "B2B companies, wholesalers, distributors, and government procurement agencies",
    arabicTargetClients: "شركات B2B والموزعون بالجملة والموزعون ووكالات المشتريات الحكومية"
  },
  {
    id: "technical",
    name: "Technical Services",
    arabicName: "الخدمات الفنية",
    description: "Providing advanced engineering and technical support for complex infrastructure and industrial projects.",
    arabicDescription: "توفير الدعم الهندسي والفني المتقدم لمشاريع البنية التحتية والصناعية المعقدة.",
    icon: "Wrench",
    activities: ["Maintenance & Repair", "Facility Management", "Engineering Consulting", "Technical Inspections"],
    arabicActivities: ["الصيانة والإصلاح", "إدارة المرافق", "الاستشارات الهندسية", "الفحوصات الفنية"],
    targetClients: "Commercial real estate operators, industrial facilities, and public infrastructure owners",
    arabicTargetClients: "مشغلو العقارات التجارية والمنشآت الصناعية وملاك البنية التحتية العامة"
  },
  {
    id: "logistics",
    name: "Logistics",
    arabicName: "الخدمات اللوجستية",
    description: "End-to-end supply chain solutions, moving cargo seamlessly across GCC borders and global trade lanes.",
    arabicDescription: "حلول سلسلة التوريد الشاملة، ونقل البضائع بسلاسة عبر حدود دول الخليج ومسارات التجارة العالمية.",
    icon: "Truck",
    activities: ["Freight Forwarding", "Warehousing & Distribution", "Customs Clearance", "Last-Mile Delivery"],
    arabicActivities: ["الشحن والتوريد", "التخزين والتوزيع", "التخليص الجمركي", "التسليم الأخير"],
    targetClients: "Retail chains, manufacturing companies, and e-commerce enterprises",
    arabicTargetClients: "سلاسل البيع بالتجزئة وشركات التصنيع ومؤسسات التجارة الإلكترونية"
  },
  {
    id: "construction",
    name: "Construction",
    arabicName: "البناء والتشييد",
    description: "Delivering monumental architecture and vital civil infrastructure that defines the GCC skyline.",
    arabicDescription: "تقديم الهندسة المعمارية الضخمة والبنية التحتية المدنية الحيوية التي تحدد أفق منطقة الخليج العربي.",
    icon: "Building2",
    activities: ["Civil Engineering", "Commercial Real Estate", "Infrastructure Development", "Project Management"],
    arabicActivities: ["الهندسة المدنية", "العقارات التجارية", "تطوير البنية التحتية", "إدارة المشاريع"],
    targetClients: "Government ministries, real estate developers, and industrial zone authorities",
    arabicTargetClients: "الوزارات الحكومية ومطورو العقارات وسلطات المناطق الصناعية"
  }
];

export const mockProjects = [
  {
    id: "p1",
    title: "Jubail Steel Plant Expansion",
    arabicTitle: "توسعة مصنع الجبيل للصلب",
    category: "Industrial",
    arabicCategory: "صناعي",
    location: "Saudi Arabia",
    arabicLocation: "المملكة العربية السعودية",
    year: "2023",
    description: "A $400M expansion project increasing production capacity by 2M tons annually.",
    arabicDescription: "مشروع توسعة بقيمة 400 مليون دولار يرفع طاقة الإنتاج بمقدار مليوني طن سنوياً.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1533422902779-babd002f6ae1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p2",
    title: "Port of Salalah Logistics Hub",
    arabicTitle: "مركز لوجستيات ميناء صلالة",
    category: "Logistics",
    arabicCategory: "لوجستيات",
    location: "Oman",
    arabicLocation: "عُمان",
    year: "2024",
    description: "State-of-the-art automated warehousing facility spanning 500,000 sq ft.",
    arabicDescription: "منشأة تخزين آلية متطورة تمتد على مساحة 500,000 قدم مربع.",
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8ed745eb33?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p3",
    title: "Riyadh Metro Technical Support",
    arabicTitle: "الدعم الفني لمترو الرياض",
    category: "Technical Services",
    arabicCategory: "خدمات فنية",
    location: "Saudi Arabia",
    arabicLocation: "المملكة العربية السعودية",
    year: "2022",
    description: "Comprehensive electromechanical maintenance contract for lines 1 and 2.",
    arabicDescription: "عقد صيانة كهروميكانيكية شاملة للخطين الأول والثاني.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p4",
    title: "Dubai Financial District Towers",
    arabicTitle: "أبراج حي دبي المالي",
    category: "Construction",
    arabicCategory: "إنشاء",
    location: "UAE",
    arabicLocation: "الإمارات العربية المتحدة",
    year: "2025",
    description: "Twin 50-story commercial towers featuring sustainable LEED Platinum design.",
    arabicDescription: "برجان تجاريان توأمان من 50 طابقاً بتصميم مستدام حاصل على شهادة LEED بلاتينيوم.",
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p5",
    title: "Kuwait Petrochemical Trading Hub",
    arabicTitle: "مركز تداول البتروكيماويات الكويتي",
    category: "Trading",
    arabicCategory: "تجارة",
    location: "Kuwait",
    arabicLocation: "الكويت",
    year: "2023",
    description: "Regional commodities trading desk managing $2B annual volume of petrochemical products.",
    arabicDescription: "مكتب تداول إقليمي للسلع يدير حجم سنوي بقيمة مليارَي دولار من منتجات البتروكيماويات.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450e7f08d45b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p6",
    title: "Abu Dhabi Hospital Complex",
    arabicTitle: "مجمع مستشفى أبوظبي",
    category: "Construction",
    arabicCategory: "إنشاء",
    location: "UAE",
    arabicLocation: "الإمارات العربية المتحدة",
    year: "2022",
    description: "1,200-bed tertiary care hospital with full infrastructure fit-out.",
    arabicDescription: "مستشفى رعاية ثلاثية بسعة 1,200 سرير مع تجهيز كامل للبنية التحتية.",
    status: "completed",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p7",
    title: "Bahrain Dry Dock Modernization",
    arabicTitle: "تحديث الحوض الجاف في البحرين",
    category: "Industrial",
    arabicCategory: "صناعي",
    location: "Bahrain",
    arabicLocation: "البحرين",
    year: "2024",
    description: "Full refurbishment of naval dry dock facilities with advanced lifting systems.",
    arabicDescription: "إعادة تأهيل كاملة لمرافق الحوض الجاف البحري بأنظمة رفع متطورة.",
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p8",
    title: "Qatar LNG Distribution Network",
    arabicTitle: "شبكة توزيع الغاز الطبيعي المسال في قطر",
    category: "Logistics",
    arabicCategory: "لوجستيات",
    location: "Qatar",
    arabicLocation: "قطر",
    year: "2021",
    description: "Inland LNG distribution infrastructure serving 14 industrial zones.",
    arabicDescription: "بنية تحتية لتوزيع الغاز الطبيعي المسال داخلياً تخدم 14 منطقة صناعية.",
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
  { id: "s1", name: "Steel Manufacturing", arabicName: "تصنيع الصلب", sector: "Industrial", description: "Large-scale steel production using EAF and BOF processes.", arabicDescription: "إنتاج الصلب على نطاق واسع باستخدام عمليتَي EAF وBOF." },
  { id: "s2", name: "Chemical Processing", arabicName: "معالجة الكيماويات", sector: "Industrial", description: "Downstream petrochemical processing and specialty chemicals.", arabicDescription: "معالجة البتروكيماويات المنبثقة والمواد الكيميائية المتخصصة." },
  { id: "s3", name: "Equipment Fabrication", arabicName: "تصنيع المعدات", sector: "Industrial", description: "Custom industrial equipment design and fabrication to spec.", arabicDescription: "تصميم وتصنيع معدات صناعية مخصصة وفق المواصفات." },
  { id: "s4", name: "Commodities Trading", arabicName: "تداول السلع", sector: "Trading", description: "Strategic trading of metals, energy, and agricultural commodities.", arabicDescription: "تداول استراتيجي للمعادن والطاقة والسلع الزراعية." },
  { id: "s5", name: "Machinery Sourcing", arabicName: "توريد الآلات", sector: "Trading", description: "Global sourcing of industrial machinery and equipment.", arabicDescription: "توريد عالمي للآلات والمعدات الصناعية." },
  { id: "s6", name: "Maintenance & Repair", arabicName: "الصيانة والإصلاح", sector: "Technical Services", description: "Scheduled and emergency maintenance for industrial assets.", arabicDescription: "صيانة مجدولة وطارئة للأصول الصناعية." },
  { id: "s7", name: "Engineering Consulting", arabicName: "الاستشارات الهندسية", sector: "Technical Services", description: "Feasibility studies, design reviews, and technical audits.", arabicDescription: "دراسات الجدوى ومراجعات التصميم والمراجعات الفنية." },
  { id: "s8", name: "Freight Forwarding", arabicName: "الشحن والتوريد", sector: "Logistics", description: "Air, sea, and land freight across 12+ countries.", arabicDescription: "شحن جوي وبحري وبري عبر أكثر من 12 دولة." },
  { id: "s9", name: "Warehousing", arabicName: "التخزين", sector: "Logistics", description: "Bonded and free-zone warehousing across GCC.", arabicDescription: "تخزين في مناطق مخصصة وحرة عبر دول الخليج." },
  { id: "s10", name: "Civil Engineering", arabicName: "الهندسة المدنية", sector: "Construction", description: "Bridges, roads, and heavy civil infrastructure.", arabicDescription: "جسور وطرق وبنية تحتية مدنية ثقيلة." },
  { id: "s11", name: "Commercial Real Estate", arabicName: "العقارات التجارية", sector: "Construction", description: "Office towers, mixed-use complexes, and retail developments.", arabicDescription: "أبراج مكاتب ومجمعات متعددة الاستخدامات ومشاريع تجزئة." },
  { id: "s12", name: "Customs Clearance", arabicName: "التخليص الجمركي", sector: "Logistics", description: "Expert customs documentation and duty optimization.", arabicDescription: "توثيق جمركي متخصص وتحسين الرسوم الجمركية." }
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
    arabicTitle: "مهندس مدني أول",
    department: "Construction",
    arabicDepartment: "البناء والتشييد",
    location: "Riyadh, Saudi Arabia",
    arabicLocation: "الرياض، المملكة العربية السعودية",
    type: "Full-time",
    arabicType: "دوام كامل",
    description: "Lead structural design and site supervision for large-scale infrastructure projects in Saudi Arabia.",
    arabicDescription: "قيادة التصميم الإنشائي والإشراف على المواقع لمشاريع البنية التحتية الكبرى في المملكة العربية السعودية.",
    requirements: ["10+ years civil engineering experience", "Saudi Aramco or SABIC project experience a plus", "PMP or PE certification preferred", "Arabic language proficiency"],
    arabicRequirements: ["أكثر من 10 سنوات خبرة في الهندسة المدنية", "الخبرة في مشاريع أرامكو أو سابك ميزة إضافية", "شهادة PMP أو PE مفضلة", "إتقان اللغة العربية"]
  },
  {
    id: "j2",
    title: "Logistics Operations Manager",
    arabicTitle: "مدير العمليات اللوجستية",
    department: "Logistics",
    arabicDepartment: "اللوجستيات",
    location: "Dubai, UAE",
    arabicLocation: "دبي، الإمارات العربية المتحدة",
    type: "Full-time",
    arabicType: "دوام كامل",
    description: "Oversee cross-border freight operations across 12 countries, managing a team of 50+ staff.",
    arabicDescription: "الإشراف على عمليات الشحن عبر الحدود في 12 دولة وإدارة فريق يضم أكثر من 50 موظفاً.",
    requirements: ["8+ years in logistics/supply chain management", "GCC operations experience required", "WMS/TMS systems proficiency", "CILT certification preferred"],
    arabicRequirements: ["أكثر من 8 سنوات في اللوجستيات/سلاسل التوريد", "خبرة عمليات في منطقة الخليج مطلوبة", "إتقان أنظمة WMS/TMS", "شهادة CILT مفضلة"]
  },
  {
    id: "j3",
    title: "Industrial Plant Supervisor",
    arabicTitle: "مشرف منشأة صناعية",
    department: "Industrial",
    arabicDepartment: "الصناعة",
    location: "Jubail, Saudi Arabia",
    arabicLocation: "الجبيل، المملكة العربية السعودية",
    type: "Full-time",
    arabicType: "دوام كامل",
    description: "Manage daily operations of a steel manufacturing facility with 400-employee workforce.",
    arabicDescription: "إدارة العمليات اليومية لمنشأة تصنيع الصلب بقوى عاملة تضم 400 موظف.",
    requirements: ["7+ years plant operations experience", "Steel or petrochemical background", "NEBOSH HSE certification", "Bilingual English/Arabic"],
    arabicRequirements: ["أكثر من 7 سنوات خبرة في تشغيل المنشآت", "خلفية في الصلب أو البتروكيماويات", "شهادة NEBOSH للسلامة والصحة المهنية", "ثنائي اللغة الإنجليزية/العربية"]
  },
  {
    id: "j4",
    title: "Commodity Trader – Energy",
    arabicTitle: "متداول سلع - الطاقة",
    department: "Trading",
    arabicDepartment: "التجارة",
    location: "Abu Dhabi, UAE",
    arabicLocation: "أبوظبي، الإمارات العربية المتحدة",
    type: "Full-time",
    arabicType: "دوام كامل",
    description: "Execute energy commodity trades across GCC markets, manage risk, and develop counterparty relationships.",
    arabicDescription: "تنفيذ صفقات سلع الطاقة في أسواق الخليج وإدارة المخاطر وتطوير علاقات الأطراف المقابلة.",
    requirements: ["5+ years commodity trading experience", "Energy sector focus (oil, gas, LNG)", "CFA or CAIA certification a plus", "Bloomberg/Reuters terminals proficiency"],
    arabicRequirements: ["أكثر من 5 سنوات خبرة في تداول السلع", "تركيز على قطاع الطاقة (نفط، غاز، LNG)", "شهادة CFA أو CAIA ميزة إضافية", "إتقان أطراف Bloomberg/Reuters"]
  },
  {
    id: "j5",
    title: "Technical Services Engineer",
    arabicTitle: "مهندس الخدمات الفنية",
    department: "Technical Services",
    arabicDepartment: "الخدمات الفنية",
    location: "Kuwait City, Kuwait",
    arabicLocation: "مدينة الكويت، الكويت",
    type: "Contract",
    arabicType: "عقد",
    description: "Provide on-site engineering support and maintenance management for industrial clients.",
    arabicDescription: "تقديم دعم هندسي ميداني وإدارة الصيانة للعملاء الصناعيين.",
    requirements: ["5+ years maintenance engineering experience", "HVAC, electrical, or mechanical specialty", "CMMS software proficiency", "Available for site rotations"],
    arabicRequirements: ["أكثر من 5 سنوات خبرة في هندسة الصيانة", "تخصص HVAC أو كهربائي أو ميكانيكي", "إتقان برامج CMMS", "متاح للتناوب في المواقع"]
  },
  {
    id: "j6",
    title: "Graduate Trainee – Business Development",
    arabicTitle: "متدرب خريج - تطوير الأعمال",
    department: "Corporate",
    arabicDepartment: "الشركة",
    location: "Riyadh, Saudi Arabia",
    arabicLocation: "الرياض، المملكة العربية السعودية",
    type: "Full-time",
    arabicType: "دوام كامل",
    description: "Two-year rotational program covering all five business sectors, leading to a permanent role.",
    arabicDescription: "برنامج تناوب لمدة عامين يغطي القطاعات الخمسة للأعمال ويؤدي إلى دور دائم.",
    requirements: ["Bachelor's degree in Business, Engineering, or Finance", "GPA 3.5+ or equivalent", "GCC national preferred", "Fluent in English and Arabic"],
    arabicRequirements: ["درجة بكالوريوس في الأعمال أو الهندسة أو المالية", "معدل تراكمي 3.5 أو ما يعادله", "من دول الخليج مفضل", "إجادة اللغتين العربية والإنجليزية"]
  }
];

export const mockProducts = [
  { id: "pr1", name: "Structural Steel Beams (HEA/HEB)", arabicName: "عوارض الصلب الإنشائية (HEA/HEB)", category: "Industrial Materials", arabicCategory: "مواد صناعية", description: "Hot-rolled structural steel sections for commercial and industrial construction.", arabicDescription: "قطاعات فولاذية مدرفلة على الساخن للبناء التجاري والصناعي.", specs: "Grade S275/S355 | Lengths up to 18m", arabicSpecs: "الدرجة S275/S355 | أطوال تصل إلى 18م" },
  { id: "pr2", name: "Carbon Steel Pipes", arabicName: "أنابيب الصلب الكربوني", category: "Industrial Materials", arabicCategory: "مواد صناعية", description: "Seamless and welded carbon steel pipes for oil, gas, and water applications.", arabicDescription: "أنابيب فولاذية كربونية ملحومة وغير ملحومة لتطبيقات النفط والغاز والمياه.", specs: "OD 21.3–508mm | ASTM A106/A53", arabicSpecs: "قطر خارجي 21.3–508مم | ASTM A106/A53" },
  { id: "pr3", name: "Industrial Generator Sets", arabicName: "مجموعات مولدات صناعية", category: "Power Equipment", arabicCategory: "معدات الطاقة", description: "Heavy-duty diesel generators for continuous industrial power supply.", arabicDescription: "مولدات ديزل ثقيلة للإمداد المستمر بالطاقة الصناعية.", specs: "100kVA–3000kVA | Perkins/Cummins engines", arabicSpecs: "100–3000 كيلوفولت أمبير | محركات Perkins/Cummins" },
  { id: "pr4", name: "Mobile Hydraulic Cranes", arabicName: "روافع هيدروليكية متنقلة", category: "Heavy Equipment", arabicCategory: "معدات ثقيلة", description: "All-terrain cranes for construction and industrial lifting operations.", arabicDescription: "رافعات للتضاريس الوعرة لعمليات الرفع في البناء والصناعة.", specs: "50–500 tonne capacity | Liebherr/Tadano", arabicSpecs: "طاقة 50–500 طن | Liebherr/Tadano" },
  { id: "pr5", name: "Overhead Bridge Cranes", arabicName: "روافع جسرية علوية", category: "Heavy Equipment", arabicCategory: "معدات ثقيلة", description: "Fixed overhead cranes for factory and warehouse material handling.", arabicDescription: "روافع علوية ثابتة لمناولة المواد في المصانع والمستودعات.", specs: "5–100 tonne SWL | Spans up to 32m", arabicSpecs: "حمولة 5–100 طن | فترات تصل إلى 32م" },
  { id: "pr6", name: "Industrial Air Compressors", arabicName: "ضواغط هواء صناعية", category: "Power Equipment", arabicCategory: "معدات الطاقة", description: "Rotary screw and piston compressors for high-demand industrial applications.", arabicDescription: "ضواغط برغي دوارة وكباسية للتطبيقات الصناعية عالية الطلب.", specs: "7–30 bar | 5–200 kW drive motors", arabicSpecs: "7–30 بار | محركات 5–200 كيلوواط" },
  { id: "pr7", name: "Container Forklifts", arabicName: "رافعات شوكية للحاويات", category: "Logistics Equipment", arabicCategory: "معدات لوجستية", description: "Heavy-duty forklifts rated for container yard and port operations.", arabicDescription: "رافعات شوكية ثقيلة مصممة لعمليات ميادين الحاويات والموانئ.", specs: "8–45 tonne capacity | Diesel/LPG", arabicSpecs: "طاقة 8–45 طن | ديزل/غاز بترولي مسال" },
  { id: "pr8", name: "Automated Pallet Racking", arabicName: "رفوف آلية للبالتات", category: "Warehousing", arabicCategory: "التخزين", description: "Selective and drive-in racking systems for high-density warehouse storage.", arabicDescription: "أنظمة رفوف انتقائية وذات مسار لتخزين المستودعات عالي الكثافة.", specs: "Load up to 4,000 kg/level | Heights to 12m", arabicSpecs: "حمولة تصل إلى 4,000 كجم/مستوى | ارتفاعات تصل إلى 12م" },
  { id: "pr9", name: "Conveyor Belt Systems", arabicName: "أنظمة ناقلة الحزام", category: "Industrial Materials", arabicCategory: "مواد صناعية", description: "Modular belt conveyors for bulk material handling in industrial plants.", arabicDescription: "ناقلات حزام معيارية لمناولة المواد السائبة في المنشآت الصناعية.", specs: "Widths 500–2,000mm | Speeds to 4 m/s", arabicSpecs: "عرض 500–2,000مم | سرعات تصل إلى 4 م/ث" },
  { id: "pr10", name: "Flat-Bed Semi-Trailers", arabicName: "نصف مقطورات مسطحة الصندوق", category: "Logistics Equipment", arabicCategory: "معدات لوجستية", description: "Heavy-haul trailers for oversized and project cargo transport.", arabicDescription: "مقطورات نقل الأحمال الثقيلة للشحنات الضخمة والمشاريع.", specs: "Up to 80 tonne payload | Extendable options", arabicSpecs: "حمولة تصل إلى 80 طن | خيارات قابلة للتمديد" },
  { id: "pr11", name: "Electric Transformers", arabicName: "محولات كهربائية", category: "Power Equipment", arabicCategory: "معدات الطاقة", description: "Step-up/step-down power transformers for industrial and utility substations.", arabicDescription: "محولات طاقة رافعة/خافضة للمحطات الصناعية والمرافق العامة.", specs: "11kV–132kV | Oil & dry-type", arabicSpecs: "11–132 كيلوفولت | زيتية وجافة" },
  { id: "pr12", name: "Safety & PPE Supplies", arabicName: "معدات السلامة ومستلزمات الوقاية", category: "Safety Equipment", arabicCategory: "معدات السلامة", description: "Full range of personal protective equipment and site safety materials.", arabicDescription: "مجموعة كاملة من معدات الحماية الشخصية ومواد سلامة المواقع.", specs: "EN/ANSI certified | Hard hats, harnesses, eyewear", arabicSpecs: "معتمدة EN/ANSI | خوذات وتسخير ونظارات" },
  { id: "pr13", name: "Water Treatment Plants", arabicName: "محطات معالجة المياه", category: "Industrial Materials", arabicCategory: "مواد صناعية", description: "Modular desalination and water recycling systems for industrial use.", arabicDescription: "أنظمة تحلية مياه وإعادة تدوير معيارية للاستخدام الصناعي.", specs: "1,000–50,000 m³/day capacity", arabicSpecs: "طاقة 1,000–50,000 م³/يوم" },
  { id: "pr14", name: "Pre-engineered Steel Buildings", arabicName: "مباني فولاذية مهندسة مسبقاً", category: "Construction", arabicCategory: "البناء والتشييد", description: "Custom-designed prefab steel structures for warehouses and factories.", arabicDescription: "هياكل فولاذية مسبقة الصنع مصممة حسب الطلب للمستودعات والمصانع.", specs: "Spans up to 80m | 30-year structural warranty", arabicSpecs: "فترات تصل إلى 80م | ضمان هيكلي 30 عاماً" },
  { id: "pr15", name: "Automated Gate Systems", arabicName: "أنظمة بوابات آلية", category: "Logistics Equipment", arabicCategory: "معدات لوجستية", description: "RFID-integrated gate management systems for logistics parks and ports.", arabicDescription: "أنظمة إدارة بوابات مدمجة بتقنية RFID لمنتزهات اللوجستيات والموانئ.", specs: "RFID + ANPR | 99.8% uptime SLA", arabicSpecs: "RFID + ANPR | اتفاقية خدمة 99.8% وقت تشغيل" }
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
