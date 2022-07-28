import React, { useEffect, useState } from "react";
import { LayoutGroup } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { FiHome, FiUser, FiFolder, FiCoffee } from "react-icons/fi";
import NavButton from "./NavButton";
import MotionIcon from "./MotionIcon";

interface NavButtonsProps {
  aboutRef: { current: HTMLDivElement };
  projectRef: { current: HTMLDivElement };
  contactRef: { current: HTMLDivElement };
  currentPercent: number;
}

export default function NavButtons({
  aboutRef,
  projectRef,
  contactRef,
  currentPercent,
}: NavButtonsProps) {
  const [position, setPosition] = useState(0);

  const scrollEffect = (targetRef: { current: HTMLDivElement }) => {
    console.log("Targe ref", targetRef);
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [icon, setIcon] = useState({
    type: "",
    icon: <FiHome style={{ color: "white", height: "15px" }} />,
  });
  const [iconStyle, setIconStyle] = useState({
    color: "white",
    height: "15px",
  });
  const [whileHover, setWhileHover] = useState("");
  useEffect(() => {
    const pos = currentPercent * 4;
    if (pos === 0 || pos < 90) {
      setIcon({ type: "home", icon: <FiHome style={iconStyle} /> });
    }
    if (pos > 95 && pos < 185) {
      setIcon({ type: "about", icon: <FiUser style={iconStyle} /> });
    }
    if (pos > 190 && pos < 280) {
      setIcon({ type: "projects", icon: <FiFolder style={iconStyle} /> });
    }
    if (pos > 285) {
      setIcon({ type: "contact", icon: <FiCoffee style={iconStyle} /> });
    }
    setPosition(pos < 295 ? pos : 300);
  }, [currentPercent, iconStyle, whileHover]);

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

  useEffect(() => {
    if (whileHover === icon.type) {
      setIconStyle({
        color: "#5686F5",
        height: "15px",
      });
    } else {
      setIconStyle({
        color: "white",
        height: "15px",
      });
    }
  }, [whileHover, icon.type]);

  return (
    <>
      <LayoutGroup>
        <Flex flexDir={"column"} align="center">
          <Flex align="center" justifyContent={"space-between"}>
            {buttonArr.map((button) => (
              <NavButton
                setWhileHover={setWhileHover}
                whileHover={whileHover}
                key={button}
                handleSelect={handleSelect}
                buttonWidth={buttonWidth}
                text={button}
              />
            ))}
          </Flex>
          {/* motionstuff */}
          <MotionIcon
            whileHover={whileHover}
            icon={icon.icon}
            buttonWidth={buttonWidth}
            position={position}
          />
        </Flex>
      </LayoutGroup>
    </>
  );
}
