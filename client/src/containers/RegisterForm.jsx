import { Grid, Stack, Box, Typography } from "@mui/material";
import { styles as LoginFormStyles } from "../assets/styles/mui/containers/LoginForm";
import logo from "../assets/imgs/safcsp-brand.svg";

const RegisterForm = () => {
  return (
    <Grid item md={8} sx={LoginFormStyles.formContainer}>
      <Stack sx={LoginFormStyles.formStack}>
        <Box sx={LoginFormStyles.logo}>
          <img src={logo} alt="safcsp" />
        </Box>
        <Stack sx={LoginFormStyles.form} spacing={2}>
          <Stack spacing={3}>
            <Typography sx={LoginFormStyles.title}>تسجيل جديد</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default RegisterForm;
