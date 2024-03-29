'use client';

import {type FC, memo} from 'react';
import {useRouter} from 'next/navigation';
import React from 'react';
import {useAuthStore} from '@/modules/user/store/store';
import {Spin} from 'antd';

interface AuthorizedProps {
  children: React.ReactNode;
}

const Authorized: FC<AuthorizedProps> = ({
                                           children,
                                         }) => {
  const redirectUrl = '/'
  const router = useRouter();
  const {isAuth, isAuthLoading} = useAuthStore(store => store);

  if (isAuthLoading)
    return (
      <div
        style={{
          width: '100%',
          height: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Spin size={'large'} />
      </div>
    );

  if (isAuth) return <>{children}</>;

  if (redirectUrl) {
    router.push(redirectUrl);
  }

  return null;
};

export default memo(Authorized);
