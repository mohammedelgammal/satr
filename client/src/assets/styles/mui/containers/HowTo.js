const centerFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styles = {
  container: {
    direction: "rtl",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  stack: {
    marginTop: 4,
    width: 1720,
  },
  breadcrumb: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: 60,
    paddingRight: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bolder",
  },
  divider: { height: 50, width: "100%" },
  formControl: {
    display: "flex",
    alignItems: "start",
    transform: "translateY(-4px)",
    width: 220,
    height: 40,
    marginRight: 4,
    fontSize: 8,
  },
  label: {
    ...centerFlex,
    span: {
      fontSize: 10,
      opacity: 0.5,
      fontWeight: "bolder",
      zIndex: 2,
      transform: "translateY(6px)",
    },
  },
  nativeSelect: {
    position: "relative",
    width: 220,
    height: 100,
    fontSize: 13,
    marginTop: "5px",
    svg: {
      transform: "translateX(-198px)",
    },
    div: {
      padding: "5px 0px !important",
      "&:focus": {
        backgroundColor: "white",
      },
    },
  },
  menuItem: {
    witdh: 235,
    height: 40,
    fontSize: 13,
  },
};
