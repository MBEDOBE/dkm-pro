"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Project {
  id: number;
  image: string;
  name: string;
  stack: string[];
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/assets/sab-mock.webp",
    name: "St. Joseph Technical Institute Website",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description: "Designed and coded a fully responsive school website.",
    link: "https://stjosephtechsaboba.com",
  },
  {
    id: 2,
    image: "/assets/sha-mock.webp",
    name: "Shalom Guest House App",
    stack: ["React", "Tailwind", "Node.js", "Express", "SQL"],
    description:
      "Designed and developed a booking system and guest house management application from the ground up.",
    link: "https://shalompguestsaboba.com",
  },
  {
    id: 3,
    image: "/assets/ypc-mock.webp",
    name: "Yendi Peace Centre",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description: "Designed and coded a fully responsive website for YPC.",
    link: "https://yendipeacecentre.org",
  },
  {
    id: 4,
    image: "/assets/asp-mock.webp",
    name: "AspireEd Project",
    stack: ["React", "Tailwind"],
    description:
      "Designed and coded a responsive, clean and modern site for an education-focused project.",
    link: "https://theaspireedproject.org",
  },
  {
    id: 5,
    image: "/assets/svd-mock.webp",
    name: "SVD Ghana Redesign",
    stack: ["WordPress", "Elementor"],
    description:
      "Redesigned and reproduced the existing SVD Ghana website in WordPress.",
    link: "https://svdghana.org",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PortfolioContent: FC = () => {
  return (
    <motion.section
      className="flex flex-col items-center w-full max-w-screen-xl min-h-screen gap-6 mx-auto  lg:justify-between lg:gap-10 pt-28 md:pb-28 lg:py-0 lg:flex-row"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Left content */}
      <div className="w-full lg:w-[35%] space-y-4">
        <motion.div
          className="h2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="">
            See <span className="text-orange-500">My Works</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Discover a collection of my most recent and notable projects. Each one
          reflects my commitment to quality, creativity, and achieving client
          goals.
        </motion.p>
      </div>

      {/* Swiper section */}
      <motion.div
        className="w-full lg:w-[60%] p-2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="flex flex-col mr-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full mb-4 rounded-xl"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="flex flex-col gap-2 mb-8 lg:justify-between md:flex-row ">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-600">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-400 ">
                      {project.description}
                    </p>
                  </div>
                  <motion.div
                    className="flex flex-col items-start gap-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {/* Pills for tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium text-orange-400 border border-orange-500 rounded-full bg-orange-900/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Animated link */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-red-400"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      View live site
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default PortfolioContent;
