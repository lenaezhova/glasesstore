import s from './FavoritesList.module.scss';
import { useFavoriteStore } from '@/modules/favorites/store/store';
import CardCatalog from '@/src/components/CardCatalog/CardCatalog';
const FavoritesList = () => {
  const { products } = useFavoriteStore(state => state);

  return (
    <div className={s.block}>
      {/* <FavoritesSideBar/> */}
      <CardCatalog products={products}/>
    </div>
  );
};

export default FavoritesList;
