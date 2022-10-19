import { Typography, Stack } from "@mui/material";
import { styles } from "../assets/styles/mui/containers/Advantages";
import Advantage from "./../components/Advantage";

const Advantages = () => {
  const advantages = [
    {
      src: module.require("../assets/imgs/feature-tech.svg").default,
      alt: "feature-tech",
      title: "تعلّم أحدث التقنيات",
      body: "تقدم محتوى متجدد وفقًا لأحدث التقنيات المطلوبة في سوق العمل.",
    },
    {
      src: module.require("../assets/imgs/feature-content.svg").default,
      alt: "feature-content",
      title: "محتوى تعليمي متنوع",
      body: "تقدم محتوى متنوع ومتكامل يخدم مختلف الفئات والمجالات.",
    },
    {
      src: module.require("../assets/imgs/feature-easy.svg").default,
      alt: "feature-easy",
      title: "تعلّم سهل وممتع",
      body: "تقدم محتوى تعليمي بشكل بسيط وممتع وبجودة عالية.",
    },
  ];
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
