import ReactGa from 'react-ga';

// export initialize google analytics function
export const initializeGoogleAnalytics = () => {
  ReactGa.initialize(process.env.REACT_APP_GOOGLE_CODE);
}

export const googlePageView = (page) => {
  ReactGa.pageview(`/quick-quote/${page}`);
}