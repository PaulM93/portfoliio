import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Heading,
  HStack,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
//Components
import Subtitle from "./util/Subtitle";
import MotionWrapper from "./MotionWrapper";

export default function Contact({ contactRef }) {
  const toast = useToast();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const handleValidation = () => {
    let fields = details;
    let errors = {};
    let formIsValid = true;

    const fieldArr = ["name", "message", "email"];
    //Name - Message
    fieldArr.map((i) => {
      if (!fields[i]) {
        formIsValid = false;
        return (errors[i] = true);
      }
    });

    setErrors(errors);
    return formIsValid;
  };

  const test = "test";

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (handleValidation()) {
      axios
        .post("/send-email", details)
        .then((res) => {
          console.log(res);
          setLoading(false);
          toast({
            title: res.data.message,
            status: "success",
            position: "bottom-left",
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
          toast({
            title: err.response.data.message,
            status: "error",
            position: "bottom-left",
            isClosable: true,
          });
        });
    } else {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  const [hovering, setHovering] = useState(false);
  const submitButton = (
    <motion.button
      onClick={(e) => handleSubmit(e)}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <Button
        style={{
          display: "flex",
          padding: "15px 40px 15px 40px",
          borderRadius: "5px",
          color: "#EDE8FD",
          fontWeight: "500",
          background: "#5686F5",
        }}
        isLoading={loading}
        loadingText="Submitting"
      >
        Send it{" "}
        <motion.p
          initial={{ rotate: 0 }}
          animate={{ rotate: hovering ? [0, 90, 0] : 0 }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ marginLeft: "5px" }}
        >
          👋
        </motion.p>
      </Button>
    </motion.button>
  );

  console.log("errors outside", errors);

  return (
    <>
      <div ref={contactRef} style={{ paddingTop: "100px" }} />
      <MotionWrapper>
        <Flex
          minHeight={["", "", "100vh", "100vh"]}
          w={["100%", "100%", "100%", "100%"]}
          align="flex-start"
          justify="center"
          mb={["150px", "150px", "100px", "100px"]}
        >
          <Flex
            w={["85%", "70%", "60%", "70%"]}
            flexDir="column"
            alignItems="center"
            textAlign={"center"}
          >
            <Flex align="center">
              <Subtitle sentence={"Thanks for taking the time to reach out."} />
            </Flex>
            <Heading size="lg" mb={10} textAlign="center" color="primaryMute">
              How can I help you today?
            </Heading>
            <HStack mb={10} spacing={4} w="100%">
              <FormControl htmlFor="name" isRequired isInvalid={errors.name}>
                <FormLabel color="primaryMute" htmlFor="email">
                  Name
                </FormLabel>
                <Input
                  variant="outline"
                  focusBorderColor="primary"
                  errorBorderColor="red.300"
                  borderColor={"whiteAlpha.400"}
                  color="secondary"
                  size="lg"
                  placeholder="Your name..."
                  onChange={handleChange}
                  id="name"
                  type="text"
                />
                {errors.name ? (
                  <FormErrorMessage color="red.300">
                    Your name is required.
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl htmlFor="email" isRequired isInvalid={errors.email}>
                <FormLabel color="primaryMute" htmlFor="email">
                  Email address
                </FormLabel>
                <Input
                  focusBorderColor="primary"
                  errorBorderColor="red.300"
                  borderColor={"whiteAlpha.400"}
                  color="secondary"
                  size="lg"
                  placeholder="Your Email..."
                  onChange={handleChange}
                  id="email"
                  type="email"
                />
                {errors.email ? (
                  <FormErrorMessage color="red.300">
                    Your email is required.
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
            </HStack>
            <FormControl isInvalid={errors.message} mb={10}>
              <Textarea
                resize="vertical"
                focusBorderColor="primary"
                errorBorderColor="red.300"
                color="secondary"
                borderColor={"whiteAlpha.400"}
                size="lg"
                onChange={handleChange}
                id="message"
                placeholder="Say hello!"
              />
              {errors.message ? (
                <FormErrorMessage color="red.300">
                  Please say hello
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            {submitButton}
          </Flex>
        </Flex>
      </MotionWrapper>
    </>
  );
}
