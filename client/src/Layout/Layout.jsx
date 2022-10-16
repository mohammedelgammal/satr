import { Stack, ThemeProvider } from "@mui/material";
import theme from "../assets/styles/mui/theme";
import Header from "../containers/Header";
import Home from "../containers/Home";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Header />
        <Home />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
