interface TeamMember {
  name: string;
  title: string;
  education: string;
  image: string;
  description: string;
  additionalInfo?: string;
  socialLinks?: {
    twitter: string;
    linkedin: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Blessing Omoregle",
    title: "Chief Executive Officer, SEO Africa",
    education: "SEO London Alumni, 2005",
    image: "/team1.png",
    description:
      "Blessing Omoregle is an SEO London Alumna who began her career in Markets & Investment Services at J.P. Morgan. She later served as Head of Business Development for SEO Africa, leading new initiatives in Nigeria before becoming CEO in 2020.\n\nUnder her leadership, the organisation has expanded significantly in both partnerships and scope.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Edgar Seah",
    title: "Co-Founder, Director, SEO Africa",
    education: "SEO New York Alumni, 2001",
    image: "/team2.png",
    description:
      "Edgar Seah is a co-founder and director of SEO Africa, bringing extensive experience in organizational leadership and strategic development. His vision has been instrumental in establishing SEO Africa's presence across the continent.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sidumiso Sibanda",
    title: "Director, SEO Africa",
    education: "SEO London Alumni, 2006",
    image: "/team3.png",
    description:
      "Sidumiso serves as Director at SEO Africa, leveraging her experience from the SEO London program to drive organizational growth. She focuses on program development and strategic partnerships across Africa.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Labi Williams",
    title: "Partner, Kuramo Capital Management (NG)",
    education: "SEO New York Alumni, 2002",
    image: "/team1.png",
    description:
      "Labi is a Partner at Kuramo Capital Management, bringing extensive experience in investment management and private equity. His expertise in financial markets strengthens SEO Africa's advisory capabilities.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Randolph Rodrigues",
    title: "Senior Director, MBA at The Hershey Co.",
    education: "SEO New York Alumni, 2002",
    image: "/team2.png",
    description:
      "Randolph serves as Senior Director at The Hershey Company, with deep expertise in business development and strategic operations. His corporate leadership experience guides SEO Africa's organizational development.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Funke Ijayja-Oladipo",
    title: "Head, Equity Capital Markets, Stanbic IBTC",
    education: "SEO London Alumni, 2005",
    image: "/team3.png",
    description:
      "Funke leads Equity Capital Markets at Stanbic IBTC, bringing extensive experience in financial services and capital markets. Her expertise in African financial markets provides valuable strategic insight.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Devhish Shah",
    title: "Board Liaison, Int'l SEO Organizations",
    education: "SEO New York Alumni, 1998",
    image: "/team1.png",
    description:
      "Devhish serves as Board Liaison for International SEO Organizations, facilitating global partnerships and knowledge sharing. His role ensures alignment with international SEO network standards and best practices.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "John Gadzi",
    title: "MD, Sentient Global Partners (UK) Limited",
    education: "SEO New York Alumni, 1999",
    image: "/team2.png",
    description:
      "John is Managing Director at Sentient Global Partners, with extensive experience in international business and strategic consulting. His global perspective enhances SEO Africa's international partnerships and expansion strategies.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Chukuka Chukuma",
    title: "Co-founder/Partner Race course Capital NG",
    education: "SEO New York Alumni, 1996",
    image: "/team3.png",
    description:
      "Chukuka is Co-founder and Partner at Race course Capital, bringing deep expertise in investment management and entrepreneurship. His entrepreneurial experience guides SEO Africa's innovation and growth initiatives.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

export const topRowImages = [
  {
    id: 1,
    src: "/about_image1.png",
    alt: "SEO Africa team networking event",
  },
  {
    id: 2,
    src: "/about_image2.png",
    alt: "SEO Africa presentation ceremony",
  },
  {
    id: 3,
    src: "/blog_image1.png",
    alt: "Bank of America partnership event",
  },
  {
    id: 4,
    src: "/blog_image2.png",
    alt: "SEO Africa team dinner",
  },
  {
    id: 5,
    src: "/blog_image3.png",
    alt: "SEO Africa networking session",
  },
  {
    id: 6,
    src: "/joinTalentNetwork.png",
    alt: "SEO Africa team meeting",
  },
];

export const bottomRowImages = [
  {
    id: 7,
    src: "/blog_image3.png",
    alt: "SEO Africa speaking event",
  },
  {
    id: 8,
    src: "/blog_image2.png",
    alt: "SEO Africa celebration",
  },
  {
    id: 9,
    src: "/blog_image1.png",
    alt: "SEO Africa leadership meeting",
  },
  {
    id: 10,
    src: "/blog_image1.png",
    alt: "SEO Africa conference",
  },
  {
    id: 11,
    src: "/joinTalentNetwork.png",
    alt: "SEO Africa team workshop",
  },
  {
    id: 12,
    src: "/blog_image2.png",
    alt: "SEO Africa networking mixer",
  },
];

export const statsCards = [
  {
    id: "students",
    defaultImage: "/defaul2.png",
    hoverImage: "/default-hover2.png",
    alt: "39,000+ Students upskilled",
    gridArea: "students",
  },
  {
    id: "center-team",
    defaultImage: "/default1.png",
    hoverImage: "/default-hover1.png",
    alt: "Professional team image",
    gridArea: "center-team",
  },
  {
    id: "countries",
    defaultImage: "/default5.png",
    hoverImage: "/default-hover5.png",
    alt: "17+ African countries inspired",
    gridArea: "countries",
  },
  {
    id: "retention",
    defaultImage: "/default6.png",
    hoverImage: "/default-hover6.png",
    alt: "85% Average retention of trainees",
    gridArea: "retention",
  },
  {
    id: "partners",
    defaultImage: "/default3.png",
    hoverImage: "/default-hover3.png",
    alt: "30+ Corporate access partners",
    gridArea: "partners",
  },
  {
    id: "alumni",
    defaultImage: "/default4.png",
    hoverImage: "/default-hover4.png",
    alt: "11,000+ Robust Alumni network",
    gridArea: "alumni",
  },
  {
    id: "projects",
    defaultImage: "/default8.png",
    hoverImage: "/default-hover8.png",
    alt: "12+ Projects completed through SEO Cares",
    gridArea: "projects",
  },
  {
    id: "completion",
    defaultImage: "/default7.png",
    hoverImage: "/default-hover7.png",
    alt: "92% Programme Completion Rate",
    gridArea: "completion",
  },
];

export  const testimonials = [
  {
    id: 1,
    name: "Chinenye Akunna",
    company: "Genser Energy - SEO Africa Alumni 2021",
    text: "SEO-Africa has been a life changing experience for me. The Programme gave me clarity in my career and grew my confidence and social skills. The entire experience from the trainings, access, mentorship to my partner firm has been wonderful. Working at Argentil Group has widened my knowledge in the oil and gas sector, structuring deals, energy advisory and private equity.",
    avatar: "/testimonial1.png",
    initial: "C",
  },
  {
    id: 2,
    name: "Samuel Johnson",
    company: "McKinsey & Company - SEO Africa Alumni 2020",
    text: "The program opened doors I never thought possible. The mentorship and professional development sessions equipped me with skills that directly contributed to my success in consulting. The network I built continues to be invaluable in my career journey.",
    avatar: "/testimonial2.png",
    initial: "S",
  },
  {
    id: 3,
    name: "Fatima Al-Rashid",
    company: "Goldman Sachs - SEO Africa Alumni 2022",
    text: "SEO Africa transformed my understanding of investment banking and finance. The rigorous training and exposure to industry leaders gave me the confidence to pursue opportunities I previously thought were out of reach. Now I'm thriving in one of the world's top financial institutions.",
    avatar: "/testimonial3.png",
    initial: "F",
  },
  {
    id: 4,
    name: "David Okonkwo",
    company: "Deloitte - SEO Africa Alumni 2021",
    text: "The practical skills and professional network I gained through SEO Africa have been game-changers in my career. The program didn't just teach me about business - it taught me how to navigate corporate environments with confidence and authenticity.",
    avatar: "/testimonial4.png",
    initial: "D",
  },
  {
    id: 5,
    name: "Amara Sesay",
    company: "Boston Consulting Group - SEO Africa Alumni 2019",
    text: "SEO Africa provided me with more than just career opportunities - it gave me a community of driven, ambitious professionals who continue to inspire and support each other. The program's impact extends far beyond the classroom into real career transformation.",
    avatar: "/testimonial2.png",
    initial: "A",
  },
];

export const programmesData = [
  {
    slug: "graduate-trainee-nigeria",
    title: "Graduate Trainee Programme: Nigeria In-Country",
    country: "Nigeria",
    countryCode: "NG",
    flagSrc: "/nigeria.svg",
    bgColor: "bg-[#77C7AF14]",
    badgeColor: "bg-[#067A57]",
    image: "/our_programmes.png",
    description: "This program addresses Africa's unemployment by bridging skill gaps for undergraduates, offering career guidance, and improving job market information.",
    features: [
      "Live coaching, Expert guidance, Real and updated curriculum.",
      "Starting August 2025"
    ]
  },
  {
    slug: "graduate-trainee-ghana", 
    title: "Graduate Trainee Programme: Ghana In-Country",
    country: "Ghana",
    countryCode: "GH",
    flagSrc: "/ghana.svg", 
    bgColor: "bg-[#F3EAD233]",
    badgeColor: "bg-[#E0BE70]",
    image: "/donate_image2.png",
    description: "This program addresses Africa's unemployment by bridging skill gaps for undergraduates, offering career guidance, and improving job market information.",
    features: [
      "Live coaching, Expert guidance, Real and updated curriculum.",
      "Starting August 2025"
    ]
  },
  {
    slug: "global-pathways",
    title: "Global Pathways Programme", 
    country: "Global",
    countryCode: "GL",
    flagSrc: "/global-flag.svg",
    bgColor: "bg-[#8499FF14]",
    badgeColor: "bg-[#8499FF]",
    image: "/our_programmes.png",
    description: "This program addresses Africa's unemployment by bridging skill gaps for undergraduates, offering career guidance, and improving job market information.",
    features: [
      "Live coaching, Expert guidance, Real and updated curriculum.",
      "Starting August 2025"
    ]
  },
  {
    slug: "on-campus",
    title: "SEO Africa On-Campus Programme",
    country: "Multi-Country", 
    countryCode: "MC",
    flagSrc: "/africa-flag.svg",
    bgColor: "bg-[#D2B2FF0D]",
    badgeColor: "bg-[#D2B2FF]",
    image: "/donate_image2.png",
    description: "This program addresses Africa's unemployment by bridging skill gaps for undergraduates, offering career guidance, and improving job market information.",
    features: [
      "Live coaching, Expert guidance, Real and updated curriculum.",
      "Starting August 2025"
    ]
  },
  {
    slug: "achievers-incubator",
    title: "SEO Africa Achievers Incubator Programme",
    country: "Pan-African",
    countryCode: "PA", 
    flagSrc: "/pan-africa-flag.svg",
    bgColor: "bg-[#8499FF14]",
    badgeColor: "bg-[#8499FF]",
    image: "/our_programmes.png",
    description: "This program addresses Africa's unemployment by bridging skill gaps for undergraduates, offering career guidance, and improving job market information.",
    features: [
      "Live coaching, Expert guidance, Real and updated curriculum.",
      "Starting August 2025"
    ]
  },
  {
    slug: "innovather",
    title: "SEO Africa InnovatHer Programme",
    country: "Africa-wide",
    countryCode: "AW",
    flagSrc: "/africa-flag.svg",
    bgColor: "bg-[#D2B2FF0D]",
    badgeColor: "bg-[#D2B2FF]", 
    image: "/donate_image2.png",
    description: "This program addresses Africa's unemployment by bridging skill gaps for undergraduates, offering career guidance, and improving job market information.",
    features: [
      "Live coaching, Expert guidance, Real and updated curriculum.",
      "Starting August 2025"
    ]
  },
  {
    slug: "mba-launchpad",
    title: "SEO Africa MBA Launchpad",
    country: "International",
    countryCode: "IN",
    flagSrc: "/international-flag.svg", 
    bgColor: "bg-[#3051F30D]",
    badgeColor: "bg-[#3051F3]",
    image: "/our_programmes.png",
    description: "This program addresses Africa's unemployment by bridging skill gaps for undergraduates, offering career guidance, and improving job market information.",
    features: [
      "Live coaching, Expert guidance, Real and updated curriculum.",
      "Starting August 2025"
    ]
  }
];

export const mockProjects = [
  {
    id: 1,
    title: "Inspiring Greatness through mentorship at Hope City Orphanage",
    organization: "SEO Africa 2013 (GH)",
    date: "April 12, 2024",
    location: "Ghana",
    image: "/seocares1.png",
    categories: ["Climate change", "Environment"],
    featured: true,
  },
  {
    id: 2,
    title: "STEM Training Exercises for Young Minds",
    organization: "SEO Africa 2023 Ghana",
    date: "November 20, 2024",
    location: "Ghana",
    image: "/seocares1.png",
    categories: ["STEM Education", "Kids"],
  },
  {
    id: 3,
    title: "Environmental Conservation Workshop",
    organization: "SEO Africa 2022 Ghana",
    date: "November 20, 2024",
    location: "Ghana",
    image: "/seocares2.png",
    categories: ["Climate change", "Environment"],
  },
  {
    id: 4,
    title: "Youth Climate Action Initiative",
    organization: "SEO Africa 2022 Ghana",
    date: "November 20, 2024",
    location: "Ghana",
    image: "/seocares3.png",
    categories: ["Climate change", "Environment"],
  },
  {
    id: 5,
    title: "Advanced STEM Learning Program",
    organization: "SEO Africa 2023 Ghana",
    date: "November 20, 2024",
    location: "Ghana",
    image: "/seocares1.png",
    categories: ["STEM Education", "Kids"],
  },
  {
    id: 6,
    title: "Community Tech Workshop",
    organization: "SEO Africa 2023 Ghana",
    date: "November 20, 2024",
    location: "Ghana",
    image: "/seocares2.png",
    categories: ["STEM Education", "Kids"],
  },
  {
    id: 7,
    title: "Green Energy Awareness Campaign",
    organization: "SEO Africa 2022 Ghana",
    date: "November 20, 2024",
    location: "Ghana",
    image: "/seocares3.png",
    categories: ["Climate change", "Environment"],
  },
  {
    id: 8,
    title: "Coding Bootcamp for Children",
    organization: "SEO Africa 2023 Ghana",
    date: "November 15, 2024",
    location: "Ghana",
    image: "/seocares1.png",
    categories: ["STEM Education", "Kids"],
  },
  {
    id: 9,
    title: "Ocean Conservation Project",
    organization: "SEO Africa 2022 Ghana",
    date: "October 30, 2024",
    location: "Ghana",
    image: "/seocares2.png",
    categories: ["Environment"],
  },
  {
    id: 10,
    title: "Digital Literacy for Rural Communities",
    organization: "SEO Africa 2023 Ghana",
    date: "October 25, 2024",
    location: "Ghana",
    image: "/seocares3.png",
    categories: ["STEM Education"],
  },
  {
    id: 11,
    title: "Renewable Energy Workshop",
    organization: "SEO Africa 2022 Ghana",
    date: "October 20, 2024",
    location: "Ghana",
    image: "/seocares1.png",
    categories: ["Environment", "Climate change"],
  },
  {
    id: 12,
    title: "Mathematics Olympiad Training",
    organization: "SEO Africa 2023 Ghana",
    date: "October 15, 2024",
    location: "Ghana",
    image: "/seocares2.png",
    categories: ["STEM Education", "Kids"],
  },
];