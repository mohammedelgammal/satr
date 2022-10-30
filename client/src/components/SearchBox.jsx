import { Stack, Box } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { styles } from "../assets/styles/mui/components/SearchBox";

const SearchBox = () => {
  return (
    <Stack direction="row" sx={styles.searchBox}>
      <Box sx={styles.searchIcon}>
        <FaSearch />
      </Box>
      <input type="text" placeholder="ابحث هنا..." />
    </Stack>
  );
};

export default SearchBox;
