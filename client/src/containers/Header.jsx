import { AppBar, Toolbar, Grid, Box, Stack } from "@mui/material";
import { styles } from "../assets/styles/mui/containers/Header";
import AuthBtns from "./../components/AuthBtns";
import Logo from "./../components/Logo";
import NavBtns from "./../components/NavBtns";

const Header = () => {
  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolBar}>
        <Grid container spacing={0} sx={styles.gridContainer}>
          <AuthBtns />
          <Box xs={4} />
          <Stack direction={"row"} spacing={6}>
            <Stack direction={"row"} spacing={3} color={"black"}>
              <Box>
                <NavBtns />
                <Box>{/* menus */}</Box>
              </Box>
            </Stack>
            <Logo />
          </Stack>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
