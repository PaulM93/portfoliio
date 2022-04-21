import React from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function About({ duration }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration }}
      >
        <Text
          fontSize="md"
          color="secondary"
          fontWeight={"700"}
          mb={5}
          w={["100%", "100%", "80%", "80%"]}
          letterSpacing={"1px"}
        >
          My name is Paul Marley and I am a Full Stack Junior developer based in
          Medellin, Colombia. Currently I'm working at Olatoo.com helping folks
          level up their Spanish 👋
        </Text>
        <Text mb={4} fontSize="md" color="primaryMute" fontWeight={"500"}>
          I have an MSC in Hydrogeology and I am fluent in Spanish. I am
          currently learning Portuguese and enjoy playing the guitar.
        </Text>
        <Text fontSize="md" color="primaryMute" fontWeight={"500"}>
          I am particulary interested in app design and am in the process of
          learning how to build one. I love to learn.
        </Text>
      </motion.div>
    </>
  );
}
