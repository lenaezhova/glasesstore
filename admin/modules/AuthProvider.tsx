'use client'
import React, {useEffect} from 'react';
import {message} from 'antd';
import {useAuthStore} from '@/modules/user/store/store';
import {$glassesAdminApi} from '@/src/http/api/api';
import {useMutation, useQuery} from '@tanstack/react-query';
import {useUserInfo} from '@/src/http/hooks/useUserInfo';

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const {setIsAuth, setIsAuthLoading, isAuthLoading, isAuth, userId, setUserId} = useAuthStore((state) => state);
  const {mutateAsync} = useMutation({
    mutationFn: $glassesAdminApi.User.registerAdminEndpoints.refresh
  })
  const {refetch} = useUserInfo(userId);

  useEffect(() => {
    const checkRefresh = async () => {
      if (localStorage.getItem('adminToken')) {
        try{
          const refreshToken = localStorage.getItem('adminRefreshToken');
          const response = await mutateAsync({refreshToken});
          localStorage.setItem('adminRefreshToken', response.refreshToken);
          localStorage.setItem('adminToken', response.accessToken);
          setUserId(response.userId)
          setIsAuthLoading(false);
          setIsAuth(true);
        } catch (e){
          setIsAuth(false);
          message.error('Произошла ошибка при проверка авторизации')
        } finally {
          setIsAuthLoading(false);
        }
      } else {
        setIsAuth(false);
        setIsAuthLoading(false);
      }
    }

    checkRefresh();
  }, []);

  useEffect(() => {
    if (!isAuth || isAuthLoading) return;
    refetch();
  }, [isAuth, isAuthLoading]);

  return (
    <>
      {children}
    </>
  );
}
