"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import AnimateEye from "@/components/AnimateEye";

const About = () => {
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
      className="about"
      id="about"
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Olamide, and i am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2019 when I created my first project called&nbsp;
            <Link
              href="https://sneaker-frontend2.onrender.com"
              target="_blank"
              className="link"
            >
              Sneaker
            </Link>{" "}
            with stunning design, an Ecommerce store built using React and
            Node.js
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing high
            quality solutions that delight clients and preceed their expectation
            I hope 🤔
          </p>

          {/* <p className="about-grid-info-text">
            Additional, I share my knowledge and passion with the world through
            my fitness web app, check it out{" "}
            <Link href="/" className="link">
              Here
            </Link>
          </p> */}
          <p className="about-grid-info-text">
            I just finished working on a new project called &nbsp;
            <Link
              href="https://laundryservice-i13l.onrender.com"
              target="_blank"
              className="link"
            >
              Quill
            </Link>{" "}
            communicate to your PDF file by leveraging AI.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Next js</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">SCSS</li>
            <li className="about-grid-info-list-item">Node js</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Tailwind</li>
            <li className="about-grid-info-list-item">Mongo db</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Material Ui</li>
            <li className="about-grid-info-list-item">Prisma</li>
            <li className="about-grid-info-list-item">Redux</li>
            <li className="about-grid-info-list-item">Shadcn UI</li>
            <li className="about-grid-info-list-item">Express</li>
          </ul>
        </div>

        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>

          <div className="about-grid-photo-container"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
