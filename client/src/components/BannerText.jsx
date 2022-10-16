import { Box, Stack, Typography, Button } from "@mui/material";
import { styles } from "../assets/styles/mui/components/BannerText";

const BannerText = () => {
  return (
    <Box sx={styles.box}>
      <Stack spacing={2} sx={styles.stack}>
        <Typography sx={styles.title} component={"h1"}>
          تعلم البرمجة
        </Typography>
        <Typography sx={styles.subTitle} component={"h2"}>
          وابدأ بصناعة حلول لمشاكل العالم
        </Typography>
        <Box>
          <Typography sx={styles.paragraph} component={"h2"}>
            توفر لك منصة سطر التعليمية محتوى متنوع ومتكامل يساعدك في تعلم
            البرمجة بكل سهولة ومتعة
          </Typography>
        </Box>
        <Box>
          <Button disableElevation variant="contained" sx={styles.registerBtn}>
            سجل وابدأ التعلم
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default BannerText;
