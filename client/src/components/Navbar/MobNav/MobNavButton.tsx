import React from "react";
import { motion } from "framer-motion";

interface MovNavButtonProps {
  handleNavClick: (val: string) => void;
  icon: JSX.Element;
  name: string;
  i: any;
}

export default function MobNavButton({
  handleNavClick,
  name,
  i,
  icon,
}: MovNavButtonProps) {
  return (
    <motion.div
      onClick={() => handleNavClick(name)}
      style={{ display: "flex", marginBottom: "15px" }}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 0.1,
          delay: i * 0.1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
          delay: i * 0.1,
        },
      }}
    >
      <motion.button
        whileTap={{ scale: 1.2, color: "#5686F5" }}
        style={{
          color: "white",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <span style={{ marginRight: "10px" }}>{icon}</span>
        {name}
      </motion.button>
    </motion.div>
  );
}
