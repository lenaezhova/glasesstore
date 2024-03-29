import React from 'react';
import HomePage from '@/modules/auth/components/AuthPage/HomePage';
import NoAuthorized from '@/modules/NoAuthorized';

export default function MainPage() {

  return (
    <NoAuthorized>
      <HomePage />
    </NoAuthorized>
  );
}
