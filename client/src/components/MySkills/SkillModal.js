import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Progress,
  Text,
  useDisclosure,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";

export default function SkillModal({ name, description, progress, imageName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        mt={1}
        size="xs"
        maxWidth={"100%"}
        variant="ghost"
        onClick={onOpen}
      >
        More Info
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={"flex"} alignItems="center">
            {name}
            <Image ml={2} src={imageName} boxSize={"20px"} objectFit="cover" />
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <Text textTransform={"uppercase"} mb={1} fontSize={"xs"}>
              Progress
            </Text>
            <Progress
              colorScheme="green"
              value={{ progress }}
              borderRadius={10}
              mb={5}
            />
            {description}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
