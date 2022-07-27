import React from "react";
import { motion } from "framer-motion";
import { Tag, Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";

export default function Interests() {
  const interestsArr = [
    "Web Design 💻",
    "Coffee ☕",
    "Language Learning 🌐",
    "Travel 🌎",
    "Gym 💪",
    "Crypto ₿",
  ];

  return (
    <>
      <Box w="100%">
        <Heading size="sm" mb={3} color="secondary">
          Interests
        </Heading>
        <Wrap spacing={3}>
          {interestsArr.map((i) => (
            <motion.button
              key={i}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
            >
              <WrapItem>
                <Tag
                  colorScheme="whiteAlpha"
                  size="md"
                  key={i}
                  boxShadow={
                    "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
                  }
                >
                  {i}
                </Tag>
              </WrapItem>
            </motion.button>
          ))}
        </Wrap>
      </Box>
    </>
  );
}
