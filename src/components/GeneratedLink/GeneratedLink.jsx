import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  extendedWrapperProps,
  spanProps,
  extendedTextProps,
} from "./propStyes";

const newUrlContainer = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.99],
      duration: 0.6,
    },
  },
};

const MotionBox = motion(Box);

const GeneratedLink = ({ wrapperProps, data }) => {
  return (
    <AnimatePresence>
      {data && (
        <MotionBox
          {...wrapperProps}
          {...extendedWrapperProps}
          variants={newUrlContainer}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Text {...extendedTextProps}>
            {data.startsWith("re") && "Your new URL is "}
            <Box {...spanProps}>{data}</Box>
          </Text>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default GeneratedLink;
