import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import LandingLayout from "./client/components/layouts/LandingLayout"
import customTheme from "./client/theme"

const About = () => {

    
    return (
        <ChakraProvider theme={customTheme}>
            <LandingLayout>
                <Box bg="grey" m="10px">how it works</Box>

                
            </LandingLayout>
        </ChakraProvider>
    );
};

export default About;