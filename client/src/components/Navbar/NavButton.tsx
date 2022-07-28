import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@chakra-ui/react";

interface NavButtonProps {
  buttonWidth: number;
  handleSelect: (val: string) => void;
  text: string;
  whileHover: string;
  setWhileHover: (val: string) => void;
}

export default function NavButton({
  buttonWidth,
  handleSelect,
  whileHover,
  setWhileHover,
  text,
}: NavButtonProps) {
  return (
    <motion.div
      onHoverStart={() => setWhileHover(text)}
      onHoverEnd={() => setWhileHover("")}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: buttonWidth,
      }}
      onClick={() => handleSelect(text)}
    >
      <motion.button
        initial={{ opacity: 1 }}
        animate={{
          opacity: whileHover === text ? 0 : 1,
          transition: { duration: 0.2 },
        }}
        whileHover={{
          transition: { duration: 0.2, type: "spring" },
        }}
      >
        <Heading
          color="secondary"
          textAlign={"center"}
          fontSize="sm"
          mb={2}
          textTransform="uppercase"
        >
          {text}
        </Heading>
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: whileHover === text ? 1 : 0,
          transition: { duration: 0.2 },
        }}
        style={{ position: "absolute" }}
        whileHover={{
          transition: { duration: 0.2 },
        }}
      >
        <Heading
          color="primary"
          textAlign={"center"}
          fontSize="sm"
          mb={2}
          textTransform="uppercase"
        >
          {text}
        </Heading>
      </motion.button>
    </motion.div>
  );
}
