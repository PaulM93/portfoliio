import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Tag from "./Tag";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";

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
            link={"/PaulMarley_CV.pdf"}
            text={"Resume"}
          />
        </Box>
        <Box display={["none", "flex", "flex", "flex"]}>
          <Tag
            icon={<FiMail />}
            link={
              "/'mailto:marleypaul91@gmail.com?subject=Subject&body=Body%20goes%20here'"
            }
            text={"Email"}
          />
        </Box>
      </Flex>
      <Box mt={2} display={["flex", "none", "none", "none"]}>
        <Tag
          icon={<FiDownload />}
          link={"/PaulMarley_CV.pdf"}
          text={"Resume"}
        />
        <Tag
          icon={<FiMail />}
          link={
            "/'mailto:marleypaul91@gmail.com?subject=Subject&body=Body%20goes%20here'"
          }
          text={"Email"}
        />
      </Box>
    </>
  );
}
