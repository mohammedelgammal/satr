import { Grid } from "@mui/material";
import LoginForm from "./LoginForm";
import AuthBanner from "./AuthBanner";
import { styles } from "../assets/styles/mui/containers/Login";
import { styles as formStyles } from "../assets/styles/mui/containers/LoginForm";
import { styles as bannerStyles } from "../assets/styles/mui/containers/AuthBanner";

const Login = () => {
  return (
    <Grid container sx={styles.container}>
      <Grid item sx={formStyles.formContainer}>
        <LoginForm />
      </Grid>
      <Grid item sx={bannerStyles.banner} alignContent="center">
        <AuthBanner />
      </Grid>
    </Grid>
  );
};

export default Login;
