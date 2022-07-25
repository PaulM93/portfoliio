/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { FiGrid, FiUser, FiFolder, FiCoffee } from "react-icons/fi";
import NavButton from "./NavButton";
import MotionIcon from "./MotionIcon";

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

  const [icon, setIcon] = useState(
    <FiGrid style={{ color: "white", height: "12px" }} />
  );
  useEffect(() => {
    const iconStyle = {
      color: "white",
      height: "12px",
    };
    const pos = currentPercent * 4;
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
  }, [currentPercent]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //Button Controls
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

  return (
    <>
      <LayoutGroup>
        <Flex flexDir={"column"} align="center">
          <Flex align="center" justifyContent={"space-between"}>
            {buttonArr.map((button) => (
              <NavButton
                key={button}
                handleSelect={handleSelect}
                buttonWidth={buttonWidth}
                text={button}
              />
            ))}
          </Flex>
          {/* motionstuff */}
          <MotionIcon
            icon={icon}
            buttonWidth={buttonWidth}
            position={position}
          />
        </Flex>
      </LayoutGroup>
    </>
  );
}
