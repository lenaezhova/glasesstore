import React from 'react';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import logo from 'public/logoHeader.png';
import s from './ProductItem.module.scss';
import {useOneProduct} from '@/src/http/hooks/useOneProduct';

interface IProductItem {
  productId?: string;
}

const ProductItem = ({productId}: IProductItem) => {
  const {data, isLoading} = useOneProduct(productId);
  if (isLoading) {
    return <div>
      Loading...
    </div>;
  }
  return (
    <div className={s.product}>
      <PreloaderImage
        className={s.imageWrapper}
        sizes='100vw'
        imgClassName={s.img}
        src={data?.imagesUrl[0] || logo}
        alt={'продукт' + data?.name}
        priority={true}
        objectFit='contain'
        preloaderSize='large'
      />
      <p className={s.text}>{data?.name}</p>
      <div className={s.price}>₽ {data?.price}</div>
    </div>
  );
};

export default ProductItem;
