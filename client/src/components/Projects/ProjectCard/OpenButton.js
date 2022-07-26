import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heading,
  IconButton,
  Box,
  Button,
  Link,
  Divider,
  Text,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

export default function OpenButton({ setIsOpen, isOpen }) {
  const [whileHover, setWhileHover] = useState(false);
  return (
    <motion.button
      style={{
        color: "#ffffff7a",
        border: "1px solid #ffffff7a",
        height: "20px",
        width: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        padding: "10px",
      }}
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
        <AddIcon
          onClick={() => setIsOpen(true)}
          style={{ height: "13px", width: "13px" }}
        />
      ) : (
        <CloseIcon
          onClick={() => setIsOpen(false)}
          style={{ height: "13px", width: "13px" }}
        />
      )}

      {/* <IconButton
        colorScheme={"whiteAlpha"}
        size="xs"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="open"
        icon={!isOpen ? <AddIcon /> : <CloseIcon />}
      /> */}
    </motion.button>
  );
}
