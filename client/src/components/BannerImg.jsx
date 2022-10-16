import { Box } from "@mui/system";
import hero from "../assets/imgs/hero.svg";
import { styles } from "../assets/styles/mui/components/BannerImg";

const BannerImg = () => {
  return (
    <Box sx={styles.box}>
      <img src={hero} alt="Banner" />
    </Box>
  );
};

export default BannerImg;
