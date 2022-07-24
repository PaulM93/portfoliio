import React, { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Flex, Heading } from "@chakra-ui/react";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

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

  useEffect(() => {
    //one button = 77
    //current percent/ 77 * 100
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDown = yPos > 0;
      let pos;
      if (isScrollingDown) {
        pos = currentPercent * 4.025;
        setPosition(pos < 300 ? pos : 300);
      }
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };

    //25% === 77
    //100% === 77 * 4 = 308

    /*
      At 25% pecentage we want position to be 77 
    */

    // console.log(pos);
  }, [currentPercent]);

  // console.log("Position", position);

  // console.log("aboutRef", aboutRef);
  // console.log("projectRef", projectRef.current.offsetHeight);
  // console.log("contactRef", contactRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // console.log("position", position);
  const buttonArr = ["home", "about", "projects", "contact"];
  const buttonWidth = 100;
  // const buttonWidth = 77;
  const projectPos = buttonWidth * 2;
  const contactPos = buttonWidth * 3;

  //If scroll is already initiated

  const [clicked, setClicked] = useState(true);

  const handleSelect = (button) => {
    switch (button) {
      case "home":
        scrollToTop();
        // setPosition("0px");
        break;
      case "about":
        scrollEffect(aboutRef);
        // setPosition(buttonWidth);
        break;
      case "projects":
        scrollEffect(projectRef);
        // setPosition(projectPos);
        break;
      case "contact":
        scrollEffect(contactRef);
        // setPosition(contactPos);
        break;
      default:
    }
  };

  const buttonMarkup = buttonArr.map((button) => (
    <Flex
      justify="center"
      align="center"
      textAlign={"center"}
      // bg="green"
      // border="1px"
      // borderColor="white"
      w={buttonWidth}
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
    </Flex>
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
              // background: "blue",
            }}
          >
            <motion.button
              style={{
                // background: "red",
                width: buttonWidth,
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              animate={{ x: position }}
              transistion={spring}
              justify="center"
            >
              <div
                style={{
                  height: "7px",
                  width: "7px",
                  background: "white",
                  borderRadius: 7 / 2,
                }}
              />
            </motion.button>
          </div>
        </Flex>
      </LayoutGroup>
    </>
  );
}
