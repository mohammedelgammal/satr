import { Stack } from "@mui/material";
import Banner from "../containers/Banner";
import { styles } from "../assets/styles/mui/containers/Home";

const Home = () => (
  <Stack sx={styles.home}>
    <Banner />
  </Stack>
);
export default Home;
