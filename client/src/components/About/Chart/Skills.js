import React from "react";
import { motion } from "framer-motion";
//Logos
import { Flex, Text, Box, Wrap } from "@chakra-ui/react";
//Component
import Skill from "./Skill";
//Images
const ReactLogo = require("../../../assets/react.png");
const Typescript = require("../../../assets/typescript.png");
const NodeJS = require("../../../assets/nodejs.png");
const Stripe = require("../../../assets/stripe.png");
const JS = require("../../../assets/js.png");
const CSS = require("../../../assets/css.png");
const GIT = require("../../../assets/git.png");
const HTML = require("../../../assets/html.png");
const Framer = require("../../../assets/framer.png");
const Chakra = require("../../../assets/chakra.png");
const MaterialUI = require("../../../assets/mui.png");
const Firebase = require("../../../assets/firebase.png");
const SendGrid = require("../../../assets/sendgrid.png");
const MomentJS = require("../../../assets/momentjs.png");
const NextJS = require("../../../assets/nextjs.png");
const Photoshop = require("../../../assets/photoshop.png");
const AdobeXD = require("../../../assets/adobexd.png");
const MongoDB = require("../../../assets/mongodb.png");
const MySQL = require("../../../assets/mysql.png");
const DayJS = require("../../../assets/dayjs.png");
const Gatsby = require("../../../assets/gatsby.png");
const Redux = require("../../../assets/redux.png");

export default function Skills({ duration }) {
  const chartValues = [
    {
      title: "Web Design",
      percentage: "85",
      images: [
        { name: "Photoshop", image: Photoshop },
        { name: "AdobeXD", image: AdobeXD },
      ],
    },
    {
      title: "Front-End Development",
      percentage: "95",
      images: [
        { name: "Javascript", image: JS },
        { name: "React", image: ReactLogo },
        { name: "Typescript", image: Typescript },
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
        { name: "ChakraUI", image: Chakra },
        { name: "MaterialUI", image: MaterialUI },
        { name: "Stripe", image: Stripe },
        { name: "Framer Motion", image: Framer },
        { name: "Firebase / Firestore", image: Firebase },
        { name: "MomentJS", image: MomentJS },
        { name: "DayJS", image: DayJS },
        { name: "NextJS", image: NextJS },
        { name: "Gatsby", image: Gatsby },
        { name: "Redux", image: Redux },
      ],
    },
    {
      title: "Back-End Development",
      percentage: "70",
      images: [
        { name: "NodeJS", image: NodeJS },
        { name: "Stripe", image: Stripe },
        { name: "Git", image: GIT },
        { name: "SendGrid", image: SendGrid },
        { name: "NextJS", image: NextJS },
        { name: "MongoDB", image: MongoDB },
        { name: "MySQL", image: MySQL },
        { name: "Firebase / Firestore", image: Firebase },
      ],
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration }}
      >
        <Flex justify={"space-between"}>
          <Text
            fontSize="md"
            color="secondary"
            fontWeight={"700"}
            mb={10}
            lineHeight={1.6}
            w={["100%", "100%", "80%", "80%"]}
          >
            <span style={{ fontWeight: 700, marginRight: "5px" }}>
              Below you will find a brief overview of my current skill set.
            </span>
            <span style={{ fontWeight: 500, color: "#98a0b3" }}>
              At the moment I am in the process of learning Typescript and
              Framer-Motion.
            </span>
          </Text>
        </Flex>
        <Box minHeight="210px">
          {chartValues.map((val) => (
            <Box mb={6}>
              <Flex justify={"space-between"} mb="2">
                <Text color="secondary" fontSize="sm" fontWeight={500}>
                  {val.title}
                </Text>
              </Flex>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Wrap width={"100%"}>
                  {val.images.map((i) => (
                    <Skill name={i.name} image={i.image} size={"25px"} />
                  ))}
                </Wrap>
              </motion.div>
            </Box>
          ))}
        </Box>
      </motion.div>
    </>
  );
}
