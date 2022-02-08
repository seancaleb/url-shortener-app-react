import React from "react";
import { QuestionIcon } from "@chakra-ui/icons";
import { Box, Flex, Input, Text, Tooltip } from "@chakra-ui/react";
import {
  flexProps,
  extendedTextProps,
  tooltipProps,
  iconProps,
  inputProps,
} from "./propStyles";

const LinkInput = ({ label, placeholder, tipLabel, data, setData }) => {
  return (
    <Box>
      <Flex {...flexProps}>
        <Text {...extendedTextProps}>{label}</Text>
        <Tooltip label={tipLabel} {...tooltipProps}>
          <QuestionIcon {...iconProps} />
        </Tooltip>
      </Flex>
      <Input
        placeholder={placeholder}
        {...inputProps}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </Box>
  );
};

export default LinkInput;
