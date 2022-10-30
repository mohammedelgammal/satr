import { Stack, Box, Typography, Link } from "@mui/material";
import wave from "../assets/imgs/wave.svg";
import logo from "../assets/imgs/code.png";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { styles } from "../assets/styles/mui/components/Path";

const Path = () => {
  return (
    <Link component={RouterLink} to="/paths/id" sx={styles.overlayLink}>
      <Stack sx={styles.stack}>
        <Box sx={styles.top} elevation={2}>
          <Box sx={styles.logo}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={styles.wave}>
            <img src={wave} alt="wave" />
          </Box>
        </Box>
        <Stack sx={styles.info} spacing={3}>
          <Stack sx={styles.typography} spacing={2}>
            <Typography sx={styles.title}>تطوير تطبيقات Flutter</Typography>
            <Typography sx={styles.description}>
              سنتعرف في المسار على طريقة بناء تطبيقات الموبايل والويب باستخدام
              Flutter، حيث تبدأ رحلتك بتعلم لغة Dart ثم تنتقل لتعلم مبادئ
              وأساسيات بناء التطبيق...
            </Typography>
          </Stack>
          <Stack direction="row" sx={styles.details}>
            <Stack sx={styles.stats} direction="row">
              <AiOutlineClockCircle />
              <span>مبتدئ</span>
            </Stack>
            <Stack sx={styles.stats} direction="row">
              <AiOutlineClockCircle />
              <span>28 ساعة</span>
            </Stack>
            <Stack sx={styles.stats} direction="row">
              <AiOutlineClockCircle />
              <span>11 دورات</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Path;
