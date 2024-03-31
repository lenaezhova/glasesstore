import {Metadata} from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Description Next Template',
  icons: {
    icon: '/favicon.png'
  }
};

export default function FavoritesLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={'main'}>
      <div className={'container'}>
        <h1 className={'textHeader'}>{'Избранное'.toUpperCase()}</h1>
        {children}
      </div>
    </div>
  );
}
