import { Stack, Typography, Box } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import { pathsLinks } from "./utils/BreadCrumbLinks";
import Path from "../components/Path";
import SearchBox from "../components/SearchBox";
import { styles } from "../assets/styles/mui/containers/Paths";

const Paths = () => {
  return (
    <Box sx={styles.container}>
      <Stack sx={styles.stack} spacing={2}>
        <Box sx={styles.breadcrumb}>
          <BreadCrumb links={pathsLinks} />
        </Box>
        <Typography sx={styles.title} component={"h1"}>
          مسارات تعليمية
        </Typography>
        <SearchBox />
        <Box sx={styles.divider} />
        <Stack sx={styles.paths} direction="row">
          <Path />
        </Stack>
        <Box sx={styles.divider} />
      </Stack>
    </Box>
  );
};

export default Paths;
