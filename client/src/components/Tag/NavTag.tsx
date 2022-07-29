import React, { useState } from "react";
import styles from "./Tag.module.css";
import { Text, Icon, Link, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAppContext } from "../AppContext";
import { FaGithub } from "react-icons/fa";

export default function NavTag({ link, text }) {
  const [whileHover, setWhileHover] = useState(false);
  const { tagDisplay } = useAppContext();

  return (
    <>
      <motion.div
        className={styles.navTagContainer}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: tagDisplay ? 1 : 0,
          transition: { duration: 0.5 },
        }}
      >
        <motion.div
          onHoverStart={() => setWhileHover(true)}
          onHoverEnd={() => setWhileHover(false)}
          className={styles.navTagVisible}
        >
          <Link href={link} isExternal>
            <Flex align="center">
              <Text
                display={["none", "none", "flex", "flex"]}
                fontSize={"sm"}
                mr={3}
                fontWeight={700}
              >
                {text}
              </Text>
              <Icon fontSize={"sm"} as={FaGithub} />
            </Flex>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: whileHover ? 1 : 0,
            transition: { duration: 0 },
          }}
          className={styles.navTagHidden}
        />
      </motion.div>
    </>
  );
}
