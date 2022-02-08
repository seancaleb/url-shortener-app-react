import { textProps } from "../propStyles";

const extendedWrapperProps = {
  mt: "20px",
  bg: "brand.primary",
  py: "15px",
};

const spanProps = {
  as: "span",
  color: "brand.secondary",
};

const extendedTextProps = {
  ...textProps,
  textAlign: "center",
};

export { extendedWrapperProps, spanProps, extendedTextProps };
