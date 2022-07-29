import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Flex,
  IconButton,
  Heading,
  useToast,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
//Components
import NavButtons from "./NavButtons";
import MobNav from "./MobNav";
import NavTag from "../Tag/NavTag";
import { FiHome, FiUser, FiFolder, FiCoffee } from "react-icons/fi";

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

  //Mob Props
  const [open, setOpen] = useState(true);

  // FiHome, FiUser, FiFolder, FiCoffee
  const buttons = [
    { name: "About", icon: <FiUser /> },
    { name: "Projects", icon: <FiFolder /> },
    { name: "Contact", icon: <FiCoffee /> },
  ];

  const handleNavClick = (val) => {
    setOpen(false);
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
            <NavTag
              type={"github"}
              link={"https://github.com/PaulM93"}
              text={"Paulm93"}
            />
          </motion.div>
          <motion.button
            onClick={() => setOpen(!open)}
            style={{
              position: "absolute",
              right: 20,
              // top: 20,
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
              // mt={shouldShowActions ? 0 : 1}
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

              {/* <MobNav setOpen={setOpen} open={open} /> */}
            </Flex>
          </motion.div>

          {/* Mob  */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  borderRadius: "0px 0px 0px 150px",
                  width: "100px",
                  height: "0px",
                }}
                animate={{
                  opacity: open ? 1 : 0,
                  // padding: "40px",
                  borderRadius: open && "0px",
                  width: open ? "100%" : "0px",
                  height: open ? "180px" : "0px",
                  transition: {
                    duration: 0.2,
                  },
                }}
                exit={{
                  borderRadius: "0px 0px 0px 150px",
                  width: 0,
                  padding: "0px",
                  height: 0,
                  transition: {
                    duration: 0.2,
                    delay: 0.3,
                  },
                }}
                style={{
                  position: "absolute",
                  zIndex: 10000,
                  top: "80px",
                  right: 0,
                  width: "100%",
                  padding: "40px",
                  minHeight: "180px",

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0px 6px 10px 3px rgba(0,0,0,0.1)",
                  // background: "grey",
                  background: "rgba(22, 24, 29, 0.3)",
                  backdropFilter: "blur(7px)",
                  borderBottom: "2px solid #23272F",
                  borderTop: !shouldShowActions ? "2px solid #23272F" : "none",
                }}
              >
                {buttons.map((button, i) => (
                  <motion.div
                    onClick={() => handleNavClick(button.text)}
                    style={{ display: "flex", marginBottom: "15px" }}
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: {
                        duration: 0.1,
                        delay: i * 0.1,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.1,
                        delay: i * 0.1,
                      },
                      // translateY: 20,
                      // transition: { duration: 0.1 },
                    }}
                  >
                    <motion.button
                      whileTap={{ scale: 1.2, color: "#5686F5" }}
                      style={{
                        color: "white",
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ marginRight: "10px" }}>{button.icon}</span>

                      {button.name}
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Flex>
      </motion.div>
    </>
  );
}
