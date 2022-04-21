import React from "react";
import { Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Flex
        minH={"100vh"}
        borderBottom="10px solid #5686F5"
        bg={"background"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Flex
          flexDir={"column"}
          justify={"center"}
          w={["90%", "80%", "80%", "60%"]}
          alignItems={"center"}
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
}
