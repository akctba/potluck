import React from "react";
import { Flex, Container } from "@chakra-ui/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

import "../../assets/styles.css"

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      w="100vw"
      h="100vh"
      justify="space-between"
      wrap="wrap"
      m="0 auto"
      className="backgoundbody" 
      {...props}
    >
      <Header />
      <Container as="content" w="100%" justify="space-between" wrap="wrap">
        {props.children}
      </Container>
      <Footer />
    </Flex>
  );
}
