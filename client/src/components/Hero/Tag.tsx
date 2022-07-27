import React, { useState } from "react";
import { Text, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface TagProps {
  type: "github" | "linkedin";
  link: string;
  text: string;
}

export default function Tag({ type, link, text }: TagProps) {
  const [whileHover, setWhileHover] = useState(false);
  console.log("whileHover", whileHover);
  return (
    <>
      <Link href={link} isExternal>
        <div
          style={{
            height: "50px",
            width: "100px",
            zIndex: 0,
          }}
        >
          <motion.div
            onHoverStart={() => setWhileHover(true)}
            onHoverEnd={() => setWhileHover(false)}
            style={{
              zIndex: 0,
              width: "130px",
              height: "50px",
              cursor: "pointer",
              position: "absolute",
              color: "#5686F5",
              background: "#1D2433",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "8px",
              padding: "11px 16px 11px 16px",
            }}
          >
            <Text fontSize="md" mr={3} fontWeight={700}>
              {text}
            </Text>
            <Icon fontSize="md" as={FaGithub} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: whileHover ? 1 : 0,
              transition: { duration: 0.3 },
            }}
            style={{
              zIndex: -10,
              position: "absolute",
              display: "flex",
              width: "130px",
              height: "50px",
              alignItems: "center",
              color: "white",
              boxShadow: "0px 0px 40px -5px rgba(86,134,245,0.81)",
              borderRadius: "8px",
              padding: "11px 16px 11px 16px",
            }}
          />
        </div>
      </Link>
    </>
  );
}
