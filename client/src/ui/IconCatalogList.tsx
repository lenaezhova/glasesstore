'use client';
import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

export const IconCatalogList = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='3'
        width='11'
        height='1'
        fill='currentColor'
      />
      <rect
        x='5'
        y='6'
        width='7'
        height='1'
        fill='currentColor'
      />
    </svg>
  );
  return <Icon component={icon} {...props} />;
};
