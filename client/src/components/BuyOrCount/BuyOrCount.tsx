import {IProduct} from '@/src/http/api/Product/ProductInfoEndpoints/type';
import {
  addNewInfoInCart,
  addProductInCart,
  getCountInProduct,
  removeProductInCart
} from '@/modules/cart/api/client/api';
import {useCallback, useEffect, useState} from 'react';
import InStockCounter from '@/src/components/UI/InStockCounter/InStockCounter';
import {Button} from 'antd';
import {useCartStore} from '@/modules/cart/store/store';

interface Props {
  product: any;
  classNameButton?: string;
  classNameCounter?: string;
  classNameButtonInc?: string;
  classNameButtonDec?: string;
  classNameCount?: string;
}
const BuyOrCount = (props: Props) => {
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const {setProducts} = useCartStore((state) => state);

  const {product, classNameButton, classNameCounter, classNameButtonInc, classNameButtonDec, classNameCount} = props;

  useEffect(() => {
    getCountInProduct(product._id).then((res) => setCount(res));
    setLoading(false);
  }, [product._id]);

  async function onIncrement() {
    if (count < 10) {
      setCount(count + 1);
      const res = await addNewInfoInCart(product._id, 1);
      setProducts(res);
    }
  }

  async function onDecrement() {
    if (count > -1) {
      setCount(count - 1);
      if (count === 1) {
        const res = await removeProductInCart(product._id);
        setProducts(res);
      } else {
        const res = await addNewInfoInCart(product._id, -1);
        setProducts(res);
      }
    }
  }

  const handleBuy = useCallback(() => {
    const res = addProductInCart(product, 1);
    res.then((product) => setProducts(product));
    setCount(1);
  }, [product]);

  if (isLoading) {
    return null;
  }

  return count ? (
    <InStockCounter
      className={classNameCounter}
      count={count}
      setCount={setCount}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      classNameButtonInc={classNameButtonInc}
      classNameCount={classNameCount}
      classNameButtonDec={classNameButtonDec}
    />
  ) : (
    <Button className={classNameButton} type={'primary'} onClick={handleBuy}>
      Купить
    </Button>
  );
};

export default BuyOrCount;
