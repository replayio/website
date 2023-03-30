import { AppProps } from "next/app";

import "../styles/globals.css";

export default function NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
