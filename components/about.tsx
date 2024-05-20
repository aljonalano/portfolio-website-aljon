"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Aljon, a graduate with a degree in{" "}
        <span className="font-medium">BSIT</span>, My first job was in IT
        (hardware), but my dream has always been to become a programmer. After
        resigning from my first job, I had a hard time finding a programming
        position, so I applied for a job as an IT Data Analyst instead.I worked
        in that role for four years but still wanted to pursue my passion for
        programming.
        <span className="font-medium">
          {" "}
          Fortunately, a college friend informed me about a programmer trainee
          position, and I got the opportunity to start programming again.
        </span>
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        mobile games, watching movies, playing with my dog and playing
        basketball. I also enjoy learning new things and watching some tutorial
        of the new upcoming technology.
      </p>
    </motion.section>
  );
}
