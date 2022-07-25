import React from "react";
import { LayoutGroup } from "framer-motion";
import { Flex } from "@chakra-ui/react";
//Components
import ProjectCard from "./ProjectCard/ProjectCard";
import Subtitle from "../util/Subtitle";
import MotionWrapper from "../util/MotionWrapper";
//Portfolio
import PorfolfioInfo from "./Projects.json";

export default function Index({ projectRef }) {
  const cardMarkup = PorfolfioInfo.map((i) => (
    <ProjectCard
      completed={i.completed}
      projectInfo={i.projectInfo.info}
      functionality={i.projectInfo.functionality}
      title={i.title}
      body={i.body}
      hashtags={i.hashtags}
      listItems={i.listItems}
      link={i.link}
      github={i.github}
    />
  ));

  return (
    <>
      <div ref={projectRef} style={{ paddingTop: "80px" }}>
        <MotionWrapper>
          <Flex flexDir={"column"} alignItems="center">
            <Subtitle
              sentence={"My Projects"}
              secondaryText={
                " A collection of my completed and upcoming projects."
              }
            />
          </Flex>
          <Flex
            width={"100%"}
            minHeight={"100vh"}
            display="flex"
            justify={"center"}
            // mb={["150px", "150px", "200px", "200px"]}
            flexWrap="wrap"
          >
            <LayoutGroup>{cardMarkup}</LayoutGroup>
          </Flex>
        </MotionWrapper>
      </div>
    </>
  );
}
