import React, { useState, useEffect, useRef } from "react";
import styles from "./Tag.module.css";
import { useAppContext } from "../AppContext";
import VisbleHook from "../util/VisibleHook";
import { Text, Icon, Link, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface TagProps {
  type: "github" | "linkedin";
  link: string;
  text: string;
  nav: boolean;
}

export default function Tag({ type, link, text, nav }: TagProps) {
  const ref = useRef(null);
  const isVisible = VisbleHook(ref);
  const [whileHover, setWhileHover] = useState(false);
  const { tagDisplay, setTagDisplay } = useAppContext();

  useEffect(() => {
    function handleScroll() {
      const { y } = ref.current.getBoundingClientRect();
      console.log(y);
      if (y > 0) {
        setTagDisplay(false);
      }
      if (y < 0) {
        setTagDisplay(true);
      }
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [isVisible, setTagDisplay, tagDisplay]);

  return (
    <>
      <div ref={ref} className={styles.navContainer}>
        <motion.div
          onHoverStart={() => setWhileHover(true)}
          onHoverEnd={() => setWhileHover(false)}
          className={styles.tagVisible}
        >
          <Link href={link} isExternal>
            <Flex align="center">
              <Text fontSize={"md"} mr={3} fontWeight={700}>
                {text}
              </Text>
              <Icon fontSize={"md"} as={FaGithub} />
            </Flex>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: whileHover ? 1 : 0,
            transition: { duration: 0 },
          }}
          className={styles.tagHidden}
        />
      </div>
    </>
  );
}
