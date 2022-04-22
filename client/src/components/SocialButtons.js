import React, { useState } from "react";
import { motion } from "framer-motion";
import { Stack, IconButton, Link } from "@chakra-ui/react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

const heroTransitions = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const navTransistions = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export default function SocialButtons({ type, shouldShowActions }) {
  const [hover, setHover] = useState(false);
  const socialIcons = [
    {
      name: "facebook",
      val: "https://www.facebook.com/paul.marley.7792/",
      icon: <FaFacebookF />,
    },
    {
      name: "github",
      val: "https://github.com/PaulM93",
      icon: <FaGithub />,
    },
    {
      name: "instagram",
      val: "https://www.instagram.com/paumar93/",
      icon: <FaInstagram />,
    },
  ];
  const socialMarkup = socialIcons.map((i) => (
    <motion.button
      onHoverStart={() => setHover(i.name)}
      onHoverEnd={() => setHover("")}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
    >
      <Link color={"primary"} href={i.val} isExternal>
        <IconButton
          colorScheme={i.name === hover ? "messenger" : "gray"}
          background={"cardBackground"}
          size={type === "nav" ? "xs" : "md"}
          aria-label={i.name}
          icon={i.icon}
        />
      </Link>
    </motion.button>
  ));

  return (
    <motion.div
      style={{ position: "sticky" }}
      variants={type === "nav" ? navTransistions : heroTransitions}
      initial={type === "nav" ? { opacity: 0 } : "hidden"}
      animate={
        type === "nav" ? { opacity: shouldShowActions ? 1 : 0 } : "visible"
      }
    >
      <Stack direction={["row", "row", "row", "row"]} spacing={2}>
        {socialMarkup}
      </Stack>
    </motion.div>
  );
}
