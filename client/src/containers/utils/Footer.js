const logos = [
  {
    src: module.require("../../assets/imgs/safcsp-logo-white.svg").default,
    alt: "safcsp-logo",
  },
  {
    src: module.require("../../assets/imgs/stc.svg").default,
    alt: "stc-logo",
  },
  {
    src: module.require("../../assets/imgs/logo-white.svg").default,
    alt: "satr-logo",
  },
];

const links = [
  { title: "تواصل معنا", to: "/contact" },
  { title: "الأسئلة الشائعة", to: "/faq" },
  { title: "الشروط و الاحكام", to: "/terms-and-conditions" },
  { title: "سياسة الخصوصية", to: "/privacy-policy" },
];

export { logos, links };
