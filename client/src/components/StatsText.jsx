import { Stack, Typography } from "@mui/material";
import { styles } from "../assets/styles/mui/components/StatsText";

const StatsText = () => {
  return (
    <Stack sx={styles.stack} spacing={3}>
      <Typography sx={styles.title}>محتوى تعليمي مجاني وبجودة عالية</Typography>
      <Typography sx={styles.paragraph}>
        ،نفخر بتقديم محتوى عربي تقني عالي الجودة وغير مدفوع بروح سعودية
        <br /> يمكن من خلاله تعلم البرمجة في أهم المجالات التقنية
      </Typography>
    </Stack>
  );
};

export default StatsText;
