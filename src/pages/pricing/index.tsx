import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import * as React from 'react';

import { MainLayout } from '../../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Pricing() {
  return (
    <>
      <MainLayout>
        <h1>Pricing Page</h1>
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
      </MainLayout>
    </>
  );
}
