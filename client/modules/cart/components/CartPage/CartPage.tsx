'use client';
import s from './CartPage.module.scss';
import { useCartStore } from '@/modules/cart/store/store';
import CartList from '@/modules/cart/components/CartList/CartList';
import CartEmpty from '@/modules/cart/components/CartEmpty/CartEmpty';
import {useAllBasket} from "@/src/http/hooks/useAllBasket";

const CartPage = () => {
  const {data} = useAllBasket();

  return (

      data?.length && data?.length > 0
        ? <CartList/>
        : <CartEmpty/>


  );
};

export default CartPage;
