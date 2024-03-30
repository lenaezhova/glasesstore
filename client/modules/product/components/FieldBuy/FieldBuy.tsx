'use client';
import s from './FieldBuy.module.scss';
import { Button } from 'antd';
import InStockCounter from '@/src/components/UI/InStockCounter/InStockCounter';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/modules/cart/store/store';
import {IProduct} from '@/src/http/api/Product/ProductInfoEndpoints/type';
import FavoriteAddSVG from '@/src/components/UI/favoriteAddSVG/favoriteAddSVG';
import { useFavoriteStore } from '@/modules/favorites/store/store';
import {useOneProduct} from '@/src/http/hooks/useOneProduct';
import {useAllFavorite} from "@/src/http/hooks/useAllFavroite";
import {useAllBasket} from "@/src/http/hooks/useAllBasket";

interface Props {
  id: string | undefined;
}

const FieldBuy = ({id} : Props) => {
  const {checkProductInFavorite, addInFavoriteAsync} = useAllFavorite();
  const {getProductFromCart, addInCartAsync} = useAllBasket();
  const {data: product} = useOneProduct(id);

  const inFavorite = checkProductInFavorite(id)
  const inCart = getProductFromCart(id)?.count;

  const router = useRouter();

  async function handleAddFavorite () {
    await addInFavoriteAsync(id);
  }

  const handleBuy = async () => {
    await addInCartAsync({
      productId: id,
      typeAction: 'add'
    })
  }

  return (
    <div className={s.block}>
      <div className={s.container}>
        <div className={s.containerPrice}>
          Цена: <h1>{product?.price} ₽</h1>
        </div>

        <div className={s.containerButtons}>
          { inCart
            ? <Button className={s.buttonInCart} onClick={() => router.push('/cart')}>В корзине</Button>
            : <Button className={s.buttonBuy} type='primary' onClick={handleBuy}>Купить</Button>
          }
          <div className={s.favoriteContainer}>
            { inFavorite
              ? <FavoriteAddSVG fill={'#7A6CFD'} onClick={handleAddFavorite}/>
              : <FavoriteAddSVG onClick={handleAddFavorite}/>
            }
          </div>
        </div>

        <InStockCounter
          productId={id}
          className={s.inStockCounter}
          classNameButtonInc={s.counterInc}
          classNameButtonDec={s.counterDec}
          classNameCount={s.counterCount}
        />
        <div>{1 ? `${1} ед. в наличии` : 'Нет в наличии'}</div>
      </div>
    </div>
  );
};

export default FieldBuy;
