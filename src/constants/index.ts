// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  python,
  java,
  clang,
  aws,
  mysql,
  opencv,
  mponline,
  deloitte,
  vitbhopal,
  campusCompass,
  carPrice,
  faceRecognition,
  billingSystem,
  quizApp,
  linkedin,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "certifications",
    title: "Certifications",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/riyaashukla30",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "AI / ML Engineer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Cloud Enthusiast",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: clang,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
] as const;

// Experiences (includes education as the earliest milestone)
export const EXPERIENCES = [
  {
    title: "B.Tech, Computer Science Engineering",
    company_name: "VIT Bhopal University",
    icon: vitbhopal,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Pursuing a B.Tech in Computer Science Engineering with a CGPA of 8.80.",
      "Core Member of the AWS Club and NTC Club, contributing to cloud and tech community initiatives.",
      "Participated in Smart India Hackathon, Anti Piracy Challenge, and Accenture Innovation Challenge.",
    ],
  },
  {
    title: "Job Simulation",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Solved real-world business case problems as part of Deloitte's virtual job simulation.",
      "Applied analytical thinking to improve workflows and derive actionable insights.",
    ],
  },
  {
    title: "AI/ML Intern",
    company_name: "MPOnline Limited",
    icon: mponline,
    iconBg: "#383E56",
    date: "May 2026 - Present",
    points: [
      "Developed AI/ML-based solutions for real-world problems.",
      "Applied data preprocessing, model building, and evaluation techniques.",
      "Collaborated with team members to deliver project insights.",
    ],
  },
  {
    title: "Digital Marketing Intern",
    company_name: "MPOnline Limited",
    icon: mponline,
    iconBg: "#E6DEDD",
    date: "May 2026 - Present",
    points: [
      "Worked on campaign execution, SEO basics, and performance analysis.",
      "Utilized data-driven insights to improve campaign effectiveness.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Campus Compass AI",
    description:
      "An AI-based career guidance platform that helps students choose the right career path using intelligent, skill-and-interest-based recommendations, backed by a scalable backend architecture.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "ai-apis",
        color: "pink-text-gradient",
      },
    ],
    image: campusCompass,
    source_code_link: "https://github.com/riyaashukla30",
    live_site_link: "https://github.com/riyaashukla30",
  },
  {
    name: "Car Price Prediction ML Model",
    description:
      "A machine learning model that predicts used car prices from a real-world dataset, built with data preprocessing, feature engineering, and optimized regression algorithms.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: carPrice,
    source_code_link: "https://github.com/riyaashukla30",
    live_site_link: "https://github.com/riyaashukla30",
  },
  {
    name: "AI/ML Face Recognition System",
    description:
      "A computer vision system that detects and recognizes faces in real time, built using image processing pipelines and a trained recognition model.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "computer-vision",
        color: "pink-text-gradient",
      },
    ],
    image: faceRecognition,
    source_code_link: "https://github.com/riyaashukla30",
    live_site_link: "https://github.com/riyaashukla30",
  },
  {
    name: "Electricity Billing System",
    description:
      "A desktop application for electricity billing and customer management, with database connectivity and automated billing processes.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: billingSystem,
    source_code_link: "https://github.com/riyaashukla30",
    live_site_link: "https://github.com/riyaashukla30",
  },
  {
    name: "Cloud-Based Quiz Application",
    description:
      "A cloud-hosted quiz platform built for certification preparation, deployed on AWS EC2 with a focus on performance and accessibility.",
    tags: [
      {
        name: "aws-ec2",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html-css",
        color: "pink-text-gradient",
      },
    ],
    image: quizApp,
    source_code_link: "https://github.com/riyaashukla30",
    live_site_link: "https://github.com/riyaashukla30",
  },
] as const;

// Certifications
export const CERTIFICATIONS = [
  {
    title: "ServiceNow Virtual Internship Program",
    issuer: "The SmartBridge",
    year: "2026",
  },
  {
    title: "Marketing Analytics",
    issuer: "NPTEL",
    year: "2026",
  },
  {
    title: "Google Generative AI Certification",
    issuer: "Google",
    year: "2026",
  },
  {
    title: "AWS Machine Learning",
    issuer: "NPTEL",
    year: "2025",
  },
  {
    title: "Cloud Training & Workshops",
    issuer: "AWS Club, VIT Bhopal",
    year: "2024 - 2026",
  },
] as const;

// Achievements & Positions of Responsibility
export const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon",
    year: "2025",
  },
  {
    title: "Anti Piracy Challenge",
    year: "2025",
  },
  {
    title: "Accenture Innovation Challenge",
    year: "2024",
  },
  {
    title: "Core Member - AWS Club & NTC Club, VIT Bhopal",
    year: "2024 - 2026",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/riya-shukla-822a7a411",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/riyaashukla30",
  },
] as const;
