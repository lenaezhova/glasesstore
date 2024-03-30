import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import Reviews from '@/src/components/UI/Reviews/Reviews';
import {useRef} from 'react';
import useIsHover from '@/src/hooks/useIsHover';
import {useRouter} from 'next/navigation';
import {IProduct} from '@/modules/product/type/type';
import s from './SwiperProductsItem.module.scss';
import FavoriteAdd from '@/src/components/FavoriteAdd/FavoriteAdd';
import BuyOrCount from '@/src/components/BuyOrCount/BuyOrCount';
import Link from 'next/link';

interface Props {
  product: IProduct;
  hideFooter?: boolean;
}

const SwiperProductsItem = (props: Props) => {
  const mainContainerRef = useRef<any>();
  const buyOrCountRef = useRef<any>();
  const favoriteRef = useRef<any>();

  const router = useRouter();
  const isHovering = useIsHover(mainContainerRef);
  const {product, hideFooter} = props;

  const handleRedirectToProduct = (event: any) => {
    if (!buyOrCountRef?.current?.contains(event.target) && !favoriteRef?.current?.contains(event.target)) {
      router.push('/product/' + product.id);
    }
  };

  return (
    <div key={product.id} ref={mainContainerRef} className={s.favoriteListItem} onClick={handleRedirectToProduct}>
      <div className={s.itemElement}>
        <div className={s.imageContainer}>
          <PreloaderImage
            className={s.imageWrapper}
            sizes='100vw'
            imgClassName={s.img}
            src={product.images[0] || product.thumbnail}
            alt={''}
            priority={true}
            objectFit='cover'
            preloaderSize='large'
          />
          {/*{isHovering && (*/}
          {/*  <div ref={favoriteRef} className={s.heart}>*/}
          {/*    <FavoriteAdd product={product} />*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
        <div className={s.infoContainer}>
          <div className={s.infoTitleContainer}>
            <Link href={'/product/' + product.id} className={s.itemTitle}>
              {product.title}
            </Link>
            <Reviews average={product.rating} classStar={s.classStar} classReviewsText={s.classReviewsText} />
          </div>
          {!hideFooter && (
            <div className={s.infoPrice}>
              <div className={s.itemPrice}>{product.price} ₽</div>
              <div ref={buyOrCountRef}>
                <BuyOrCount product={product} classNameCounter={s.counter} classNameButton={s.buyButton} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwiperProductsItem;
