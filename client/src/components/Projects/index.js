import React from "react";
import { LayoutGroup } from "framer-motion";
import { Flex } from "@chakra-ui/react";
//Components
import ProjectCard from "./ProjectCard";
import Subtitle from "../util/Subtitle";
import MotionWrapper from "../util/MotionWrapper";
//Portfolio
import Olatoo from "./Projects/Olatoo";
import MVPT from "./Projects/MVPT";
import Portfolio from "./Projects/Portfolio";

export default function Index({ projectRef }) {
  const content = [
    {
      completed: true,
      projectInfo: <Olatoo completed={true} />,
      title: "Olatoo",
      hashtags: [
        "React",
        "NextJS",
        "Firestore",
        "Firebase",
        "MaterialUI",
        "MomentJS",
        "Axios",
        "Stripe",
        "AdobeXD",
        "Photoshop",
        "SendGrid",
        "Vercel",
        "React Calendar",
        "Responsive Design",
      ],
      link: "https://www.olatoo.com/",
      github: "https://github.com/PaulM93/Olatoo",
    },
    {
      completed: false,
      projectInfo: <MVPT completed={false} />,
      title: "MVPT",
      hashtags: [
        "React",
        "NextJS",
        "MongoDB",
        "Firebase",
        "ChakraUI",
        "MomentJS",
        "Stripe",
        "AdobeXD",
        "Photoshop",
        "SendGrid",
        "Axios",
        "Responsive Design",
      ],
      link: "",
      github: "",
    },
    {
      completed: true,
      projectInfo: <Portfolio completed={true} />,
      title: "Portfolio",
      hashtags: [
        "React",
        "Create React App",
        "AdobeXD",
        "Framer-motion",
        "Nodemailer",
        "Charka UI",
        "Heroku",
        "NodeJS",
        "Express",
        "Axios",
      ],
      listItems: [
        "Designed the web app with AdobeXD andphotoshop.",
        "Front end responsive design code with materialUI.",
        "Built a timezone responsive booking system with integration of stripe subscriptions.",
        "I did everything basically.",
      ],
      body: "Olatoo is an online Spanish language learning platform where you can connect with professional tutors from all across Latin America for one-to-one conversational Spanish classes. Users sign up to the site via facebook, google or email and then have the ability to take 3 free trial classes through zoom. Once completed users may pay for a subscription plan via Stripe which gives them access to lesson credits.",
      link: "",
      github: "https://github.com/PaulM93/portfoliio",
    },
  ];

  const cardMarkup = content.map((i) => (
    <ProjectCard
      completed={i.completed}
      projectInfo={i.projectInfo}
      title={i.title}
      body={i.body}
      hashtags={i.hashtags}
      listItems={i.listItems}
      link={i.link}
      github={i.github}
    />
  ));

  return (
    <>
      <div ref={projectRef} style={{ paddingTop: "100px" }}>
        <MotionWrapper>
          <Flex flexDir={"column"} alignItems="center">
            <Subtitle
              sentence={"My Projects"}
              secondaryText={
                " A collection of my completed and upcoming projects."
              }
            />
          </Flex>
          <Flex
            width={"100%"}
            display="flex"
            justify={"center"}
            mb={["150px", "150px", "200px", "200px"]}
            flexWrap="wrap"
          >
            <LayoutGroup>{cardMarkup}</LayoutGroup>
          </Flex>
        </MotionWrapper>
      </div>
    </>
  );
}
