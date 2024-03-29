import {useCartStore} from '@/modules/cart/store/store';
import {useCallback} from 'react';
import {removeProductInCart} from '@/modules/cart/api/client/api';
import {IProduct} from '@/modules/product/type/type';
import TrashSVG from '@/src/components/UI/TrashSVG/TrashSVG';

interface Props {
  product: IProduct;
  className?: string;
}

const CartDelete = (props: Props) => {
  const {setProducts} = useCartStore((state) => state);

  const {product, className} = props;

  const handleDelete = useCallback(() => {
    const res = removeProductInCart(product.id);
    res.then((products) => setProducts(products));
  }, []); // eslint-disable-line

  return <TrashSVG className={className} onClick={handleDelete} />;
};

export default CartDelete;
