import React from "react";
import { motion } from "framer-motion";
import { ListItem, UnorderedList, Text, Box } from "@chakra-ui/react";
import Interests from "./Interests";

export default function Facts({ duration }) {
  const facts = [
    "I like to play the guitar.",
    "I can speak Spanish.",
    "I am learning how to speak Portuguese.",
  ];

  let markup = facts.map((i) => <ListItem fontSize={"md"}>{i}</ListItem>);

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
            {markup}
          </UnorderedList>
          <Interests />
        </Box>
      </motion.div>
    </>
  );
}
