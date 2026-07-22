export type Project = {
  id:
    | "copyyt"
    | "skye-health"
    | "health-anchor"
    | "solidray"
    | "rie-ticket"
    | "billza";
  name: string;
  eyebrow: string;
  summary: string;
  role: string;
  challenge: string;
  outcome: string;
  technologies: string[];
  liveUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  arrangement?: string;
  summary: string;
  contributions: string[];
  technologies: string[];
};

export type Capability = {
  index: string;
  title: string;
  description: string;
  technologies: string[];
};

export const siteLinks = {
  email: "mailto:me@psami.com",
  github: "https://github.com/Psami-wondah",
  linkedin: "https://www.linkedin.com/in/okechukwu-samuel-owhondah-660328208/",
  twitter: "https://x.com/psami_",
  resume: "/resume.pdf",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const projects: Project[] = [
  // {
  //   id: "copyyt",
  //   name: "Copyyt",
  //   eyebrow: "Browser extension · Product",
  //   summary:
  //     "A focused cross-device clipboard that makes copied text available wherever you need it.",
  //   role: "Product engineer",
  //   challenge:
  //     "Designing a low-friction browser extension workflow for moving text between devices.",
  //   outcome:
  //     "A released Chrome extension product, last documented at version 1.2.",
  //   technologies: ["Chrome Extension", "JavaScript", "Web APIs"],
  //   liveUrl: "https://copyyt.psami.com",
  // },
  {
    id: "skye-health",
    name: "Skye Health / PROMease",
    eyebrow: "Digital health · Clinical analytics",
    summary:
      "A cloud platform that combines clinical data with patient-reported outcomes to turn feedback into actionable surgical insights.",
    role: "Software engineer",
    challenge:
      "Making procedure-specific outcome collection, care timelines, and clinical analysis work as one coherent workflow.",
    outcome:
      "Secure PROM collection, real-time patient data, and analytics designed for clinical governance and research.",
    technologies: ["Healthcare data", "FHIR", "SNOMED", "Analytics"],
    liveUrl: "https://skyehealth.net/",
  },
  {
    id: "health-anchor",
    name: "Health Anchor",
    eyebrow: "Healthtech · Pathway management",
    summary:
      "An intelligent digital pathway platform for automating clinical appointment booking and reducing operational friction.",
    role: "Software engineer",
    challenge:
      "Supporting configurable healthcare pathways while keeping booking, referrals, and clinical data interoperable.",
    outcome:
      "CareCalendar booking, reporting, EHR interoperability, and APIs for integration into existing services.",
    technologies: ["Care pathways", "FHIR", "SNOMED CT", "APIs"],
    liveUrl: "https://healthanchor.co.uk/",
  },
  // {
  //   id: "solidray",
  //   name: "Solidray",
  //   eyebrow: "Web3 · Digital assets",
  //   summary:
  //     "A blockchain ecosystem designed to bring exchange, marketplace, launchpad, and learning experiences into one product.",
  //   role: "Software engineer",
  //   challenge:
  //     "Creating an approachable secondary-market experience for both experienced crypto users and newcomers.",
  //   outcome:
  //     "A unified product direction spanning custodial and non-custodial exchange, NFTs, launches, and education.",
  //   technologies: ["Web3", "Digital assets", "Exchange", "NFT marketplace"],
  //   liveUrl: "https://solidray.io/",
  // },
  {
    id: "rie-ticket",
    name: "Rie Ticket",
    eyebrow: "Event technology · Web app",
    summary:
      "An event ticketing experience built around a clear purchase flow and online payments.",
    role: "Frontend engineer",
    challenge:
      "Keeping event discovery and payment interactions coherent across the purchase journey.",
    outcome: "A React ticketing product with Paystack payment integration.",
    technologies: ["React", "Paystack", "JavaScript"],
  },
  {
    id: "billza",
    name: "Billza",
    eyebrow: "Fintech · Full-stack",
    summary:
      "A utility and bill payment platform connecting everyday payments to provider services.",
    role: "Full-stack engineer",
    challenge:
      "Coordinating payment and utility-provider integrations behind a dependable user flow.",
    outcome: "A Django-based platform integrated with Monnify and Tiqwa.",
    technologies: ["Django", "Monnify", "Tiqwa"],
  },
];

export const experience: Experience[] = [
  {
    company: "Zimmerman B.V",
    role: "Frontend Engineer",
    location: "Netherlands",
    arrangement: "Remote",
    summary:
      "Built data-rich React interfaces and the frontend systems that support them.",
    contributions: [
      "Developed TypeScript product interfaces and data visualisations with Apache ECharts and D3.",
      "Integrated Auth0, Strapi localisation, Cypress coverage, and performance-oriented services.",
    ],
    technologies: ["React", "TypeScript", "D3", "ECharts", "Cypress"],
  },
  {
    company: "Techsemester",
    role: "Full-Stack Engineer",
    location: "Nigeria",
    arrangement: "Remote",
    summary:
      "Shipped product features across React applications and Django services.",
    contributions: [
      "Implemented authentication flows and Firebase Cloud Messaging notifications.",
      "Dockerised services for AWS EC2 and supported delivery with GitHub Actions.",
    ],
    technologies: ["React", "Django", "Firebase", "Docker", "AWS"],
  },
  {
    company: "Alajo",
    role: "Full-Stack Engineer",
    location: "Lagos, Nigeria",
    summary:
      "Worked on location-aware product features, operations tooling, and customer communication.",
    contributions: [
      "Built live location tracking with Google Maps and Firebase.",
      "Created React and Next.js dashboards with Chart.js, SMS, and USSD integrations.",
    ],
    technologies: ["Next.js", "Firebase", "Google Maps", "Chart.js"],
  },
  {
    company: "Selected contracts",
    role: "Software Engineer",
    location: "Remote",
    summary:
      "Delivered focused frontend and backend systems for MyQuba and Duduzili.",
    contributions: [
      "Built server-rendered Next.js experiences and Docker deployments for MyQuba.",
      "Developed Django APIs and real-time WebSocket features for Duduzili.",
    ],
    technologies: ["Next.js", "Django", "WebSockets", "Docker"],
  },
];

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Frontend engineering",
    description:
      "Scalable component architecture, responsive systems, accessible interaction, and performance-minded delivery.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Product interfaces",
    description:
      "Turning complex workflows into clear, resilient interfaces that are comfortable to use and maintain.",
    technologies: ["Design systems", "Auth0", "Strapi", "i18n"],
  },
  {
    index: "03",
    title: "Data visualisation",
    description:
      "Interactive visual explanations for dense operational and product data.",
    technologies: ["D3", "Apache ECharts", "Chart.js"],
  },
  {
    index: "04",
    title: "Backend and APIs",
    description:
      "Practical service design, authentication, integrations, and real-time features.",
    technologies: ["Django", "FastAPI", "NestJS", "PostgreSQL"],
  },
  {
    index: "05",
    title: "Testing and quality",
    description:
      "Automated checks and engineering habits that make change safer and releases calmer.",
    technologies: ["Cypress", "TDD", "TypeScript", "GitHub Actions"],
  },
  {
    index: "06",
    title: "Infrastructure and delivery",
    description:
      "Containerised applications and repeatable paths from code to production.",
    technologies: ["Docker", "AWS", "CI/CD", "Redis"],
  },
];

export const principles = [
  "Build for users, not screenshots.",
  "Make complex systems understandable.",
  "Treat performance as a product feature.",
  "Design components for change.",
  "Prefer dependable engineering over unnecessary complexity.",
] as const;

export const education = [
  {
    degree: "MSc, Computing (Software Engineering)",
    school: "University of Northampton",
    location: "United Kingdom",
  },
  {
    degree: "BEng, Electrical & Electronics Engineering",
    school: "Federal University of Technology, Owerri",
    location: "Nigeria",
  },
] as const;
