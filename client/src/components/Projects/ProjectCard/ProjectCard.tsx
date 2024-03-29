import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../Project.module.css";
import { Heading, IconButton, Box, Button, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Tags from "./Tags";
import ProjectStatus from "./ProjectStatus";
import ProjectInfo from "../ProjectInfo";
import Functionality from "../Functionality";
import VisbleHook from "../../util/VisibleHook";
import OpenButton from "./OpenButton";

export default function ProjectCard({
  completed,
  title,
  hashtags,
  projectInfo,
  functionality,
  considerations,
  github,
  link,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isVisible = VisbleHook(ref);

  useEffect(() => {
    if (isOpen) {
      const { y } = ref.current.getBoundingClientRect();
      if (!isVisible && y > 0) {
        setIsOpen(false);
      }
    }
  }, [isOpen, isVisible]);

  return (
    <>
      <Box
        ref={ref}
        mr={["0px", "0px", "10px", "10px"]}
        mb={"10px"}
        w={!isOpen ? ["100%", "100%", "250px", "250px"] : ["98%"]}
      >
        <motion.div
          transition={{ layout: { duration: 0.5 } }}
          exit={{ transition: { duration: !isVisible ? 0 : 1 } }}
          layout
        >
          <Box
            minHeight={["200px", "200px", "250px", "320px"]}
            bg="#1A1D23"
            border={
              isOpen
                ? completed
                  ? "2px solid #5686F5"
                  : "2px solid #23272F"
                : "2px solid #23272F"
            }
            boxShadow={
              isOpen
                ? completed
                  ? "0px 0px 25px -10px rgba(86,134,245,0.8)"
                  : "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
                : "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
            }
            borderRadius="10px"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            padding={!isOpen ? "25px" : ["25px", "40px", "40px", "40px"]}
          >
            <div className={styles.topDiv}>
              <div className={styles.topDivControls}>
                {/* Top Section */}
                <motion.div layout>
                  <Heading fontSize="lg" color="secondary">
                    {title}
                  </Heading>
                </motion.div>
                <OpenButton
                  completed={completed}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
              </div>
              <Box minHeight={!isOpen ? ["", "", "180px", "180px"] : ""}>
                <Tags hashtags={hashtags} isOpen={isOpen} />
              </Box>
            </div>

            {/* Content */}
            {isOpen ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ProjectInfo info={projectInfo} />
                <Functionality
                  functionality={functionality}
                  completed={completed}
                />
                {considerations !== "" ? (
                  <Box mb={5}>
                    <Heading fontSize="sm" mb={2} color="primary">
                      Considerations and thoughts
                    </Heading>
                    <Text fontSize="sm" color="primaryMute">
                      {considerations}
                    </Text>
                  </Box>
                ) : null}
              </motion.div>
            ) : (
              ""
            )}

            {/* Bottom Section */}
            {/* <Divider mb={5} /> */}
            <div className={styles.buttonDiv}>
              <motion.div layout transition={{ layout: { duration: 0.5 } }}>
                <ProjectStatus isOpen={isOpen} completed={completed} />
              </motion.div>
              <div>
                <motion.button
                  layout
                  transition={{ layout: { duration: 0.5 } }}
                >
                  <Link href={github} isExternal>
                    <IconButton
                      disabled={github === ""}
                      colorScheme={"whiteAlpha"}
                      mr={2}
                      variant="outline"
                      size="sm"
                      aria-label={"open github"}
                      icon={<FaGithub />}
                    />
                  </Link>
                </motion.button>
                <motion.button
                  layout
                  transition={{ layout: { duration: 0.5 } }}
                >
                  <Link href={link} isExternal>
                    <Button
                      disabled={link === ""}
                      colorScheme={"whiteAlpha"}
                      variant="outline"
                      size="sm"
                    >
                      View Project
                    </Button>
                  </Link>
                </motion.button>
              </div>
            </div>
          </Box>
        </motion.div>
      </Box>
    </>
  );
}
