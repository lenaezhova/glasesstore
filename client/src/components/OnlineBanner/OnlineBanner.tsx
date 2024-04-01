'use client'
import React from 'react';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import s from './OnlineBanner.module.scss';
import onlineImage from 'public/onlineImage.png';
import Image from 'next/image';
import GlassesButton from '@/src/components/UI/GlassesButton/GlassesButton';
import {useRouter} from 'next/navigation';


const OnlineBanner = () => {
  const router = useRouter();
  return (
    <div className={s.wrapper}>
      <PreloaderImage
        quality={100}
        width={1000}
        height={1000}
        imgClassName={s.img}
        src={onlineImage}
        alt={'onlineImage'}
        priority={true}
        objectFit='cover'
        preloaderSize='large'
        fill={true}
      />
      <div className={s.content}>
        <p className={s.subTitle}>первое впечатление</p>
        <p className={s.title}>Примерка очков онлайн</p>
        <GlassesButton onClick={() => router.push('catalog/all')} text={'Попробовать'} className={s.btn} type={'primary'}/>
      </div>
    </div>
  );
};

export default OnlineBanner;
