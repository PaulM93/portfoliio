import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Flex, Heading } from "@chakra-ui/react";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

export default function NavButtons({ aboutRef, projectRef, contactRef }) {
  const [position, setPosition] = useState(0);

  const scrollEffect = (targetRef) => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  console.log("aboutRef", aboutRef);
  console.log("projectRef", projectRef);
  console.log("contactRef", contactRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  console.log("position", position);
  const buttonArr = ["home", "about", "projects", "contact"];
  const buttonWidth = 77;
  const projectPos = buttonWidth * 2;
  const contactPos = buttonWidth * 3;

  const handleSelect = (button) => {
    switch (button) {
      case "home":
        scrollToTop();
        setPosition("0px");
        break;
      case "about":
        scrollEffect(aboutRef);
        setPosition(buttonWidth);
        break;
      case "projects":
        scrollEffect(projectRef);
        setPosition(projectPos);
        break;
      case "contact":
        scrollEffect(contactRef);
        setPosition(contactPos);
        break;
      default:
    }
  };

  const buttonMarkup = buttonArr.map((button) => (
    <Flex
      justify="center"
      align="center"
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
          <div style={{ width: "100%", position: "absolute", top: 25 }}>
            <motion.button
              style={{
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
