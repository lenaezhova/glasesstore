'use client';
import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

export const IconSearch = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (
    <svg enable-background="new 0 0 512 512" height="1em" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="1em">
      <g>
        <path
          d="    M339.576,200.635c0,83.829-67.968,151.791-151.783,151.791C103.965,352.426,36,284.464,36,200.635    c0-83.833,67.965-151.792,151.793-151.792C271.608,48.844,339.576,116.802,339.576,200.635z"
          fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
          stroke-width="20"/>
        <line
          fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
          stroke-width="20" x1="315.642" x2="476" y1="302.784" y2="463.156"/>
      </g>
    </svg>
  );
  return <Icon component={icon} {...props} />;
};
