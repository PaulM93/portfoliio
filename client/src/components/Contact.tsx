import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Heading,
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
import MotionWrapper from "./util/MotionWrapper";

interface ContactProps {
  contactRef: { current: HTMLDivElement };
}

export default function Contact({ contactRef }: ContactProps) {
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
    let errors = { name: false, email: false, message: false };
    let formIsValid = true;

    const fieldArr = ["name", "message", "email"];
    fieldArr.map((i: string) => {
      if (!fields[i]) {
        formIsValid = false;
        return (errors[i] = true);
      }
      return null;
    });

    setErrors(errors);
    return formIsValid;
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

  const handleChange = (e: { target: { id: any; value: any } }) => {
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
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </motion.p>
      </Button>
    </motion.button>
  );

  return (
    <>
      <div ref={contactRef} style={{ marginTop: "90px", paddingTop: "90px" }} />
      <MotionWrapper>
        <Flex
          minHeight={["", "", "100vh", "100vh"]}
          w={["100%", "100%", "100%", "100%"]}
          align="flex-start"
          justify="center"
          mb={["150px", "150px", "100px", "100px"]}
        >
          <Flex
            w={["100%", "70%", "60%", "70%"]}
            flexDir="column"
            alignItems="center"
            textAlign={"center"}
          >
            <Flex align="center">
              <Heading
                size="lg"
                color="secondary"
                display={["flex", "flex", "flex", "flex"]}
              >
                Thanks for taking the time to reach out.
              </Heading>
            </Flex>
            <Heading size="lg" mb={10} textAlign="center" color="primaryMute">
              How can I help you today?
            </Heading>
            <Flex mb={5} w="100%">
              <FormControl
                // htmlFor={"
                isRequired
                isInvalid={errors.name}
                mr={4}
              >
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
                  <FormErrorMessage color="red.300" size="sm">
                    Your name is required.
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl isRequired isInvalid={errors.email}>
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
            </Flex>
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
                placeholder="Send me a message!"
              />
              {errors.message ? (
                <FormErrorMessage color="red.300">
                  A message is required :)
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
