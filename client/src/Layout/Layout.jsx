import { Stack, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "../assets/styles/mui/theme";
import Header from "../containers/Header";
import Home from "../containers/Home";
import Footer from "../containers/Footer";
import Paths from "../containers/Paths";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="list/courses" element={<>courses</>} />
            <Route path="courses" element={<>please subscribe first</>} />
            <Route path="list/paths" element={<Paths />} />
            <Route path="list/howto" element={<>howto</>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
