import s from './CartList.module.scss';
import CartListMain from '@/modules/cart/components/CartListMain/CartListMain';
import CartFiledBuy from '@/modules/cart/components/CartFiledBuy/CartFiledBuy';
import CartFooter from '@/modules/cart/components/CartFooter/CartFooter';

const CartList = () => {

  return (
    <div className={s.block}>
      <div className={s.container}>
        <CartListMain/>
        <CartFiledBuy/>
      </div>
      <CartFooter/>
    </div>
  );
};

export default CartList;
