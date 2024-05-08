"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiChevronDown } from "react-icons/fi";
import { projectsData } from "@/constant";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = () => {
  const [totalShow, setTotalShow] = useState(3);
  const allProject = projectsData.length;
  let skip = 3;

  const viewMore = () => {
    setTotalShow((prev) => {
      if (prev >= skip && prev <= allProject) {
        return prev + skip;
      }
      return prev;
    });
  };

  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      className="projects"
      id="work"
    >
      <div className="title">
        <h2>Some Things I’ve Built</h2>
      </div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <div className="project" key={projectName}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <Link
                    href={projectExternalLinks.externalLink}
                    className="project-info-title"
                  >
                    <h3 className="">{projectName}</h3>
                  </Link>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </motion.div>
  );
};

export default Project;
