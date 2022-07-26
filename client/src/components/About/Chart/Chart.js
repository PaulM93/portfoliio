import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const [boxShadowEffect, setBoxShadowEffect] = useState(false);
  const handleButtonSelect = (val) => {
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
          <motion.div
            style={{
              zIndex: 0,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              flexDirection: "column",
              padding: "40px",
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: boxShadowEffect ? 1 : 0,
              transition: { duration: 1 },
            }}
            style={{
              zIndex: -10,
              position: "absolute",
              boxShadow: "0px 16px 40px -10px rgba(86,134,245,0.8)",
              flexDirection: "column",
              padding: "40px",
              borderRadius: "10px",
              minHeight: "100%",
              display: "flex",
              justifyContent: "center",
              minWidth: "100%",
              border: "2px solid #23272F",
              background: "#1A1D23",
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
