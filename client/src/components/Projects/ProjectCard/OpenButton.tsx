import React from "react";
import styles from "../Project.module.css";
import { motion } from "framer-motion";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

interface OpenButtonProps {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
}

export default function OpenButton({ setIsOpen, isOpen }: OpenButtonProps) {
  const iconStyle = {
    height: "13px",
    width: "13px",
  };
  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className={styles.iconButton}
      whileHover={{
        color: "#5686F5",
        border: "1px solid #5686F5",
        boxShadow: "0px 0px 10px -5px rgba(86,134,245,0.81)",
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
