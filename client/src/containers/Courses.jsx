import { Box, Stack, Typography } from "@mui/material";
import { coursesLinks } from "./utils/BreadCrumbLinks";
import BreadCrumb from "../components/BreadCrumb";
import SearchBox from "../components/SearchBox";
import Course from "../components/Course";
import { styles } from "../assets/styles/mui/containers/Paths";

const Courses = () => {
  return (
    <Box sx={styles.container}>
      <Stack sx={styles.stack} spacing={2}>
        <Box sx={styles.breadcrumb}>
          <BreadCrumb links={coursesLinks} />
        </Box>
        <Typography sx={styles.title} component={"h1"}>
          دورات
        </Typography>
        <SearchBox />
        <Box sx={styles.divider} />
        <Stack sx={styles.paths} direction="row">
          <Course />
        </Stack>
        <Box sx={styles.divider} />
      </Stack>
    </Box>
  );
};

export default Courses;
