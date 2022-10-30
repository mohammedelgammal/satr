export const styles = {
  searchBox: {
    position: "relative",
    input: {
      width: 830,
      height: 55,
      paddingRight: "45px",
      backgroundColor: "#e8eaed",
      opacity: 0.5,
      borderRadius: 2,
      border: "unset",
      transition: "0.4s all ease",
      "&:focus": {
        outline: "unset",
        backgroundColor: "white",
        boxShadow: "0px 5px 20px rgba(5, 44, 75, 0.25)",
        "&::placeholder": {
          color: "black",
        },
      },
    },
  },
  searchIcon: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "45px",
    zIndex: 2,
    cursor: "pointer",
    svg: {
      fontSize: 18,
      color: "#c4c6c9",
      transition: "0.4s all ease",
    },
    "&:hover": {
      svg: {
        color: "gray",
      },
    },
  },
};
