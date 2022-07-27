import React from "react";
import { LayoutGroup } from "framer-motion";
import { Flex } from "@chakra-ui/react";
//Components
import ProjectCard from "./ProjectCard/ProjectCard";
import Subtitle from "../util/Subtitle";
import MotionWrapper from "../util/MotionWrapper";
//Portfolio
import PorfolfioInfo from "./Projects.json";

export default function Index({
  projectRef,
}: {
  projectRef: { current: HTMLDivElement };
}) {
  return (
    <>
      <div ref={projectRef} style={{ paddingTop: "90px" }}>
        <MotionWrapper>
          <Flex flexDir={"column"} alignItems="center">
            <Subtitle
              hand={false}
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
            flexWrap="wrap"
          >
            <LayoutGroup>
              {PorfolfioInfo.map((i) => (
                <ProjectCard
                  completed={i.completed}
                  projectInfo={i.projectInfo.info}
                  functionality={i.projectInfo.functionality}
                  title={i.title}
                  hashtags={i.hashtags}
                  link={i.link}
                  github={i.github}
                />
              ))}
            </LayoutGroup>
          </Flex>
        </MotionWrapper>
      </div>
    </>
  );
}
