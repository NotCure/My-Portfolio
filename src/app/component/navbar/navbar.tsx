"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isVisible: boolean;
  handleShow: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible, handleShow }) => {
  return (
    <motion.div
      className="w-full h-16 flex items-center justify-between px-4"
      initial={{ borderBottomColor: "rgba(255, 255, 255, 0)" }}
      animate={{ borderBottomColor: "rgba(255, 255, 255, 0.5)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ borderBottomWidth: "2px", borderBottomStyle: "solid" }}
    >
      {/* Left section */}
      <div className="flex-1">
        <AnimatePresence>
          {!isVisible && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <button
                type="button"
                className="py-2 px-4 text-sm font-bold focus:outline-none rounded-lg border border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300 ease-in-out"
                onClick={handleShow}
              >
                Show Sidebar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Center section */}
      <div className="flex-1 text-center">
        <p className="text-white font-light">© Ebrahim Hdida</p>
      </div>

      {/* Right section */}
      <div className="flex-1 text-right"></div>
    </motion.div>
  );
};

export default Navbar;
