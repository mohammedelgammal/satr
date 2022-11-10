import { Stack, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const AuthBtns = () => {
  return (
    <Stack direction={"row"} spacing={1}>
      <Button LinkComponent={RouterLink} to={"/login"} variant="outlined">
        تسجيل الدخول
      </Button>
      <Button
        LinkComponent={RouterLink}
        to={"/register"}
        disableElevation
        variant="contained"
      >
        إنشاء الحساب
      </Button>
    </Stack>
  );
};

export default AuthBtns;
