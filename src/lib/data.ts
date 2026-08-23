export const site = {
  name: "Oitash Ghosh",
  role: "Software Engineer",
  location: "Salt Lake, Kolkata, India",
  email: "oitashg@gmail.com",
  phone: "+91 91635 85861",
  resume: "/Oitash_Ghosh_Resume.pdf",
  url: "https://portfolio-oitash.vercel.app",
  tagline:
    "I build systems that stay correct when things break. Consensus, storage engines, and tests that try to break them.",
  summary: [
    "I graduated in Information Technology from Jadavpur University, and I'm drawn to the parts of software where correctness is hard to fake: distributed consensus, storage engines, and hot paths where nanoseconds show up in a benchmark.",
    "At Amazon I re-architected an inventory audit pipeline to 100% parity with the legacy stack and shipped a Python CLI that cut deployment time by 40%. On my own time I've written a Raft-replicated key-value store with its own LSM engine and linearizability checker, and a matching engine that clears a message in 25 nanoseconds.",
    "I'm currently open to Software Engineer roles.",
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
      "Building containerized benchmarks that measure what AI coding agents can actually do.",
    points: [
      "Engineered **40+ containerized evaluation environments** with automated graders, benchmarking AI coding agents across concurrency debugging, security, ML infrastructure and low-level systems.",
      "Cut agent solve rate from **80% to 40%** on a distributed systems task by redesigning it to test derived reasoning rather than pattern recall.",
      "Validated each task against **3 independent implementations** and proved every grading rule affects 2+ cases, catching a grader defect that was failing correct submissions.",
    ],
    stack: ["Python", "Docker", "Automated Grading", "Agent Evaluation", "Distributed Systems"],
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
      "Designed a Spark/EMR **Data Quality Framework** processing **1 billion+ daily records** across 5 regions, deploying a Z-score anomaly detection model that improved data reliability by **25%**.",
      "Migrated **10+ big data pipelines**, resolving Scala build conflicts, and built a Python CLI to bulk-migrate **100+ profiles**, cutting deployment time by **40%**.",
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
    name: "Stratakv",
    period: "Aug 2026",
    tagline:
      "A linearizable distributed key-value store built on Raft consensus, an LSM storage engine, and a linearizability checker that verifies the whole thing under network partitions.",
    points: [
      "From-scratch Raft covering leader election, log replication, current-term-only commitment and snapshot compaction, sustaining 1,100 ops/s across 3 nodes, with leader failover measured at 334\u2013526 ms.",
      "Hand-written LSM storage engine: a CRC-framed write-ahead log with torn-tail recovery, skiplist memtable, bloom-filtered SSTables and levelled compaction. Point reads land at 1.17 \u00b5s, and the filters skip 99% of tables on absent keys.",
      "Correctness is proved rather than asserted. A self-written linearizability checker (Wing & Gong, with Lowe's memoisation) verified 3,150 operations across 15 leader changes under repeated partitions, with zero anomalies. The checker itself is tested against six classes of known violation.",
      "Raised throughput 25 \u2192 1,100 ops/s by isolating each layer: group-commit durability, an append-only log, and a lock-free counter on the apply path that was serialising every operation behind a 4 ms fsync.",
    ],
    stack: ["Go", "Raft", "LSM-Tree", "Distributed Systems", "Docker"],
    repo: "https://github.com/oitashg/Stratakv",
    accent: "teal",
    metrics: [
      { value: "3,150", label: "ops verified linearizable" },
      { value: "334ms", label: "fastest failover" },
      { value: "0", label: "external dependencies" },
    ],
  },
  {
    name: "Order Book Matching Engine",
    period: "Aug 2026",
    tagline:
      "A price-time-priority limit order book built the way a trading venue's hot path actually is: flat arrays instead of node graphs, a pre-allocated pool instead of malloc, a bitmap instead of a tree walk.",
    points: [
      "Sustains 25 ns per message (\u224839M msg/s, single-threaded) at p99 125 ns, using flat price-level arrays, intrusive FIFOs and a lock-free feed handoff.",
      "Validated trade-for-trade against an independently written reference implementation over 12M+ randomised commands, with zero divergences.",
      "Clean under AddressSanitizer, UndefinedBehaviorSanitizer and ThreadSanitizer. The benchmark probes the clock's own cost and resolution first, so a 25 ns operation is never measured through a 14 ns observer effect.",
    ],
    stack: ["C++20", "Multithreading", "CMake", "Python"],
    repo: "https://github.com/oitashg/Orderbook-Engine",
    accent: "indigo",
    metrics: [
      { value: "25 ns", label: "per message" },
      { value: "125 ns", label: "p99 latency" },
      { value: "12M+", label: "commands, 0 divergences" },
    ],
  },
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
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "Go", "C++", "SQL", "Java", "JavaScript", "TypeScript", "Scala", "C"],
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
    group: "Systems & Distributed",
    items: [
      "Raft / Consensus",
      "LSM Storage Engines",
      "Concurrency",
      "Linearizability Testing",
      "Docker",
      "Linux",
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
    title: "Adobe India Hackathon 2025, Round 2",
    detail:
      "Qualified for Round 2 building an AI-powered document intelligence solution under strict offline and performance constraints.",
    tag: "Hackathon",
  },
  {
    title: "1000+ problems solved",
    detail:
      "Across LeetCode, GeeksforGeeks, CodeChef and Codeforces, with sustained practice in algorithms and data structures.",
    tag: "Competitive Programming",
  },
  {
    title: "AIR 8120 in JEE Mains",
    detail: "Scored 99.1 percentile in the JEE Mains examination.",
    tag: "Entrance Exam",
  },
  {
    title: "Rank 566 in WBJEE",
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
