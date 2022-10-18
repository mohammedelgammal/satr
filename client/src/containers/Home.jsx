import { Stack } from "@mui/material";
import Banner from "../containers/Banner";
import StatsBanner from "./StatsBanner";
import { styles } from "../assets/styles/mui/containers/Home";

const Home = () => (
  <Stack sx={styles.home}>
    <Banner />
    <StatsBanner />
  </Stack>
);
export default Home;
