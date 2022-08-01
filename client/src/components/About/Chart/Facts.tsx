import React from "react";
import { motion } from "framer-motion";
import { ListItem, UnorderedList, Text, Box } from "@chakra-ui/react";
import Interests from "./Interests";

export default function Facts({ duration }: { duration: number }) {
  const facts = [
    "I enjoy playing the guitar. 🎸",
    "I am a fully fluent self-taught Spanish speaker. 🇪🇸",
    "I am currently learning how to speak Portuguese. 🇵🇹",
    "I have no relation to Bob Marley 😑",
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration }}
      >
        <Box minWidth="100%">
          <Text
            fontSize="md"
            lineHeight={1.6}
            color="secondary"
            fontWeight={"700"}
            mb={5}
            w={["100%", "100%", "80%", "80%"]}
          >
            <span style={{ fontWeight: 700, marginRight: "5px" }}>
              Some brief facts about myself:
            </span>
          </Text>
          <UnorderedList mb={10} color="secondary">
            {facts.map((i) => (
              <ListItem color={"#98a0b3"} fontSize={"md"} key={i}>
                {i}
              </ListItem>
            ))}
          </UnorderedList>
          <Interests />
        </Box>
      </motion.div>
    </>
  );
}
