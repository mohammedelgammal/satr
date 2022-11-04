import {
  Box,
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import SearchBox from "../components/SearchBox";
import HowToComponent from "../components/HowTo";
import { categories } from "./utils/HowTo.js";
import { howtoLinks } from "./utils/BreadCrumbLinks";
import { styles } from "../assets/styles/mui/containers/HowTo";
import { useState } from "react";

const HowTo = () => {
  const [personName, setPersonName] = useState("");
  const handleChange = (e) => {
    const {
      target: { value: name },
    } = e;
    setPersonName(name);
  };

  return (
    <Box sx={styles.container}>
      <Stack sx={styles.stack} spacing={2}>
        <Box sx={styles.breadcrumb}>
          <BreadCrumb links={howtoLinks} />
        </Box>
        <Typography sx={styles.title} component={"h1"}>
          المشاريع التطبيقية
        </Typography>
        <Stack direction="row">
          <SearchBox />
          <FormControl variant="standard" sx={styles.formControl}>
            <Box sx={styles.label}>
              <span>تصنيف</span>
            </Box>
            <Select
              sx={styles.nativeSelect}
              value={personName}
              onChange={handleChange}
            >
              {categories.map((el, index) => (
                <MenuItem sx={styles.menuItem} key={index} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Box sx={styles.divider} />
        <Stack sx={styles.howto} direction="row">
          <HowToComponent />
        </Stack>
        <Box sx={styles.divider} />
      </Stack>
    </Box>
  );
};

export default HowTo;
