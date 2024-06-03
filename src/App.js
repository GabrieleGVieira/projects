import React from "react";
import Header from "./components/Header";
import MainContent from "./components/Main";
import Footer from "./components/Footer";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <MainContent />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
