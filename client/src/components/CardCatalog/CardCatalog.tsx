import s from './CardCatalog.module.scss';
import {IProduct} from '@/src/http/api/Product/ProductInfoEndpoints/type';
import CardCatalogItem from '@/src/components/CardCatalog/CardCatalogItem/CardCatalogItem';
import {useAllProduct} from '@/src/http/hooks/useAllProduct';
import {useAllFavorite} from '@/src/http/hooks/useAllFavroite';

interface Props {
  products?: IProduct[];
  productsId?: string[];
}

const CardCatalog = ({products, productsId}: Props) => {

  return (
    <div className={s.listContainer}>
      <div className={s.listItemsContainer}>
        {(productsId || products)?.map((el, index) => {
          const key = typeof el === 'string' ? el : el._id;
          const product = typeof el === 'string' ? {} as IProduct : el;
          const id = typeof el === 'string' ? el : undefined;
          return (
            <div key={key}>
              <CardCatalogItem product={product} productId={id}/>
              {(index + 1) % 4 === 0 && <div className={s.underline}></div>}
            </div>
          );
        }
        )}
      </div>
    </div>
  );
};

export default CardCatalog;
