import React, { useEffect, useState } from "react";
import { LayoutGroup } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { FiHome, FiUser, FiFolder } from "react-icons/fi";
import NavButton from "./NavButton";
import MotionIcon from "./MotionIcon";

interface NavButtonsProps {
  currentPercent: number;
  handleSelect: (val: string) => void;
}

export default function NavButtons({
  currentPercent,
  handleSelect,
}: NavButtonsProps) {
  const [position, setPosition] = useState(0);

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
    // console.log("Current percent", currentPercent);
    const pos = currentPercent * 2.8;
    // console.log("pos", pos);
    if (pos === 0 || pos < 90) {
      setIcon({ type: "home", icon: <FiHome style={iconStyle} /> });
    }
    if (pos > 95 && pos < 185) {
      setIcon({ type: "about", icon: <FiUser style={iconStyle} /> });
    }
    if (pos > 190 && pos < 220) {
      setIcon({ type: "projects", icon: <FiFolder style={iconStyle} /> });
    }
    setPosition(pos < 200 ? pos : 200);
  }, [currentPercent, iconStyle, whileHover]);

  const buttonArr = ["home", "about", "projects"];
  const buttonWidth = 100;

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
