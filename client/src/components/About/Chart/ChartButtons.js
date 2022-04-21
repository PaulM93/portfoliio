import React from "react";
import { motion } from "framer-motion";
import { Heading, Box, Grid, GridItem } from "@chakra-ui/react";
import { FiBriefcase, FiCodesandbox, FiUser, FiInfo } from "react-icons/fi";

export default function ChartButtons({ selected, setSelected }) {
  const chartButtonArr = [
    { name: "About", icon: <FiUser /> },
    { name: "Skills", icon: <FiCodesandbox /> },
    { name: "Education", icon: <FiBriefcase /> },
    { name: "Facts", icon: <FiInfo /> },
  ];

  const chartButtonMarkup = chartButtonArr.map((i) => (
    <GridItem w="100%" h="60px">
      <motion.button
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.4, type: "spring" },
        }}
        initial={{
          opacity: i.name === selected ? 1 : 0,
        }}
        animate={{
          opacity: i.name === selected ? 1 : 0.4,
        }}
        transition={{ duration: 0.5 }}
        onClick={() => setSelected(i.name)}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "7px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: i.name !== selected ? "#98a0b3" : "#5686F5",
          border: "1px solid #23272F",
          background: i.name === selected ? "#1A1D23" : "",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        }}
      >
        <Box>{i.icon}</Box>
        <Heading ml={2} fontSize={["12px", "14px", "14px", "16px"]}>
          {i.name}
        </Heading>
      </motion.button>
    </GridItem>
  ));

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={[1, 1, 2, 2]} w="100%" mb={2}>
        {chartButtonMarkup}
      </Grid>
    </>
  );
}
