'use client';
import Link from 'next/link';
import {memo} from 'react';
import {
  personalProfileCompanyRouter,
  personalProfileRouter,
  personalProfileRouterSoletrader
} from '@/src/const/personal/const';
import clsx from 'clsx';
import s from './ProfileNav.module.scss';

interface Props {
  pathname: string;
}

const ProfileNav = (props: Props) => {
  const { pathname } = props;

  return (
    <div className={s.headerLinks}>
      <Link
        href={personalProfileRouter}
        className={clsx(s.link, {[s.linkActive]: pathname === personalProfileRouter})}
      >
        Для физических лиц
      </Link>

      <Link
        href={personalProfileCompanyRouter}
        className={clsx(s.link, {[s.linkActive]: pathname === personalProfileCompanyRouter})}
      >
        Для юридических лиц
      </Link>

      <Link
        href={personalProfileRouterSoletrader}
        className={clsx(s.link, {[s.linkActive]: pathname === personalProfileRouterSoletrader})}
      >
        Для ИП
      </Link>
    </div>
  );
};

export default memo(ProfileNav);
