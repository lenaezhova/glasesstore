import React, { useMemo } from 'react';
import s from './CartFooter.module.scss';
import SwiperProducts from '@/src/components/SwiperProducts/SwiperProducts';
import { useAllProductsInCategory } from '@/modules/catalog/api/client/api';
import { useCartStore } from '@/modules/cart/store/store';
import { IProduct } from '@/modules/product/type/type';

const CartFooter = () => {
  const {products} = useCartStore(state => state);

  const {isLoading, data} = useAllProductsInCategory('all');

  const requiredProducts = useMemo(() => {
    if (data) {
      return data.products.reduce((acc, el) => {
        let check = true;
        for (let i = 0; i < products.length; i++) {
          if (products[i].product.id === el.id) {
            check = false;
            break;
          }
        }
        if (check) {
          acc.push(el);
        }
        return acc;
      }, [] as IProduct[]);
    }
  }, [data, products]);

  if (isLoading || !data) {
    return null;
  }

  return (
    <div className={s.swiper}>
      <SwiperProducts title={'Рекомендуем так же'} products={requiredProducts}/>
    </div>
  );
};

export default CartFooter;
