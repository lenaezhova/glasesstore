import React, { useCallback } from 'react';
import { Button } from 'antd';
import s from './AuthIco.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAuthModalStore } from '@/modules/modals/authentication/store/store';
import { useAuthStore } from '@/modules/user/store/store';
import {IconProfile} from '@/src/ui/IconProfile';

const AuthIco = () => {
  const {setIsVisibleAuthModal} = useAuthModalStore(state => state);
  const { isAuth, isAuthLoading } = useAuthStore(state => state);

  const router = useRouter();

  const handleAuthButton = useCallback(() => {
    if (isAuth) {
      router.push('/personal/profile');
    } else {
      setIsVisibleAuthModal(true);
    }
  }, [isAuth, router]);

  return (
    <button
      className={s.btnIcon}
      disabled={isAuthLoading}
      onClick={handleAuthButton}
    >
      <div className={s.container}>
        <div className={s.containerIcon}>
          <IconProfile className={s.icon} style={{fontSize: '30px'}}/>
        </div>
      </div>
    </button>
  );
};

export default AuthIco;
