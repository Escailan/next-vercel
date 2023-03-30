import React, { FC } from 'react';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

export const DarkLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '5px',
      }}>
      {children}
    </div>
  );
};
