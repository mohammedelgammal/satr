import { Grid } from "@mui/material";
import AuthBanner from "./AuthBanner";
import RegisterForm from "../containers/RegisterForm";
import { styles } from "../assets/styles/mui/containers/Register";

const Register = () => {
  return (
    <Grid container sx={styles.container}>
      <Grid item sx={styles.formContainer}>
        <RegisterForm />
      </Grid>
      <Grid item sx={styles.banner} alignContent="center">
        <AuthBanner />
      </Grid>
    </Grid>
  );
};

export default Register;
