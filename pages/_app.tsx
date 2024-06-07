import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>판다마켓</title>
        <meta name="description" content="일상의 모든 물건을 거래해보세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}
