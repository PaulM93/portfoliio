import React from "react";
import { Flex, Heading, IconButton, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import NavButtons from "./NavButtons";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";

interface MobNavProps {
  setOpen: (val: boolean) => void;
  open: boolean;
}

export default function MobNav({ setOpen, open }: MobNavProps) {
  return (
    <>
      <Flex
        w="100%"
        justify={"center"}
        pb={4}
        bg="red"
        position="relative"
        display={["flex", "flex", "none", "none"]}
      >
        <motion.div
          style={{
            background: "green",
            minHeight: "100%",
            position: "absolute",
            minWidth: "100%",
            // background: "white",
            zIndex: 500,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0, transition: { duration: 0.2 } }}
        />
        <Flex flexDir={"column"} w="90%" zIndex={999}>
          <Flex
            justify={"space-between"}
            minH={"70px"}
            pt={"10px"}
            align={"center"}
          >
            {/* Menu Button  */}

            <motion.button
              animate={{
                rotate: open ? 180 : 0,
                transition: { duration: 0.2 },
              }}
            >
              <IconButton
                isRound={open ? false : true}
                colorScheme={"purple"}
                variant={open ? "solid" : "outline"}
                onClick={() => setOpen(!open)}
                icon={<FiChevronDown />}
                aria-label="open menu"
              />
            </motion.button>
          </Flex>
          <motion.div
            initial={{
              height: "0px",
              opacity: 0,
              marginTop: "0px",
            }}
            animate={{
              marginTop: open ? "0px" : "0px",
              //   height: open ? "fit-content" : "0px",
              opacity: open ? 1 : 0,
              transition: { duration: 0.2 },
            }}
            style={{
              width: "100%",
              height: "0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "white" }}>hello</h1>
            {/* <NavButtons /> */}
          </motion.div>
        </Flex>
      </Flex>
    </>
  );
}
