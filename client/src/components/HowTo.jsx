import { Box, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/imgs/how.svg";
import { styles } from "../assets/styles/mui/components/HowTo";
import { styles as courseStyling } from "../assets/styles/mui/components/Course";

const HowTo = () => {
  return (
    <Link
      component={RouterLink}
      to="/courses/id/how-to-view"
      sx={courseStyling.overlayLink}
    >
      <Stack sx={{ ...courseStyling.container, padding: "10px 20px" }}>
        <Stack spacing={2}>
          <Stack direction="row" sx={styles.stack}>
            <img src={logo} alt="howto" />
            <Typography sx={styles.title}>
              الشبكات مع Node.js: وضع حد أ...
            </Typography>
          </Stack>
          <Typography sx={courseStyling.description}>
            في هذا المشروع ستتعلم كيفية وضع حد أعلى للاتصالات على الخادم
            باستخدام خاصية maxConections.
          </Typography>
          <Stack direction="row">
            <Box sx={styles.keyword}>Network</Box>
            <Box sx={styles.keyword}>Node.js</Box>
            <Box sx={styles.keyword}>JavaScript</Box>
          </Stack>
        </Stack>
      </Stack>
      ;
    </Link>
  );
};

export default HowTo;
