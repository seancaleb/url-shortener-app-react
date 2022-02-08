import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import { headerProps } from "./propStyles";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <Container maxW="1400px">
      <Flex {...headerProps}>
        <Logo />
      </Flex>
    </Container>
  );
};

export default Header;
