import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { headingProps, spanProps } from "./propStyles";

const Logo = () => {
  return (
    <Heading {...headingProps}>
      Link
      <Box {...spanProps}>Shortener</Box>
    </Heading>
  );
};

export default Logo;
