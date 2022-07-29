import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Chart.module.css";
//Components
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
import Facts from "./Facts";
import ChartButtons from "./ChartButtons";
//Logos
import { Flex, Box } from "@chakra-ui/react";

export default function Chart() {
  const [selected, setSelected] = useState("About");
  const animateDur = 1.5;
  let markup: React.ReactNode;
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

  const [boxShadowEffect, setBoxShadowEffect] = useState(false);
  const handleButtonSelect = (val: string) => {
    setBoxShadowEffect(true);
    setSelected(val);
  };
  useEffect(() => {
    if (boxShadowEffect) {
      setTimeout(() => setBoxShadowEffect(false), 1000);
    }
  }, [boxShadowEffect]);

  return (
    <>
      <Flex
        flexDir={"column"}
        align="center"
        minWidth="100%"
        zIndex={0}
        position="relative"
      >
        <ChartButtons setSelected={handleButtonSelect} selected={selected} />
        <Flex minW={"100%"} minH="380px" position={"relative"}>
          <Box
            p={["25px", "40px", "40px", "40px"]}
            style={{
              zIndex: "0",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              flexDirection: "column",
              borderRadius: "10px",
              minHeight: "100%",
              display: "flex",
              justifyContent: "center",
              minWidth: "100%",
              border: "2px solid #23272F",
              background: "#1A1D23",
            }}
          >
            {markup}
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: boxShadowEffect ? 1 : 0,
              transition: { duration: 1 },
            }}
            className={styles.containerHidden}
          />
        </Flex>
      </Flex>
    </>
  );
}
