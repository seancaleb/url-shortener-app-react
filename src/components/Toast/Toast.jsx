import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  boxProps,
  flexProps,
  iconProps,
  extendedTextProps,
} from "./propStyles";

const Toast = () => {
  return (
    <>
      <Box {...boxProps}>
        <Flex {...flexProps}>
          <CheckCircleIcon {...iconProps} />
          <Text {...extendedTextProps}>
            Link has been successfully generated.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Toast;
