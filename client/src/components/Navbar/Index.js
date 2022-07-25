import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Flex, Heading } from "@chakra-ui/react";
//Components
import NavButtons from "./NavButtons";
import ColorMode from "./ColorMode";
import SocialButtons from "../SocialButtons";

export default function NavBar({ aboutRef, contactRef, projectRef }) {
  // const { colorMode, toggleColorMode } = useColorMode();

  const [shouldShowActions, setShouldShowActions] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDown = yPos > 0;
      setShouldShowActions(isScrollingDown);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  //Navbar animations
  const [currentPercent, setCurrentPercent] = useState(0);
  //Scroll y progress = vertical scroll progres between 0 - 1
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  useEffect(
    () =>
      yRange.onChange((v) => {
        // console.log("Yrange", yRange.current);
        setCurrentPercent(Math.trunc(yRange.current));
      }),
    [yRange]
  );
  // const [shouldShowActions, setShouldShowActions] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDown = yPos > 0;
      setShouldShowActions(isScrollingDown);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  console.log("Current percentage", currentPercent);

  //Add popup that says hello depending on the time of the day

  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ borderBottom: "none", height: "60px" }}
        animate={{
          borderTop: shouldShowActions ? "none" : "10px solid #5686F5",
          height: shouldShowActions ? "65px" : "90px",
          borderBottom: shouldShowActions ? "2px solid #23272F" : "none",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* HiddenContainer - animates opacity on scroll */}
        <motion.div
          className={styles.hiddenContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldShowActions ? 1 : 0 }}
        />

        <Flex
          w={["90%", "80%", "80%", "80%"]}
          align="center"
          justifyContent="space-between"
        >
          <motion.div
            style={{ display: "flex", alignItems: "center" }}
            transition={{
              delay: 0.2,
              duration: 1,
              type: "spring",
              stiffness: 50,
            }}
            initial={{ x: "-100vh" }} //Initial defines the initial position of an element
            animate={{ x: 0 }} //Where we animate to i.e. end point
          >
            <Heading
              zIndex={900}
              mr={5}
              size="xs"
              color="secondary"
              fontWeight={"700"}
              fontFamily={"heading"}
              textTransform="uppercase"
            >
              Paul Marley
            </Heading>
            <SocialButtons shouldShowActions={shouldShowActions} type={"nav"} />
            <ColorMode />
          </motion.div>
          <motion.div
            style={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>

          <motion.div
            transition={{ delay: 0.2, duration: 1 }}
            initial={{ x: "100vh" }} //Initial defines the initial position of an element
            animate={{ x: 0 }}
          >
            <Flex align="center">
              <Flex align="center" display={["none", "none", "flex", "flex"]}>
                <NavButtons
                  currentPercent={currentPercent}
                  shouldShowActions={shouldShowActions}
                  aboutRef={aboutRef}
                  projectRef={projectRef}
                  contactRef={contactRef}
                />
              </Flex>

              {/* Mob Nav  */}
              {/* <IconButton
                onClick={toggleColorMode}
                display={["flex", "flex", "none", "none"]}
                icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
              /> */}
            </Flex>

            {/* <IconButton
              size="sm"
              onClick={toggleColorMode}
              // display={["flex", "flex", "none", "none"]}
              icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
            /> */}
          </motion.div>
        </Flex>
      </motion.div>
    </>
  );
}
