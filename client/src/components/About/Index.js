import React from "react";
//Logos
import { Flex } from "@chakra-ui/react";
//Components
import Subtitle from "../util/Subtitle";
import MotionWrapper from "../util/MotionWrapper";
import Chart from "./Chart/Chart";

export default function Index({ aboutRef }) {
  return (
    <>
      <div ref={aboutRef} style={{ paddingTop: "100px" }} />
      <MotionWrapper>
        <Flex
          minWidth={"100%"}
          minHeight={["", "", "", "100vh"]}
          // mb={["150px"]}
          flexDir="column"
          alignItems="center"
        >
          <Subtitle
            sentence={"Get to know me"}
            secondaryText={"A little information about me."}
          />
          <Chart />
        </Flex>
      </MotionWrapper>
    </>
  );
}
