import React, { useState } from "react";
import { Stack, Wrap, Box, Text, Flex } from "@chakra-ui/react";
//Components
import Skill from "./Skill";
import SkillModal from "./SkillModal";
import { motion } from "framer-motion";
//Images
const ReactLogo = require("../../assets/react.png");
const NodeJS = require("../../assets/nodejs.png");
const Stripe = require("../../assets/stripe.png");
const JS = require("../../assets/js.png");
const CSS = require("../../assets/css.png");
const GIT = require("../../assets/git.png");
const HTML = require("../../assets/html.png");

export default function MySkills({ transitionVariants }) {
  const [display, setDisplay] = useState("chart");
  const textSize = "50px";
  const imageSize = "40px";
  const skills = [
    {
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      imageName: ReactLogo,
      size: imageSize,
      progress: 85,
      moreInfo: true,
    },
    {
      name: "Node Js",
      description: "",
      imageName: NodeJS,
      size: textSize,
      progress: 49,
      moreInfo: false,
    },
    {
      name: "Stripe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      imageName: Stripe,
      size: textSize,
      progress: 70,
      moreInfo: true,
    },
    {
      name: "HTML",
      description: "",
      imageName: HTML,
      size: imageSize,
      progress: 90,
      moreInfo: false,
    },
    {
      name: "GIT",
      descripton: "",
      imageName: GIT,
      size: textSize,
      progress: 70,
      moreInfo: true,
    },
    {
      name: "JS",
      description: "",
      imageName: JS,
      size: imageSize,
      progress: 70,
      moreInfo: false,
    },
    {
      name: "CSS",
      description: "yeeee",
      imageName: CSS,
      size: imageSize,
      progress: 100,
      moreInfo: true,
    },
  ];

  const [progress, setProgress] = useState(0);
  const [selected, setSeleceted] = useState("");
  const [barColor, setBarColor] = useState("");
  const handleClick = (progressVal, imageName) => {
    setProgress(progressVal);
    setSeleceted(imageName);
    if (progressVal < 50) {
      setBarColor("red");
    } else {
      setBarColor("#5FBB97");
    }
  };

  const skillMarkup = skills.map((skill) => (
    <>
      <Flex flexDir="column">
        <motion.button
          onClick={() => handleClick(skill.progress, skill.imageName)}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1, delay: 0.1 },
          }}
        >
          <Skill size={skill.size} name={skill.imageName} />
        </motion.button>
        {skill.moreInfo && skill.imageName === selected ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transistion={{ duration: 0.4, delay: 0.1 }}
          >
            <SkillModal
              name={skill.name}
              imageName={skill.imageName}
              description={skill.description}
            />
          </motion.button>
        ) : (
          ""
        )}
      </Flex>
    </>
  ));

  //Selects a Skill and I describe when I have used it
  //Additional sills == Photoshop, AdobeXd

  //When we select

  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial="hidden"
        animate="visible"
      >
        <Stack spacing="5">
          {/* <Subtitle text={"My Skills"} /> */}
          <Box mb={10}>
            <Text mb={2} ml={1} fontSize="small">
              Dynamic Skill Progress Bar
            </Text>
            <div
              style={{
                height: "15px",
                borderRadius: "10px",
                width: "100%",
                background: "grey",
              }}
            >
              <motion.div
                style={{
                  background: barColor,
                  borderRadius: "10px",
                  height: "100%",
                  width: "10%",
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          </Box>
          <Text>Please Select a Skill</Text>
          <Wrap spacing="5">{skillMarkup}</Wrap>
        </Stack>
      </motion.div>
    </>
  );
}
