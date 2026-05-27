import {
  backend,
  cord_digital_logo,
  creator,
  css,
  docker,
  ena,
  es6,
  git,
  html,
  javascripticon,
  logo,
  misrajtech,
  mobile,
  mongodb,
  mtoun,
  nodejs,
  reactjs,
  redux,
  saladbar,
  sass,
  tailwind,
  threejs,
  typescript,
  web,
} from "../assets";
import arrows from "../assets/arrowsBanner.png";
import drcode from "../assets/drcode.png";
import eliteSmile from "../assets/elitesmileDashboard.png";
import mui from "../assets/mui.png";
import rayedDashboard from "../assets/rayedDahsboard.png";
import wadjet from "../assets/wadjetBanner.png";
import ymtazLogo from "../assets/ymtaz.svg";
import ymtaz from "../assets/ymtazBanner.png";
import OrangeLogo from "../assets/OrangeLogo.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "https://drive.google.com/file/d/1mXwpgoBJC7MS2IFgHVWP3mrHzbhZK1o6/view",
    title: "Resume",
  },
];
const services = [
  {
    title: "FinTech & RegTech Systems",
    icon: backend,
  },
  {
    title: "Microservices Architecture",
    icon: backend,
  },
  {
    title: "Event-Driven & Distributed Systems",
    icon: backend,
  },
  {
    title: "API Development & Integration",
    icon: backend,
  },
  {
    title: "Team Leadership & Mentorship",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: backend,
  },
  {
    name: "Spring Boot",
    icon: backend,
  },
  {
    name: "Python",
    icon: backend,
  },
  {
    name: "Django",
    icon: backend,
  },
  {
    name: "FastAPI",
    icon: backend,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: backend,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "PHP Laravel",
    icon: backend,
  },
  {
    name: "PostgreSQL",
    icon: mongodb,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: backend,
  },
  {
    name: "Apache Kafka",
    icon: backend,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: docker,
  },
  {
    name: "AWS",
    icon: backend,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "GraphQL",
    icon: backend,
  },
  {
    name: "GIT",
    icon: git,
  },
];
const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "ESNAD (Eon Technology) – Egypt",
    company_domain: "https://esnad.io/",
    icon: ena,
    iconBg: "#1a1a2e",
    date: "Jan 2025 - Present · 1 yr 5 mos",
    points: [
      "Leading back-end development of Sanad360 — a CMA/AML-compliant RegTech platform with client verification, risk scoring, and watchlist screening across 12+ microservices.",
      "Developing Tarh — a CMA-licensed Shariah-compliant investment platform with Saga-based distributed transaction orchestration and real-time portfolio tracking.",
      "Architected Kafka-based event pipeline for real-time transaction monitoring with Outbox Pattern for reliable event publishing across microservices.",
      "Implemented Saga Orchestrator for distributed transactions across payment, compliance, and notification services with idempotent handlers and DLQ processing.",
      "Set up Grafana dashboards with Prometheus for real-time monitoring of API latency, transaction throughput, and compliance processing.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Salad Bar Trading Company – KSA",
    company_domain: "https://saladbar.sa",
    icon: saladbar,
    iconBg: "#383E56",
    date: "Aug 2024 - Jan 2025 · 6 mos",
    points: [
      "Led back-end development and system integrations for SaladBar vending machines, Chinese portals, and mobile apps using PHP Laravel and Tailwind CSS.",
      "Managed tasks and team collaboration in Asana, ensuring smooth rollouts and handling complex requirements.",
      "Deployed systems on Google Cloud VPS, prioritizing scalability, security, and performance.",
      "Integrated Odoo ERP for inventory management, subscription billing, and daily operations with Docker and 24/7 uptime.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Misraj Technology – KSA",
    company_domain: "https://misraj.sa/",
    icon: misrajtech,
    iconBg: "#eeeeee",
    date: "Aug 2023 - Dec 2024 · 1 yr 5 mos",
    points: [
      "Spearheaded projects from database design to implementation using PostgreSQL, Hasura, and FusionAuth.",
      "Managed local, dev, staging, and production environments, developing GraphQL APIs with authentication and CRUD operations.",
      "Facilitated daily stand-up meetings, communicated frontend needs, and integrated YouTube live stream and Google Firebase for notifications.",
      "Built WebSocket solutions for real-time communication and collaborated with DevOps on deployment.",
      "Handled Hasura events and developed endpoints using NestJS and FastAPI, incorporating FusionAuth for GraphQL authentication.",
    ],
  },
  {
    title: "Back End Engineer",
    company_name: "Orange Digital Center – Egypt",
    company_domain: "https://www.orangedigitalcenters.com/country/EG/home",
    icon: OrangeLogo,
    iconBg: "#eeeeee",
    date: "Aug 2022 - Jul 2023 · 1 yr",
    points: [
      "Responsible for CRUD RESTful APIs, code review, maintaining and debugging using Node.js, TypeScript, and NestJS.",
      "Provided fast and secure code with OAuth2/JWT authentication and implemented security mitigations for technical and logical vulnerabilities.",
      "Completed Professional Agile Scrum Master training (PASM) — covering Agile methodologies, Scrum theory, artifacts, and Jira.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Freelance – Egypt",
    company_domain: "https://www.upwork.com/freelancers/~01758f2d61d4449522",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2022 - Present · 4 yrs 5 mos",
    points: [
      "Full Stack Developer using PHP Laravel, Bootstrap framework & Ajax; developing web sites from scratch with PHP Native, RESTful API service & MVC.",
      "Features Update, Code Review & Debugging; Security Mitigations and Risk Management for all kinds of Technical and Logical Vulnerabilities.",
      "Web Server Configuration and deployment; Led teams to develop feature-rich applications, integrating payments, shipping, and APIs.",
      "Oversaw end-to-end development, from analysis to deployment on Google Cloud, AWS, and Azure.",
    ],
  },
];
const projects = [
  {
    name: "Sanad360",
    description: `
      A CMA/AML-compliant RegTech platform for client verification, risk scoring, and watchlist screening. Built with Java Spring Boot / Python Django microservices, Kafka event pipeline, Saga Orchestrator for distributed transactions, and Grafana monitoring across 12+ microservices.
    `,
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "green-text-gradient",
      },
      {
        name: "microservices",
        color: "pink-text-gradient",
      },
      {
        name: "fintech",
        color: "orange-text-gradient",
      },
      {
        name: "grafana",
        color: "green-text-gradient",
      },
    ],
    image: wadjet,
    source_code_link: "https://esnad.io/",
  },
  {
    name: "Tarh",
    description: `
      A CMA-licensed Shariah-compliant investment platform with real-time portfolio tracking, Saga-based payment orchestration, and Redis caching. Built with Spring Boot / Django microservices, Spring Cloud Gateway, and distributed transaction patterns.
    `,
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "saga",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "orange-text-gradient",
      },
      {
        name: "cma",
        color: "blue-text-gradient",
      },
    ],
    image: arrows,
    source_code_link: "https://esnad.io/",
  },
  {
    name: "Mtoun (متون)",
    description: `
      Mobile platform for text memorization, combining live streaming, dynamic attendance tracking, and real-time communication. Built with NestJS, MySQL, and PostgreSQL, the backend integrates FusionAuth for authentication, Hasura for GraphQL APIs, and Jitsi/YouTube live streaming. WebSocket-based attendance tracking and custom certificate generator with precision layout adjustments.
    `,
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "fusionauth",
        color: "green-text-gradient",
      },
      {
        name: "websocket",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: mtoun,
    source_code_link: "https://mtoun.com/",
  },
  {
    name: "SaladBar Meals",
    description: `
      An innovative platform designed to streamline access to fresh salads and healthy meals through vending machines across Saudi Arabia. The backend integrates seamlessly with SaladBar vending machines, third-party Chinese systems, and mobile apps (Flutter). Features real-time menu updates, machine status tracking, and subscription management via PHP Laravel APIs.
    `,
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
      {
        name: "odoo",
        color: "blue-text-gradient",
      },
      {
        name: "gcp",
        color: "green-text-gradient",
      },
    ],
    image: saladbar,
    source_code_link: "https://saladbar.sa",
  },
  {
    name: "Inearby App",
    description: `
      A real-time gaming platform connecting players through nearby location technology for engaging challenges like Tic Tac Toe and Ant and the Tree. Built from scratch using Node.js and NestJS with secure OTP-based authentication, matchmaking algorithms, WebSocket-based real-time gameplay, and Dockerized deployment with Nginx.
    `,
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "websocket",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "nginx",
        color: "orange-text-gradient",
      },
    ],
    image: drcode,
    source_code_link: "#",
  },
  {
    name: "Flore",
    description: `
      A comprehensive system for managing and selling floral products, integrating a mobile app (React Native) for customers and a web-based admin panel for inventory and order management. Built with PHP Laravel MVC architecture, RESTful APIs, and secure payment gateway integrations for real-time order tracking and inventory updates.
    `,
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "rest-api",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: eliteSmile,
    source_code_link: "#",
  },
  {
    name: "GameWise",
    description: `
      An interactive gaming platform offering engaging challenges with real-time progress tracking, customizable settings, and subscription models. Powered by PHP Laravel MVC architecture with API-based interactions for real-time updates, Flutter mobile app, and responsive admin panel for managing the gaming ecosystem.
    `,
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "mvc",
        color: "orange-text-gradient",
      },
    ],
    image: rayedDashboard,
    source_code_link: "#",
  },
  {
    name: "Family Tree System",
    description: `
      An intuitive platform for documenting, organizing, and visualizing family relationships and genealogies with bilingual support (Arabic/English). Features interactive tree view, RESTful APIs for Flutter mobile app integration, and scalable relational database design using PHP Laravel and MySQL.
    `,
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "bilingual",
        color: "green-text-gradient",
      },
    ],
    image: ymtaz,
    source_code_link: "#",
  },
  {
    name: "Souq App",
    description: `
      A scalable e-commerce platform designed as a single-vendor system with flexibility to transform into a multi-vendor marketplace. Features Flutter mobile app for cross-platform shopping, PHP Laravel MVC backend with robust API integrations, and responsive admin panel with Bootstrap/jQuery.
    `,
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "mvc",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "orange-text-gradient",
      },
    ],
    image: mui,
    source_code_link: "#",
  },
  {
    name: "La Vie",
    description: `
      A complete platform for plant enthusiasts and businesses with product management, community forums, interactive quizzes, and admin dashboard. Built with NestJS, MySQL with Prisma ORM, JWT/OAuth authentication, Swagger API documentation, and deployed on Google Cloud with Docker.
    `,
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "swagger",
        color: "green-text-gradient",
      },
    ],
    image: drcode,
    source_code_link: "#",
  },
  {
    name: "Petology",
    description: `
      A backend system for managing homeless animal shelters, streamlining animal management, adoption requests, and shelter operations. Built with LoopBack 4, MySQL, JWT/OAuth authentication, role-based access control, and Dockerized deployment with centralized error handling.
    `,
    tags: [
      {
        name: "loopback",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "oauth",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
    image: drcode,
    source_code_link: "#",
  },
];

const certifications = [
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "Jan 2022",
    credential: "https://www.credly.com/badges/",
  },
  {
    title: "CyberOps Associate",
    issuer: "Cisco",
    date: "May 2022",
    credential: "https://www.credly.com/badges/",
  },
  {
    title: "Network Security",
    issuer: "Cisco",
    date: "Jun 2022",
    credential: "https://www.credly.com/badges/",
  },
  {
    title: "IT Academy: Cloud and Virtualization Concepts",
    issuer: "VMware",
    date: "Mar 2022",
    credential: "",
  },
  {
    title: "Professional Agile Scrum Master (PASM)",
    issuer: "Orange Digital Center",
    date: "Sep 2022",
    credential: "ODC6381120NO",
  },
  {
    title: "Back End PHP Laravel",
    issuer: "ITI (Information Technology Institute)",
    date: "Jun 2022",
    credential: "",
  },
  {
    title: "Network and Information Security (NIS)",
    issuer: "NTI (National Telecommunication Institute)",
    date: "Mar 2022",
    credential: "Student ID: 29771",
  },
  {
    title: "GDSC Core Team Member",
    issuer: "Google Developers Student Club – Helwan University",
    date: "Jul 2022",
    credential: "IKP3ML9UM88F",
  },
  {
    title: "Back End Hackathon Winner",
    issuer: "Orange Digital Center",
    date: "Sep 2022",
    credential: "ODC4171053IH",
  },
  {
    title: "Network Hackathon Winner",
    issuer: "Orange Digital Center",
    date: "Sep 2022",
    credential: "ODC1711145BK",
  },
];

export { certifications, experiences, projects, services, technologies };
