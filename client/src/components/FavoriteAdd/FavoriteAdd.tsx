import { IProduct } from '@/modules/product/type/type';
import heartSVG from '@/public/images/addFavorite.svg';
import activeHeartSVG from '@/public/images/ActiveHeart.svg';
import { useCallback, useEffect, useState } from 'react';
import {
  addProductInFavorites,
  checkProductInFavorites,
  removeProductFromFavorites
} from '@/modules/favorites/api/client/api';
import { useFavoriteStore } from '@/modules/favorites/store/store';
import Image from 'next/image';

interface Props {
  product: IProduct;
  className?: string;
}

const FavoriteAdd = (props: Props) => {
  const [isInFavorite, setInFavorite] = useState(false);

  const {product, className} = props;
  const {setProductsInFavoritesStore} = useFavoriteStore(state => state);

  useEffect(() => {
    const checkProductInFavorite = checkProductInFavorites(product.id as any);
    setInFavorite(checkProductInFavorite);
  }, [product.id]);

  const handleAddFavorite = useCallback(async () => {
    let res: IProduct[] = [];
    if (!isInFavorite) {
      res = await addProductInFavorites(product);
    } else {
      res = await removeProductFromFavorites(product.id as any);
    }
    setInFavorite(prev => !prev);
    setProductsInFavoritesStore(res);
  }, [isInFavorite, product, setProductsInFavoritesStore]);

  return (
    <Image
      style={{cursor: 'pointer'}}
      className={className}
      onClick={handleAddFavorite}
      src={isInFavorite ? activeHeartSVG : heartSVG}
      alt={''}
    />
  );
};

export default FavoriteAdd;
