import s from './InStockCounter.module.scss';
import clsx from 'clsx';
import { RefObject, memo } from 'react';
import {useAllBasket} from "@/src/http/hooks/useAllBasket";

interface Props {
  productId?: string;
  className?: string
  classNameButtonInc? : string;
  classNameButtonDec? : string;
  classNameCount?: string;
  ref?: RefObject<any>;
}

const InStockCounter = (props: Props) => {
  const {
    productId,
    className,
    classNameButtonInc,
    classNameButtonDec,
    classNameCount
  } = props;

  const {addInCartAsync, getProductFromCart} = useAllBasket();
  const currentProduct = getProductFromCart(productId);

  async function addProduct() {
    await addInCartAsync({
      productId: productId,
      typeAction: "add"
    });
  }

  async function removeProduct() {
    await addInCartAsync({
      productId: productId,
      typeAction: "remove"
    });
  }

  return (
    <div className={className}>
      <div className={s.inStockContainer}>
        <button className={clsx(s.inStockDecrement, [classNameButtonDec])} onClick={removeProduct}>-</button>
        <div className={clsx(s.inStockCount, [classNameCount])}>{currentProduct?.count || 0}</div>
        <button className={clsx(s.inStockIncrement, [classNameButtonInc])} onClick={addProduct}>+</button>
      </div>
    </div>
  );
};

export default memo(InStockCounter);
