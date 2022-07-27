import React from "react";
import { motion } from "framer-motion";

export default function WavingHand() {
  return (
    <motion.button
      style={{ fontSize: "30px", marginLeft: "5px" }}
      initial={{ rotate: 0 }}
      animate={{ rotate: [90, 0, 90] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <span role="img" aria-label="waving hand">
        👋
      </span>
    </motion.button>
  );
}
