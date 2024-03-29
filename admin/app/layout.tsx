import localFont from 'next/font/local';
import '@/src/styles/global.scss';
import '@/src/styles/common.scss';
import '@/src/styles/libs.scss'
import {Metadata} from 'next';
import React from 'react';
import ClientProvider from '@/modules/ClientProdider';
import Header from "@/src/components/Header/Header";
import AuthProvider from '@/modules/AuthProvider';

const Gilroy = localFont({
  src: [
    {
      path: './../public/fonts/gilroy-300.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './../public/fonts/gilroy-400.woff',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--gilroy-font'
});

const Montserrat = localFont({
  src: [
    {
      path: './../public/fonts/montserrat-400.woff',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--montserrat-font'
});

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Description Next Template',
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      suppressHydrationWarning
      lang='ru'
      className={`${Gilroy.variable} ${Montserrat.variable}`}
    >
      <body>
        <main className='main'>
          <ClientProvider>
            <AuthProvider>
              <Header/>
              <div className='container'>
                {children}
              </div>
            </AuthProvider>
          </ClientProvider>
        </main>
      </body>
    </html>
  );
}
