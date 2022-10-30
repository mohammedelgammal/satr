import { Stack } from "@mui/material";
import Banner from "../containers/Banner";
import StatsBanner from "./StatsBanner";
import Advantages from "./Advantages";
import EduContent from "./EduContent";
import LandingCTA from "../components/LandingCTA";
import { styles } from "../assets/styles/mui/containers/Home";

const Home = () => (
  <Stack sx={styles.home} spacing={4}>
    <Banner />
    <StatsBanner />
    <Advantages />
    <EduContent />
    <LandingCTA />
  </Stack>
);
export default Home;
