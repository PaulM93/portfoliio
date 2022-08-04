import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Flex, IconButton, Heading, useToast } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
//Components
import NavButtons from "./NavButtons";
import MobNav from "./MobNav/MobNav";
import NavTavContainer from "../Tag/NavTagContainer";

export default function NavBar({ aboutRef, contactRef, projectRef }) {
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
        // const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
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

  const toast = useToast();
  const id = "Welcome toast";
  useEffect(() => {
    const today = new Date();
    const curHr = today.getHours();
    let message;
    if (curHr < 12) {
      message = "Good morning 🌄";
    } else if (curHr < 18) {
      message = "Good afternoon ⛰️";
    } else {
      message = "Good evening 🌌";
    }
    // alert("here");
    if (!toast.isActive(id)) {
      toast({
        title: message,
        containerStyle: {
          padding: "10px",
        },
        variant: "subtle",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  }, [toast, id]);

  const scrollEffect = (targetRef) => {
    console.log("Targe ref", targetRef);
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //Button Controls

  const handleSelect = (button) => {
    switch (button) {
      case "home":
        scrollToTop();
        break;
      case "about":
        scrollEffect(aboutRef);
        break;
      case "projects":
        scrollEffect(projectRef);
        break;
      case "contact":
        scrollEffect(contactRef);
        break;
      default:
    }
  };

  //Mob Props
  const [open, setOpen] = useState(false);

  const handleNavClick = (val) => {
    setOpen(false);
    handleSelect(val);
  };

  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ borderBottom: "none", height: "70px" }}
        animate={{
          borderTop: shouldShowActions ? "none" : "10px solid #5686F5",
          height: shouldShowActions ? "80px" : "100px",
          borderBottom: shouldShowActions ? "2px solid #23272F" : "none",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* HiddenContainer - animates opacity on scroll */}
        <motion.div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            background: "rgba(22, 24, 29, 0.3)",
            boxShadow: !open ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
            backdropFilter: "blur(7px)",
            WebkitBackdropFilter: "blur(7px)",
            height: "100%",
            position: "absolute",
          }}
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
              size="sm"
              color="secondary"
              fontWeight={"700"}
              fontFamily={"heading"}
              textTransform="uppercase"
            >
              Paul Marley
            </Heading>
            <NavTavContainer />
          </motion.div>
          <motion.button
            onClick={() => setOpen(!open)}
            style={{
              position: "absolute",
              right: 20,
              zIndex: 100000,
            }}
            animate={{
              rotate: open ? 180 : 0,
              transition: { duration: 0.2 },
            }}
          >
            <IconButton
              isRound={true}
              colorScheme="white"
              display={["flex", "flex", "flex", "none"]}
              size="sm"
              color="#23272F"
              borderColor="#23272F"
              border="1px"
              icon={<FiChevronRight style={{ color: "white" }} />}
              aria-label="open menu"
            />
          </motion.button>
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
              <Flex align="center" display={["none", "none", "none", "flex"]}>
                <NavButtons
                  handleSelect={handleSelect}
                  currentPercent={currentPercent}
                  shouldShowActions={shouldShowActions}
                  aboutRef={aboutRef}
                  projectRef={projectRef}
                  contactRef={contactRef}
                />
              </Flex>
            </Flex>
          </motion.div>

          {/* Mob  */}
          <MobNav
            open={open}
            handleNavClick={handleNavClick}
            shouldShowActions={shouldShowActions}
          />
        </Flex>
      </motion.div>
    </>
  );
}
