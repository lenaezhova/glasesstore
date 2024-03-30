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

interface Props {
  id: string | undefined;
}

const FieldBuy = ({id} : Props) => {
  const [count, setCount] = useState(0);
  const [inCart, setInCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { setProducts } = useCartStore(state => state);
  const { setProductsInFavoritesStore } = useFavoriteStore(state => state);
  const {checkProductInFavorite, addInFavoriteAsync} = useAllFavorite();
  const inFavorite = checkProductInFavorite(id)

  const router = useRouter();
  const {data: product} = useOneProduct(id);
  // const {product} = props;
  // const {id, price, stock} = product;

  // useEffect(() => {
  //   const checkInCart = checkProductInCart(id);
  //   setInCart(checkInCart);
  //
  //   const checkInFavorite = checkProductInFavorites(id);
  //   setInFavorite(checkInFavorite);
  //
  //   const product = getSingleProductInCart(id);
  //   if (product) {
  //     setCount(product.count);
  //   }
  //
  //   setIsLoading(false);
  // }, [id]);

  async function handleAddFavorite () {
    await addInFavoriteAsync(id);
  }

  async function handleBuy() {
    console.log('buy');
    // setCount(count === 0 ? count + 1 : count);
    // const res = await addProductInCart(product, count === 0 ? count + 1 : count);
    // setProducts(res);
    // setInCart(true);
  }

  async function onIncrement () {
    if (count < 10) {
      setCount(count + 1);
      // if (inCart) {
      //   const res = await addNewInfoInCart(id, 1);
      //   setProducts(res);
      // }
    }
  }

  async function onDecrement () {
    if (count > 0) {
      setCount(count - 1);
      // if (count === 1) {
      //   const res = await removeProductInCart(product._id);
      //   setProducts(res);
      //   setInCart(false);
      // }
      // if (inCart) {
      //   const res = await addNewInfoInCart(id, -1);
      //   setProducts(res);
      // }
    }
  }

  // if (isLoading) {
  //   return null;
  // }

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
          className={s.inStockCounter}
          count={count}
          setCount={setCount}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
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
