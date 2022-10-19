import { Typography, Stack } from "@mui/material";
import { styles } from "../assets/styles/mui/containers/Advantages";
import Advantage from "./../components/Advantage";
import { advantages } from "./utils/Advantages";

const Advantages = () => {
  return (
    <Stack sx={styles.container} spacing={15}>
      <Typography sx={styles.title}>أهم المميزات</Typography>
      <Stack direction="row" spacing={13} sx={styles.advantages}>
        {advantages.map(({ src, alt, title, body }, index) => (
          <Advantage
            key={index}
            src={src}
            alt={alt}
            title={title}
            body={body}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Advantages;
