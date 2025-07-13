interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string | null;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "📱 Spotlight React Native",
    description:
      "Spotlight is a modern social media app built with React Native and Expo, designed to provide a seamless and engaging user experience. With a focus on simplicity and performance, Spotlight enables users to connect, share, and discover content effortlessly with beautifully designed interface.",
    technologies: ["React Native", "Expo", "Clerk", "Convex", "NativeWind"],
    githubUrl: "https://github.com/waleedwaseem/Spotlight-React-Native",
    demoUrl:
      "https://expo.dev/accounts/abdulrehman.code1/projects/spot-light/builds/12bb6587-06d8-4e2d-ac69-def0ca923306",
    imageUrl: "/images/spotlight-react-native.png",
  },
  {
    id: 1,
    title: "🧟 Zombie Invasion Game",
    description:
      "A thrilling 3D zombie survival game built with React, Three.js, and React Three Fiber. Navigate through a post-apocalyptic city environment while avoiding zombie hordes in this immersive web-based game.",
    technologies: [
      "React",
      "Ecctrl",
      "R3F",
      "React-Three/drei",
      "React-Three/Rapiar",
      "Typescript",
    ],
    githubUrl: "https://github.com/waleedwaseem/3d-Zombie-Invasion-Game",
    demoUrl: "https://zombie-invasion-three.vercel.app",
    imageUrl: "/images/zombie-invasion-game.png",
  },
  {
    id: 2,
    title: "🎮 My 3D Character Game (CSGO)",
    description:
      "This game features my own 3D face model as the main character, set on a recreated CS Dust map. It includes a custom 3rd person controller and camera view, offering an immersive and personalized gaming experience with a blend of familiar game environments and unique character design.",
    technologies: [
      "React",
      "R3F",
      "React-Three/drei",
      "React-Three/Rapiar",
      "Typescript",
    ],
    githubUrl: "https://github.com/waleedwaseem/My-3D-Character-Game",
    demoUrl: "https://my-3d-character-game.vercel.app/",
    imageUrl: "/images/my-3d-character-game.png",
  },
  {
    id: 3,
    title: "🛒 Shop Management System",
    description:
      "A comprehensive Shop Management System developed using the PERN stack. It features user authentication, invoice management, financial transaction logging, real-time dashboards, payment status tracking, inventory tracking, automatic cash updates and a dynamic dashboard that visualizes key business metrics.",
    technologies: [
      "React",
      "Redux Tool Kit",
      "Handsontable",
      "Express.js",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/waleedwaseem/Shop-Management-System",
    demoUrl: "https://github.com/waleedwaseem/Shop-Management-System",
    imageUrl: "/images/shop-management-system.png",
  },
  {
    id: 4,
    title: "🌀 3D Pipe Screen Saver",
    description:
      "A 3D Pipe Screen Saver (Windows 95) built using Electron.js, Three.js, and React, powered by the Electron Vite build tool. This dynamic desktop application generates mesmerizing, evolving 3D pipe structures, taking you back to the nostalgic Windows 95 screensaver era with a modern touch.",
    technologies: ["Electron.js", "Three.js", "React", "Typescript", "Vite"],
    githubUrl: "https://github.com/waleedwaseem/3D-Pipe-Screen-Saver",
    demoUrl:
      "https://github.com/waleedwaseem/3D-Pipe-Screen-Saver/releases/download/3dScreenSaver/3D.Pipe.Screen.Saver.Setup.1.1.0.exe",
    imageUrl: "/images/3d-pipe-screen-saver.png",
  },
  {
    id: 5,
    title: "📝 Blogs App (NestJS-GraphQL-Next.js)",
    description:
      "A full-stack, industry-standard application using NestJS (Prisma + GraphQL) for the backend and Next.js for the frontend. Performant API layer. Security is enforced with JWT-based authentication and optional two-factor authentication (2FA) and seamless QR-code for Google Authenticator. It follows secure architecture.",
    technologies: [
      "NestJS",
      "Next.js",
      "GraphQL",
      "2FA",
      "RTK Query",
      "Codegen",
    ],
    githubUrl: "https://github.com/waleedwaseem/NestJS-Prisma-GraphQL-Next.js/",
    demoUrl: "https://github.com/waleedwaseem/NestJS-Prisma-GraphQL-Next.js/",
    imageUrl: "/images/nestjs-prisma-graphql-next.js.png",
  },
  {
    id: 6,
    title: "🏭 Oil Refinery Platform",
    description:
      "This is an interactive 3D visualization demo for an oil refinery platform, designed to showcase the potential of a larger-scale industrial monitoring system. The demo provides a realistic preview of how a comprehensive oil refinery monitoring and management system could function. Featuring realistic water physics and dynamic lighting.",
    technologies: [
      "React",
      "Three.js",
      "React Three Ocean",
      "React-Three/postprocessing",
    ],
    githubUrl: "https://github.com/waleedwaseem/Oil-Refinery-Platform",
    demoUrl: "https://oil-refinery-platform.vercel.app",
    imageUrl: "/images/oil-refinery-platform.png",
  },
  {
    id: 7,
    title: "⚡ React19 Serverside Kit",
    description:
      "A minimal and modern React 19 Server-Side Rendering (SSR) starter using Vite, TypeScript, Tailwind CSS, and Express. This template leverages React 19's new streaming SSR API with renderToPipeableStream for optimized performance. Perfect for learning and building SSR-based applications with React.",
    technologies: [
      "React 19",
      "Typescript",
      "Express.js",
      "Tailwind CSS",
      "Vite",
    ],
    githubUrl: "https://github.com/waleedwaseem/React19-Serverside-Kit",
    demoUrl: "https://github.com/waleedwaseem/React19-Serverside-Kit",
    imageUrl: "/images/react19-serverside-kit.png",
  },

  {
    id: 8,
    title: "🚀 NestJS Microservices Auto Decorators",
    description:
      "It eliminates boilerplate code in NestJS microservice applications by providing intelligent decorators that automatically generate message patterns and handle message sending operations. This package improves developer productivity, reduces errors, and enforces consistent communication patterns across distributed systems.",
    technologies: ["NestJS", "Node.js", "Typescript", "ClientProxy"],
    githubUrl:
      "https://github.com/waleedwaseem/nestjs-microservice-auto-decorators",
    demoUrl:
      "https://www.npmjs.com/package/nestjs-microservice-auto-decorators",
    imageUrl: "/images/nestjs-microservice-auto-decorators.png",
  },
  {
    id: 9,
    title: "🔐 Electron License Distribution Template",
    description:
      "A modern TypeScript-based template for securely distributing Electron applications with integrated licensing and code protection. This project leverages modern tools like Electron Vite, Keygen.sh, Sentry.io and Bytenode to simplify the process of building, licensing, and securing your application.",
    technologies: [
      "Electron",
      "React",
      "Vite",
      "Keygen.sh",
      "Sentry.io",
      "Bytenode",
    ],
    githubUrl:
      "https://github.com/waleedwaseem/Electron-License-Distribution-Kit",
    demoUrl:
      "https://github.com/waleedwaseem/Electron-License-Distribution-Kit/archive/refs/tags/Electron-License-Distribution-kit.zip",
    imageUrl: "/images/electron-license-distribution-kit.png",
  },
  {
    id: 10,
    title: "☁️ Cloud File Management System",
    description:
      "A full-featured File Management System built with the MERN stack. Features include secure user authentication, file upload and management, Cloudinary integration for storage, Redis-based caching, and email notifications via Nodemailer. The system also includes a RESTful API for CRUD operations and efficient file handling.",
    technologies: [
      "MERN",
      "RTK Query",
      "BullMQ",
      "Redis",
      "Nodemailer",
      "Cloudinary",
    ],
    githubUrl: "https://github.com/waleedwaseem/Cloud-File-Management-System",
    demoUrl: "https://cloud-file-management-system.vercel.app",
    imageUrl: "/images/cloud-file-management-system.png",
  },
  {
    id: 11,
    title: "✍️ Blogger",
    description:
      "A comprehensive blogging platform built with Next.js featuring user authentication with Two-Factor Authentication (2FA), role-based access control, and rich text editing. It utilizes PostgreSQL with Prisma ORM for data management and Cloudinary for image storage, supporting commenting, ratings, and content moderation.",
    technologies: [
      "Next.js",
      "Cloudinary",
      "NextAuth",
      "React Hook Form",
      "Prisma",
    ],
    githubUrl: "https://github.com/waleedwaseem/NextJs-Blogs-App",
    demoUrl: "https://github.com/waleedwaseem/NextJs-Blogs-App",
    imageUrl: "/images/blogger.png",
  },
  {
    id: 12,
    title: "🎨 Chrome Color Customizer",
    description:
      "A simple Chrome extension to customize the color of any webpage. With this extension, users can change the background, text, and element colors for better readability, accessibility, or style. Great for dark mode enthusiasts or anyone looking to personalize their browsing experience.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Manifest.json",
      "Typescript",
    ],
    githubUrl:
      "https://github.com/waleedwaseem/Chrome-Webpage-Colorizer-Extension",
    demoUrl:
      "https://github.com/waleedwaseem/Chrome-Webpage-Colorizer-Extension/releases/download/Webpage-Colorizer/webpage-colorizer-extention.zip",
    imageUrl: "/images/chrome-color-customizer.png",
  },
];
