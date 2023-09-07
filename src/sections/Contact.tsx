"use client";
import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
      className="contact"
      id="contact"
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get in Touch</h2>
      <p className="contact-text">
        Let work together, I&apos;m currently looking for new opportunities, my
        inbox is always open. Send a message let&apos;s get in touch.
      </p>

      <div className="contact-cta">
        <Button text="Say Hello" link="mailto:olamidemoraks@gmail.com" />
      </div>
    </motion.div>
  );
};

export default Contact;
