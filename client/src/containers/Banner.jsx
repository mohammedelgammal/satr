import { Grid } from "@mui/material";
import BannerText from "../components/BannerText";
import BannerImage from "../components/BannerImg";
import { styles } from "../assets/styles/mui/containers/Banner";

const Banner = () => {
  return (
    <Grid container direction="row" sx={styles.banner}>
      <Grid xs={6} md={6} item>
        <BannerImage />
      </Grid>
      <Grid xs={6} md={6} item>
        <BannerText />
      </Grid>
    </Grid>
  );
};

export default Banner;
