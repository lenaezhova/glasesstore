import s from './CartList.module.scss';
import CartListMain from '@/modules/cart/components/CartListMain/CartListMain';
import CartFiledBuy from '@/modules/cart/components/CartFiledBuy/CartFiledBuy';
import CartFooter from '@/modules/cart/components/CartFooter/CartFooter';
import {useState} from "react";

const CartList = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  return (
    <div className={s.block}>
      <div className={s.container}>
        <CartListMain setTotalPrice={setTotalPrice}/>
        <CartFiledBuy totalPrice={totalPrice}/>
      </div>
    </div>
  );
};

export default CartList;
