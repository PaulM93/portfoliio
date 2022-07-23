import React from "react";
import { Tag, Icon, Tooltip } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function ProjectStatus({ isOpen, completed }) {
  return !isOpen ? (
    <Tooltip label={completed ? "Project Completed" : "In Progress"}>
      <Icon as={CheckCircleIcon} color={completed ? "primary" : "orange.300"} />
    </Tooltip>
  ) : (
    <Tag
      size="md"
      borderRadius="5px"
      variant="solid"
      colorScheme={completed ? "facebook" : "orange"}
    >
      {completed ? "Project Completed" : "In Progress"}
    </Tag>
  );
}
