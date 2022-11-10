import { Box } from "@mui/material";
import { styles } from "../assets/styles/mui/components/PlatformBadge";

const PlatformBadge = ({ src, alt }) => {
  return (
    <Box sx={styles.badge}>
      <img src={src} alt={alt} />
    </Box>
  );
};

export default PlatformBadge;
