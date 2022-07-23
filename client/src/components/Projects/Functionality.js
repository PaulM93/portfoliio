import React from "react";
import { Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Functionality({ functionality, completed }) {
  return functionality.length !== 0 ? (
    <>
      <Heading fontSize="sm" mb={2} color="secondary">
        Functionality
      </Heading>
      <List fontSize="sm" color="primaryMute" mb={5}>
        {functionality.map((text) => (
          <ListItem key={text}>
            <ListIcon
              as={CheckCircleIcon}
              color={completed ? "primary" : "orange.300"}
            />
            {text}
          </ListItem>
        ))}
      </List>
    </>
  ) : null;
}
