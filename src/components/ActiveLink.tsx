import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }: Props) => {
  const router = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={router.pathname === href ? style : undefined}>{text}</a>
    </Link>
  );
};
