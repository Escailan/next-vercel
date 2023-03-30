import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';
import React from 'react';

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
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
  );
}
