import React from "react";
import { Box } from "@chakra-ui/react";
import { boxProps } from "./propStyles";

const Main = (props) => {
  return <Box {...boxProps}>{props.children}</Box>;
};

export default Main;
