import { Link, Typography } from "@mui/material";
import BreadCrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "../assets/styles/mui/components/BreadCrumb";

const BreadCrumb = ({ links }) => {
  return (
    <BreadCrumbs separator={" >> "}>
      {links.map(({ title, to, disabled }, index) =>
        !disabled ? (
          <Link key={index} component={RouterLink} to={to} sx={styles.link}>
            {title}
          </Link>
        ) : (
          <Typography key={index} sx={styles.typography}>
            {title}
          </Typography>
        )
      )}
    </BreadCrumbs>
  );
};

export default BreadCrumb;
