import {Metadata} from 'next';
import React, { ReactNode } from 'react';

export default function CartLayout({ children }: { children: ReactNode; }) {

  return (
    <div className={'main'}>
      <div className='container'>
        <h1 className={'textHeader'}>{'Корзина'.toUpperCase()}</h1>
        {children}
      </div>
    </div>
  );
}
