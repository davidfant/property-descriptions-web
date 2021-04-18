import React, { useEffect, useState } from "react";
import getConfig from "next/config";
import { NextComponentType } from "next";
import { AppProps, AppInitialProps } from "next/app";
import { Loader } from "@googlemaps/js-api-loader";
import "../styles/index.scss";

const App: NextComponentType<any, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const loader = new Loader({
      apiKey: getConfig().publicRuntimeConfig?.GOOGLE_MAPS_API_KEY,
      libraries: ["places"],
    });
    loader.load().then(() => setLoaded(true));
  }, []);

  if (!loaded) return null;
  return <Component {...pageProps} />;
};

App.getInitialProps = async () => {
  return { pageProps: {} };
};

export default App;
