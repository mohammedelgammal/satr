export const styles = {
  overlayLink: { all: "unset", cursor: "pointer" },
  container: {
    width: 346,
    height: 230,
    borderRadius: 2,
    backgroundColor: "white",
    justifyContent: "center",
    paddingX: "20px",
    boxShadow: "0px 5px 10px rgba(5, 44, 75, 0.1)",
    transition: "0.4s box-shadow ease",
    "&:hover": {
      boxShadow: "0px 15px 30px rgba(5, 44, 75, 0.1)",
    },
  },
  top: {
    alignItems: "center",
    img: {
      width: 60,
      marginLeft: 2,
    },
  },
  title: {
    fontSize: 24,
    fontWeight: "bolder",
  },
  description: {
    fontSize: 14,
    opacity: 0.5,
    paddingX: 1,
  },
  details: {
    justifyContent: "start",
    alignItems: "center",
  },
  stats: {
    justifyContent: "start",
    alignItems: "center",
    marginLeft: 5,
    svg: {
      marginLeft: "5px",
      transform: "translateY(2px)",
    },
    span: {
      fontSize: 14,
    },
  },
};
