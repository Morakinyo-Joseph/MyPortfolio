"use client";
import AnimateEye from "@/components/AnimateEye";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcon from "@/components/SocialIcon";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Eduction from "@/sections/Eduction";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Project from "@/sections/Project";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleLoaderLoaded = () => {
      // setIsLoading(false);
      if (!isLoading) {
        setTimeout(() => setShowContent(true), 450);
      }
    };
    handleLoaderLoaded();
  }, [isLoading]);

  return (
    <div className="app grainy">
      {showContent ? (
        <>
          <Navbar />
          <SocialIcon />
          <Email />
          <main>
            {/* <AnimateEye /> */}
            <Hero />
            <About />
            <Experience />
            <Project />
            <Eduction />
            <Contact />
          </main>
        </>
      ) : (
        <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
    </div>
  );
}
