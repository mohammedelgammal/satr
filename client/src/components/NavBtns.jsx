import {
  Button,
  Badge,
  Stack,
  Menu,
  MenuItem,
  Divider,
  Link,
} from "@mui/material";
import { navBtns } from "./utils/navBtns";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "../assets/styles/mui/components/NavBtns";

const NavBtns = () => {
  const [anchorPlatEl, setAnchorPlatEl] = useState(null);
  const [anchorEduEl, setAnchorEduEl] = useState(null);
  const platOpen = Boolean(anchorPlatEl);
  const eduOpen = Boolean(anchorEduEl);
  const handleClose = () => {
    setAnchorPlatEl(null);
    setAnchorEduEl(null);
  };

  return (
    <Stack direction={"row"} spacing={3}>
      {navBtns.map(({ id, title, props }, index) => (
        <Button
          key={index}
          id={id}
          sx={styles.button}
          variant="ghost"
          disabled={props.disabled}
          onClick={
            id === "plat-btn"
              ? (e) => setAnchorPlatEl(e.currentTarget)
              : id === "edu-cont-btn"
              ? (e) => setAnchorEduEl(e.currentTarget)
              : null
          }
          startIcon={
            id === "edu-cont-btn" || id === "plat-btn" ? (
              <RiArrowDropDownFill />
            ) : null
          }
        >
          <Badge
            sx={{
              ...styles.badge,
              transform:
                id === "spaces-btn"
                  ? "translate(29px, -20px)"
                  : "translate(16px, -20px)",
            }}
            badgeContent={props.badge}
            invisible={!props.badge}
            color={props.color}
          />
          {title}
        </Button>
      ))}
      <>
        <Menu
          disableScrollLock={true}
          open={platOpen}
          anchorEl={anchorPlatEl}
          onClose={handleClose}
          sx={styles.platMenu}
        >
          <Link sx={{ all: "unset" }} href="https://coderhub.sa/">
            <MenuItem onClick={handleClose}>منصة كودرهب</MenuItem>
          </Link>
          <Divider light />
          <Link sx={{ all: "unset" }} href="https://bootcamp.sa/">
            <MenuItem onClick={handleClose}>منصة المبادرات والمعسكرات</MenuItem>
          </Link>
        </Menu>
        <Menu
          disableScrollLock={true}
          open={eduOpen}
          anchorEl={anchorEduEl}
          onClose={handleClose}
          sx={styles.eduMenu}
          elevation={4}
        >
          <Link sx={{ all: "unset" }} component={RouterLink} to="list/paths">
            <MenuItem onClick={handleClose}>المسارات</MenuItem>
          </Link>
          <Divider light />
          <Link sx={{ all: "unset" }} component={RouterLink} to="list/courses">
            <MenuItem onClick={handleClose}>الدورات</MenuItem>
          </Link>
          <Divider light />
          <Link sx={{ all: "unset" }} component={RouterLink} to="list/howto">
            <MenuItem onClick={handleClose}>المشاريع التطبيقية</MenuItem>
          </Link>
        </Menu>
      </>
    </Stack>
  );
};

export default NavBtns;
