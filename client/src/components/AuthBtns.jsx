import { Stack, Button } from "@mui/material";

const AuthBtns = () => {
  return (
    <Stack direction={"row"} spacing={1}>
      <Button variant="outlined">تسجيل الدخول</Button>
      <Button disableElevation variant="contained">
        إنشاء الحساب
      </Button>
    </Stack>
  );
};

export default AuthBtns;
