import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Stack, Box, Link, Typography, Divider } from "@mui/material";
import { styles } from "../assets/styles/mui/containers/Footer";
import { logos, links } from "./utils/Footer";

const Footer = () => {
  return (
    <Stack sx={styles.container} spacing={5}>
      <Stack sx={styles.logoStack} direction="row">
        {logos.map(({ src, alt }, index) => (
          <Box sx={styles.logoWrapper} key={index}>
            <img src={src} alt={alt} />
          </Box>
        ))}
      </Stack>
      <Stack spacing={2}>
        <Stack direction="row" spacing={1.5}>
          {links.map(({ title, to }, index) => (
            <React.Fragment key={index}>
              <Link component={RouterLink} sx={styles.link} to={to}>
                {title}
              </Link>
              {index !== links.length - 1 && (
                <Divider variant="middle" orientation="vertical" />
              )}
            </React.Fragment>
          ))}
        </Stack>
        <Typography sx={styles.copyrights}>
          جميع الحقوق محفوظة للاتحاد السعودي للأمن السيبراني و البرمجة والدرونز
          2022®
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
