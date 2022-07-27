import React from "react";
import { Heading, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SubtitleProps {
  hand: boolean;
  sentence: string;
  secondaryText: string;
}

export default function Subtitle({
  hand,
  sentence,
  secondaryText,
}: SubtitleProps) {
  const wordArr = sentence.split(" ");
  const arr: string[][] = [];
  wordArr.map((word: string) => {
    const letters = word.split("");
    return arr.push(letters);
  });

  const title = arr.map((letter: string[]) => (
    <Heading size="lg" key={letter[0]}>
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
      <Heading
        size="lg"
        color="secondary"
        display={["flex", "flex", "flex", "none"]}
      >
        {sentence} {hand ? "👋" : ""}
      </Heading>
      <Text align="center" color="primaryMute" fontSize="md" mb={12}>
        {secondaryText}
      </Text>
    </>
  );
}
