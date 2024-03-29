'use client';
import s from './SwiperProducts.module.scss';
import {IProduct} from '@/modules/product/type/type';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import {useAllProductsInCategory} from '@/modules/catalog/api/client/api';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperProductsItem from '@/src/components/SwiperProducts/SwiperProductsItem/SwiperProductsItem';
import {Spin} from 'antd';

interface Props {
  products?: IProduct[];
  title?: string;
  categoryName?: string;
  hideFooter?: boolean;
  product?: IProduct;
}

const SwiperProducts = (props : Props) => {
  const {
    title,
    categoryName,
    hideFooter,
    product
  } = props;

  const {data, isLoading} = useAllProductsInCategory(categoryName || 'all');

  if (!data) {
    return <div className={s.spin}>
      <Spin/>
    </div>;
  }

  const products = props.products || data.products.filter((el) => el.id !== product?.id);
  const countProductsInOnePage = 6;
  const countSlides = products.length / countProductsInOnePage;

  return (
    <>
      <h2 className={s.title}>{title}</h2>
      {isLoading
        ? <div className={s.spin}>
          <Spin/>
        </div>
        : <div className={s.swiperContainer}>
          <Swiper
            slidesPerView={products.length / countSlides}
            spaceBetween={60}
            mousewheel={products.length > countProductsInOnePage && true}
            cssMode={true}
            navigation={true}
            pagination={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
          >
            {products.map((el, index) =>
              <SwiperSlide key={el.id}>
                <SwiperProductsItem product={el} hideFooter={hideFooter}/>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      }
    </>
  );
};

export default SwiperProducts;
