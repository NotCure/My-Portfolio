"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Description from "./description";
import {
  faDiscord,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarProps {
  isVisible: boolean;
  handleHide: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, handleHide }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="h-screen"
          initial={{
            width: "0%",
            opacity: 0,
            borderRightColor: "rgba(255, 255, 255, 0)",
          }}
          animate={{
            width: "25%",
            opacity: 1,
            borderRightColor: "rgba(255, 255, 255, 0.5)",
          }}
          exit={{
            width: "0%",
            opacity: 0,
            borderRightColor: "rgba(255, 255, 255, 0)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ borderRightWidth: "2px", borderRightStyle: "solid" }}
        >
          {/* Sidebar content */}
          <div className="text-white p-4 pt-20 text-center font-bold text-7xl">
            <span className="flex flex-col gap-3 overflow-hidden">
              <motion.span
                className=""
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
              >
                Ebrahim
              </motion.span>
              <motion.span
                className=""
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1.1 }}
              >
                Hdida
              </motion.span>
            </span>
          </div>
          <Description />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 2.0 }}
          >
            <div className="text-center pt-16">
              <button
                type="button"
                className="py-4 px-10 me-2 mb-2 text-sm font-bold focus:outline-none rounded-lg border border-white text-white hover:bg-white hover:text-Gray transition-all duration-300 ease-in-out"
                onClick={handleHide}
              >
                Hide
              </button>
            </div>
          </motion.div>

          <div className="flex justify-center gap-5 pt-16 text-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 2.3 }}
            >
              <div className="border p-5 rounded-2xl">
                <motion.span
                  className="mx-4"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 2.7 }}
                >
                  <FontAwesomeIcon icon={faDiscord} className="text-white" />
                </motion.span>
                <motion.span
                  className="mx-4"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 2.8 }}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-white" />
                </motion.span>
                <motion.span
                  className="mx-4"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 2.9 }}
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-white" />
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
