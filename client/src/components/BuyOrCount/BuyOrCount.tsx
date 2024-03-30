
import InStockCounter from '@/src/components/UI/InStockCounter/InStockCounter';
import {Button} from 'antd';
import {useAllBasket} from "@/src/http/hooks/useAllBasket";

interface Props {
  productId?: string;
  classNameButton?: string;
  classNameCounter?: string;
  classNameButtonInc?: string;
  classNameButtonDec?: string;
  classNameCount?: string;
}
const BuyOrCount = (props: Props) => {
  const {productId, classNameButton, classNameCounter, classNameButtonInc, classNameButtonDec, classNameCount} = props;

  const {getProductFromCart, addInCartAsync} = useAllBasket();

  async function addProduct() {
    await addInCartAsync({
      productId: productId,
      typeAction: "add"
    });
  }
  //
  // if (isLoading) {
  //   return null;
  // }

  return getProductFromCart(productId)?.count ? (
    <InStockCounter
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
