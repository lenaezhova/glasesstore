'use client';
import s from './FavoritesPage.module.scss';
import FavoritesEmpty from '@/modules/favorites/components/FavoritesEmpty/FavoritesEmpty';
import FavoritesList from '@/modules/favorites/components/FavoritesList/FavoritesList';
import { useFavoriteStore } from '@/modules/favorites/store/store';

const FavoritesPage = () => {
  const { products } = useFavoriteStore(state => state);

  return (
    <div className={s.block}>
      { !products.length
        ? <FavoritesEmpty/>
        : <FavoritesList/>
      }
    </div>
  );
};

export default FavoritesPage;
