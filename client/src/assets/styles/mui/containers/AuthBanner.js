import { centerFlex } from "./Login";

export const styles = {
  banner: {
    ...centerFlex,
    justifyContent: "start",
    position: "relative",
    background:
      "linear-gradient(180deg, #00b0bb 0%, rgba(43, 171, 187, 0.75) 100%)",
    "img#background": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: 0,
      width: "450px",
      height: "504px",
    },
  },
  bannerContent: {
    transform: "translate(-60px, -10px)",
  },
  bannerTitle: {
    "&, span": {
      fontSize: "60px",
      color: "white",
      fontWeight: "bolder",
    },
    "& span": {
      color: "#0f727a",
    },
  },
  paragraph: {
    fontSize: "18px",
    color: "white",
  },
  badges: {
    // for a proper spacing and justified to the right
    direction: "ltr",
    justifyContent: "end",
    transform: "translate(4px, -4px)",
  },
};
