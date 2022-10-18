import { Box, Stack, Typography } from "@mui/material";
import { styles } from "../assets/styles/mui/containers/Stats";

const Stats = () => {
  const stats = [
    { num: 1909, text: "مقطع فيديو" },
    { num: 37, text: "مشروع تطبيقي" },
    { num: 277, text: "سؤال اختبار" },
    { num: 234, text: "مقال" },
  ];
  return (
    <Box sx={styles.container}>
      <Stack sx={styles.statsStack} direction="row">
        {stats.map((el, index) => (
          <Stack spacing={2} key={index} sx={styles.statsBox}>
            <Typography sx={styles.num}>{el.num}</Typography>
            <Typography sx={styles.txt}>{el.text}</Typography>
            <Box />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Stats;
