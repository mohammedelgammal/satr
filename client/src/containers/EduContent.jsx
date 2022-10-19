import { Stack, Typography } from "@mui/material";
import { styles } from "../assets/styles/mui/containers/EduContent";
import Content from "../components/Content";
import { content } from "./utils/EduContent";

const EduContent = () => {
  return (
    <Stack sx={styles.container} spacing={13}>
      <Typography sx={styles.title}>أنواع المحتوى التعليمي</Typography>
      <Stack direction="row" spacing={7} sx={styles.eduContent}>
        {content.map(({ src, alt, title, body, to }, index) => (
          <Content
            key={index}
            src={src}
            alt={alt}
            title={title}
            body={body}
            to={to}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default EduContent;
