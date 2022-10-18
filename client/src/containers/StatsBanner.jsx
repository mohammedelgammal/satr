import { Stack } from "@mui/material";
import Stats from "./Stats";
import StatsText from "../components/StatsText";
import { styles } from "../assets/styles/mui/containers/StatsBanner";

const StatsBanner = () => {
  return (
    <Stack sx={styles.container}>
      <Stats />
      <StatsText />
    </Stack>
  );
};

export default StatsBanner;
