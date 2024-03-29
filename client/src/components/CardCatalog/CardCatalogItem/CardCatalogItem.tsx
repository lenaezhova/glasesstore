import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import Reviews from '@/src/components/UI/Reviews/Reviews';
import { useCallback, useRef } from 'react';
import useIsHover from '@/src/hooks/useIsHover';
import { useRouter } from 'next/navigation';
import s from './CardCatalogItem.module.scss';
import FavoriteAdd from '@/src/components/FavoriteAdd/FavoriteAdd';
import BuyOrCount from '@/src/components/BuyOrCount/BuyOrCount';
import Link from 'next/link';
import {IProduct} from '@/src/http/api/Product/ProductInfoEndpoints/type';

interface Props {
  product: IProduct;
}

const CardCatalogItem = (props: Props) => {
  const mainContainerRef = useRef<any>();
  const isHovering = useIsHover(mainContainerRef);
  const buyOrCountRef = useRef<any>();
  const favoriteRef = useRef<any>();
  const router = useRouter();
  const {product} = props;

  const handleRedirectToProduct = useCallback((event: any) => {
    // if (!buyOrCountRef.current.contains(event.target) &&
    //   !favoriteRef.current.contains(event.target)
    // ) {
      router.push('/product/' + product._id);
    // }
  }, [product._id, router]);

  return (
    <div ref={mainContainerRef} key={product._id} className={s.block} onClick={handleRedirectToProduct}>
      <div className={s.itemElement}>
        <div
          className={s.imageContainer}>
          <PreloaderImage
            className={s.imageWrapper}
            sizes='100vw'
            imgClassName={s.img}
            src={product.imagesUrl[0]}
            alt={''}
            priority={true}
            objectFit='contain'
            preloaderSize='large'
          />
          {/*{isHovering &&*/}
          {/*  <div ref={favoriteRef} className={s.heart}>*/}
          {/*    <FavoriteAdd product={product}/>*/}
          {/*  </div>*/}
          {/*}*/}
        </div>

        <div className={s.infoContainer}>
          <div className={s.infoTitleContainer}>
            <Link href={'/product/' + product._id} className={s.itemTitle}>{product.name}</Link>
            {/*<Reviews average={product.rating} classStar={s.classStar} classReviewsText={s.classReviewsText}/>*/}
          </div>

          <div className={s.infoPrice}>
            <div className={s.itemPrice}>{product.price} ₽</div>
            <div ref={buyOrCountRef}>
              <BuyOrCount
                product={product}
                classNameCounter={s.counter}
                classNameButton={s.buyButton}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardCatalogItem;
