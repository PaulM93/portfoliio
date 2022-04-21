import React from "react";
import styles from "./Hero.module.css";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import { Flex, Heading, Link, Box } from "@chakra-ui/react";
//Components
import SocialButtons from "../SocialButtons";
import Subtitle from "../util/Subtitle";
import WavingHand from "../util/WavingHand";
import { useColorMode } from "@chakra-ui/react";
//Scroll down and social icons appear at top
//Make hand wave

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colormode", colorMode);

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
          pt={"90px"}
          minH={"90vh"}
          flexDir={"column"}
          justify="center"
          alignItems={"flex-start"}
        >
          <Heading color="secondary">
            <Flex align={"center"}>
              <Subtitle
                hand={true}
                sentence={"Hi, I'm Paul and this is my portfolio."}
              />
              <Box pb={2} mr={1} display={["none", "none", "none", "flex"]}>
                <WavingHand />
              </Box>
            </Flex>
          </Heading>
          <Heading size={"lg"} style={{ color: "#98a0b3" }} mb={5}>
            I am a Full Stack Junior developer based in Medellin, Colombia.
            Currently I'm working at{" "}
            <Link href={"https://www.olatoo.com/"} isExternal>
              Olatoo.com
            </Link>{" "}
            helping folks level up their Spanish.
          </Heading>
          <Flex>
            <SocialButtons />
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}
