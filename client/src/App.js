import React, { useRef } from "react";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import { myNewTheme } from "./theme";
//Fonts
import "@fontsource/raleway/400.css";
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

  return (
    <ChakraProvider theme={myNewTheme}>
      <ColorModeScript initialColorMode={"dark"} />
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
    </ChakraProvider>
  );
}

export default App;
