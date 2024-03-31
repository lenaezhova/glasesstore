'use client';
import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

export const IconSearch = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask id='path-1-inside-1_51_72' fill='white'>
        <path d='M19.2605 6.26042C22.9826 9.71799 23.1971 15.5383 19.7395 19.2604C16.282 22.9826 10.4617 23.197 6.73953 19.7395C3.01739 16.2819 2.80291 10.4616 6.26047 6.73948C9.71804 3.01734 15.5383 2.80286 19.2605 6.26042ZM7.55385 18.8628C10.7918 21.8707 15.8551 21.6841 18.8629 18.4461C21.8707 15.2081 21.6841 10.1449 18.4462 7.13706C15.2082 4.12923 10.1449 4.31581 7.13711 7.5538C4.12928 10.7918 4.31586 15.855 7.55385 18.8628Z' />
      </mask>
      <path
        d='M19.2605 6.26042C22.9826 9.71799 23.1971 15.5383 19.7395 19.2604C16.282 22.9826 10.4617 23.197 6.73953 19.7395C3.01739 16.2819 2.80291 10.4616 6.26047 6.73948C9.71804 3.01734 15.5383 2.80286 19.2605 6.26042ZM7.55385 18.8628C10.7918 21.8707 15.8551 21.6841 18.8629 18.4461C21.8707 15.2081 21.6841 10.1449 18.4462 7.13706C15.2082 4.12923 10.1449 4.31581 7.13711 7.5538C4.12928 10.7918 4.31586 15.855 7.55385 18.8628Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='2'
        mask='url(#path-1-inside-1_51_72)'
      />
      <rect
        x='19.4625'
        y='18.9423'
        width='0.654537'
        height='4.90176'
        transform='rotate(-47.1251 19.4625 18.9423)'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='0.654537'
      />
    </svg>
  );
  return <Icon component={icon} {...props} />;
};
