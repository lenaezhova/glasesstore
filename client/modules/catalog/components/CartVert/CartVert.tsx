import s from './CartVert.module.scss';
import CartVertItem from '@/modules/catalog/components/CartVertItem/CartVertItem';
import { IProduct } from '@/modules/product/type/type';

interface Props {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void
}

const CartVert = (props: Props) => {
  const {products} = props;

  return (
    <div className={s.containerItems}>

      {products.map((el, index) => {
        return index < products.length - 1
          ? <CartVertItem key={el.id} product={el} className={s.underline}/>
          : <CartVertItem key={el.id} product={el}/>;
      })}

    </div>
  );
};

export default CartVert;
