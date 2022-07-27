import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { Flex, Heading, Link, Box } from "@chakra-ui/react";
//Components
import Subtitle from "../util/Subtitle";
import WavingHand from "../util/WavingHand";
import Tag from "./Tag";
//Scroll down and social icons appear at top
//Make hand wave

export default function Hero() {
  return (
    <>
      <motion.div
        className={styles.container}
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Flex
          w={"100%"}
          pt={"80px"}
          minH={"90vh"}
          flexDir={"column"}
          justify="center"
          alignItems={"flex-start"}
        >
          <Heading color="secondary">
            <Flex align={"center"}>
              <Subtitle
                hand={true}
                secondaryText={""}
                sentence={"Hi, I'm Paul and this is my portfolio."}
              />
              <Box pb={2} mr={1} display={["none", "none", "none", "flex"]}>
                <WavingHand />
              </Box>
            </Flex>
          </Heading>
          <Heading
            lineHeight={1.5}
            size={"lg"}
            style={{ color: "#98a0b3" }}
            mb={5}
          >
            I am a self-taught full-stack junior developer based in Medellin,
            Colombia. I am the founder and lead developer/designer of{" "}
            <Link href={"https://www.olatoo.com/"} isExternal>
              Olatoo.com
            </Link>{" "}
            a web app aimed at helping folks level up their Spanish.
          </Heading>
          <Flex>
            <Tag
              type={"github"}
              link={"https://github.com/PaulM93"}
              text={"Paulm93"}
            />
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}
