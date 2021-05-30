import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import LandingLayout from "./client/components/layouts/LandingLayout"
import customTheme from "./client/theme"

const Index = () => {

    
    return (
        <ChakraProvider theme={customTheme}>
            <LandingLayout>
                <Box bg="grey" p="100px">tela do login</Box>
            </LandingLayout>
        </ChakraProvider>
    );
};

export default Index;