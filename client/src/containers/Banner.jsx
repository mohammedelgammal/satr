import { Grid } from "@mui/material";
import BannerText from "../components/BannerText";
import BannerImage from "../components/BannerImg";

const Banner = () => {
  return (
    <Grid container direction="row" justifyContent="center" width="1800px">
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
