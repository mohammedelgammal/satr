import { Box, Stack, Typography } from "@mui/material";
import { styles } from "../assets/styles/mui/containers/Stats";
import { stats } from "./utils/Stats";

const Stats = () => {
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
