import React from "react";
import { Box, Flex, Divider, Text, VStack } from "@chakra-ui/react";
import NavTag from "./Tag/NavTag";

export default function Footer() {
  return (
    <>
      <Divider borderColor={"whiteAlpha.400"} />
      <Box mt={10} pb={10} w={["85%", "60%"]}>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          position={"relative"}
          bottom={"0px"}
          left="0px"
          pt={5}
          right="0px"
        >
          <VStack spacing={5} align="center">
            <Text
              fontSize={"md"}
              color="secondary"
              fontWeight="500"
              textAlign={"center"}
            >
              Living, learning & leveling up <br /> one day at a time.
            </Text>

            {/* <SocialButtons /> */}
            <Text color="primaryMute" fontSize={"sm"}>
              Handcrafted by me
            </Text>
            <Text color="primary" fontSize={"xs"}>
              Made with Chakra UI
            </Text>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}
