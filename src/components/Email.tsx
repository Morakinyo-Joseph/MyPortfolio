"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type EmailProps = {};

const Email: React.FC<EmailProps> = () => {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <Link href="mailto:olamidemoraks@gmail.com" className="email-link">
        olamidemoraks@gmail.com
      </Link>
    </motion.div>
  );
};
export default Email;
