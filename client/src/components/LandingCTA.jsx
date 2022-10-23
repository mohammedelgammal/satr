import { Stack, Box, Typography, Button } from "@mui/material";
import { styles } from "../assets/styles/mui/components/LandingCTA";
import { IoIosArrowBack } from "react-icons/io";
import img from "../assets/imgs/calltoaction.svg";

const LandingCTA = () => {
  return (
    <Box style={styles.container}>
      <Stack direction="row" sx={styles.box}>
        <Box sx={styles.ctaImg}>
          <img src={img} alt="calltoaction" srcset="" />
        </Box>
        <Stack sx={styles.ctaText} spacing={4}>
          <Typography sx={styles.title}>
            يمكنك البدء بتصفح كامل المحتوى التعليمي
          </Typography>
          <Button
            sx={styles.btn}
            variant="contained"
            startIcon={<IoIosArrowBack />}
          >
            الانتقال للمحتوى التعليمي
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LandingCTA;
