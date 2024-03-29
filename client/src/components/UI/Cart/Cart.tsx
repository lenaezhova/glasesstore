import { Button } from 'antd';
import s from './Cart.module.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/modules/cart/store/store';
import React, { useEffect } from 'react';
import { getCart } from '@/modules/cart/api/client/api';

const Cart = () => {
  const {products} = useCartStore(state => state);
  const { setProducts } = useCartStore(state => state);

  const router = useRouter();

  useEffect(() => {
    const res = getCart();
    setProducts(res);
  }, [setProducts]);

  return (
    <Button
      size={'large'}
      className={s.AntdBtn}
      icon={
        <div className={s.iconContainer}>
          <ShoppingCartOutlined className={s.cartIcon} style={{ fontSize: '25px'}} />
          {products.length > 0
            ? <div className={s.count}>{products.length}</div>
            : null
          }
          <div className={s.text}>Корзина</div>
        </div>
      }
      onClick={() => router.push('/cart')}
    />
  );
};

export default Cart;
