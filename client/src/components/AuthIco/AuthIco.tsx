import React, { useCallback } from 'react';
import { Button } from 'antd';
import s from './AuthIco.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAuthModalStore } from '@/modules/modals/authentication/store/store';
import { useAuthStore } from '@/modules/user/store/store';

const Favorite = () => {
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
    <Button
      size={'large'}
      className={s.AntdBtn}
      disabled={isAuthLoading}
      icon={
        <div className={s.container}>
          <div className={s.containerIcon}>
            <UserOutlined className={s.icon} style={{ fontSize: '20px' }}/>
          </div>
          <div className={s.text}> {isAuthLoading ? 'Профиль' : isAuth ? 'Профиль' : 'Вход'}</div>
        </div>
      }
      onClick={handleAuthButton}
    />
  );
};

export default Favorite;
