import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Title = () => {
  return (
    <div className="text-white p-4 pt-20 text-center font-bold text-7xl">
      <span className="flex flex-col gap-3 overflow-hidden">
        <motion.span
          className=""
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
        >
          Ebrahim
        </motion.span>
        <motion.span
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
        >
          Hdida
        </motion.span>
      </span>
    </div>
  );
};

export default Title;
