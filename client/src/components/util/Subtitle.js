import React from "react";
import { Heading, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Subtitle({ hand, sentence, secondaryText }) {
  const wordArr = sentence.split(" ");
  const arr = [];
  wordArr.map((word) => {
    const letters = word.split("");
    return arr.push(letters);
  });

  const title = arr.map((letter) => (
    <Heading size="lg" key={letter}>
      {letter.map((letty) => (
        <motion.button
          key={letty}
          whileHover={{
            color: "#5686f5",
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          <p style={{ fontWeight: "900" }}>{letty}</p>
        </motion.button>
      ))}
    </Heading>
  ));

  return (
    <>
      <HStack
        color="secondary"
        display={["none", "none", "none", "flex"]}
        mb={1}
      >
        {title}
      </HStack>
      <Heading color="secondary" display={["flex", "flex", "flex", "none"]}>
        {sentence} {hand ? "👋" : ""}
      </Heading>
      <Text align="center" color="primaryMute" fontSize="md" mb={12}>
        {secondaryText}
      </Text>
    </>
  );
}
