'use client';

import React from 'react';
import AntdThemeProvider from '@/modules/AntdThemeProvider';
import {ThemeProvider} from 'next-themes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function ClientProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/*<ThemeProvider>*/}
        <AntdThemeProvider>
          {children}
        </AntdThemeProvider>
      {/*</ThemeProvider>*/}
    </QueryClientProvider>
  );
}
