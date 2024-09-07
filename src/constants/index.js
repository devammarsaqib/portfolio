import {
  fullstack,
  frontend,
  backend,
  contentcreator,
  freelancer,
  upwork,
  html,
  css,
  git,
  python,
  javascript,
  react,
  node,
  express,
  mongodb,
  rps,
  blogs,
  todo,
  ecommerce,
  restaurant,
  urlshortener,
} from "../assets";

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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Web Developer",
    icon: fullstack,
  },
  {
    title: "Front End Developer",
    icon: frontend,
  },
  {
    title: "Back End Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: contentcreator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    progress: 95,
  },
  {
    name: "CSS 3",
    icon: css,
    progress: 95,
  },
  {
    name: "Git",
    icon: git,
    progress: 95,
  },
  {
    name: "Python",
    icon: python,
    progress: 85,
  },
  {
    name: "JavaScript",
    icon: javascript,
    progress: 85,
  },
  {
    name: "React JS",
    icon: react,
    progress: 90,
  },
  {
    name: "Node JS",
    icon: node,
    progress: 80,
  },
  {
    name: "Express JS",
    icon: express,
    progress: 90,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    progress: 95,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Developing and maintaining web applications using React JS, Node.js and other related technologies.",
      "Collaborating with cross-functional teams and individuals including designers and other developers to create high-quality web apps.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "papayawhip",
    date: "September 2024 - Present",
    points: [
      "Developing and maintaining web applications using React JS, Node.js and other related technologies.",
      "Collaborating with cross-functional teams and individuals including designers and other developers to create high-quality web apps.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec accumsan libero. Consectetur est vel, vestibulum dolor.",
    name: "Frederick Curtis",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Donec eget arcu lacus. Nunc eget tellus maximus justo faucibus porta. Nunc sed metus a nibh blandit malesuada.",
    name: "Matilda McKinney",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Nam massa ipsum, luctus eget massa vel, vulputate ultricies erat. Donec luctus molestie nisl, a lobortis velit laoreet vel.",
    name: "Ricardo Wilson",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Rock Paper Scissors",
    description:
      "Play the intransitive hand game, where you can choose between rock, paper and scissor with the computer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rps,
    source_code_link: "https://github.com/",
  },
  {
    name: "Restaurant/Food Delivery App",
    description:
      "Web app that enables clients to search for the food they are looking for, view the description and prices, and order by providing contact info and delivery address.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest_api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blog App",
    description:
      "A comprehensive blogging platform that allows users to post their blogs and share them with other users. Admins can edit, delete and approve blog posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: blogs,
    source_code_link: "https://github.com/",
  },
  {
    name: "To-Do App",
    description:
      "A simple basic and easy to use to-do app that allows users to add, edit and delete tasks throughout the day.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest_api",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/",
  },
  {
    name: "URL Shortener",
    description:
      "A simple and free URL shortener that allows users to shorten long URLs and share them with others while keeping record of their clicks.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "rest_api",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: urlshortener,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-commerce App",
    description:
      "An E-commerce app, that allows users to purchase, add to cart and review the products online. Moderators and admins can add, edit and delete products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
