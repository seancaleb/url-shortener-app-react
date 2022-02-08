import { textProps } from "../propStyles";

const boxProps = {
  bg: "brand.primary",
  py: "12px",
  px: "15px",
  borderRadius: "3px",
};

const flexProps = {
  align: "center",
  gap: "10px",
};

const iconProps = {
  color: "#ddd",
};

const extendedTextProps = {
  ...textProps,
  fontWeight: "normal",
  fontSize: "15px",
};

export { boxProps, flexProps, iconProps, extendedTextProps };
