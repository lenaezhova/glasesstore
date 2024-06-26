'use client';
import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

export const MainSliderArrow = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (
    <svg
      width='101'
      height='8'
      viewBox='0 0 101 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        // opacity="0.5"
        d='M0.646446 3.64646C0.451187 3.84172 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82844L1.70711 4.00001L4.53554 1.17158C4.7308 0.976319 4.7308 0.659737 4.53554 0.464475C4.34027 0.269212 4.02369 0.269212 3.82843 0.464475L0.646446 3.64646ZM101 3.5L1 3.50001L1 4.50001L101 4.5L101 3.5Z'
        fill='white'
      />
    </svg>
  );
  return <Icon component={icon} {...props} />;
};
