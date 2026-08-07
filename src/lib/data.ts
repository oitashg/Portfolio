export const site = {
  name: "Oitash Ghosh",
  role: "Software & Data Engineer",
  location: "Salt Lake, Kolkata, India",
  email: "oitashg@gmail.com",
  phone: "+91 91635 85861",
  resume: "/Oitash_Ghosh_Resume.pdf",
  url: "https://oitashghosh.vercel.app",
  tagline:
    "I build data platforms that move billions of records and products people actually ship on.",
  summary: [
    "I'm a final-year Information Technology student at Jadavpur University who splits time between two things I like equally: designing data systems that stay correct at scale, and shipping full-stack products end to end.",
    "At Amazon I built a Spark/EMR data-quality framework validating over a billion records a day across five regions, and re-architected an inventory audit pipeline to 100% parity with the legacy stack. Outside of work I ship production web apps and have solved 1000+ algorithmic problems.",
    "I'm currently open to Software Engineer and Data Engineer roles.",
  ],
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/oitashg", handle: "@oitashg" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oitashg",
    handle: "in/oitashg",
  },
  { label: "LeetCode", href: "https://leetcode.com/u/oitashg", handle: "@oitashg" },
  {
    label: "CodeChef",
    href: "https://www.codechef.com/users/oitashg",
    handle: "@oitashg",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/oitashg",
    handle: "@oitashg",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  href?: string;
  team?: string;
  project?: string;
  blurb: string;
  points: string[];
  stack: string[];
  /** Optional proof-of-work document served from /public. */
  credential?: { label: string; href: string };
};

export const experience: Experience[] = [
  {
    company: "Handshake",
    role: "AI Evaluation Specialist",
    period: "Jul 2026 — Present",
    location: "Remote",
    current: true,
    href: "https://joinhandshake.com",
    blurb:
      "Evaluating and stress-testing frontier model output on software engineering tasks.",
    points: [
      "Evaluate frontier-model responses on software engineering and data tasks, grading correctness, reasoning quality and instruction-following against detailed rubrics.",
      "Author adversarial prompts and reference solutions that surface failure modes in code generation, debugging and multi-step tool use.",
      "Write structured critiques that feed directly into model training signal, with an emphasis on reproducible, evidence-backed judgements.",
    ],
    stack: ["Python", "LLM Evaluation", "Prompt Engineering", "Code Review"],
  },
  {
    company: "Amazon",
    role: "Data Engineer Intern",
    period: "Jan 2026 — Jun 2026",
    location: "Bengaluru, India",
    href: "https://www.amazon.jobs",
    team: "SCOT-AtmtdInvntryMgmt(fka2151) (5528)",
    project:
      "Data Quality and Observability Framework for Large-Scale Data Pipelines Using Apache Spark",
    blurb:
      "Built and migrated petabyte-scale inventory pipelines for the global supply chain org.",
    points: [
      "Designed a Spark/EMR **Data Quality Framework** processing **1 billion+ daily records** across 5 regions, deploying a Z-score anomaly detection model that accelerated data reliability by **25%**.",
      "Migrated **10+ big data pipelines**, resolving Scala build conflicts, and built a Python CLI to bulk-migrate **100+ profiles** — cutting deployment time by **40%**.",
      "Re-architected a **Low Inventory Audit** pipeline serving 11 marketplaces and 20+ data sources, achieving **100% output parity** with the legacy infrastructure.",
      "Developed a **14-day advance notification system** for inventory levels, preventing over **25%** of critical monthly stockout events globally.",
    ],
    stack: ["Spark", "Scala", "Python", "AWS EMR", "SQL", "Airflow"],
    credential: {
      label: "Internship certificate",
      href: "/Amazon_Internship_Certificate.pdf",
    },
  },
];

export type Project = {
  name: string;
  period: string;
  tagline: string;
  points: string[];
  stack: string[];
  live?: string;
  repo?: string;
  accent: "teal" | "indigo";
  metrics: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    name: "ELD Trip Planner",
    period: "Jul 2026",
    tagline:
      "A full-stack hours-of-service planner that turns four trip inputs into a compliant route and auto-generated FMCSA log sheets.",
    points: [
      "Renders a 24-hour duty grid per day in SVG, auto-generating the FMCSA log sheets drivers are legally required to keep.",
      "Dependency-free rules engine encoding six federal driving and rest limits, backed by 20 unit tests and a self-validation pass that flags violations.",
      "Replaced 25 rate-limited geocoding calls per trip with an offline 30,000-city index; Nominatim, OSRM and Leaflet give a zero-API-key map stack.",
    ],
    stack: [
      "React",
      "Django",
      "Django REST Framework",
      "Python",
      "PostgreSQL",
      "Leaflet",
    ],
    live: "https://eld-trip-planner-wheat-ten.vercel.app",
    repo: "https://github.com/oitashg/ELD-Trip-Planner",
    accent: "teal",
    metrics: [
      { value: "6", label: "federal rules encoded" },
      { value: "30k", label: "offline city index" },
      { value: "0", label: "API keys required" },
    ],
  },
  {
    name: "CodeHolic",
    period: "Dec 2024",
    tagline:
      "A role-based EdTech platform with instructor content authoring, payments and full admin control.",
    points: [
      "Built for 500+ students with instructor content creation and comprehensive admin controls over categories and permissions.",
      "Cloudinary-backed media management and Redux global state driving 5+ real-time dashboards for a seamless UX.",
      "Secure JWT auth with role-based access control, plus Razorpay integration for real-time course payments and transaction tracking.",
    ],
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Redux",
      "Node.js",
      "Cloudinary",
      "Razorpay",
    ],
    live: "https://codeholic.vercel.app",
    repo: "https://github.com/oitashg/Codeholic",
    accent: "indigo",
    metrics: [
      { value: "500+", label: "students served" },
      { value: "3", label: "distinct user roles" },
      { value: "5+", label: "live dashboards" },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "Scala", "C++", "C"],
  },
  {
    group: "Data & Cloud",
    items: [
      "Apache Spark",
      "AWS EMR",
      "AWS S3",
      "PostgreSQL",
      "MongoDB",
      "Data Modelling",
      "ETL / ELT",
      "Gunicorn",
    ],
  },
  {
    group: "Web & Frameworks",
    items: [
      "React",
      "Next.js",
      "Django",
      "Django REST Framework",
      "Redux",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    group: "Foundations",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOP",
      "Git & GitHub",
    ],
  },
];

export const achievements = [
  {
    title: "Adobe India Hackathon 2025 — Round 2",
    detail:
      "Qualified for Round 2 building an AI-powered document intelligence solution under strict offline and performance constraints.",
    tag: "Hackathon",
  },
  {
    title: "1000+ problems solved",
    detail:
      "Across LeetCode, GeeksforGeeks, CodeChef and Codeforces — sustained practice in algorithms and data structures.",
    tag: "Competitive Programming",
  },
  {
    title: "AIR 8120 — JEE Mains",
    detail: "Scored 99.1 percentile in the JEE Mains examination.",
    tag: "Entrance Exam",
  },
  {
    title: "Rank 566 — WBJEE",
    detail: "Top 0.6% out of 100,000+ candidates.",
    tag: "Entrance Exam",
  },
];

export const education = {
  school: "Jadavpur University",
  degree: "B.E. in Information Technology",
  period: "2022 — 2026",
  location: "Kolkata, India",
  cgpa: "7.89",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object Oriented Programming",
    "Operating Systems",
    "Computer Networks",
  ],
};

/** Hero trust bar — the three names a recruiter scans for, above the fold. */
export const highlights = [
  {
    eyebrow: "Currently",
    name: "Handshake",
    detail: "AI Evaluation Specialist",
    current: true,
  },
  {
    eyebrow: "Previously",
    name: "Amazon",
    detail: "Data Engineer Intern",
  },
  {
    eyebrow: "Education",
    name: "Jadavpur University",
    detail: "B.E. Information Technology",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "beyond", label: "Beyond" },
  { id: "contact", label: "Contact" },
];
