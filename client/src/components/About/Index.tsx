import React from "react";
//Logos
import { Flex } from "@chakra-ui/react";
//Components
import Subtitle from "../util/Subtitle";
import MotionWrapper from "../util/MotionWrapper";
import Chart from "./Chart/Index";

export default function Index({
  aboutRef,
}: {
  aboutRef: { current: HTMLDivElement };
}) {
  return (
    <>
      <div ref={aboutRef} style={{ paddingTop: "90px" }} />
      <MotionWrapper>
        <Flex
          minWidth={"100%"}
          minHeight={["", "", "", "100vh"]}
          flexDir="column"
          alignItems="center"
        >
          <Subtitle
            hand={false}
            sentence={"Get to know me"}
            secondaryText={"A little information about me."}
          />
          <Chart />
        </Flex>
      </MotionWrapper>
    </>
  );
}
