export const styles = {
  container: {
    width: "100%",
    backgroundColor: "#00adbb",
    height: 205,
    justifyContent: "center",
    alignItems: "center",
    hr: {
      opacity: 0.6,
      height: "80%",
      transform: "translateY(30%)",
    },
  },
  logoStack: {
    width: 1200,
    height: 54,
    justifyContent: "space-around",
  },
  logoWrapper: {
    img: {
      height: "100%",
      width: 200,
    },
  },
  link: {
    fontSize: 14,
    color: "white",
    "&:hover": {
      textDecoration: "unset",
    },
  },
  copyrights: {
    direction: "rtl",
    color: "white",
    fontSize: 12,
    opacity: 0.8,
    textAlign: "center",
  },
};
