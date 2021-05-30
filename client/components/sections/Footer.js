import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = (props) => {

  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    
  }, [])

  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={["yellow.500", "yellow.500", "transparent", "transparent"]}
      color={["white", "white", "yellow.700", "yellow.700"]}
      {...props}
    >
      <Box align="center">
        Copyright Akctba 2021 &copy;
      </Box>
      
      <Box>
        <Text>Support us</Text>
        
      </Box>
    </Flex>
  );
};

export default Footer;
