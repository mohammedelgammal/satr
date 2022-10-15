export const navBtns = [
  {
    id: "telegram-btn",
    title: "Telegram",
    props: { disabled: false, badge: false, color: "primary", menu: null },
  },
  {
    id: "spaces-btn",
    title: "المساحات",
    props: { disabled: false, badge: "جديد", color: "error", menu: null },
  },
  {
    id: "read-cont-btn",
    title: "المحتوي المقروء",
    props: { disabled: true, badge: "قريباً", color: "warning", menu: null },
  },
  {
    id: "plat-btn",
    title: "منصاتنا",
    props: {
      disabled: false,
      badge: false,
      color: "primary",
      menu: {
        title: "platforms",
        menuElements: [
          { title: "منصة كودر هب", href: "https://coderhub.sa/" },
          {
            title: "منصة المبادرات والمعسكرات",
            href: "https://bootcamp.sa/",
          },
        ],
      },
    },
  },
  {
    id: "edu-cont-btn",
    title: "المحتوي التعليمي",
    props: {
      disabled: false,
      badge: false,
      color: "primary",
      menu: {
        title: "edu-content",
        menuElements: [
          { title: "المسارات", href: "/list/paths" },
          { title: "الدورات", href: "/list/courses" },
          { title: "المشاريع التطبيقية", href: "/list/how-to" },
        ],
      },
    },
  },
];
