import React from "react";
import NavTag from "./NavTag";
import { Box, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function NavTagContainer() {
  return (
    <HStack spacing={"50px"}>
      <Box>
        <NavTag
          icon={<FaGithub style={{ height: "14px" }} />}
          link={"https://github.com/PaulM93"}
        />
      </Box>
      <Box>
        <NavTag
          icon={<FaLinkedinIn />}
          link={"https://www.linkedin.com/in/paul-marley-584b0216a/"}
        />
      </Box>
      <Box>
        <NavTag icon={<FiDownload />} link={"/PaulMarley_Resume.pdf"} />
      </Box>
    </HStack>
  );
}
