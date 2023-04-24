import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.scss";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import Router from "next/router";
import Loader from "../components/Loader/Loader";
// import PageLoader from "../components/PageLoader"

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
  };
  const end = () => {
    setLoading(false);
  };
  useEffect(() => {
    // Used for page transition

    Router.events.on("routeChangeStart", start);
    // Router.events.on("routeChangeComplete", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      // Router.events.off("routeChangeComplete", end);
    };
  }, []);

  return loading ? <Loader end={end} /> : <Component {...pageProps} />;
};
export default App;
