'use client';
import s from './FavoritesPage.module.scss';
import FavoritesEmpty from '@/modules/favorites/components/FavoritesEmpty/FavoritesEmpty';
import FavoritesList from '@/modules/favorites/components/FavoritesList/FavoritesList';
import { useFavoriteStore } from '@/modules/favorites/store/store';
import {useAllFavorite} from "@/src/http/hooks/useAllFavroite";

const FavoritesPage = () => {
  const {data} = useAllFavorite();

  return (
    <div className={s.block}>
      { !data?.productsId.length
        ? <FavoritesEmpty/>
        : <FavoritesList/>
      }
    </div>
  );
};

export default FavoritesPage;
