import ReactGa from 'react-ga';

export const trackClick = (action, label) => {
  ReactGa.event({
    category: "Quick Quote Button",
    action: action,
    label: label
  });
};