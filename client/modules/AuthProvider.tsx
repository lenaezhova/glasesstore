'use client'
import React, {useEffect} from 'react';
import {message} from 'antd';
import {useAuthStore} from '@/modules/user/store/store';
import {$glassesApi} from '@/src/http/api/api';
import {useMutation, useQuery} from '@tanstack/react-query';
import {useUserInfo} from '@/src/http/hooks/useUserInfo';

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const {setIsAuth, setIsAuthLoading, isAuthLoading, isAuth, userId, setUserId} = useAuthStore((state) => state);
  const {mutateAsync} = useMutation({
    mutationFn: $glassesApi.User.registerEndpoints.refresh
  })
  const {refetch} = useUserInfo(userId);

  useEffect(() => {
    const checkRefresh = async () => {
      if (localStorage.getItem('token')) {
        try{
          const refreshToken = localStorage.getItem('refreshToken');
          const response = await mutateAsync({refreshToken});
          localStorage.setItem('refreshToken', response.refreshToken);
          localStorage.setItem('token', response.accessToken);
          setUserId(response.userId)
          setIsAuthLoading(false);
          setIsAuth(true);
        } catch (e){
          setIsAuth(false);
        } finally {
          setIsAuthLoading(false);
        }
      } else {
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
