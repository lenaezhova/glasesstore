import s from './CartListMain.module.scss';
import CartItem from '@/modules/cart/components/CartItem/CartItem';
import {Button} from 'antd';
import {useAllBasket} from "@/src/http/hooks/useAllBasket";
import clsx from "clsx";

const CartListMain = () => {
  const {data, clearBasketAsync} = useAllBasket();
  async function handleClearCart() {
    await clearBasketAsync();
  }

  return (
    <div className={s.block}>
      <Button onClick={handleClearCart}> Очистить корзину </Button>
      <div className={s.containerItems}>
        {data?.map((el, index) =>
          <CartItem
            key={el.productId}
            productId={el.productId}
            className={clsx({[s.underline]: index < data?.length - 1})}
          />
        )}
      </div>
    </div>
  );
};

export default CartListMain;
