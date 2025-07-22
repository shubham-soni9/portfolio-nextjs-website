import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import freshdeskImg from "@/public/freshdesk.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lead Android Engineer",
    location: "Freshworks, Chennai, Tamil Nadu, India",
    description:
      "Leading Android development initiatives at Freshworks, a global SaaS company. Working on enterprise-grade applications with focus on scalability, performance, and user experience. Collaborating with cross-functional teams to deliver high-quality mobile solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2023 - Present",
  },
  {
    title: "Software Engineer - III",
    location: "Meesho, Bengaluru, India",
    description:
      "Led the Meesho Android app's design and development with over 100+ million downloads. Increased user experience by working on quality checks, user ratings and reviews which led to a 15% reduction in product returns. Developed using RxJava, Room, 70% Kotlin, and 30% Java, implementing Multi-module MVVM architecture. Boosted build speed by 30% using modular project organisation and clean architecture. Executed optimizations to reduce API costs achieving 12-15% monthly reduction and cost savings of 100K dollars. Implemented measures to reduce APK size by 40% and address ANR for app optimisation. Drove 25% higher user engagement with innovative widgets and improved search screens. Slashed 30% time of deployment with robust code reviews and CI/CD pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2022 - 06/2023",
  },
  {
    title: "Software Engineer - II",
    location: "Rebel Foods, Mumbai, India",
    description:
      "Redesigned and developed a new product from scratch known as Eatsure. Headed a team from architectural decision to finished product with 99.5% crash-free users maintained with 10m+ downloads. Implemented Slay Coffee app from scratch independently in 3 months with coroutine and jetpack components. Achieved 30% fewer bug reports and 15% app performance improvement in live projects like Over Story and Behrouz Biryani.",
    icon: React.createElement(CgWorkAlt),
    date: "02/2020 - 02/2022",
  },
  {
    title: "Software Engineer - I",
    location: "Jungleworks, Chandigarh, India",
    description:
      "Designed and implemented 3 delivery applications Agent, Manager and Customer app under a single product Tookan for handling 1500+ businesses that required 3 lakh delivery drivers. Delivered all projects on time, including Yelo Marketspace (20% increase in monthly orders). Created and optimized app experiences for client projects like Honest Bee and Instavans. Maintained a 90% client satisfaction rate by efficiently managing the dev and release cycle with seamless requirements gathering.",
    icon: React.createElement(CgWorkAlt),
    date: "08/2017 - 01/2020",
  },
  {
    title: "Bachelor of Engineering",
    location: "Acropolis Institute, Indore, M.P., India",
    description:
      "Major in Computer science & engineering",
    icon: React.createElement(LuGraduationCap),
    date: "07/2013 - 07/2017",
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
  },
  {
    title: "Meesho",
    description:
      "Largest e-commerce application with over 10+ million daily active user base with 99.8% crash-free users. Led Android app development with 100+ million downloads, implemented Multi-module MVVM architecture, and achieved significant performance improvements.",
    tags: ["Android", "Kotlin", "Java", "RxJava", "Room", "MVVM", "Multi-module"],
    imageUrl: corpcommentImg,
    url: "https://play.google.com/store/apps/details?id=com.meesho.supply",
  },
  {
    title: "Eatsure",
    description:
      "Multi-brand food ordering app. Created with a team of 3 developers from scratch to 50k+ DAU. Redesigned and developed from architectural decision to finished product with 99.5% crash-free users.",
    tags: ["Android", "Kotlin", "Coroutines", "Jetpack Components", "MVVM"],
    imageUrl: rmtdevImg,
    url: "https://play.google.com/store/apps/details?id=com.done.faasos",
  },
  {
    title: "Slay Coffee",
    description:
      "Independently worked on a coffee booking app for Bangalore-based coffee brand known as SLAY. Implemented from scratch in 3 months with coroutine and jetpack components.",
    tags: ["Android", "Kotlin", "Coroutines", "Jetpack Components"],
    imageUrl: wordanalyticsImg,
    url: "#",
  },
  {
    title: "Tookan Agent",
    description:
      "Android lead of Tookan delivery app for the taxi and delivery workflow over 5 Lakh users. Part of the core team handling delivery applications for 1500+ businesses.",
    tags: ["Android", "Java", "Delivery System", "Multi-app Architecture"],
    imageUrl: corpcommentImg,
    url: "https://play.google.com/store/apps/details?id=com.tookan.agent",
  },
  {
    title: "Tookan Manager",
    description:
      "Individually revamped Manager app to help and maintain multiple agents by managers. Designed and implemented delivery management system.",
    tags: ["Android", "Java", "Management System", "Multi-agent"],
    imageUrl: rmtdevImg,
    url: "https://play.google.com/store/apps/details?id=com.tookan.manager",
  },
  {
    title: "Yelo Marketplace",
    description:
      "Developed Multi-shop marketplace to deliver and manage large shop groups. Achieved 20% increase in monthly orders.",
    tags: ["Android", "Marketplace", "Multi-shop", "E-commerce"],
    imageUrl: wordanalyticsImg,
    url: "https://play.google.com/store/apps/details?id=com.yelo.merchantapp",
  },
  {
    title: "Instavans",
    description:
      "Made agent app for 1k+ transport trucks on-demand booking and tracking. Optimized app experiences for transport logistics.",
    tags: ["Android", "Transport", "Booking System", "Tracking"],
    imageUrl: corpcommentImg,
    url: "https://instavans.com/",
  },
  {
    title: "Tracking SDK",
    description:
      "Maintained in-house library of delivery tracking and management. Created reusable components for delivery tracking across multiple applications.",
    tags: ["Android", "SDK", "Library", "Tracking", "Delivery"],
    imageUrl: rmtdevImg,
    url: "https://docs.jungleworks.com/tookan/sdk/android",
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
