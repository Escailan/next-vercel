import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React from 'react';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

type NextPageWithLayouts = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayouts;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  // return <Component {...pageProps} />;
  return getLayout(<Component {...pageProps} />);
}

//viendo 3-8
//github2 carimentruA1
