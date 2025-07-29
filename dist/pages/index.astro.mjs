/* empty css                                 */
import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, e as renderTemplate, f as renderSlot, m as maybeRenderHead } from '../chunks/astro/server_DReUeWkb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { CgWorkAlt } from 'react-icons/cg/index.esm.js';
import { LuGraduationCap } from 'react-icons/lu/index.esm.js';
import clsx from 'clsx';
import toast, { Toaster } from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import { Resend } from 'resend';
import { Html, Head, Preview, Body, Container, Section, Heading, Text, Hr } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { FaPaperPlane, FaGithubSquare } from 'react-icons/fa/index.esm.js';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs/index.esm.js';
import { HiDownload } from 'react-icons/hi/index.esm.js';
export { renderers } from '../renderers.mjs';

const corpcommentImg = "/corpcomment.png";
const rmtdevImg = "/rmtdev.png";
const wordanalyticsImg = "/wordanalytics.png";
const freshdeskImg = "/freshdesk.png";
const meeshoImg = "/meesho.webp";
const eatsureImg = "/eatsure.webp";
const slayImg = "/slay.png";
const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
];
const experiencesData = [
  {
    title: "Lead Android Engineer",
    location: "Freshworks, Chennai, Tamil Nadu, India",
    description: "Leading Android development initiatives at Freshworks, a global SaaS company. Working on enterprise-grade applications with focus on scalability, performance, and user experience. Collaborating with cross-functional teams to deliver high-quality mobile solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2023 - Present"
  },
  {
    title: "Software Engineer - III",
    location: "Meesho, Bengaluru, India",
    description: "Led the Meesho Android app's design and development with over 100+ million downloads. Increased user experience by working on quality checks, user ratings and reviews which led to a 15% reduction in product returns. Developed using RxJava, Room, 70% Kotlin, and 30% Java, implementing Multi-module MVVM architecture. Boosted build speed by 30% using modular project organisation and clean architecture. Executed optimizations to reduce API costs achieving 12-15% monthly reduction and cost savings of 100K dollars. Implemented measures to reduce APK size by 40% and address ANR for app optimisation. Drove 25% higher user engagement with innovative widgets and improved search screens. Slashed 30% time of deployment with robust code reviews and CI/CD pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2022 - 06/2023"
  },
  {
    title: "Software Engineer - II",
    location: "Rebel Foods, Mumbai, India",
    description: "Redesigned and developed a new product from scratch known as Eatsure. Headed a team from architectural decision to finished product with 99.5% crash-free users maintained with 10m+ downloads. Implemented Slay Coffee app from scratch independently in 3 months with coroutine and jetpack components. Achieved 30% fewer bug reports and 15% app performance improvement in live projects like Over Story and Behrouz Biryani.",
    icon: React.createElement(CgWorkAlt),
    date: "02/2020 - 02/2022"
  },
  {
    title: "Software Engineer - I",
    location: "Jungleworks, Chandigarh, India",
    description: "Designed and implemented 3 delivery applications Agent, Manager and Customer app under a single product Tookan for handling 1500+ businesses that required 3 lakh delivery drivers. Delivered all projects on time, including Yelo Marketspace (20% increase in monthly orders). Created and optimized app experiences for client projects like Honest Bee and Instavans. Maintained a 90% client satisfaction rate by efficiently managing the dev and release cycle with seamless requirements gathering.",
    icon: React.createElement(CgWorkAlt),
    date: "08/2017 - 01/2020"
  },
  {
    title: "Bachelor of Engineering",
    location: "Acropolis Institute, Indore, M.P., India",
    description: "Major in Computer science & engineering",
    icon: React.createElement(LuGraduationCap),
    date: "07/2013 - 07/2017"
  }
];
const projectsData = [
  {
    title: "Freshdesk",
    description: "Enterprise-grade helpdesk and customer support application. Leading Android development for this global SaaS platform with millions of users worldwide. Focused on delivering exceptional user experience, scalability, and performance for customer service teams.",
    tags: ["Android", "Kotlin", "Enterprise", "SaaS", "Customer Support", "Helpdesk"],
    imageUrl: freshdeskImg,
    url: "https://play.google.com/store/apps/details?id=com.freshdesk.helpdesk"
  },
  {
    title: "Meesho",
    description: "Largest e-commerce application with over 10+ million daily active user base with 99.8% crash-free users. Led Android app development with 100+ million downloads, implemented Multi-module MVVM architecture, and achieved significant performance improvements.",
    tags: ["Android", "Kotlin", "Java", "RxJava", "Room", "MVVM", "Multi-module"],
    imageUrl: meeshoImg,
    url: "https://play.google.com/store/apps/details?id=com.meesho.supply"
  },
  {
    title: "Eatsure",
    description: "Multi-brand food ordering app. Created with a team of 3 developers from scratch to 50k+ DAU. Redesigned and developed from architectural decision to finished product with 99.5% crash-free users.",
    tags: ["Android", "Kotlin", "Coroutines", "Jetpack Components", "MVVM"],
    imageUrl: eatsureImg,
    url: "https://play.google.com/store/apps/details?id=com.done.faasos"
  },
  {
    title: "Slay Coffee",
    description: "Independently worked on a coffee booking app for Bangalore-based coffee brand known as SLAY. Implemented from scratch in 3 months with coroutine and jetpack components.",
    tags: ["Android", "Kotlin", "Coroutines", "Jetpack Components"],
    imageUrl: slayImg,
    url: "#"
  },
  {
    title: "Tookan Agent",
    description: "Android lead of Tookan delivery app for the taxi and delivery workflow over 5 Lakh users. Part of the core team handling delivery applications for 1500+ businesses.",
    tags: ["Android", "Java", "Delivery System", "Multi-app Architecture"],
    imageUrl: corpcommentImg,
    url: "https://play.google.com/store/apps/details?id=com.tookan.agent"
  },
  {
    title: "Tookan Manager",
    description: "Individually revamped Manager app to help and maintain multiple agents by managers. Designed and implemented delivery management system.",
    tags: ["Android", "Java", "Management System", "Multi-agent"],
    imageUrl: rmtdevImg,
    url: "https://play.google.com/store/apps/details?id=com.tookan.manager"
  },
  {
    title: "Yelo Marketplace",
    description: "Developed Multi-shop marketplace to deliver and manage large shop groups. Achieved 20% increase in monthly orders.",
    tags: ["Android", "Marketplace", "Multi-shop", "E-commerce"],
    imageUrl: wordanalyticsImg,
    url: "https://play.google.com/store/apps/details?id=com.yelo.merchantapp"
  },
  {
    title: "Instavans",
    description: "Made agent app for 1k+ transport trucks on-demand booking and tracking. Optimized app experiences for transport logistics.",
    tags: ["Android", "Transport", "Booking System", "Tracking"],
    imageUrl: corpcommentImg,
    url: "https://instavans.com/"
  },
  {
    title: "Tracking SDK",
    description: "Maintained in-house library of delivery tracking and management. Created reusable components for delivery tracking across multiple applications.",
    tags: ["Android", "SDK", "Library", "Tracking", "Delivery"],
    imageUrl: rmtdevImg,
    url: "https://docs.jungleworks.com/tookan/sdk/android"
  }
];
const skillsData = [
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
];

const ActiveSectionContext = createContext(null);
function ActiveSectionContextProvider({
  children
}) {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return /* @__PURE__ */ jsx(
    ActiveSectionContext.Provider,
    {
      value: {
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      },
      children
    }
  );
}
function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return /* @__PURE__ */ jsxs("header", { className: "z-[999] relative", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",
        initial: { y: -100, x: "-50%", opacity: 0 },
        animate: { y: 0, x: "-50%", opacity: 1 }
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: "flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0", children: /* @__PURE__ */ jsx("ul", { className: "flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5", children: links.map((link) => /* @__PURE__ */ jsx(
      motion.li,
      {
        className: "h-3/4 flex items-center justify-center relative",
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: clsx(
              "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
              {
                "text-gray-950 dark:text-gray-200": activeSection === link.name
              }
            ),
            href: link.hash,
            onClick: () => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            },
            children: [
              link.name,
              link.name === activeSection && /* @__PURE__ */ jsx(
                motion.span,
                {
                  className: "bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",
                  layoutId: "activeSection",
                  transition: {
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }
                }
              )
            ]
          }
        )
      },
      link.hash
    )) }) })
  ] });
}

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "mb-10 px-4 text-center text-gray-500", children: /* @__PURE__ */ jsx("small", { className: "mb-2 block text-xs", children: "© 2025 Shubham Soni. All rights reserved." }) });
}

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/* E:/Github/portfolio-website/src/components/ThemeToggle.svelte generated by Svelte v4.2.20 */

const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	return `<button class="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950" aria-label="Toggle theme">${``}</button>`;
});

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="!scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"> <div class="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div> <div class="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> ${renderComponent($$result, "ActiveSectionContextProvider", ActiveSectionContextProvider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/context/active-section-context", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/header", "client:component-export": "default" })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/footer", "client:component-export": "default" })} ${renderComponent($$result2, "Toaster", Toaster, { "position": "top-right", "client:load": true, "client:component-hydration": "load", "client:component-path": "react-hot-toast", "client:component-export": "Toaster" })} ${renderComponent($$result2, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ThemeToggle.svelte", "client:component-export": "default" })} ` })} </body></html>`;
}, "E:/Github/portfolio-website/src/layouts/Layout.astro", void 0);

function SectionHeading({ children }) {
  return /* @__PURE__ */ jsx("h2", { className: "text-3xl font-medium capitalize mb-8 text-center", children });
}

function useSectionInView(sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1e3) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return {
    ref
  };
}

function About() {
  const { ref } = useSectionInView("About");
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      ref,
      className: "mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28",
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.175 },
      id: "about",
      children: [
        /* @__PURE__ */ jsx(SectionHeading, { children: "About me" }),
        /* @__PURE__ */ jsxs("p", { className: "mb-3", children: [
          "Having ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "7+ years" }),
          " of native Android development in leading companies like",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Freshworks, Meesho, Rebel Foods (Faasos) and Jugnoo" }),
          ". I've worked over",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "12 projects" }),
          " including 6 projects from scratch and improved several other products and scaled to",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "10+ million active users" }),
          ".",
          " ",
          /* @__PURE__ */ jsx("span", { className: "italic", children: "My domain experience" }),
          " spans",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "SaaS, E-commerce, Food, Delivery and Taxi" }),
          ". I've been part of the core team and handled several small teams independently from requirement to release."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("span", { className: "italic", children: "When I'm not coding" }),
          ", I enjoy",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Investment Strategy, Startup News, Entrepreneurship" }),
          ", and working on",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "open source projects" }),
          ". I'm also an",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "AI Enthusiast" }),
          " and always looking to learn new technologies and stay updated with the latest trends in mobile development."
        ] })
      ]
    }
  );
}

const validateString = (value, maxLength) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};
const getErrorMessage = (error) => {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};

function ContactFormEmail({
  message,
  senderEmail
}) {
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: "New message from your portfolio site" }),
    /* @__PURE__ */ jsx(Tailwind, { children: /* @__PURE__ */ jsx(Body, { className: "bg-gray-100 text-black", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Section, { className: "bg-white borderBlack my-10 px-10 py-4 rounded-md", children: [
      /* @__PURE__ */ jsx(Heading, { className: "leading-tight", children: "You received the following message from the contact form" }),
      /* @__PURE__ */ jsx(Text, { children: message }),
      /* @__PURE__ */ jsx(Hr, {}),
      /* @__PURE__ */ jsxs(Text, { children: [
        "The sender's email is: ",
        senderEmail
      ] })
    ] }) }) }) })
  ] });
}

const resend = new Resend(process.env.RESEND_API_KEY);
const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    };
  }
  if (!validateString(message, 5e3)) {
    return {
      error: "Invalid message"
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "shubhamsonicse@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail
      })
    });
  } catch (error) {
    return {
      error: getErrorMessage(error)
    };
  }
  return {
    data
  };
};

function SubmitBtn() {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "submit",
      className: "group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10",
      children: [
        "Submit",
        " ",
        /* @__PURE__ */ jsx(FaPaperPlane, { className: "text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" }),
        " "
      ]
    }
  );
}

function Contact() {
  const { ref } = useSectionInView("Contact");
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      id: "contact",
      ref,
      className: "mb-20 sm:mb-28 w-[min(100%,38rem)] text-center",
      initial: {
        opacity: 0
      },
      whileInView: {
        opacity: 1
      },
      transition: {
        duration: 1
      },
      viewport: {
        once: true
      },
      children: [
        /* @__PURE__ */ jsx(SectionHeading, { children: "Contact me" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 -mt-6 dark:text-white/80", children: "Please contact me directly through this form or connect with me on LinkedIn." }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "mt-10 flex flex-col dark:text-black",
            action: async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Email sent successfully!");
            },
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",
                  name: "senderEmail",
                  type: "email",
                  required: true,
                  maxLength: 500,
                  placeholder: "Your email"
                }
              ),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  className: "h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",
                  name: "message",
                  placeholder: "Your message",
                  required: true,
                  maxLength: 5e3
                }
              ),
              /* @__PURE__ */ jsx(SubmitBtn, {})
            ]
          }
        )
      ]
    }
  );
}

const ThemeContext = createContext(null);
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}

function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  return /* @__PURE__ */ jsxs("section", { id: "experience", ref, className: "scroll-mt-28 mb-28 sm:mb-40", children: [
    /* @__PURE__ */ jsx(SectionHeading, { children: "My experience" }),
    /* @__PURE__ */ jsx(VerticalTimeline, { lineColor: "", children: experiencesData.map((item, index) => /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(
      VerticalTimelineElement,
      {
        contentStyle: {
          background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.5rem 2rem"
        },
        contentArrowStyle: {
          borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)"
        },
        date: item.date,
        icon: item.icon,
        iconStyle: {
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold capitalize text-lg", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-600 dark:text-gray-300", children: item.location })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm text-gray-700 dark:text-gray-200 mb-2", children: "Key Achievements:" }),
            /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300", children: getKeyAchievements(item.description).map((achievement, idx) => /* @__PURE__ */ jsx("li", { className: "leading-relaxed", children: achievement }, idx)) })
          ] }),
          getTechnologies(item.description).length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm text-gray-700 dark:text-gray-200 mb-2", children: "Technologies & Skills:" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: getTechnologies(item.description).map((tech, idx) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300",
                children: tech
              },
              idx
            )) })
          ] })
        ] })
      }
    ) }, index)) })
  ] });
}
function getKeyAchievements(description) {
  const achievements = [];
  const metrics = description.match(/(\d+%?|\d+[Kk]|\d+[Mm]|\d+ lakh|\d+ million)/g);
  const keyPhrases = [
    "increased",
    "reduced",
    "improved",
    "boosted",
    "achieved",
    "delivered",
    "maintained",
    "led",
    "developed",
    "implemented",
    "created",
    "optimized"
  ];
  const sentences = description.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  sentences.forEach((sentence) => {
    const trimmed = sentence.trim();
    if (trimmed.length > 10) {
      const hasMetrics = metrics?.some((metric) => trimmed.includes(metric));
      const hasKeyPhrase = keyPhrases.some(
        (phrase) => trimmed.toLowerCase().includes(phrase)
      );
      if (hasMetrics || hasKeyPhrase) {
        achievements.push(trimmed);
      }
    }
  });
  return achievements.slice(0, 4);
}
function getTechnologies(description) {
  const techKeywords = [
    "Android",
    "Kotlin",
    "Java",
    "RxJava",
    "Room",
    "MVVM",
    "Coroutines",
    "Jetpack",
    "Multi-module",
    "CI/CD",
    "API",
    "APK",
    "SaaS",
    "Enterprise",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "SQL",
    "AWS",
    "Firebase",
    "Git",
    "Docker",
    "Kubernetes"
  ];
  const found = techKeywords.filter(
    (tech) => description.toLowerCase().includes(tech.toLowerCase())
  );
  return found;
}

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      id: "home",
      className: "mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0 },
              animate: { opacity: 1, scale: 1 },
              transition: {
                type: "tween",
                duration: 0.2
              },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/profile.jpg",
                  alt: "Shubham Soni",
                  className: "h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute bottom-0 right-0 text-4xl",
              initial: { opacity: 0, scale: 0 },
              animate: { opacity: 1, scale: 1 },
              transition: {
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7
              },
              children: "👋"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            className: "mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl",
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Hello, I'm an Android Developer." }),
              " I'm a",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Software Engineer" }),
              " with",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "7+ years" }),
              " of experience. I enjoy building ",
              /* @__PURE__ */ jsx("span", { className: "italic", children: "mobile apps & products" }),
              ". My focus is",
              " ",
              /* @__PURE__ */ jsx("span", { className: "underline", children: "Android (Kotlin/Java)" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium",
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            transition: {
              delay: 0.1
            },
            children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#contact",
                  className: "group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition",
                  onClick: () => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  },
                  children: [
                    "Contact me here",
                    " ",
                    /* @__PURE__ */ jsx(BsArrowRight, { className: "opacity-70 group-hover:translate-x-1 transition" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10",
                  href: "/CV.pdf",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    "Download CV",
                    " ",
                    /* @__PURE__ */ jsx(HiDownload, { className: "opacity-60 group-hover:translate-y-1 transition" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60",
                  href: "https://www.linkedin.com/in/shubhamsonicse/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /* @__PURE__ */ jsx(BsLinkedin, {})
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60",
                  href: "https://github.com/shubham-soni9",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /* @__PURE__ */ jsx(FaGithubSquare, {})
                }
              )
            ]
          }
        )
      ]
    }
  );
}

function Project({
  title,
  description,
  tags,
  imageUrl,
  url
}) {
  const ref = useRef(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      style: {
        scale: scaleProgess,
        opacity: opacityProgess
      },
      className: "group mb-3 sm:mb-8 last:mb-0",
      children: [
        /* @__PURE__ */ jsxs(
          "section",
          {
            className: "bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 lg:max-w-none",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: title }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 leading-relaxed text-gray-700 dark:text-white/70", children: description }),
                /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap mt-4 gap-2 sm:mt-auto", children: tags.map((tag, index) => /* @__PURE__ */ jsx(
                  "li",
                  {
                    className: "bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70",
                    children: tag
                  },
                  index
                )) }),
                /* @__PURE__ */ jsx("div", { className: "mt-4 sm:hidden", children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative w-full h-64 rounded-lg overflow-hidden cursor-pointer",
                    onClick: () => setIsImageExpanded(true),
                    children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: imageUrl,
                          alt: `${title} mobile app screenshot`,
                          className: "object-cover hover:scale-105 transition-transform duration-300 w-full h-full"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Click to view full image" }) })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute hidden sm:block top-8 -right-40 w-[28.25rem]", children: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "relative w-full h-64 rounded-t-lg shadow-2xl overflow-hidden cursor-pointer",
                  onClick: () => setIsImageExpanded(true),
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: imageUrl,
                        alt: `${title} mobile app screenshot`,
                        className: "object-cover transition-all duration-300 w-full h-full\r\n                group-hover:scale-110\r\n                group-hover:-translate-x-3\r\n                group-hover:translate-y-3\r\n                group-hover:-rotate-2"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Click to view full image" }) })
                  ]
                }
              ) }),
              url && url !== "#" && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    window.open(url, "_blank");
                  },
                  className: "absolute bottom-4 right-4 bg-black/[0.7] text-white px-3 py-1 rounded-full text-sm hover:bg-black transition-colors duration-200",
                  children: "View App"
                }
              )
            ]
          }
        ),
        isImageExpanded && /* @__PURE__ */ jsx(
          "div",
          {
            className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4",
            onClick: () => setIsImageExpanded(false),
            children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl max-h-[90vh] w-full h-full", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: imageUrl,
                  alt: `${title} mobile app screenshot - Full view`,
                  className: "object-contain w-full h-full"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsImageExpanded(false),
                  className: "absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm", children: title })
            ] })
          }
        )
      ]
    }
  );
}

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return /* @__PURE__ */ jsxs("section", { ref, id: "projects", className: "scroll-mt-28 mb-28", children: [
    /* @__PURE__ */ jsx(SectionHeading, { children: "My projects" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6", children: projectsData.map((project, index) => /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(Project, { ...project }) }, index)) })
  ] });
}

function SectionDivider() {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20",
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.125 }
    }
  );
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};
function Skills() {
  const { ref } = useSectionInView("Skills");
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "skills",
      ref,
      className: "mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40",
      children: [
        /* @__PURE__ */ jsx(SectionHeading, { children: "My skills" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap justify-center gap-2 text-lg text-gray-800", children: skillsData.map((skill, index) => /* @__PURE__ */ jsx(
          motion.li,
          {
            className: "bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80",
            variants: fadeInAnimationVariants,
            initial: "initial",
            whileInView: "animate",
            viewport: {
              once: true
            },
            custom: index,
            children: skill
          },
          index
        )) })
      ]
    }
  );
}

/* E:/Github/portfolio-website/src/components/Counter.svelte generated by Svelte v4.2.20 */

const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let count = 0;

	return `<div class="fixed top-5 left-5 bg-white p-4 rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"><h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white" data-svelte-h="svelte-18ff43s">Svelte Counter</h3> <div class="flex items-center gap-4"><button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors" data-svelte-h="svelte-1ruqqar">-</button> <span class="text-xl font-bold text-gray-900 dark:text-white">${escape(count)}</span> <button class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors" data-svelte-h="svelte-1dpnfo1">+</button></div> <p class="text-sm text-gray-600 dark:text-gray-400 mt-2" data-svelte-h="svelte-1bqid09">This is a Svelte component!</p></div>`;
});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shubhamsonal Portfolio", "description": "Shubham Soni is mobile developer with 8 years of experience." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center px-4"> ${renderComponent($$result2, "Intro", Intro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/intro", "client:component-export": "default" })} ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/section-divider", "client:component-export": "default" })} ${renderComponent($$result2, "About", About, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/about", "client:component-export": "default" })} ${renderComponent($$result2, "Projects", Projects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/projects", "client:component-export": "default" })} ${renderComponent($$result2, "Skills", Skills, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/skills", "client:component-export": "default" })} ${renderComponent($$result2, "Experience", Experience, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/experience", "client:component-export": "default" })} ${renderComponent($$result2, "Contact", Contact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/contact", "client:component-export": "default" })} ${renderComponent($$result2, "Counter", Counter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Counter.svelte", "client:component-export": "default" })} </main> ` })}`;
}, "E:/Github/portfolio-website/src/pages/index.astro", void 0);

const $$file = "E:/Github/portfolio-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
