import { Stack, Box, ThemeProvider } from "@mui/material";
import theme from "../assets/styles/mui/theme";
import Header from "../containers/Header";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Stack spacing={2}>
          <Header />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
