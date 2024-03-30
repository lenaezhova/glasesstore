'use client';
import React, {memo, useEffect} from 'react';
import s from './ProductBody.module.scss';
import ProductInfo from '@/modules/product/components/ProductInfo/ProductInfo';
import FieldBuy from '@/modules/product/components/FieldBuy/FieldBuy';
import {
  addNewProductInRecentlyStore,
  getProductsInRecentlyStore,
  useSingleProduct
} from '@/modules/product/api/client/api';
import SwiperProducts from '@/src/components/SwiperProducts/SwiperProducts';
import {useOneProduct} from '@/src/http/hooks/useOneProduct';

interface Props {
  id: string;
}

const ProductBody = (props : Props) => {
  const { id } = props;
  const {data, isLoading} = useOneProduct(id as string);
  // console.log(dataProduct);
  // const {isLoading, data} = useSingleProduct(id);
  const recentlyStore = getProductsInRecentlyStore();

  // useEffect(() => {
  //   if (data) {
  //     addNewProductInRecentlyStore(data);
  //   }
  // }, [data]);

  if (isLoading || !data) {
    return null;
  }

  return (
    <>
      <h1 className={s.title}>{data.name}</h1>

      {/* <div style={{marginTop: 25, marginBottom: 50}}> */}
      {/*  <WhoWorkWithBanner/> */}
      {/* </div> */}

      <div className={s.block}>
        <div className={s.containerProduct}>
          <ProductInfo product={data} />
          <FieldBuy id={id} />
        </div>

        <div className={s.swiper}>
          {/*// @ts-ignore*/}
          <SwiperProducts title={'Похожие товары'} categoryName={'all'} product={data}/>
        </div>
        {/*<div className={s.swiper}>*/}
        {/*  <SwiperProducts key={'recently'} title={'Вы недавно смотрели'} products={recentlyStore} hideFooter={true}/>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default memo(ProductBody);
