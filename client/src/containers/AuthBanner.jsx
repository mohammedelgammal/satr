import { Stack, Typography } from "@mui/material";
import PlatformBadge from "../components/PaltformBadge";
import { platformBadges } from "./utils/PlatformBadges";
import background from "../assets/imgs/safcsp-logo@2x.png";
import { styles } from "../assets/styles/mui/containers/AuthBanner";

const AuthBanner = () => {
  return (
    <>
      <img id="background" src={background} alt="background" />
      <Stack spacing={4} sx={styles.bannerContent}>
        <Stack spacing={1}>
          <Typography sx={styles.bannerTitle} component={"h1"}>
            <span>الدخول&nbsp;</span>
            الموحد
          </Typography>
          <Typography sx={styles.paragraph}>
            لمنصات الاتحاد السعودي للامن السيبراني والبرمجة والدرونز
          </Typography>
        </Stack>
        <Stack sx={styles.badges} spacing={2} direction="row">
          {platformBadges.map(({ src, alt }, index) => (
            <PlatformBadge key={index} src={src} alt={alt} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default AuthBanner;
