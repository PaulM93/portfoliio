import React from "react";
import styles from "../Project.module.css";
import { motion } from "framer-motion";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

interface OpenButtonProps {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
  completed: boolean;
}

export default function OpenButton({
  setIsOpen,
  isOpen,
  completed,
}: OpenButtonProps) {
  const iconStyle = {
    height: "13px",
    width: "13px",
  };
  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      style={{
        color: isOpen ? "1px solid #5686F5" : "#ffffff7a",
        border: isOpen
          ? completed
            ? "1px solid #5686F5"
            : "1px solid #ffffff7a"
          : "1px solid #ffffff7a",
        height: "20px",
        width: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        padding: "10px",
      }}
      className={styles.iconButton}
      whileHover={{
        color: completed ? "#5686F5" : "#ffffff7a",
        border: completed ? "1px solid #5686F5" : "1px solid #ffffff7a",
        boxShadow: completed
          ? "0px 0px 10px -5px rgba(86,134,245,0.81)"
          : "none",
        scale: 1.1,
        rotate: 90,
        transition: { duration: 1, type: "spring" },
      }}
      layout
      transition={{ layout: { duration: 0.5 } }}
    >
      {!isOpen ? (
        <AddIcon style={iconStyle} />
      ) : (
        <CloseIcon style={iconStyle} />
      )}
    </motion.button>
  );
}
