'use client';
import s from './CartPage.module.scss';
import { useCartStore } from '@/modules/cart/store/store';
import CartList from '@/modules/cart/components/CartList/CartList';
import CartEmpty from '@/modules/cart/components/CartEmpty/CartEmpty';

const CartPage = () => {
  const { products } = useCartStore(state => state);

  return (
    <div className={s.block}>

      {products.length > 0
        ? <CartList/>
        : <CartEmpty/>
      }

    </div>
  );
};

export default CartPage;
