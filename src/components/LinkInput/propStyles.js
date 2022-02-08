import { textProps } from "../propStyles";

const flexProps = {
  alignItems: "center",
  gap: "5px",
  mb: "10px",
};

const extendedTextProps = {
  ...textProps,
  fontSize: "15px",
};

const tooltipProps = {
  placement: "bottom",
  openDelay: 200,
  borderRadius: "3px",
  fontSize: "12px",
  color: "#ddd",
  bg: "brand.dark",
  p: "5px",
};

const iconProps = {
  color: "whiteAlpha.400",
  cursor: "pointer",
};

const inputProps = {
  w: "100%",
  h: {
    base: "44px",
    sm: "50px",
  },
  fontSize: "15px",
  bg: "brand.primary",
  borderColor: "brand.primary",
  focusBorderColor: "brand.secondary",
  borderRadius: "3px",
  color: "whiteAlpha.700",
  _focus: {
    borderWidth: "1px",
  },
  _hover: {
    borderColor: "brand.secondary",
  },
  _placeholder: {
    color: "whiteAlpha.400",
  },
};

export { flexProps, extendedTextProps, tooltipProps, iconProps, inputProps };
