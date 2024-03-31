import {Metadata} from 'next';
import SubscribeEmailBanner from '@/src/components/UI/SubscribeEmailBanner/SubscribeEmailBanner';
import React from 'react';

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Description Next Template',
  icons: {
    icon: '/favicon.png'
  }
};

export default function CatalogLayout({ children } : { children: React.ReactNode; }) {

  return (
    <div className={'main'}>
      <div className={'container'}>
        { children }
      </div>
      {/* <SubscribeEmailBanner /> */}
    </div>
  );
}
