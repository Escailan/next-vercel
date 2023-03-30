import Image from 'next/image';
import { Inter } from 'next/font/google';

import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className="code">
        Ir a{' '}
        <Link href="/about" prefetch={false}>
          About
        </Link>
      </h1>

      <div className="center">
        <Image className="logo" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
        <div className="thirteen">
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className="grid"></div>
    </MainLayout>
  );
}
