interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "POS Software Developer",
    company: "Self-Employed",
    duration: "Nov 2023 - Apr 2024",
    description: [
      "Built a comprehensive Shop Management System using the PERN stack",
      "Implemented user authentication, invoice management, financial transaction logging, real-time dashboards, and inventory tracking",
      "Developed customer and vendor management with complete transaction history",
      "Created payment status tracking system with automatic updates",
      "Built responsive UI with full CRUD operations via RESTful API",
      "Weekly improvements and new features to enhance usability",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Handontable Excel Table",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
  },
  {
    id: 2,
    role: "Web Development Instructor",
    company: "Self-Employed (University-Level-Students  )",
    duration: "May 2024 - Jun 2025",
    description: [
      "Taught HTML, CSS, JavaScript, React.js with hands-on project-based learning",
      "Delivered structured online training sessions focused on full stack web development for university students",
      "Created comprehensive curriculum materials including (JS-LifeCycle) Graph, coding challenges and real-world project assignments that increased student engagement",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "Web Development",
    ],
  },
  {
    id: 3,
    role: "Freelancing & IT Skills Trainer",
    company: "E.Zone Academy",
    duration: "Mar 2025 - Jul 2025",
    description: [
      "Conducted in-person workshops and training on how to start and grow a freelancing career",
      "Taught students how to build freelance profiles on platforms like Upwork and Fiverr, write winning proposals, and manage client relationships",
      "Mentored over 25+ aspiring students with individualized feedback, resulting in securing their first client within 3 months",
    ],
    technologies: [
      "Freelancing",
      "Upwork",
      "Fiverr",
      "Client Management",
      "Proposal Writing",
    ],
  },
];
