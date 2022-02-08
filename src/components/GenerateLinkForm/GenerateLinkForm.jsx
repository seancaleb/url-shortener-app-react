import React from "react";
import { Container, Flex, Heading, Box, Image } from "@chakra-ui/react";
import LinkForm from "../LinkForm/LinkForm";
import {
  sectionProps,
  containerProps,
  headingProps,
  spanProps,
  imageProps,
} from "./propStyles";

const GenerateLink = () => {
  return (
    <Flex {...sectionProps}>
      <Container {...containerProps}>
        <Heading {...headingProps}>
          The <Box {...spanProps}>easiest way</Box> to shorten your link.
        </Heading>
        <LinkForm />
        <Image {...imageProps} />
      </Container>
    </Flex>
  );
};

export default GenerateLink;
