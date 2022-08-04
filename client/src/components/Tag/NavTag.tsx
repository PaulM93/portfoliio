import React, { useState } from "react";
import styles from "./Tag.module.css";
import { Link, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAppContext } from "../AppContext";

interface NavTagProps {
  link: string;
  icon: JSX.Element;
}

export default function NavTag({ link, icon }: NavTagProps) {
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
            <Flex align="center">{icon}</Flex>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: whileHover ? 1 : 0,
            transition: { duration: 0.2 },
          }}
          className={styles.navTagHidden}
        />
      </motion.div>
    </>
  );
}
