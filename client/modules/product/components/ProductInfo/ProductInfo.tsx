import s from './ProductInfo.module.scss';
import Reviews from '@/src/components/UI/Reviews/Reviews';
import {IProduct} from '@/src/http/api/Product/ProductInfoEndpoints/type';
import {useAllProduct} from '@/src/http/hooks/useAllProduct';
import {ProductGallerySlider} from '@/src/components/ProductGallerySlider/ProductGallerySlider';

import {useOneProduct} from '@/src/http/hooks/useOneProduct';

interface Props {
  product: IProduct;
}

const ProductInfo = (props: Props) => {
  const {data} = useOneProduct();

  return (
    <div className={s.container}>
      <div className={s.header}>
        {/*<Reviews average={4}/>*/}
         {/*<Reviews average={4} totalCount={255}/>*/}
         {/*<Questions totalCount={6}/> */}
      </div>

      <div className={s.containerInfo}>
        {/*<PreloaderImage*/}
        {/*  className={s.imageWrapper}*/}
        {/*  sizes='100vw'*/}
        {/*  imgClassName={s.img}*/}
        {/*  src={images[0] || thumbnail}*/}
        {/*  alt={''}*/}
        {/*  priority={true}*/}
        {/*  objectFit='cover'*/}
        {/*  preloaderSize='large'*/}
        {/*/>*/}
        <div className={s.productWrapper}>
         <ProductGallerySlider images={data?.imagesUrl || []}/>
        </div>

        <div className={s.infoCharacters}>
          <ul>
            <li className={s.infoCharactersItem}>Брэнд: 1</li>
            <li className={s.infoCharactersItem}>Описание: 1</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default ProductInfo;
