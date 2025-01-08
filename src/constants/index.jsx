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
  // javascript,
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
    title: "Back-End Development",
    icon: backend, // Replace with an appropriate icon
  },
  {
    title: "API Development & Integration",
    icon: backend, // Replace with an appropriate icon
  },
  {
    title: "Database Design & Optimization",
    icon: backend, // Replace with an appropriate icon
  },
  {
    title: "Microservices Architecture",
    icon: backend, // Replace with an appropriate icon
  },
  {
    title: "Project Management & Mentorship",
    icon: backend, // Replace with an appropriate icon
  },
];

const technologies = [
  {
    name: "ES6",
    icon: es6,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "HTML",
    icon: html,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Mobile Development",
    icon: mobile,
  },
  {
    name: "Backend Development",
    icon: backend,
  },
  {
    name: "Web Development",
    icon: web,
  },
  {
    name: "GIT",
    icon: git,
  },
  // {
  //   name: "javascripticon",
  //   icon: javascripticon,
  // },
];
const experiences = [
  {
    title: "Software Engineer",
    company_name: "SaladBar Vending Machine – KSA",
    company_domain: "https://saladbar.sa",
    icon: saladbar,
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
    company_domain: "https://misraj.sa/",
    icon: misrajtech,
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
    company_domain: "https://corddigital.com/en",
    icon: cord_digital_logo,
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
    company_domain: "https://www.orangedigitalcenters.com/country/EG/home",
    icon: OrangeLogo,
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
    company_domain: "https://www.upwork.com/freelancers/~01758f2d61d4449522",
    icon: logo,
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
    image: mtoun, // Replace with the project image
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
    image: mtoun, // Replace with the project image
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
    image: mtoun, // Replace with the project image
    source_code_link: "https://saladbar.sa", // Replace with the actual link
  },
];

export { experiences, projects, services, technologies };
