import React from "react";
import { Heading, Box, Text, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Olatoo({ completed }) {
  const funcionaility = [
    "Authentication will be handled with Firebase Authentication",
    "Payments for sessions and training products will be handled by Stripe.",
    "Online training sessions will be handled using the Zoom Api to generate individual meetings for each session booked. ",
  ];

  const functionalityMarkup = (
    <List fontSize="sm" color="primaryMute" mb={5}>
      {funcionaility.map((text) => (
        <>
          <ListItem key={text}>
            <ListIcon
              as={CheckCircleIcon}
              color={completed ? "primary" : "orange.300"}
            />
            {text}
          </ListItem>
        </>
      ))}
    </List>
  );

  return (
    <>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Description
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          This portfolio is built to showcase some of the skills I have
          developed as a self taught developer.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Technology
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          This portfolio is built with Create React App and the design framework
          ChakraUI. Framer motion is used to animate components. Nodemailer is
          used with express and NodeJs to collect contact information and send
          emails. The app was deployed using Heroku.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Design Process
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          The app is being designed with AdobeXD with the design framework
          ChakraUI.
        </Text>
      </Box>
    </>
  );
}
