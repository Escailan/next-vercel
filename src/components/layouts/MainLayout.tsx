import Head from 'next/head';
import React, { FC, ReactElement } from 'react';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';

interface Props {
  children: ReactElement | ReactElement[];
  title?: string;
}

export const MainLayout: FC<Props> = ({ title, children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
