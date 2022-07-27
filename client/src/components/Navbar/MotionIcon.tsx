import React from "react";
import { motion } from "framer-motion";

interface MotionIconProps {
  buttonWidth: number;
  position: number;
  icon: JSX.Element;
}

export default function MotionIcon({
  buttonWidth,
  position,
  icon,
}: MotionIconProps) {
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
      >
        {icon}
      </motion.div>
    </div>
  );
}
