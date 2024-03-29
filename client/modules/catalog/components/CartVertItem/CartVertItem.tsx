import s from './CartVertItem.module.scss';
import {memo} from 'react';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import clsx from 'clsx';
import Link from 'next/link';
import { IProduct } from '@/modules/product/type/type';
import Reviews from '@/src/components/UI/Reviews/Reviews';
import FavoriteAdd from '@/src/components/FavoriteAdd/FavoriteAdd';
import BuyOrCount from '@/src/components/BuyOrCount/BuyOrCount';

interface Props {
  product: IProduct;
  className?: string;
}

const CartVertItem = (props: Props) => {
  const {product, className} = props;

  const {
    brand,
    id,
    title,
    images,
    thumbnail,
    price
  } = product;

  return (
    <div className={clsx(s.block, {}, [className])}>

      <div className={s.containerImage}>
        <Link href={'/product/' + id}>
          <PreloaderImage
            className={s.imageWrapper}
            sizes='100vw'
            imgClassName={s.img}
            src={images[0] || thumbnail}
            alt={''}
            priority={true}
            objectFit='cover'
            preloaderSize='large'
          />
        </Link>
      </div>

      <div className={s.infoBlock}>
        <div className={s.infoContainer}>

          <h3 className={s.title}>
            <Link className={s.link} href={'/product/' + id}>{title.toUpperCase()}</Link>
            <Reviews average={product.rating} classStar={s.classStar} classReviewsText={s.classReviewsText}/>
          </h3>

          <div className={clsx(s.infoBody, {}, [s.cartItemText])}>
            {brand}
          </div>

          <div className={s.containerIcons}>
            <FavoriteAdd product={product}/>
          </div>

        </div>

        <div className={s.blockPrice}>

          <div className={s.containerPrice}>
            {price} ₽
          </div>
          <BuyOrCount product={product} classNameButton={s.buyButton} classNameCounter={s.counter}/>

        </div>
      </div>
    </div>
  );
};

export default memo(CartVertItem);
