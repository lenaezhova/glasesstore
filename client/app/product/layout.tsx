import {Metadata} from 'next';
import React from 'react';
import SubscribeEmailBanner from '@/src/components/UI/SubscribeEmailBanner/SubscribeEmailBanner';

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Description Next Template',
  icons: {
    icon: '/favicon.png'
  }
};

export default function ProductLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={'main'}>
      <div className='container'>{children}</div>
      {/* <SubscribeEmailBanner /> */}
    </div>
  );
}
