import { Stack, ThemeProvider } from "@mui/material";
import theme from "../assets/styles/mui/theme";
import { Outlet } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Header />
        <Outlet />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
