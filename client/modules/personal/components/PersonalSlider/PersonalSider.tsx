'use client';
import s from './PersnoalSider.module.scss';
import { personalOptions } from '@/src/const/personal/const';
import Link from 'next/link';
import {Button} from 'antd';
import { useAuthStore } from '@/modules/user/store/store';
import {useMutation} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';
import clsx from 'clsx';

const PersonalSider = () => {
  const {setIsAuth} = useAuthStore(state => state);
  const {mutateAsync} = useMutation({
    mutationFn: $glassesApi.User.registerEndpoints.logout
  })

  const handleLogout = async () => {
    try {
      await mutateAsync();
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      setIsAuth(false);
    } catch (e) {}
  }

  return (
    <div className={s.siderContainer}>
      {personalOptions.map((el) =>
        <Link href={el.href} key={el.href} className={s.siderContainerItem}>{el.element}</Link>
      )}
      <Button
          danger
          onClick={() => handleLogout()}
          className={clsx('flex-center', s.siderContainerItem)}
      >
        Выйти
      </Button>
    </div>
  );
};

export default PersonalSider;
