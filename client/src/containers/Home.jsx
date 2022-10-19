import { Stack } from "@mui/material";
import Banner from "../containers/Banner";
import StatsBanner from "./StatsBanner";
import { styles } from "../assets/styles/mui/containers/Home";
import Advantages from "./Advantages";
import EduContent from "./EduContent";

const Home = () => (
  <Stack sx={styles.home} spacing={4}>
    <Banner />
    <StatsBanner />
    <Advantages />
    <EduContent />
  </Stack>
);
export default Home;
