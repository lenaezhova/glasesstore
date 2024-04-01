'use client';
import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

export const IconCart = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (
    <svg data-name="Layer 2" id="Layer_2" width='1.6em' height='1.6em' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="20"
            d="M709.5,827.2h-419a14.13,14.13,0,0,1-14.07-15.52l45-441.52a6.41,6.41,0,0,1,6.38-5.78h344.3a6.41,6.41,0,0,1,6.38,5.78l45,441.52A14.13,14.13,0,0,1,709.5,827.2Z"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="20"
            d="M402.55,459.26v-189c0-53.6,43.85-97.45,97.45-97.45h0c53.6,0,97.45,43.85,97.45,97.45v189"/>
    </svg>

  );
  return <Icon component={icon} {...props} />;
};
