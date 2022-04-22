import React, { useState } from "react";
//Components
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
import Facts from "./Facts";
import ChartButtons from "./ChartButtons";
//Logos
import { Flex } from "@chakra-ui/react";

export default function Chart() {
  const [selected, setSelected] = useState("About");

  const animateDur = 1.5;
  let markup;
  switch (selected) {
    case "About":
      markup = <About duration={animateDur} />;
      break;
    case "Skills":
      markup = <Skills duration={animateDur} />;
      break;
    case "Education":
      markup = <Education duration={animateDur} />;
      break;
    case "Facts":
      markup = <Facts duration={animateDur} />;
      break;
    default:
  }

  return (
    <>
      <Flex flexDir={"column"} align="center" minWidth="100%">
        <ChartButtons setSelected={setSelected} selected={selected} />
        <Flex
          boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
          flexDir={"column"}
          p={10}
          borderRadius="10px"
          minH="380px"
          justifyContent={"center"}
          minW="100%"
          border="2px solid #23272F"
          bg="cardBackground"
        >
          {markup}
        </Flex>
      </Flex>
    </>
  );
}
