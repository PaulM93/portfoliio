import React from "react";
import { motion } from "framer-motion";
import {
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  List,
  ListIcon,
  StatHelpText,
  Flex,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Education({ duration }) {
  const educationArr = [
    {
      university: "The Open University",
      title: "BSc Environmental Sciences",
      year: "Feb 2014 - Aug 2018",
    },
    {
      university: "University of Strathclyde",
      title: "MSc Hydrogeology",
      year: "Feb 2018 - Aug 2019",
    },
  ];

  let markup = educationArr.map((i) => (
    <ListItem mb={5}>
      <Flex alignItems={"center"}>
        <ListIcon as={CheckCircleIcon} color="primary" />
        <Stat>
          <StatLabel color="primaryMute" style={{ fontSize: "0.8em" }}>
            {i.university}
          </StatLabel>
          <StatNumber color="secondary" style={{ fontSize: "1.2em" }}>
            {i.title}
          </StatNumber>
          <StatHelpText color="primaryMute">{i.year}</StatHelpText>
        </Stat>
      </Flex>
    </ListItem>
  ));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration }}
      >
        <Text
          w={["100%", "100%", "80%", "80%"]}
          fontSize="md"
          lineHeight={1.6}
          color="secondary"
          fontWeight={"700"}
          mb={10}
        >
          <span style={{ fontWeight: 700, marginRight: "5px" }}>
            “Education is not preparation for life; education is life itself.” —
            John Dewey.
          </span>
          <br />
          <span style={{ fontWeight: 500, color: "#98a0b3" }}>
            Below you will find an overview of my degrees.
          </span>
        </Text>
        <List spacing={3}>{markup}</List>
      </motion.div>
    </>
  );
}
