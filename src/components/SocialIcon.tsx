"use client";
import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

type Props = {};

export default function SocialIcon({}: Props) {
  const socialIcons = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "http://www.github.com/olamide",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/morakinyo-olamide/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/chippy_vibe/",
    },
    // {
    //   name: "Twitter",
    //   icon: <FiTwitter />,
    //   link: "https://twitter.com/morakinyodavi10",
    // },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialIcons.map(({ icon, link, name }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
