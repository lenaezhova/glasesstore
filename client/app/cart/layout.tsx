import {Metadata} from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Description Next Template',
  icons: {
    icon: '/favicon.png'
  }
};

export default function CartLayout({ children }: { children: ReactNode; }) {

  return (
    <div className={'main'}>
      <h1 className={'textHeader'}>{'Корзина'.toUpperCase()}</h1>
      <div className='container'>
        { children }
      </div>
    </div>
  );
}
