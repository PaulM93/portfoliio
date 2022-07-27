import React from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function About({ duration }: { duration: number }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration }}
      >
        <Text
          color="secondary"
          fontWeight={"700"}
          mb={5}
          lineHeight={1.6}
          w={["100%", "100%", "80%", "80%"]}
          letterSpacing={"1px"}
        >
          My name is Paul Marley and I am a self taught developer from Scotland
          with a solid understanding of Javascript, CSS and ReactJS. I am
          currently expanding my skill set by studying Typescript and have taken
          interest in how animation can be used to provide a greater UI
          experience.
        </Text>
        <Text
          lineHeight={1.6}
          mb={4}
          fontSize="md"
          color="primaryMute"
          fontWeight={"500"}
        >
          I am particularly interested in app UI design and strive to create the
          most aesthetically pleasing apps as possible.
        </Text>
        <Text
          lineHeight={1.6}
          fontSize="md"
          color="primaryMute"
          fontWeight={"500"}
        >
          My goal is to continuously grow as a developer while staying current
          with the latest trends and technologies. I would love to work for a
          team that is truly passionate about what they create and that is
          striving consistently to move forward.
        </Text>
      </motion.div>
    </>
  );
}
