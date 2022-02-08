import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { containerProps, boxProps, extendedTextProps } from "./propStyles";

const Footer = () => {
  return (
    <Container {...containerProps}>
      <Box {...boxProps}>
        <Text {...extendedTextProps}>
          Link shortener app by Sean Caleb &copy; 2022
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
