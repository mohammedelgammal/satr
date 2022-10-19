export const styles = {
  contentBox: {
    position: "relative",
    width: 350,
    height: 210,
    border: "1px solid #00adbb",
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "right",
    alignItems: "center",
    padding: "0 26px",
    boxShadow: "0px 10px 14px rgba(5, 44, 75, 0.1)",
    transition: "0.3s box-shadow ease",
    "&:hover": {
      boxShadow: "0px 16px 45px rgba(5, 44, 75, 0.1)",
    },
  },
  badge: {
    position: "absolute",
    top: -24,
    right: 30,
    width: 47,
    height: 47,
  },
  title: {
    padding: "10px 0",
    fontSize: 23,
    fontWeight: "bolder",
    marginTop: 4,
  },
  body: {
    padding: "10px 0",
    fontSize: 13,
    lineHeight: 2,
    color: "#949699",
    fontWeight: "bold",
  },
  link: { all: "unset", cursor: "pointer" },
};
