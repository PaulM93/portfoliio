import React, { useState } from "react";
import { Link, Text, Box, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

export default function Tag() {
  const [whileHover, setWhileHover] = useState(false);
  console.log("whileHover", whileHover);
  return (
    <>
      {/* <Link href={"https://github.com/PaulM93"} isExternal> */}
      <div style={{ height: "50px", width: "100px", zIndex: 0 }}>
        <motion.div
          onHoverStart={() => setWhileHover(true)}
          onHoverEnd={() => setWhileHover(false)}
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: whileHover ? 0 : 1 }}
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
            PaulM93
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
            // background: "#1D2433",
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
      {/* </Link> */}
    </>
  );
}

// #1D2433
