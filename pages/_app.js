import { Fragment } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Fragment>
  );
}

export default MyApp;
