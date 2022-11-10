import {
  Stack,
  Box,
  FormControl,
  Link,
  Button,
  Typography,
} from "@mui/material";
import { FiUser, FiLock } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/imgs/safcsp-brand.svg";
import checkmark from "../assets/imgs/check-icon.svg";
import { styles } from "../assets/styles/mui/containers/LoginForm";

const LoginForm = () => {
  return (
    <Stack sx={styles.formStack}>
      <Box sx={styles.logo}>
        <img src={logo} alt="safcsp" />
      </Box>
      <Stack sx={styles.form} spacing={2}>
        <Stack spacing={3}>
          <Typography sx={styles.title}>تسجيل الدخول</Typography>
          <FormControl>
            <Typography sx={styles.label}>
              اسم المستخدم أو البريد الإلكتروني
            </Typography>
            <Box sx={styles.input}>
              <FiUser />
              <input type="text" />
            </Box>
          </FormControl>
          <FormControl>
            <Typography sx={styles.label}>كلمة المرور</Typography>
            <Box sx={styles.input}>
              <FiLock />
              <input type="password" />
            </Box>
          </FormControl>
          <Stack sx={styles.helpers} direction="row">
            <Stack sx={styles.rememberme} direction="row">
              <Box sx={styles.customCheck}>
                <input id="rememberme" type="checkbox" />
                <Box>
                  <img src={checkmark} alt="checkmark" />
                </Box>
              </Box>
              <label htmlFor="rememberme">تذكرني</label>
            </Stack>
            <Box>
              <Link
                component={RouterLink}
                to="/reset"
                sx={styles.forgotPassword}
              >
                نسيت كلمة المرور؟
              </Link>
            </Box>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            sx={styles.submit}
            elevation={0}
          >
            دخول
          </Button>
          <Typography sx={styles.register}>
            ليس لديك حساب؟&nbsp;
            <Link
              sx={styles.forgotPassword}
              component={RouterLink}
              to="registerPerson"
            >
              إنشاء حساب
              <br />
            </Link>
            &nbsp;أو&nbsp;
            <Link
              sx={styles.forgotPassword}
              component={RouterLink}
              to="registerEstablishment"
            >
              إنشاء حساب كجهة
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
