import blurImg from "../../images/blur.png";

const sectionProps = {
  as: "section",
  pt: "110px",
  pb: "180px",
  h: {
    xl: "100vh",
  },
};

const containerProps = {
  maxW: "1400px",
};

const headingProps = {
  as: "h1",
  fontSize: {
    base: "40px",
    sm: "48px",
  },
  color: "white",
  letterSpacing: "-.5px",
  textAlign: "center",
  maxW: {
    base: "372px",
    sm: "734px",
    lg: "100%",
  },
  m: "auto",
  position: "relative",
  zIndex: "10",
};

const spanProps = {
  as: "span",
  color: "brand.secondary",
};

const imageProps = {
  src: blurImg,
  position: "absolute",
  top: "0",
  zIndex: 1,
  h: "650px",
  left: "50%",
  transform: "translateX(-50%)",
};

export { sectionProps, containerProps, headingProps, spanProps, imageProps };
