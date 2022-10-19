import { Stack } from "@mui/material";
import Banner from "../containers/Banner";
import StatsBanner from "./StatsBanner";
import { styles } from "../assets/styles/mui/containers/Home";
import Advantages from "./Advantages";

const Home = () => (
  <Stack sx={styles.home}>
    <Banner />
    <StatsBanner />
    <Advantages />
  </Stack>
);
export default Home;
