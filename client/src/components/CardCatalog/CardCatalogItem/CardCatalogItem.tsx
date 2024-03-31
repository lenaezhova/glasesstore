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
import {useOneProduct} from '@/src/http/hooks/useOneProduct';
import imagesLogo from 'public/logo.jpg';
interface Props {
  product?: IProduct;
  productId?: string;
}

const CardCatalogItem = ({product, productId}: Props) => {
  const mainContainerRef = useRef<any>();
  const isHovering = useIsHover(mainContainerRef);
  const buyOrCountRef = useRef<any>();
  const favoriteRef = useRef<any>();
  const router = useRouter();
  let newProduct = product;
  const {data} = useOneProduct(productId);
  if (productId) newProduct = data;

  const handleRedirectToProduct = (event: any) => {
    if (!buyOrCountRef.current?.contains(event.target) && !favoriteRef.current?.contains(event.target)) {
      router.push('/product/' + newProduct?._id);
    }
  };

  return (
    <div ref={mainContainerRef} key={newProduct?._id} className={s.block} onClick={handleRedirectToProduct}>
      <div className={s.itemElement}>
        <div
          className={s.imageContainer}>
          <PreloaderImage
            className={s.imageWrapper}
            sizes='100vw'
            imgClassName={s.img}
            src={newProduct?.imagesUrl[0] || imagesLogo}
            alt={'image' + newProduct?._id}
            priority={true}
            objectFit='contain'
            preloaderSize='large'
          />
          {isHovering &&
            <div ref={favoriteRef} className={s.heart}>
              <FavoriteAdd id={newProduct?._id}/>
            </div>
          }
        </div>

        <div className={s.infoContainer}>
          <div className={s.infoTitleContainer}>
            <Link href={'/product/' + newProduct?._id} className={s.itemTitle}>{newProduct?.name}</Link>
            {/* <Reviews average={product.rating} classStar={s.classStar} classReviewsText={s.classReviewsText}/> */}
          </div>

          <div className={s.infoPrice}>
            <div className={s.itemPrice}>{newProduct?.price} ₽</div>
            <div ref={buyOrCountRef}>
              <BuyOrCount
                productId={newProduct?._id}
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
