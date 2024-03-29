import s from './CardCatalog.module.scss';
import { IProduct } from '@/modules/product/type/type';
import CardCatalogItem from '@/src/components/CardCatalog/CardCatalogItem/CardCatalogItem';
import {useAllProduct} from '@/src/http/hooks/useAllProduct';

interface Props {
  products: IProduct[];
}

const CardCatalog = (props: Props) => {
  const { products } = props;
  const {data} = useAllProduct();

  return (
    <div className={s.listContainer}>
      <div className={s.listItemsContainer}>
        {data?.map((el, index) =>
          <div key={el._id}>
            <CardCatalogItem product={el}/>
            {(index + 1) % 4 === 0 && <div className={s.underline}></div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardCatalog;
