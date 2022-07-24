import React, { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Flex, Heading } from "@chakra-ui/react";
import { FiGrid, FiUser, FiFolder, FiCoffee } from "react-icons/fi";

export default function NavButtons({
  aboutRef,
  projectRef,
  contactRef,
  currentPercent,
}) {
  const [position, setPosition] = useState(0);

  const scrollEffect = (targetRef) => {
    console.log("Targe ref", targetRef);
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const iconStyle = {
    color: "white",
    height: "12px",
  };
  const [icon, setIcon] = useState(<FiGrid style={iconStyle} />);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDown = yPos > 0;
      let pos;
      if (isScrollingDown) {
        pos = currentPercent * 4;
        if (pos === 0 || pos < 95) {
          setIcon(<FiGrid style={iconStyle} />);
        }
        if (pos > 95 && pos < 190) {
          setIcon(<FiUser style={iconStyle} />);
        }
        if (pos > 190 && pos < 285) {
          setIcon(<FiFolder style={iconStyle} />);
        }
        if (pos > 285) {
          setIcon(<FiCoffee style={iconStyle} />);
        }

        setPosition(pos < 300 ? pos : 300);
      }
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [currentPercent]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // console.log("position", position);
  const buttonArr = ["home", "about", "projects", "contact"];
  const buttonWidth = 100;

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

  const buttonMarkup = buttonArr.map((button) => (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        align: "center",
        position: "relative",
        width: buttonWidth,
      }}
      onClick={() => handleSelect(button)}
    >
      <motion.button
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.4, type: "spring" },
        }}
      >
        <Heading
          color="secondary"
          textAlign={"center"}
          fontSize="xs"
          mb={2}
          textTransform="uppercase"
        >
          {button}
        </Heading>
      </motion.button>
    </motion.div>
  ));

  return (
    <>
      <LayoutGroup>
        <Flex flexDir={"column"} align="center">
          <Flex align="center" justifyContent={"space-between"}>
            {buttonMarkup}
          </Flex>
          {/* motionstuff */}
          <div
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              position: "absolute",
              top: 25,
            }}
          >
            <motion.button
              style={{
                width: buttonWidth,
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              animate={{
                x: position,
              }}
              transistion={{ type: "spring", bounce: 10 }}
              justify="center"
            >
              {icon}
            </motion.button>
          </div>
        </Flex>
      </LayoutGroup>
    </>
  );
}
