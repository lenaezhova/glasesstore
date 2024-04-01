import s from './CartItem.module.scss';
import {Dispatch, memo, SetStateAction, useEffect} from 'react';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import clsx from 'clsx';
import Link from 'next/link';
import Reviews from '@/src/components/UI/Reviews/Reviews';
import BuyOrCount from '@/src/components/BuyOrCount/BuyOrCount';
import CartDelete from '@/src/components/CartDelete/CartDelete';
import {useOneProduct} from "@/src/http/hooks/useOneProduct";
import logoPng from 'public/logo.jpg'

interface Props {
  productId: string;
  className?: string;
  setTotalPrice?: Dispatch<SetStateAction<number>>;
}

const CartItem = ({productId, className, setTotalPrice}: Props) => {
  const {data, isLoading} = useOneProduct(productId);

  const handleChange = (newCount: number, oldCount: number) => {
    if (!data) return;
    if (setTotalPrice) {
      setTotalPrice(state => {
        const newTotalPrice = state - (data?.price * oldCount);
        return newTotalPrice + (data?.price * newCount);
      })
    }
  }

  return (
    <div className={clsx(s.block, {}, [className])}>

      <div className={s.containerImage}>
        <Link href={'/product/' + data?._id}>
          <PreloaderImage
            className={s.imageWrapper}
            sizes='100vw'
            imgClassName={s.img}
            src={data?.imagesUrl[0] || logoPng}
            alt={'product' + data?._id}
            priority={true}
            objectFit='contain'
            preloaderSize='large'

          />
        </Link>
      </div>

      <div className={s.blockInfo}>
        <div className={s.containerInfo}>

          <h3 className={s.containerTitle}>
            <Link className={s.linkTitle} href={'/product/' + data?._id}>{data?.name?.toUpperCase()}</Link>
            {/*<Reviews average={1} classStar={s.classStar} classReviewsText={s.classReviewsText}/>*/}
          </h3>

          {/*<div className={clsx(s.bodyInfo, {}, [s.text])}>*/}
          {/*  {brand}*/}
          {/*</div>*/}

          <div className={s.containerIcons}>
            <CartDelete className={s.icon} productId={data?._id}/>
            {/*<FavoriteAdd product={cartProduct.product}/>*/}
          </div>

        </div>
        <div className={s.blockPrice}>
          <div className={s.containerPrice}> {data?.price} ₽ </div>
          <BuyOrCount
            productId={data?._id}
            classNameCounter={s.counter}
            classNameButtonInc={s.counterButtonInc}
            classNameButtonDec={s.counterButtonDec}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(CartItem);
