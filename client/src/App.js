import React, { useRef, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import { myNewTheme } from "./theme";
//Languages
// import LanguageWrapper from "./components/Languages/LanguageWrapper";
//Fonts
import "@fontsource/raleway/400.css";
// import "@fontsource/opsn/400.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/500.css";
//Components
import NavBar from "./components/Navbar/Index";
import Layout from "./components/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/Index";
import Projects from "./components/Projects/index";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        console.log(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ChakraProvider theme={myNewTheme}>
      {/* <ColorModeScript /> */}
      <ColorModeScript initialColorMode={"dark"} />
      {/* <LanguageWrapper> */}
      <Layout>
        <NavBar
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <Hero />
        <About aboutRef={aboutRef} />
        <Projects projectRef={projectRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </Layout>

      {/* </LanguageWrapper> */}
    </ChakraProvider>
  );
}

export default App;
