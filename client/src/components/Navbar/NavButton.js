import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flex, Heading } from "@chakra-ui/react";
import { FiBox } from "react-icons/fi";

export default function NavButton({ buttonWidth, handleSelect, text }) {
  const [whileHover, setWhileHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setWhileHover(true)}
      onHoverEnd={() => setWhileHover(false)}
      style={{
        display: "flex",
        justifyContent: "center",
        align: "center",
        position: "relative",
        width: buttonWidth,
      }}
      onClick={() => handleSelect(text)}
    >
      <motion.button
        initial={{ opacity: 1 }}
        animate={{ opacity: whileHover ? 0 : 1, transition: { duration: 0.2 } }}
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
        animate={{ opacity: whileHover ? 1 : 0, transition: { duration: 0.2 } }}
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
