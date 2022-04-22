import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";
import {
  Heading,
  IconButton,
  Box,
  Button,
  Link,
  Tag,
  Text,
  List,
  Icon,
  Tooltip,
  ListIcon,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import {
  AddIcon,
  CloseIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  completed,
  title,
  hashtags,
  projectInfo,
  github,
  link,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const tagMarkup = hashtags.map((tag) => (
    <motion.button
      key={tag}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4, type: "spring" },
      }}
      layout
      transition={{ layout: { duration: 0.5 } }}
    >
      <Tag
        colorScheme={"whiteAlpha"}
        size={!isOpen ? "sm" : "md"}
        mr={1}
        mb={1}
      >
        {tag}
      </Tag>
    </motion.button>
  ));

  const projectStatusTag = (
    <Tag
      size="md"
      borderRadius="5px"
      variant="solid"
      colorScheme={completed ? "facebook" : "orange"}
    >
      {completed ? "Project Completed" : "In Progress"}
    </Tag>
  );
  const projectStatusToolTip = (
    <Tooltip label={completed ? "Project Completed" : "In Progress"}>
      <Icon as={CheckCircleIcon} color={completed ? "primary" : "orange.300"} />
    </Tooltip>
  );

  return (
    <>
      <Box
        mr={["0px", "0px", "10px", "10px"]}
        mb={"10px"}
        w={
          !isOpen ? ["100%", "100%", "250px", "250px"] : ["100%"]
          // : ["100%", "100%", "48%", "48%"]
        }
      >
        <motion.div
          transition={{ layout: { duration: 0.5 } }}
          exit={{ duration: 1 }}
          layout
        >
          <Box
            minHeight={["200px", "200px", "250px", "320px"]}
            bg="#1A1D23"
            border="2px solid #23272F"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
            borderRadius="10px"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            padding="25px"
          >
            <div className={styles.topDiv}>
              <div className={styles.topDivControls}>
                {/* Top Section */}
                <motion.div layout>
                  <Heading fontSize="lg" color="secondary">
                    {title}
                  </Heading>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 90,
                    transition: { duration: 1, type: "spring" },
                  }}
                  layout
                  transition={{ layout: { duration: 0.5 } }}
                >
                  <IconButton
                    colorScheme={"whiteAlpha"}
                    size="xs"
                    variant="outline"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="open"
                    icon={!isOpen ? <AddIcon /> : <CloseIcon />}
                  />
                </motion.div>
              </div>
              <Box minHeight={!isOpen ? "180px" : ""}>{tagMarkup}</Box>
            </div>

            {/* Content */}
            {isOpen ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {projectInfo}
              </motion.div>
            ) : (
              ""
            )}

            {/* Bottom Section */}
            <Divider mb={5} />
            <div className={styles.buttonDiv}>
              <motion.div layout transition={{ layout: { duration: 0.5 } }}>
                {!isOpen ? projectStatusToolTip : projectStatusTag}
              </motion.div>
              <div>
                <motion.button
                  layout
                  transition={{ layout: { duration: 0.5 } }}
                >
                  <Link href={github} isExternal>
                    <IconButton
                      disabled={!completed}
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
                      disabled={!completed}
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
