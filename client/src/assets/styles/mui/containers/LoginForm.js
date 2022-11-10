import { centerFlex } from "./Login";

export const styles = {
  formContainer: {
    ...centerFlex,
  },
  formStack: {
    alignItems: "center",
    width: 490,
    height: 630,
    img: {
      width: 75,
    },
  },
  form: {
    width: 409,
    height: 469,
    borderRadius: 4,
    border: "rgba(229, 231, 235, 1)",
    boxShadow:
      "0px 20px 27px rgb(35 93 99 / 8%), 0px -1px 3px rgb(35 93 99 / 12%)",
    padding: "28px 32px",
    marginTop: "48px",
  },
  logo: {
    ...centerFlex,
    width: "100%",
    img: {
      height: "75px",
      width: "90px",
    },
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bolder",
    color: "#009fae",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 1,
  },
  input: {
    position: "relative",
    height: "48px",
    input: {
      width: "100%",
      height: "100%",
      padding: "12px 60px 12px 20px",
      borderRadius: 2,
      border: "1px solid lightgray",
      "&:focus": {
        outline: "unset",
      },
    },
    svg: {
      position: "absolute",
      top: "50%",
      transform: "translate(-19px ,-50%)",
      fontSize: 14,
      color: "#009fae",
    },
  },
  helpers: {
    justifyContent: "space-between",
    marginTop: "5px !important",
  },
  rememberme: {
    ...centerFlex,
    label: {
      marginRight: 1,
      fontSize: 15,
    },
  },
  customCheck: {
    ...centerFlex,
    position: "relative",
    top: "2px",
    width: 16,
    height: 16,
    input: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 2,
      opacity: 0,
      cursor: "pointer",
      "&:checked ~ div": {
        backgroundColor: "#009fae",
        border: "unset",
      },
    },
    div: {
      ...centerFlex,
      width: "16px",
      height: "16px",
      backgroundColor: "white",
      border: "1px solid lightgray",
      borderRadius: "5px",
      img: {
        width: "10px",
        height: "10px",
        position: "absolute",
        opacity: 1,
      },
    },
  },
  forgotPassword: {
    textDecoration: "unset",
    fontSize: 15,
    color: "#009fae",
  },
  submit: {
    height: 56,
    paddingBottom: "8px",
    backgroundColor: "#009fae",
    boxShadow: "unset",
    "&:hover": {
      backgroundColor: "#009fae",
      boxShadow: "unset",
    },
  },
  register: {
    textAlign: "center",
    marginTop: "10px !important",
    fontWeight: "bold",
  },
};
