import {
  backend,
  creator,
  css,
  ena,
  es6,
  git,
  html,
  javascript,
  mobile,
  reactjs,
  redux,
  sass,
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
    id: "https://drive.google.com/file/d/1YG-SBz00uZgJRWIl3zFb7fGKqGhoTpgz/view?usp=drive_link",
    title: "Resume",
  },
];
const services = [
  {
    title: "Back-End Development",
    icon: backend, // Replace with an appropriate icon
  },
  {
    title: "API Development & Integration",
    icon: api, // Replace with an appropriate icon
  },
  {
    title: "Database Design & Optimization",
    icon: database, // Replace with an appropriate icon
  },
  {
    title: "Microservices Architecture",
    icon: microservices, // Replace with an appropriate icon
  },
  {
    title: "Project Management & Mentorship",
    icon: management, // Replace with an appropriate icon
  },
];

const technologies = [
  {
    name: "PHP",
    icon: php, // Replace with an appropriate icon
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript, // Replace with an appropriate icon
  },
  {
    name: "Node.js",
    icon: nodejs, // Replace with an appropriate icon
  },
  {
    name: "Laravel",
    icon: laravel, // Replace with an appropriate icon
  },
  {
    name: "NestJS",
    icon: nestjs, // Replace with an appropriate icon
  },
  {
    name: "FastAPI",
    icon: fastapi, // Replace with an appropriate icon
  },
  {
    name: "MySQL",
    icon: mysql, // Replace with an appropriate icon
  },
  {
    name: "PostgreSQL",
    icon: postgresql, // Replace with an appropriate icon
  },
  {
    name: "GraphQL",
    icon: graphql, // Replace with an appropriate icon
  },
  {
    name: "Firebase",
    icon: firebase, // Replace with an appropriate icon
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker, // Replace with an appropriate icon
  },
];
const experiences = [
  {
    title: "Software Engineer",
    company_name: "SaladBar Vending Machine – KSA",
    icon: saladBarIcon, // Replace with an appropriate icon
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Led and mentored a software engineering team, managing tasks, timelines, and ensuring the delivery of high-quality, scalable software solutions.",
      "Implemented complex back-end architectures, integrating multiple systems using PHP Laravel, Tailwind CSS, and optimizing performance for scalability and reliability.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Misraj Technology – KSA",
    icon: misrajIcon, // Replace with an appropriate icon
    iconBg: "#eeeeee",
    date: "Aug 2023 - Jul 2024",
    points: [
      "Engineered scalable systems using Node.js, NestJS, Python, and FastAPI, with RESTful and GraphQL APIs.",
      "Designed microservices architectures, integrating Hasura, FusionAuth, real-time WebSocket, and notifications for seamless user experiences.",
      "Collaborated with project managers to deliver secure, real-time systems.",
    ],
  },
  {
    title: "Back End Developer",
    company_name: "Cord Digital – Egypt",
    icon: cordDigitalIcon, // Replace with an appropriate icon
    iconBg: "#383E56",
    date: "Feb 2023 - Jul 2023",
    points: [
      "Built robust and scalable back-end solutions using PHP Laravel.",
      "Developed RESTful APIs and managed databases (MySQL, PostgreSQL), optimizing system performance and implementing security protocols.",
      "Coordinated with DevOps teams for deployment and maintenance.",
    ],
  },
  {
    title: "Back End Engineer",
    company_name: "Orange Digital Center – Egypt",
    icon: orangeDigitalIcon, // Replace with an appropriate icon
    iconBg: "#eeeeee",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Designed and maintained scalable server-side architectures using Node.js (Express, NestJS).",
      "Collaborated with web, mobile, and UX teams in an Agile environment, utilizing tools like Jira to ensure seamless project execution.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance – Egypt",
    icon: freelanceIcon, // Replace with an appropriate icon
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Delivered secure, high-performance systems using PHP and Node.js with clean code and design patterns.",
      "Led teams to develop feature-rich applications, integrating payments, shipping, and APIs for business needs.",
      "Oversaw end-to-end development, from analysis to deployment on platforms like Google Cloud, AWS, and Azure.",
    ],
  },
];
const projects = [
  {
    name: "Mutton App",
    description: `
      A comprehensive platform featuring NestJS and MySQL. Includes Jitsi live streaming, YouTube integration, Firebase notifications, WebSocket-based attendance tracking, and live usage tracking with custom-designed certificate generation.
    `,
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "jitsi",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "websocket",
        color: "green-text-gradient",
      },
    ],
    image: muttonApp, // Replace with the project image
    source_code_link: "https://mtoun.com/", // Replace with the actual link
  },
  {
    name: "Fypi POS",
    description: `
      Built a POS system using PHP Laravel, Firebase, Stripe, and PayPal. Managed APIs, designed the database, and led the deployment of six integrated apps in an Agile-driven environment.
    `,
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
      {
        name: "paypal",
        color: "green-text-gradient",
      },
    ],
    image: fypiPOS, // Replace with the project image
    source_code_link: "https://fypi.com", // Replace with the actual link
  },
  {
    name: "Salad Bar Meals",
    description: `
      A vending machine integration project with PHP Filament, Laravel, Tailwind CSS, MySQL, REST APIs, microservices architecture, and web scraping across three applications.
    `,
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "filament",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: saladBar, // Replace with the project image
    source_code_link: "https://saladbar.sa", // Replace with the actual link
  },
];

export { experiences, projects, services, technologies };
