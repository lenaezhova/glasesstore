'use client';
import React, { FC, useState } from 'react';
import s from './MainSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Progress } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMainBanners } from './types';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import {MainSliderArrow} from '@/src/ui/MainSliderArrow';
import previewImage from 'public/preview.png';

const MainSlider: FC = () => {
  const slides: IMainBanners[] = [{
    id: '0',
    text: 'string',
    title: 'string',
    subtitle: 'string',
    imagePath: previewImage
  }];
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  return (
    <div className={s.swiperWrapper}>
      <div
        className={s.swiper}
        // slidesPerView={1}
        // modules={[Navigation]}
        // onSlideChange={(sw: any) => setCurrentSlide(sw?.activeIndex + 1)}
        // navigation={{
        //   nextEl: `.${s.next}`,
        //   prevEl: `.${s.prev}`,
        // }}
      >
        {slides.map((e) => (
          <SwiperSlide key={e.id} className={s.bannerSwiper}>
            <PreloaderImage
              sizes='100vw'
              imgClassName={s.img}
              src={e.imagePath}
              alt={e.title}
              priority={true}
              objectFit='cover'
              preloaderSize='large'
            />
            <motion.div
              className={s.banner}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, delay: 0.3 }}
            >
              <div className={s.banner__heading}>
                <h1 className={s.banner__title}>
                  Выделяться <br/> из толпы
                </h1>
                <p className={s.banner__text}>
                  От экрана к реальности – твои идеальные очки всего в клике от тебя</p>
              </div>
              {/* <div className={s.banner__item}> */}
              {/* <div className={s.banner__img}> */}
              {/*  <Image */}
              {/*    className={s.img} */}
              {/*    src={'/image/header/image.png'} */}
              {/*    alt={'BannerImg'} */}
              {/*    fill */}
              {/*    quality={100} */}
              {/*  /> */}
              {/* </div> */}
              {/* <motion.div */}
              {/*  className={s.banner__description} */}
              {/*  initial={{ opacity: 0 }} */}
              {/*  animate={{ opacity: 1 }} */}
              {/*  transition={{ duration: 1, delay: 1.8 }} */}
              {/* > */}
              {/*  <h2 className={s.banner__subtitle}>{e.title}</h2> */}
              {/*  <p className={s.banner__info}>{e.text}</p> */}
              {/* </motion.div> */}
              {/* </div> */}
            </motion.div>
          </SwiperSlide>
        ))}
      </div>
      {/* <div className={s.sliderInfo}> */}
      {/* <motion.div */}
      {/*  className={s.leftControl} */}
      {/*  initial={{ opacity: 0, x: -200 }} */}
      {/*  animate={{ opacity: 1, x: 0 }} */}
      {/*  transition={{ duration: 1, delay: 0.3 }} */}
      {/* > */}
      {/* <Progress */}
      {/*  strokeWidth={6} */}
      {/*  width={40} */}
      {/*  type={'circle'} */}
      {/*  percent={(currentSlide / slides.length) * 100} */}
      {/*  showInfo={false} */}
      {/*  status={'normal'} */}
      {/*  strokeColor={'#FFF'} */}
      {/* /> */}
      {/* <div className={s.arrows}> */}
      {/*  <MainSliderArrow className={s.prev} /> */}
      {/*  <MainSliderArrow className={s.next} /> */}
      {/* </div> */}
      {/* </motion.div> */}
      {/* <motion.div */}
      {/*  className={s.currentSlide} */}
      {/*  initial={{ opacity: 0, x: 200 }} */}
      {/*  animate={{ opacity: 1, x: 0 }} */}
      {/*  transition={{ duration: 1, delay: 0.3 }} */}
      {/* > */}
      {/*  <span>{currentSlide}</span>/ {slides.length} */}
      {/* </motion.div> */}
      {/* </div> */}
    </div>
  );
};

export default MainSlider;
