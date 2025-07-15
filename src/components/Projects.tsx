import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    projects.forEach((project) => {
      const img = new window.Image();
      img.src = project.imageUrl;
    });
  }, []);

  return (
    <section id="projects" className="section">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="heading">Featured Projects</h2>
          <p className="max-w-2xl mx-auto subheading">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="flex flex-col max-w-6xl gap-8 mx-auto md:flex-row md:items-center">
          {/* Left: Image */}
          {/* Image Container with Exact Transparency Checkerboard Pattern */}
          <div className="relative flex-shrink-0 w-full h-64 overflow-hidden rounded-lg md:w-1/2 md:h-96 border border-text-primary/20 shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            {/* Dark Gray Checkerboard Background (exact match to image) */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
        linear-gradient(45deg, #2a2a2a 25%, transparent 25%), 
        linear-gradient(-45deg, #2a2a2a 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, #2a2a2a 75%), 
        linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)`,
                backgroundColor: "#3a3a3a",
                backgroundSize: "16px 16px",
                backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px",
              }}
            ></div>

            {/* Subtle vignette effect to match the image */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>

            {/* Actual Image */}
            <Image
              key={projects[current].imageUrl}
              src={projects[current].imageUrl}
              priority={projects[current].id === 1}
              loading="eager"
              fill
              alt={projects[current].title}
              className="relative z-10 object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-5 md:w-1/2">
            {/* Pagination dots */}
            <div className="flex items-center gap-3 mb-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to project ${index + 1}`}
                  className={`w-[0.90rem] h-[0.90rem] md:w-5 md:h-5 rounded-full border border-text-secondary transition-all duration-300 ${
                    current === index
                      ? "bg-primary scale-125 border-primary"
                      : "bg-transparent hover:border-white/80 hover:scale-105"
                  }`}
                />
              ))}
            </div>
            {/* Title with animation */}
            <motion.h3
              key={projects[current].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold"
            >
              {projects[current].title}
            </motion.h3>
            <motion.p
              key={`desc-${projects[current].id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-text-secondary"
            >
              {projects[current].description}
            </motion.p>
            {/* Technologies with hover effect */}
            <div className="flex flex-wrap gap-2 mt-3">
              {" "}
              {/* Increased margin-top */}
              {projects[current].technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm transition-all duration-200 rounded bg-secondary text-text-primary hover:bg-secondary/80 hover:scale-105 hover:shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Links */}
            <div className="flex gap-4 mt-6">
              {/* <a
                href={projects[current].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-transform duration-200 btn hover:scale-105 active:scale-95"
              >
                <Github className="w-5 h-5" />
                Code
              </a> */}
              {projects[current].demoUrl && (
                <a
                  href={projects[current].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-transparent border btn border-primary text-primary hover:bg-primary hover:text-background transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <button
            aria-label="Previous project"
            onClick={prevProject}
            className="p-3 transition-all duration-200 rounded-full bg-secondary hover:bg-secondary/80 hover:scale-110 active:scale-95 hover:shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next project"
            onClick={nextProject}
            className="p-3 transition-all duration-200 rounded-full bg-secondary hover:bg-secondary/80 hover:scale-110 active:scale-95 hover:shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/waleedwaseem200"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mx-auto btn w-fit"
          >
            <Code className="w-5 h-5 mr-2" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
