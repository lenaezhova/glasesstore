import {Metadata} from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Description Next Template',
  icons: {
    icon: '/favicon.png'
  }
};

export default function OfertaLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h1>Юридическая информация</h1>
      {children}
    </>
  );
}
