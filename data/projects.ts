interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "outfica-platform",
    title: "Outfica Web Platform",
    role: "Full-Stack Developer",
    description:
      "Built core platform features for Outfica, including a filterable, sortable product gallery with favorites, infinite scroll, and real-time updates when products are added or removed. Designed new data models for products and catalogs, implemented end-to-end features using Next.js server actions and API routes, and added reusable upload modules for single and batch file uploads, alongside SSR for performance.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "Supabase"],
    image: "/assets/outfica-app.webp",
  },
  {
    id: "upperboard",
    title: "Upperboard",
    role: "Full-Stack Developer",
    description:
      "Contributed to UpperBoard, a freelancer management platform, building end-to-end modules including project management, a task board, calendar, and time tracker using React, TypeScript, and Tailwind CSS. Also implemented backend APIs with NestJS and fixed bugs across the dashboard, messenger, and proposals modules. Introduced regular code reviews and reusable component patterns across a 5-person team to improve code quality and speed up future development.",
    tech: ["React", "Tailwind CSS", "NestJS"],
    image: "/assets/upper.webp",
  },
  {
    id: "enbiosis",
    title: "Enbiosis",
    role: "Full-Stack Developer",
    description:
      "Contributed to Enbiosis's B2B web platform for a microbiome analysis biotech company, serving patient, practitioner, and partner portals. Added a Krona visualization section to the reporting flow, embedding and responsively styling an interactive chart within the app. Maintained and improved existing pages such as food scores, nutrients, and questionnaires, integrated i18n translations, and resolved portal-specific formatting and technical issues across practitioner-facing reports.",
    tech: ["React", "styled-components", "Node.js", "Python"],
    image: "/assets/enb.webp",
  },
  {
    id: "metazoo-tournament-platform",
    title: "MetaZoo TCG Tournament Platform",
    role: "Full-Stack Developer",
    description:
      "Built the tournaments module for a trading card game platform, including an admin form for creating tournaments and deck validation rules requiring specific card counts before a player could register. Implemented a tournaments listing page and a tournament details page with different bracket logic for Swiss, single elimination, and round robin formats, along with visual bracket diagrams, match pairings, and a leaderboard.",
    tech: ["React", "Tailwind CSS"],
    image: "/assets/bracket.webp",
    demo: "https://metazoo.tcgdeckforge.com/tournaments",
  },
  {
    id: "outfica-website",
    title: "Outfica Marketing Website",
    role: "Frontend Developer",
    description:
      "Made targeted updates to the Outfica marketing website within an existing Next.js codebase, translating Figma designs into pixel-perfect components. Built several interactive sections including a pricing tier layout, an FAQ accordion, and a waitlist signup, along with image optimization and light/dark theming across the site.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/assets/outfica-marketing.webp",
    demo: "https://outfica.com",
  },
  {
    id: "monkedo",
    title: "Monkedo Automation Platform",
    role: "Backend Developer",
    description:
      "Built TypeScript integrations for the Monkedo automation platform during a long-term internship, developing trigger and action components through Pipedream to connect third-party APIs into no-code workflows. Implemented integrations for platforms including GitHub, Notion, Stripe, Telegram, and Google Sheets, enabling users to build automations without writing code themselves.",
    tech: ["TypeScript", "NestJS"],
    image: "/assets/monkedo.webp",
  },
];
