import s from './CartListMain.module.scss';
import {useCartStore} from '@/modules/cart/store/store';
import CartItem from '@/modules/cart/components/CartItem/CartItem';
import {Button} from 'antd';
import {clearCart} from '@/modules/cart/api/client/api';

const CartListMain = () => {
  const {products, setProducts} = useCartStore();

  function handleClearCart() {
    clearCart();
    setProducts([]);
  }

  return (
    <div className={s.block}>
      <Button onClick={handleClearCart}> Очистить корзину </Button>
      <div className={s.containerItems}>
        {products.map((el, index) => {
          return index < products.length - 1 ? (
            <CartItem key={el.product.id} cartProduct={el} className={s.underline} />
          ) : (
            <CartItem key={el.product.id} cartProduct={el} />
          );
        })}
      </div>
    </div>
  );
};

export default CartListMain;
