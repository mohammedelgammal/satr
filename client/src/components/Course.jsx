import { Stack, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import cmd from "../assets/imgs/cmd.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { styles } from "../assets/styles/mui/components/Course";

const Course = () => {
  return (
    <Link component={RouterLink} to="/courses/id" sx={styles.overlayLink}>
      <Stack sx={styles.container} spacing={2}>
        <Stack sx={styles.top} direction="row">
          <img src={cmd} alt="logo" />
          <Typography sx={styles.title}>Command-line 106</Typography>
        </Stack>
        <Typography sx={styles.description}>
          تعرف في هذه الدورة على الأدوات المتقدمة في Command-line والتي تساعد
          على البحث عن الملفات وطريقة الوصول لها بشكل أسرع ...
        </Typography>
        <Stack direction="row" sx={styles.details}>
          <Stack sx={styles.stats} direction="row">
            <AiOutlineClockCircle />
            <span>مبتدئ</span>
          </Stack>
          <Stack sx={styles.stats} direction="row">
            <AiOutlineClockCircle />
            <span>4 ساعة</span>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Course;
