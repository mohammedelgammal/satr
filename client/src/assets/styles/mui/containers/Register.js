import { centerFlex } from "./Login";
import { styles as authStyles } from "./AuthBanner";

const { banner: authBanner } = authStyles;

export const styles = {
  container: {
    display: "grid",
    direction: "rtl",
    width: "100vw",
    height: "100vh",
    gridTemplateColumns: "6.85fr 4.5fr",
    gridTemplateRows: "auto",
  },
  formContainer: {
    ...centerFlex,
  },
  banner: {
    ...authBanner,
    paddingRight: 10,
  },
};
