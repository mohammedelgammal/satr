export const styles = {
  overlayLink: { all: "unset", cursor: "pointer" },
  stack: {
    position: "relative",
    width: 346,
  },
  top: {
    position: "relative",
    width: "100%",
    height: 105,
    borderRadius: "10px 10px 0 0",
    boxShadow: "2px 2px 20px rgba(0, 108, 116, 0.1)",
  },
  logo: {
    img: {
      position: "absolute",
      top: -10,
      left: 10,
      width: 100,
      zIndex: 2,
      userSelect: "none",
    },
  },
  wave: {
    transform: "translateY(60px)",
    img: {
      userSelect: "none",
    },
  },
  info: {
    width: "100%",
    height: 200,
    borderRadius: "0 0 10px 10px",
    zIndex: 2,
    paddingX: "15px",
    color: "white",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
  },
  details: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  stats: {
    width: "100%",
    justifyContent: "start",
    alignItems: "center",
    svg: {
      marginLeft: "5px",
      transform: "translateY(2px)",
    },
    span: {
      fontSize: 13,
    },
  },
};
