import s from './CartItem.module.scss';
import {memo} from 'react';
import { ICartProduct } from '@/modules/cart/api/client/api';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import clsx from 'clsx';
import Link from 'next/link';
import Reviews from '@/src/components/UI/Reviews/Reviews';
import BuyOrCount from '@/src/components/BuyOrCount/BuyOrCount';
import FavoriteAdd from '@/src/components/FavoriteAdd/FavoriteAdd';
import CartDelete from '@/src/components/CartDelete/CartDelete';

interface Props {
  cartProduct: ICartProduct;
  className?: string;
}

const CartItem = (props: Props) => {
  const {cartProduct, className} = props;

  const {
    product: {
      brand,
      id,
      title,
      images,
      thumbnail,
      price,
      rating
    }
  } = cartProduct;

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

      <div className={s.blockInfo}>
        <div className={s.containerInfo}>

          <h3 className={s.containerTitle}>
            <Link className={s.linkTitle} href={'/product/' + id}>{title.toUpperCase()}</Link>
            <Reviews average={rating} classStar={s.classStar} classReviewsText={s.classReviewsText}/>
          </h3>

          <div className={clsx(s.bodyInfo, {}, [s.text])}>
            {brand}
          </div>

          <div className={s.containerIcons}>
            <CartDelete className={s.icon} product={cartProduct.product}/>
            {/*<FavoriteAdd product={cartProduct.product}/>*/}
          </div>

        </div>
        <div className={s.blockPrice}>
          <div className={s.containerPrice}> {price} ₽ </div>
          <BuyOrCount
            product={cartProduct.product}
            classNameCounter={s.counter}
            classNameButtonInc={s.counterButtonInc}
            classNameButtonDec={s.counterButtonDec}
          />

        </div>
      </div>
    </div>
  );
};

export default memo(CartItem);
