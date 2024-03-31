import React, { FC, useEffect, useState } from 'react';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import { Image } from 'antd';

import { ProductGallerySlide } from '../ProductGallerySlide/ProductGallerySlide';
import { PlayCircleOutlined } from '@ant-design/icons';

import s from './ProductGallerySlider.module.scss';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import {IconSliderNext} from '@/src/ui/IconSliderNext/IconSliderNext';
import {IconSliderPrev} from '@/src/ui/IconSliderPrev/IconSliderPrev';
import ProductGallerySliderMaskedModal
  from '@/src/components/ProductGallerySlider/ProductGallerySliderMaskedModal/ProductGallerySliderMaskedModal';

interface ProductGallerySliderProps {
  images: string[];
}

export const ProductGallerySlider: FC<ProductGallerySliderProps> = ({
  images = []
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.productGallerySlider}>
      {/* MainPreview  */}
      <div className={s.productGallerySlider__mainPreview}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          thumbs={{
            swiper:
              // @ts-ignore
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            disabledClass: s.disabled,
            nextEl: `.${s.nextSlide}`,
            prevEl: `.${s.prevSlide}`
          }}
          className={'mySwiper2'}
        >
          {images.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductGallerySlide
                  dataForPreview={data}
                  dataIndex={index}
                  previewImages={images}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* Controls  */}
        <div className={s.control}>
          <div className={s.nextSlide}>
            <IconSliderNext />
          </div>
          <div className={s.prevSlide}>
            <IconSliderPrev />
          </div>
        </div>
      </div>
      {/* BottomSlider */}
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={s.bottomSlider}
      >
        {images.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                preview={false}
                src={data}
                className={s.bottomSlider__img}
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <ProductGallerySliderMaskedModal image={images[0]}/>
        </SwiperSlide>
      </Swiper>
    </div>

  );
};
