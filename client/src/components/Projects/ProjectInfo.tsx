import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";

export default function ProjectInfoLayout({ info }) {
  //Cycle through array of information
  return info.map((i) => (
    <Box mb={5} key={i.title}>
      <Heading fontSize="sm" mb={2} color={"secondary"}>
        {i.title}
      </Heading>
      <Text fontSize="sm" color="primaryMute">
        {i.description}
      </Text>
    </Box>
  ));
}
