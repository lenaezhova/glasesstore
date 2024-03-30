import s from './CartFiledBuy.module.scss';
import { useCartStore } from '@/modules/cart/store/store';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import {useAllBasket} from "@/src/http/hooks/useAllBasket";
const CartFiledBuy = () => {
  const {data} = useAllBasket();
  const totalPrice = data?.reduce((acc, el) => acc += el.count, 0) || 0;
  const router = useRouter();

  return (
    <div className={s.block}>
      <div className={s.container}>
        <div className={s.priceContainer}>
          <div> Итого: </div>
          <div> {totalPrice} ₽ </div>
        </div>
        <Button type={'primary'} onClick={() => router.push('/createorder')}>Оформить заказ</Button>
      </div>
    </div>
  );
};

export default CartFiledBuy;
