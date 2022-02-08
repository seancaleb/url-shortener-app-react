import { textProps } from "../propStyles";

const containerProps = {
  maxW: "1400px",
};

const extendedTextProps = {
  ...textProps,
  textTransform: "uppercase",
  fontSize: "12px",
  textAlign: "center",
  color: "whiteAlpha.400",
};

const boxProps = {
  position: "absolute",
  bottom: "30px",
  left: "0",
  right: "0",
};

export { containerProps, extendedTextProps, boxProps };
