export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: -78,
    height: 172,
    width: 800,
    backgroundColor: "white",
    border: "1px solid rgba(0, 108, 116, 0.20)",
    borderRadius: 7,
  },
  num: {
    fontSize: 24,
    fontWeight: "bolder",
    zIndex: 1,
    "&::after": {
      content: "''",
      width: "40%",
      height: 15,
      borderRadius: 10,
      position: "absolute",
      top: 23,
      right: 0,
      left: 0,
      marginX: "auto",
      backgroundColor: "#deeefa",

      zIndex: -1,
    },
  },
  txt: {
    fontSize: 17,
  },
  statsStack: {
    padding: "0 15px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 92,
  },
  statsBox: {
    width: 165,
    position: "relative",
    textAlign: "center",
  },
};
