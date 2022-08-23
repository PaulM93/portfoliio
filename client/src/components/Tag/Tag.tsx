import React, { useState, useEffect, useRef } from "react";
import styles from "./Tag.module.css";
import { useAppContext } from "../AppContext";
import VisbleHook from "../util/VisibleHook";
import { Text, Link, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface TagProps {
  link: string;
  text: string;
  icon: JSX.Element;
}

export default function Tag({ link, text, icon }: TagProps) {
  const ref = useRef(null);
  const isVisible = VisbleHook(ref);
  const [whileHover, setWhileHover] = useState(false);
  const { tagDisplay, setTagDisplay } = useAppContext();

  useEffect(() => {
    function handleScroll() {
      const { y } = ref.current.getBoundingClientRect();
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

  const handleEmail = () => {
    window.open(
      "mailto:marleypaul91@example.com?subject=Subject&body=Hey%20Paul!!"
    );
  };

  return (
    <>
      <Link
        href={link}
        isExternal
        download={text === "Resume" ? true : false}
        target="_blank"
      >
        <div
          ref={ref}
          className={styles.navContainer}
          onClick={text === "Email" ? () => handleEmail() : null}
        >
          <motion.div
            onHoverStart={() => setWhileHover(true)}
            onHoverEnd={() => setWhileHover(false)}
            className={styles.tagVisible}
          >
            <Flex align="center">
              <Text fontSize={"md"} mr={3} fontWeight={700}>
                {text}
              </Text>
              {icon}
            </Flex>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: whileHover ? 1 : 0,
              transition: { duration: 0.2 },
            }}
            className={styles.tagHidden}
          />
        </div>
      </Link>
    </>
  );
}
