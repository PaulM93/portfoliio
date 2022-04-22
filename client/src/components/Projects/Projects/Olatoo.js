import React from "react";
import { Heading, Box, Text, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Olatoo({ completed }) {
  const funcionaility = [
    "A user signs up to Olatoo using Facebook, Google or email all of which are handled through firebase authentication. Email authentication is then required which is also handled by firebase. ",
    "The user has access to three free trial classes. These may be booked directly from the tutor dashboard through booking buttons found on tutor cards.",
    "The user can access their booking information on their dashboard. An email with booking information is sent to the user and tutor through sendgrid.. The user has the option to cancel their lesson up to one hour before it is due to take place.",
    "At the time of the booking the user connects to the class from their Olatoo dashboard through the click of a button to zoom using the personal meeting ID of the tutor.",
    "If the user is satisfied with their trial lesson they may then purchase class credits. This is handled through the firebase stripe subscription extension. Lesson credits are automatically renewed on a monthly basis.",
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
          Olatoo is an online Spanish language learning platform where you can
          connect with professional tutors from all across Latin America for
          one-to-one conversational Spanish classes.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Technology
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          Olatoo is built using Next.JS due to its server side rendering
          capabilities which are essential for search engine optimization.
          Firebase was also used due to its ease of use in providing access to
          firebase authentication, the firestore cloud database and the stripe
          subscription extension. As the app was built with Next.JS it felt
          logical to deploy it using Vercel as Next.JS was built by the same
          team.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Design Process
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          The app layout was designed using AdobeXD with photoshop used to edit
          images and icons. MaterialUI was used to style the app due to its ease
          of use, customisation options and vast amount of components.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Functionality
        </Heading>
        {functionalityMarkup}
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Authentication
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          User authentication for Olatoo is handled by firebase authentication
          with users having the options of Facebook, Google or email.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Booking System
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          A user who signs up to Olatoo is given 3 free trial classes which may
          be booked on signup or through the booking process on the user
          dashboard. If a user books a trial class upon signup they must select
          a tutor country, date and time. Relevant tutors are then filtered
          using firestore web api and once the user has entered their
          authentication details a class is assigned to a tutor at random. The
          user also has the option to choose which tutor they want their classes
          to be with using the booking buttons found on tutor cards.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Class Bookings
        </Heading>
        <Text fontSize="sm" color="primaryMute" mb={2}>
          Upon account creation user information is saved to firestore and a
          stripe customer account is created which is linked to the relevant
          firestore document. Email verification from the user is required to
          book an Olatoo class but this feature has been turned off due to
          testing. A user books a class using the booking modal found on each
          tutor card. A class type, date and time are chosen and the class is
          then booked and saved to the database under the bookings collection.
          The booking is also added to the relevant tutor document to ensure it
          can be filtered and removed to prevent bookings at the same time.
        </Text>
        <Text fontSize="sm" color="primaryMute">
          Time Zones were also considered with tutors and students coming from
          different parts of the world. This was handled upon signup using
          Intl.DateTimeFormat().resolvedOptions().timeZone. The user cannot set
          their timezone but if a timezone change was noted this was
          automatically updated. The relevant timezone was then applied to React
          Calendar using various util functions to show class time slots at the
          correct timezone for the user. MomentJS was also used to handle date
          and time formatting.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Student Dashboard
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          The user dashboard gives the user access to their bookings and profile
          information. From here they may update their profile information, edit
          profile picture, change their password or email address, deactivate
          their account, view their favourite tutors or view their upcoming and
          completed bookings.The student may also book classes with tutors
          directly from their dashboard. The tutor dashboard also provides
          similar functionality to the student dashboard.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="secondary">
          Subscription Payments
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          If a user decides they want to purchase an Olatoo lesson plan this is
          handled with the stripe subscription extension which is linked to a
          custom stripe checkout. Once a plan is purchased, lesson credits are
          added to the user’s account and refreshed on a monthly basis. Lesson
          credits are added using metadata.
        </Text>
      </Box>
      <Box mb={5}>
        <Heading fontSize="sm" mb={2} color="primary">
          Considerations and thoughts
        </Heading>
        <Text fontSize="sm" color="primaryMute">
          Although I am satisfied with what I have been able to achieve in
          building Olatoo, it was my first project and now with more knowledge,
          I may have considered other options to build the app. I am not happy
          with the folder structure and layout of my code but I put this down to
          lack of experience. I had originally built the app with CreateReactApp
          not knowing that this was not good for SEO purposes so I migrated
          everything over to Next.JS which was a difficult process.
        </Text>
      </Box>
    </>
  );
}
