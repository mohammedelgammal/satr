import { Stack, Typography } from "@mui/material";

const StatsItem = ({ num, text }) => {
  return (
    <Stack>
      <Typography>{num}</Typography>
      <Typography>{text}</Typography>
    </Stack>
  );
};

export default StatsItem;
