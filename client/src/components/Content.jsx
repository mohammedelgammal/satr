import { Stack, Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "../assets/styles/mui/components/Content";

const Content = ({ src, alt, title, body, to }) => {
  return (
    <Link component={RouterLink} sx={styles.link} to={`/${to}`}>
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
