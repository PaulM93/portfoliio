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
          MyvirtualPT (MVPT) is an online marketplace where you can connect with
          personal trainers from all over the UK for one-to-one online training
          sessions. Online training products are also available for purchase.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Technology
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          Development of the app is currently in progress. The app is being
          built with Next.JS, MongoDB and ChakraUI. Stripe will be used to
          handle payments.
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
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Functionality
        </Heading>
        {functionalityMarkup}
      </Box>
    </>
  );
}
