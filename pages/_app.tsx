import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import Wrapper from "./components/Wrapper/index";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("got pageProps.session", pageProps.session);

  console.log("got pageProps", pageProps);

  return (
    <SessionProvider session={pageProps.session}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </SessionProvider>
  );
}

export default MyApp;
