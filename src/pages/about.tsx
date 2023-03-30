import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { FC, ReactElement } from 'react';
import React from 'react';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="code">
        {/* Ir a <a href="/">Index</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <div className="center">
        <Image className="logo" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
        <div className="thirteen">
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className="grid"></div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
