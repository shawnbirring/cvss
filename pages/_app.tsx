import Head from "next/head";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Navbar, Footer } from "@/components";

export default function RootLayout(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>cvss</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  );
}
