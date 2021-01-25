export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: "-50%",
    y: "150%",
  },
  show: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.5,
      repeatType: "reverse",
    },
  },
  exit: {
    opacity: 0,
    x: "-50%",
    y: "-150%",
    transition: {
      duration: 0.5,
    },
  },
};
