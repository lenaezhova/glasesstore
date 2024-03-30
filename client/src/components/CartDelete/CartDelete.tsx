import {useCartStore} from '@/modules/cart/store/store';
import {useCallback} from 'react';
import {removeProductInCart} from '@/modules/cart/api/client/api';
import {IProduct} from '@/modules/product/type/type';
import TrashSVG from '@/src/components/UI/TrashSVG/TrashSVG';
import {useAllBasket} from "@/src/http/hooks/useAllBasket";

interface Props {
  productId?: string;
  className?: string;
}

const CartDelete = ({productId, className}: Props) => {
  const {addInCartAsync} = useAllBasket();
  const handleDelete = async () => {
    await addInCartAsync({
      productId,
      typeAction: "delete"
    })
  }

  return <TrashSVG className={className} onClick={handleDelete} />;
};

export default CartDelete;
