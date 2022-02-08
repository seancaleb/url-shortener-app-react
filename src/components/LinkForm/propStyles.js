import { textProps } from "../propStyles";

const wrapperProps = {
  borderRadius: "3px",
  bg: "rgba(192,187,252,.1)",
  px: {
    base: "30px",
    sm: "40px",
  },
  py: "40px",
  maxW: "468px",
  m: "auto",
  mt: "40px",
  zIndex: 10,
  position: "relative",
};

const flexProps = {
  flexDir: "column",
  gap: "30px",
  mb: "50px",
};

const buttonContainerProps = {
  justify: "center",
};

const extendedTextProps = {
  ...textProps,
  fontSize: "15px",
};

const spinnerProps = {
  speed: ".6s",
  size: "sm",
};

const textSpinnerContainerProps = {
  gap: "10px",
};

export {
  wrapperProps,
  flexProps,
  buttonContainerProps,
  extendedTextProps,
  spinnerProps,
  textSpinnerContainerProps,
};
