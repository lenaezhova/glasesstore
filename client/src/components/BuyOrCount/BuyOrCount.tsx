import InStockCounter from '@/src/components/UI/InStockCounter/InStockCounter';
import {Button} from 'antd';
import {useAllBasket} from '@/src/http/hooks/useAllBasket';
import {useEffect} from 'react';

interface Props {
  productId?: string;
  classNameButton?: string;
  classNameCounter?: string;
  classNameButtonInc?: string;
  classNameButtonDec?: string;
  classNameCount?: string;
  onChange?: (newCount: number, oldCount: number) => void;
}
const BuyOrCount = (props: Props) => {
  const {productId, onChange, classNameButton, classNameCounter, classNameButtonInc, classNameButtonDec, classNameCount} = props;

  const {data, getProductFromCart, addInCartAsync} = useAllBasket();
  const count = getProductFromCart(productId)?.count;

  useEffect(() => {
    if (onChange) onChange(count || 1, 0);
  }, [productId]);

  async function addProduct() {
    if (onChange && count) {
      onChange(1, count);
    }
    await addInCartAsync({
      productId,
      typeAction: 'add'
    });
  }
  //
  // if (isLoading) {
  //   return null;
  // }

  return count ? (
    <InStockCounter
      onChange={onChange}
      productId={productId}
      className={classNameCounter}
      classNameButtonInc={classNameButtonInc}
      classNameCount={classNameCount}
      classNameButtonDec={classNameButtonDec}
    />
  ) : (
    <Button className={classNameButton} type={'primary'} onClick={addProduct}>
      Купить
    </Button>
  );
};

export default BuyOrCount;
