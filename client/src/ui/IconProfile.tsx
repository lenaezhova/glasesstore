'use client';
import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

export const IconProfile = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (

  <svg enable-background="new 0 0 512 512" height="1em" width='1em' id="Layer_1" version="1.1" viewBox="0 0 512 512"
  >
    <g>
      <path
        d="    M348.574,145.901c0,53.522-43.377,96.914-96.901,96.914c-53.523,0-96.914-43.392-96.914-96.914    c0-53.51,43.391-96.901,96.914-96.901C305.197,49,348.574,92.391,348.574,145.901z"
        fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
        stroke-width="20"/>
      <path
        d="    M275.38,274.46c95.561,9.706,170.154,90.401,170.154,188.54"         fill='none'
        stroke='currentColor'
        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="20"/>
      <path
        d="    M66.466,463c0-96.358,71.925-175.934,165.027-187.961" fill="none" stroke="#000000" stroke-width="20" stroke-linecap="round"
        stroke-linejoin="round" stroke-miterlimit="10"/>
    </g>
  </svg>

)
  ;
  return <Icon component={icon} {...props} />;
};
