import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  faDiscord,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Description = () => {
  return (
    <div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
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

      <div className="flex justify-center gap-5 pt-16 text-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="border p-5 rounded-2xl">
            <motion.span
              className="mx-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
            >
              <FontAwesomeIcon icon={faDiscord} className="text-white" />
            </motion.span>
            <motion.span
              className="mx-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            >
              <FontAwesomeIcon icon={faGithub} className="text-white" />
            </motion.span>
            <motion.span
              className="mx-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-white" />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
