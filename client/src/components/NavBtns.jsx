import { Button, Badge } from "@mui/material";
import { navBtns } from "./utils/navBtns";
import { styles } from "../assets/styles/mui/components/NavBtns";

const NavBtns = () => {
  return (
    <>
      {navBtns.map(({ id, title, props }, index) => (
        <Button
          key={index}
          id={id}
          sx={{ textTransform: "none" }}
          variant="ghost"
          disabled={props.disabled}
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
    </>
  );
};

export default NavBtns;
