import { Stack, Box, Typography, Link } from "@mui/material";
import { styles } from "../assets/styles/mui/components/Content";

const Content = ({ src, alt, title, body, to }) => {
  return (
    <Link sx={styles.link} href={`/${to}`}>
      <Stack sx={styles.contentBox}>
        <Box sx={styles.badge}>
          <img src={src} alt={alt} />
        </Box>
        <Stack>
          <Typography sx={styles.title}>{title}</Typography>
          <Typography sx={styles.body}>{body}</Typography>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Content;
