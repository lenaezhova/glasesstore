'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import s from './Header.module.scss';
import { useMedia } from 'react-use';
import { Button } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import {useMainMenuStore} from '@/src/Header/navigationStore';
import {useClickOutside} from '@/src/helpers/useClickOutside';
import Link from 'next/link';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import {IconCatalogList} from '@/src/ui/IconCatalogList';
import {MenuEnum} from '@/src/Header/type';
import QuickSearch from '@/src/components/QuickSearch/QuickSearch';
import Favorite from '@/src/components/UI/Favorite/Favorite';
import Cart from '@/src/components/UI/Cart/Cart';
import AuthIco from '@/src/components/AuthIco/AuthIco';
import logoPng from 'public/logoHeader.png';

interface HeaderProps {
  navLinks: {
    name: string;
    link: string;
  }[];
}

export interface ICatalog {
  title: string;
  link: string;
  img?: string;
  sublinks:
    | {
        title: string;
        link: string;
      }[]
    | null;
}
[];

export const Header: FC<HeaderProps> = ({
  navLinks
}) => {

  const serviceCatalog: ICatalog[] = [
    {
      title: 'ourServices',
      link: '/',
      sublinks: null
    }
    // ...landings?.map((e) => {
    //   return {
    //     title: e.title,
    //     link: '/',
    //     sublinks: null,
    //   };
    // }),
  ];

  const [menu, setMenu] = useState<ICatalog[]>([]);
  const isCatalogOpen = useMainMenuStore((state) => state.isOpen);
  const toggleMenu = useMainMenuStore((state) => state.toggle);
  const closeMenu = useMainMenuStore((state) => state.close);

  const headerRef = useRef<HTMLHeadElement>(null);
  const isDesktop = useMedia('(min-width: 830px)');

  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setIsScrollingDown(scrollY > lastScrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isScrollingDown]);

  useClickOutside(headerRef, isDesktop ? closeMenu : () => null);

  return (
    <header
      ref={headerRef}
      className={isScrollingDown ? s.headerHide + ' ' + s.header : s.header}
    >
      <div className={s.header__container}>
        <Link
          href={'/'}
          className={s.navbar__item}
          onClick={() => closeMenu()}
        >
          <PreloaderImage
            className={s.headerLogo}
            src={logoPng}
            alt={'Glasses'}
            objectFit='cover'
            position='relative'
          />
        </Link>
        <nav className={s.navbar}>
          {navLinks?.map((el, index) => (
            <Link
              className={s.navbar__item}
              key={index}
              href={el.link}
              onClick={() => closeMenu()}
            >
              {el.name}
            </Link>
          ))}
        </nav>
        <ul className={s.header__icons} onClick={() => closeMenu()}>
          <QuickSearch />
          <AuthIco/>
          <Favorite/>
          <Cart/>
          {/* {isDesktop && <UserButton />} */}
        </ul>
      </div>
      {/* {isDesktop && <MainMenuCatalog links={menu} />} */}
    </header>
  );
};
