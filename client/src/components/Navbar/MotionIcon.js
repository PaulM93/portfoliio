import React from "react";
import { motion } from "framer-motion";

export default function MotionIcon({ buttonWidth, position, icon }) {
  return (
    <div
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        position: "absolute",
        left: 0,
        top: 25,
      }}
    >
      <motion.div
        style={{
          width: buttonWidth,
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        animate={{
          x: position,
        }}
        transistion={{ type: "spring", bounce: 10 }}
        justify="center"
      >
        {icon}
      </motion.div>
    </div>
  );
}
