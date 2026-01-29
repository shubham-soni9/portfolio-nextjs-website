import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import freshdeskImg from "@/public/freshdesk.png";
import meeshoImg from "@/public/meesho.webp";
import eatsureImg from "@/public/eatsure.webp";
import slayImg from "@/public/slay.png";

type OpenSourceProject = {
  title: string;
  description: string;
  platform: string;
  techStack?: readonly string[];
  repoUrl: string;
  liveUrl?: string;
  relatedRepos?: readonly string[];
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Lead Android Engineer",
    location: "Freshworks, Chennai, Tamil Nadu, India",
    description:
      "Leading Android development initiatives at Freshworks, a global SaaS company. Working on enterprise-grade applications with focus on scalability, performance, and user experience. Collaborating with cross-functional teams to deliver high-quality mobile solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 - Oct 2025",
  },
  {
    title: "Software Engineer - III",
    location: "Meesho, Bengaluru, India",
    description:
      "Led the Meesho Android app's design and development with over 100+ million downloads. Increased user experience by working on quality checks, user ratings and reviews which led to a 15% reduction in product returns. Developed using RxJava, Room, 70% Kotlin, and 30% Java, implementing Multi-module MVVM architecture. Boosted build speed by 30% using modular project organisation and clean architecture. Executed optimizations to reduce API costs achieving 12-15% monthly reduction and cost savings of 100K dollars. Implemented measures to reduce APK size by 40% and address ANR for app optimisation. Drove 25% higher user engagement with innovative widgets and improved search screens. Slashed 30% time of deployment with robust code reviews and CI/CD pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - June 2023",
  },
  {
    title: "Software Engineer - II",
    location: "Rebel Foods, Mumbai, India",
    description:
      "Redesigned and developed a new product from scratch known as Eatsure. Headed a team from architectural decision to finished product with 99.5% crash-free users maintained with 10m+ downloads. Implemented Slay Coffee app from scratch independently in 3 months with coroutine and jetpack components. Achieved 30% fewer bug reports and 15% app performance improvement in live projects like Over Story and Behrouz Biryani.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2020 - Feb 2022",
  },
  {
    title: "Software Engineer - I",
    location: "Jungleworks, Chandigarh, India",
    description:
      "Designed and implemented 3 delivery applications Agent, Manager and Customer app under a single product Tookan for handling 1500+ businesses that required 3 lakh delivery drivers. Delivered all projects on time, including Yelo Marketspace (20% increase in monthly orders). Created and optimized app experiences for client projects like Honest Bee and Instavans. Maintained a 90% client satisfaction rate by efficiently managing the dev and release cycle with seamless requirements gathering.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2017 - Jan 2020",
  },
  {
    title: "Bachelor of Engineering",
    location: "Acropolis Institute, Indore, M.P., India",
    description:
      "Major in Computer science & engineering",
    icon: React.createElement(LuGraduationCap),
    date: "July 2013 - July 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Freshdesk",
    description:
      "Enterprise-grade helpdesk and customer support application. Leading Android development for this global SaaS platform with millions of users worldwide. Focused on delivering exceptional user experience, scalability, and performance for customer service teams.",
    tags: ["Android", "Kotlin", "Enterprise", "SaaS", "Customer Support", "Helpdesk"],
    imageUrl: freshdeskImg,
    url: "https://play.google.com/store/apps/details?id=com.freshdesk.helpdesk",
    company: "Freshworks",
    years: "2023 - 2025",
    projectType: "Native",
    industry: "SaaS / Customer Support",
    downloads: "100K+",
  },
  {
    title: "Meesho",
    description:
      "Largest e-commerce application with over 10+ million daily active user base with 99.8% crash-free users. Led Android app development with 100+ million downloads, implemented Multi-module MVVM architecture, and achieved significant performance improvements.",
    tags: ["Android", "Kotlin", "Java", "RxJava", "Room", "MVVM", "Multi-module"],
    imageUrl: meeshoImg,
    url: "https://play.google.com/store/apps/details?id=com.meesho.supply",
    company: "Meesho",
    years: "2022 - 2023",
    projectType: "Native",
    industry: "E-commerce",
    downloads: "500M+",
  },
  {
    title: "Eatsure",
    description:
      "Multi-brand food ordering app. Created with a team of 3 developers from scratch to 50k+ DAU. Redesigned and developed from architectural decision to finished product with 99.5% crash-free users.",
    tags: ["Android", "Kotlin", "Coroutines", "Jetpack Components", "MVVM"],
    imageUrl: eatsureImg,
    url: "https://play.google.com/store/apps/details?id=com.done.faasos",
    company: "Rebel Foods",
    years: "2020 - 2022",
    projectType: "Native",
    industry: "Food Delivery",
    downloads: "10M+",
  },
  {
    title: "Slay Coffee",
    description:
      "Independently worked on a coffee booking app for Bangalore-based coffee brand known as SLAY. Implemented from scratch in 3 months with coroutine and jetpack components.",
    tags: ["Android", "Kotlin", "Coroutines", "Jetpack Components"],
    imageUrl: slayImg,
    url: "#",
    company: "Rebel Foods",
    years: "2021 - 2022",
    projectType: "Native",
    industry: "Food & Beverage",
    downloads: "10K+",
  },
  {
    title: "Tookan Agent",
    description:
      "Android lead of Tookan delivery app for the taxi and delivery workflow over 5 Lakh users. Part of the core team handling delivery applications for 1500+ businesses.",
    tags: ["Android", "Java", "Delivery System", "Multi-app Architecture"],
    imageUrl: corpcommentImg,
    url: "https://play.google.com/store/apps/details?id=com.tookan.agent",
    company: "Jungleworks",
    years: "2017 - 2020",
    projectType: "Native",
    industry: "Logistics & Delivery",
    downloads: "5K+",
  },
  {
    title: "Instavans",
    description:
      "Made agent app for 1k+ transport trucks on-demand booking and tracking. Optimized app experiences for transport logistics.",
    tags: ["Android", "Transport", "Booking System", "Tracking"],
    imageUrl: corpcommentImg,
    url: "https://instavans.com/",
    company: "Jungleworks",
    years: "2018 - 2020",
    projectType: "Native",
    industry: "Transportation",
    downloads: "10K+",
  },
  {
    title: "Tracking SDK",
    description:
      "Maintained in-house library of delivery tracking and management. Created reusable components for delivery tracking across multiple applications.",
    tags: ["Android", "SDK", "Library", "Tracking", "Delivery"],
    imageUrl: rmtdevImg,
    url: "https://docs.jungleworks.com/tookan/sdk/android",
    company: "Jungleworks",
    years: "2018 - 2020",
    projectType: "Native",
    industry: "Logistics & Delivery",
    downloads: "10K+",
  },{
    title: "Tookan Manager",
    description:
      "Individually revamped Manager app to help and maintain multiple agents by managers. Designed and implemented delivery management system.",
    tags: ["Android", "Java", "Management System", "Multi-agent"],
    imageUrl: rmtdevImg,
    url: "https://play.google.com/store/apps/details?id=com.tookan.manager",
    company: "Jungleworks",
    years: "2017 - 2020",
    projectType: "Native",
    industry: "Logistics & Delivery",
    downloads: "1K+",
  } ,{
    title: "Yelo Marketplace",
    description:
      "Developed Multi-shop marketplace to deliver and manage large shop groups. Achieved 20% increase in monthly orders.",
    tags: ["Android", "Marketplace", "Multi-shop", "E-commerce"],
    imageUrl: wordanalyticsImg,
    url: "https://play.google.com/store/apps/details?id=com.yelo.merchantapp",
    company: "Jungleworks",
    years: "2018 - 2020",
    projectType: "Native",
    industry: "E-commerce",
    downloads: "50+",
  }
] as const;

export const openSourceProjectsData: readonly OpenSourceProject[] = [
  {
    title: "FastIdea – AI Idea Finder",
    description:
      "AI-powered idea generator that creates structured execution blueprints for products, content, marketing, and career growth with clear target audience, problem statement, and next steps.",
    platform: "Next.js Website",
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "OpenRouter API"],
    repoUrl: "https://github.com/shubham-soni9/ai-idea-finder-nextjs-website",
    liveUrl: "https://www.fastidea.app",
  },
  {
    title: "Periodic Table of Elements",
    description:
      "Interactive periodic table web app with advanced filtering, detailed element pages, scientist profiles, and built-in chemistry tools like molar mass and electron configuration calculators.",
    platform: "SvelteKit Website",
    techStack: ["SvelteKit", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/shubham-soni9/periodic-table-svelte-website",
    liveUrl: "https://www.periodictableofelements.cc",
  },
  {
    title: "Quick Mini Tools",
    description:
      "Collection of small, focused utilities similar to an omni-calculator platform, built as a fast Svelte experience.",
    platform: "Svelte Tools",
    techStack: ["Svelte", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/shubham-soni9/quick-mini-tools",
    liveUrl: "https://quickminitools.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with modern React tooling to showcase Android experience, projects, and skills with dark mode, smooth animations, and a contact form.",
    platform: "Next.js Website",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Email"],
    repoUrl: "https://github.com/shubham-soni9/portfolio-nextjs-website",
    liveUrl: "https://shubhamsoni.dev",
  },
  {
    title: "Random Name Wheel",
    description:
      "Random name picker with an animated wheel experience for giveaways, classrooms, or team rituals.",
    platform: "Svelte App",
    techStack: ["Svelte", "TypeScript"],
    repoUrl: "https://github.com/shubham-soni9/random-names-wheel",
    liveUrl: "https://random-names-wheel.vercel.app/",
  },
  {
    title: "Apps Analyzer",
    description:
      "Android app that scans installed applications and detects the underlying framework using APK analysis and a scoring system, distinguishing Flutter, React Native, Expo, KMM, and native Android apps.",
    platform: "Native Android",
    techStack: ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "MVVM"],
    repoUrl: "https://github.com/shubham-soni9/Apps-Analyzer",
  },
  {
    title: "Finlisted",
    description:
      "Production-ready directory and listing SaaS starter kit with authentication, Stripe subscriptions, admin dashboard, blog, changelog, media uploads, and SEO-friendly marketing pages.",
    platform: "Next.js SaaS",
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    repoUrl: "https://github.com/shubham-soni9/finlisted-nextjs-website",
  },
  {
    title: "AI Dating Helper",
    description:
      "React Native app concept that uses AI to help users craft better profiles and conversations for modern dating platforms.",
    platform: "React Native App",
    techStack: ["React Native", "TypeScript", "Expo"],
    repoUrl: "https://github.com/shubham-soni9/ai-dating-helper-react-native",
  },
  {
    title: "Linkr – URL Shortener Platform",
    description:
      "Bitly-style SaaS platform composed of multiple services for link management, redirects, analytics, caching, and an admin console.",
    platform: "Distributed SaaS",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/shubham-soni9/linkr-website",
    relatedRepos: [
      "https://github.com/shubham-soni9/linkr-api-service",
      "https://github.com/shubham-soni9/linkr-redirector",
      "https://github.com/shubham-soni9/linkr-console",
      "https://github.com/shubham-soni9/linkr-web-redirector",
      "https://github.com/shubham-soni9/linkr-analytics",
      "https://github.com/shubham-soni9/linkr-cache",
    ],
  },
  {
    title: "Pursuit Blog Official",
    description:
      "Content-focused Next.js blog setup with a clean layout for long-form articles and engineering stories.",
    platform: "Next.js Blog",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    repoUrl: "https://github.com/shubham-soni9/pursuit-blog-official",
  },
] as const;

export const skillsData = [
  "Java",
  "Kotlin", 
  "Android",
  "Firebase",
  "Compose",
  "RxJava",
  "Room",
  "Coroutines",
  "MVVM",
  "Clean Architecture",
  "Multi-Module Architecture",
  "Flutter"
] as const;

export const currentProject = {
  title: "FileXhost.com",
  subtitle: "Simple Static Hosting Platform",
  description:
    "A universal file hosting platform that simplifies sharing. Drag & drop any file—HTML, PDF, Images, Videos—and get an instant, secure URL. Features include smart file rendering, auto-generated subdomains, and password protection.",
  tags: [
    "Next.js",
    "CDN Caching",
    "S3 Handling",
    "PostgreSQL",
    "Tailwind CSS",
    "TypeScript",
  ],
  url: "https://www.filexhost.com/",
  features: [
    "Universal File Support",
    "Smart Views & Direct Rendering",
    "Instant Subdomains",
    "Free SSL Certificates",
  ],
} as const;
