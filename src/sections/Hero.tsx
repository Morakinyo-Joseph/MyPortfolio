"use client";
import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimateEye from "@/components/AnimateEye";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large hero-title-image"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Morakinyo David
        <div className="hero-title-image-display">
          <AnimateEye />
        </div>
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
        className="hero-title-large heror-title-sub"
      >
        I craft things for web
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
        className="hero-text"
      >
        I&apos;m a frontend engineer with expertise in creating top notch
        digital experience. My current involvement is to develop products that
        are accessible and centered around user needs.
        {/* <Link href={"/"} className="link">
          Rapido.
        </Link> */}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
        className="hero-button"
      >
        <Button text="Contact Me" link="/#contact" />
      </motion.div>
    </div>
  );
};

export default Hero;
