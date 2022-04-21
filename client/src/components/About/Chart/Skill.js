import React from "react";
import { Flex, Image, Tooltip, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Skill({ name, size, image }) {
  return (
    <>
      <WrapItem>
        <motion.button
          style={{ marginRight: "5px" }}
          whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
        >
          <Tooltip hasArrow label={name}>
            <Flex
              borderRadius="10px"
              align="center"
              justify="center"
              height={size}
              width={size}
            >
              <Image src={image} boxSize={size} objectFit="cover" />
            </Flex>
          </Tooltip>
        </motion.button>
      </WrapItem>
    </>
  );
}
