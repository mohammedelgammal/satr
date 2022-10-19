import { Box, Stack, Typography } from "@mui/material";
import { styles } from "../assets/styles/mui/components/Advantage";

const Advantage = ({ src, alt, title, body }) => {
  return (
    <Box sx={styles.container}>
      <Stack sx={styles.stack} spacing={2}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.body}>{body}</Typography>
      </Stack>
      <img src={src} alt={alt} />
    </Box>
  );
};

export default Advantage;
