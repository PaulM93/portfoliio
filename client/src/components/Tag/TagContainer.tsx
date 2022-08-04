import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Tag from "./Tag";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function TagContainer() {
  return (
    <>
      <Flex position={"relative"}>
        <Box>
          <Tag
            icon={<FaGithub />}
            link={"https://github.com/PaulM93"}
            text={"Paulm93"}
          />
        </Box>
        <Box>
          <Tag
            icon={<FaLinkedinIn />}
            link={"https://www.linkedin.com/in/paul-marley-584b0216a/"}
            text={"LinkedIn"}
          />
        </Box>
        <Box display={["none", "flex", "flex", "flex"]}>
          <Tag
            icon={<FiDownload />}
            link={"/PaulMarley_Resume.pdf"}
            text={"Resume"}
          />
        </Box>
      </Flex>
      <Box mt={2} display={["flex", "none", "none", "none"]}>
        <Tag
          icon={<FiDownload />}
          link={"/PaulMarley_Resume.pdf"}
          text={"Resume"}
        />
      </Box>
    </>
  );
}
