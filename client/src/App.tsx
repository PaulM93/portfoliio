import React, { useEffect, useRef } from "react";
import { ColorModeScript, ChakraProvider, useToast } from "@chakra-ui/react";
import { myNewTheme } from "./theme";
import { AppProvider } from "./components/AppContext";
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
  const projectRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();

  return (
    <AppProvider>
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
          <Footer />
        </Layout>
      </ChakraProvider>
    </AppProvider>
  );
}

export default App;
