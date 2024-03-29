'use client';
import s from './ProfilePage.module.scss';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import ProfileForm from '@/modules/personal/components/profile/ProfileForm/ProfileForm';
import PersonalHeader from '@/modules/personal/components/PersonalHeader/PersonalHeader';
import ProfileNav from '@/modules/personal/components/profile/ProfileNav/ProfileNav';

const ProfilePage = () => {
  const pathname = usePathname();

  const submitForm = useCallback(() => {
    console.log('sumbit');
  }, []);

  return (
    <div className={s.block}>
      <PersonalHeader title={'Личные данные'}>
        <ProfileNav pathname={pathname}/>
      </PersonalHeader>
      <ProfileForm pathname={pathname}/>
    </div>
  );
};

export default ProfilePage;
