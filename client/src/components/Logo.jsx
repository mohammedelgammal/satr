import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/imgs/logo.svg";
import { styles } from "../assets/styles/mui/components/Logo";

const Logo = () => {
  return (
    <Box>
      <Link component={RouterLink} to="/" sx={styles.noSelect}>
        <img sx={styles.logoImage} src={logo} alt="satr-logo" />
      </Link>
    </Box>
  );
};

export default Logo;
