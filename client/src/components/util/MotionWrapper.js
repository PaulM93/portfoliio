import React from "react";
import { motion } from "framer-motion";

export default function MotionWrapper({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      style={{ minWidth: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 200, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
