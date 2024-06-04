import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1.3 }}
    >
      <div className=" p-4 pl-8 pt-9 text-left text-base">
        <p className="text-white ">
          <span className="!opacity-75 font-light">
            I&apos;m a software engineer with a keen interest in{" "}
          </span>
          <span className="!opacity-100 font-medium">Assembly</span>,{" "}
          <span className="!opacity-100 font-medium">C++</span>
          <span className="!opacity-75 font-light">, and the </span>
          <span className="!opacity-100 font-medium">Windows API</span>
          <span className="!opacity-75 font-light">
            . I love developing game injectors and exploring memory
            manipulation. Additionally, I&apos;m passionate about
          </span>
          <span className="!opacity-100 font-medium"> web design </span>
          <span className="!opacity-75 font-light">and </span>
          <span className="!opacity-100 font-medium">development</span>{" "}
          <span className="!opacity-75 font-light">
            , and I&apos;m continuously learning and improving my skills.
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Description;
