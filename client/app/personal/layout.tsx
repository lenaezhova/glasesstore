import {Metadata} from 'next';
import PersonalSider from '@/modules/personal/components/PersonalSlider/PersonalSider';
import s from '@/src/styles/personal/personal.module.scss';
import React from 'react';
import Authorized from '@/modules/Authorized';
import clsx from 'clsx';
export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Description Next Template',
  icons: {
    icon: '/favicon.png'
  }
};

export default function PersonalLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={clsx(s.layout, 'container')} style={{
      marginTop: 120
    }}>
      <Authorized>
        <PersonalSider />
        {children}
      </Authorized>
    </div>
  );
}
