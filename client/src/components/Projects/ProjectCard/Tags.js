import React from "react";
import { motion } from "framer-motion";
import { Tag } from "@chakra-ui/react";

export default function Tags({ hashtags, isOpen }) {
  return hashtags.map((tag) => (
    <motion.button
      key={tag}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4, type: "spring" },
      }}
      layout
      transition={{ layout: { duration: 0.5 } }}
    >
      <Tag
        colorScheme={"whiteAlpha"}
        size={!isOpen ? "sm" : "md"}
        mr={1}
        mb={1}
      >
        {tag}
      </Tag>
    </motion.button>
  ));
}
