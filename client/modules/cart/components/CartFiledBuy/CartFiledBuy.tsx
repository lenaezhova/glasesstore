import s from './CartFiledBuy.module.scss';
import { useCartStore } from '@/modules/cart/store/store';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
const CartFiledBuy = () => {
  const {totalPrice} = useCartStore(state => state);

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
