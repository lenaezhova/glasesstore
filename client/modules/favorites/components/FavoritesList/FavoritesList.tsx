import s from './FavoritesList.module.scss';
import { useFavoriteStore } from '@/modules/favorites/store/store';
import CardCatalog from '@/src/components/CardCatalog/CardCatalog';
import {useAllFavorite} from "@/src/http/hooks/useAllFavroite";
const FavoritesList = () => {
  const {data} = useAllFavorite();
  return (
    <div className={s.block}>
      {/* <FavoritesSideBar/> */}
      <CardCatalog productsId={data?.productsId}/>
    </div>
  );
};

export default FavoritesList;
