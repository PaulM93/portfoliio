import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flex, Heading } from "@chakra-ui/react";
import { FiBox } from "react-icons/fi";

export default function NavButton({ buttonWidth }) {
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
      onClick={() => handleSelect(button)}
    >
      <motion.button
        initial={{ opacity: 1 }}
        animate={{ opacity: whileHover ? 0 : 1 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.4, type: "spring" },
        }}
      >
        <Heading
          color="secondary"
          textAlign={"center"}
          fontSize="xs"
          mb={2}
          textTransform="uppercase"
        >
          {button}
        </Heading>
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: whileHover ? 1 : 0 }}
        style={{ position: "absolute" }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.4, type: "spring" },
        }}
      >
        <FiBox style={{ color: "white" }} />
      </motion.button>
    </motion.div>
  );
}
