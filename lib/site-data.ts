export type Project = {
  id: string;
  name: string;
  category: string;
  year?: string;
  summary: string;
  role: string;
  focus: string;
  technologies: string[];
  visual?: "koinovera" | "vision" | "skye-health" | "copyyt";
  screenshots?: { src: string; label: string }[];
  status?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
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
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export const projects: Project[] = [
  {
    id: "koinovera", name: "Koinovera", category: "Evidence platform / Product", year: "2026",
    summary: "A community-powered platform for collecting and evaluating evidence around claims and topics.",
    role: "Founder / Engineer", focus: "Product design, frontend, backend APIs, and search-assisted evidence tooling.",
    technologies: ["React", "NestJS", "PostgreSQL"], visual: "koinovera", status: "Live",
    liveUrl: "https://koinovera.com/",
    screenshots: [
      { src: "/projects/koinovera/home.jpg", label: "Home" },
      { src: "/projects/koinovera/claim.jpg", label: "Claim" },
      { src: "/projects/koinovera/category.jpg", label: "Category" },
      { src: "/projects/koinovera/create-claim.jpg", label: "Create claim" },
    ],
  },
  {
    id: "ph-otakus", name: "PH Otakus", category: "Community platform / Open source", year: "2026",
    summary: "The web platform for the Port Harcourt otaku community: events and RSVPs, member profiles, gallery archives and community stories.",
    role: "Engineer", focus: "Member profiles and directory, event RSVPs with Otaku Passport badges, Google sign-in, R2 media uploads, and an admin CMS.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Auth.js", "Cloudflare R2"], status: "Live",
    liveUrl: "https://ph.otaku.ng/", githubUrl: "https://github.com/otaku-ng/portharcourt",
    screenshots: [
      { src: "/projects/ph-otakus/home.jpg", label: "Home" },
      { src: "/projects/ph-otakus/events.jpg", label: "Events" },
      { src: "/projects/ph-otakus/community.jpg", label: "Community" },
      { src: "/projects/ph-otakus/blog.jpg", label: "Stories" },
    ],
  },
  {
    id: "vision-display", name: "Vision Display", category: "Assistive computing / Research", year: "2026",
    summary: "A mobile computer-vision application built as part of research into smart-glasses assistance for people with low vision.",
    role: "Research / Engineer", focus: "External camera display, OCR, viewport controls, and face-recognition experiments.",
    technologies: ["Computer vision", "Mobile", "OCR"], visual: "vision", status: "Research project",
  },
  {
    id: "skye-health", name: "Skye Health / PROMease", category: "Digital health / Client work",
    summary: "A platform for monitoring post-operative recovery through patient-reported outcomes and clinical follow-up workflows.",
    role: "Software engineer", focus: "Procedure-specific outcome collection, care timelines, and clinical data presentation.",
    technologies: ["FHIR", "SNOMED CT", "Analytics"], visual: "skye-health", status: "Live",
    liveUrl: "https://skyehealth.net/",
    screenshots: [
      { src: "/projects/skye-health/home.jpg", label: "Home" },
      { src: "/projects/skye-health/solution.jpg", label: "Clinician view" },
      { src: "/projects/skye-health/how-it-works.jpg", label: "How it works" },
      { src: "/projects/skye-health/benefits.jpg", label: "Benefits" },
    ],
  },
  {
    id: "copyyt", name: "Copyyt", category: "Utility / Experiment", year: "2024",
    summary: "A lightweight cross-device clipboard experiment for moving copied text between devices.",
    role: "Product engineer", focus: "A low-friction browser extension and cross-device text transfer.",
    technologies: ["Chrome Extension", "JavaScript", "Web APIs"], visual: "copyyt",
    liveUrl: "https://copyyt.com/", status: "Live",
    screenshots: [
      { src: "/projects/copyyt/home.jpg", label: "Home" },
      { src: "/projects/copyyt/how-it-works.jpg", label: "How it works" },
      { src: "/projects/copyyt/security.jpg", label: "Security" },
      { src: "/projects/copyyt/sync-modes.jpg", label: "Sync modes" },
    ],
  },
];

export const professionalProjects: Project[] = [
  { id: "health-anchor", name: "Health Anchor", category: "Healthtech", summary: "A digital pathway platform for clinical appointment booking and referrals.", role: "Software engineer", focus: "Booking, reporting, EHR interoperability, and APIs.", technologies: ["Care pathways", "FHIR", "APIs"], liveUrl: "https://healthanchor.co.uk/" },
  { id: "rie-ticket", name: "Rie Ticket", category: "Event technology", summary: "An event ticketing experience with a clear purchase flow and online payments.", role: "Frontend engineer", focus: "Event discovery and payment interactions.", technologies: ["React", "Paystack", "JavaScript"] },
  { id: "billza", name: "Billza", category: "Fintech", summary: "A utility and bill payment platform connected to provider services.", role: "Full-stack engineer", focus: "Payment and utility-provider integrations.", technologies: ["Django", "Monnify", "Tiqwa"] },
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
