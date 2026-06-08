export const highlightGroups = [
  {
    title: "Awards",
    accent: "green",
    items: [
      { value: "4x", label: "Dean's List at ASU" },
      { value: "2x", label: "Hackathon winner / placement" },
    ],
  },
  {
    title: "Product Builds",
    accent: "cyan",
    items: [
      { value: "Flyture", label: "AI travel platform founder" },
      { value: "AIDed", label: "AI health literacy assistant" },
    ],
  },
  {
    title: "AI & Engineering",
    accent: "violet",
    items: [
      { value: "RAG", label: "Retrieval and semantic search" },
      { value: "Full-stack", label: "React, Next.js, Supabase, APIs" },
    ],
  },
  {
    title: "Campus & Community",
    accent: "amber",
    items: [
      { value: "BCC", label: "Co-founder, Brain Computing Club" },
      { value: "ASU", label: "Events, music, and volunteering" },
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "C/C++", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Supabase",
      "SQL Databases",
      "FastAPI",
    ],
  },
  {
    title: "AI / ML",
    featured: true,
    items: [
      "OpenAI API",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "Semantic Search",
      "Intent Classification",
      "Structured Outputs",
    ],
  },
  {
    title: "Cloud & Tools",
    items: [
      "Git/GitHub",
      "Vercel",
      "Google Cloud",
      "Resend",
      "Duffel API",
      "Google Maps",
      "Cloudflare Workers",
      "Linux",
      "AWS",
      "Azure",
    ],
  },
  {
    title: "Coursework",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Computer Organization",
      "Web Development & APIs",
    ],
  },
];

export const projects = [
  {
    title: "Flyture",
    eyebrow: "Founder | March 2026 - Present",
    link: "https://flyture.co",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "SQL",
      "Vercel",
      "Duffel API",
      "Google Maps",
      "Google Cloud",
      "Resend",
      "OpenAI API",
    ],
    flow: ["discover", "save", "plan", "route", "notify"],
    summary:
      "AI travel discovery, planning, and navigation platform combining destination discovery, personalized trip planning, flight search, geolocation-aware routing, saved destinations, and user-generated content workflows.",
    bullets: [
      "Integrated Duffel, Google Maps, Google Cloud, and Resend for flight search, routing, recommendations, and notifications.",
      "Built authentication, saved destinations, discovery feeds, moderation, publishing, and creator workflows.",
      "Curated 100+ travel experiences across Phoenix, Scottsdale, Tempe, New York, Chicago, and other destinations.",
    ],
  },
  {
    title: "AIDed",
    eyebrow: "2nd Place Hackathon Winner | February 2026",
    stack: ["React", "Node.js", "OpenAI", "RAG", "Vector Search"],
    flow: ["policy", "chunk", "retrieve", "explain", "guide"],
    summary:
      "AI health insurance assistant that turns complex policy documents into clear navigation and personalized guidance.",
    bullets: [
      "Competed against 20+ teams at ASU and placed 2nd, winning $1,500.",
      "Implemented retrieval over 100+ page insurance documents with embeddings and semantic similarity.",
      "Transformed 15-30 page policies into 3-5 step guidance flows.",
    ],
  },
  {
    title: "Global Chamber AI Workflows",
    eyebrow: "AI & Software Engineering Intern | 2026",
    stack: ["RAG", "Embeddings", "Intent Routing", "Semantic Search"],
    flow: ["intent", "retrieve", "rank", "context", "answer"],
    summary:
      "AI workflow improvements for member discovery, document search, contact lookup, and business intelligence across Global Chamber's network.",
    bullets: [
      "Refined multi-intent routing workflows and semantic retrieval pipelines.",
      "Improved RAG performance through vector database optimization and context refinement.",
      "Supported refactoring and AI workflow integration to reduce system complexity.",
    ],
  },
  {
    title: "Pokemud",
    eyebrow: "CSE240 Systems Project | August 2025 - December 2025",
    stack: ["C", "C++", "OOP", "Game State", "Command Parsing"],
    flow: ["command", "state", "battle", "memory", "result"],
    summary:
      "Pokemon-inspired text-based game engine built while learning object-oriented programming and systems-level design.",
    bullets: [
      "Developed a 1,000+ line C++ engine with 10+ interrelated classes.",
      "Modeled players, creatures, battle mechanics, game state, inheritance, and polymorphism.",
      "Implemented command parsing for 15+ player actions with dynamic state updates.",
    ],
  },
];

export const experience = [
  {
    role: "AI & Software Engineering Intern",
    org: "Global Chamber (Globi)",
    date: "Feb 2026 - Present",
    detail:
      "Improving AI-powered intent classification, retrieval, RAG performance, and assistant workflows for global business intelligence use cases.",
  },
  {
    role: "Event Assistant",
    org: "ASU Health Events",
    date: "Apr 2026 - Present",
    detail:
      "Supporting event registration, communications, check-in, logistics, and operations for university events serving students, faculty, and community members.",
  },
  {
    role: "Co-Founder & Director",
    org: "Brain Computing Club @ ASU",
    date: "Current",
    detail:
      "Building a student community focused on neurotechnology, brain-computer interfaces, artificial intelligence, and emerging computing technologies.",
  },
];
