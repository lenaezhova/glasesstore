import React, { useEffect } from 'react';
import { Button } from 'antd';
import s from './Favorite.module.scss';
import { HeartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useFavoriteStore } from '@/modules/favorites/store/store';
import { getFavorites } from '@/modules/favorites/api/client/api';

const Favorite = () => {
  const {products, setProductsInFavoritesStore} = useFavoriteStore(state => state);;

  const router = useRouter();

  useEffect(() => {
    const res = getFavorites();
    setProductsInFavoritesStore(res);
  }, [setProductsInFavoritesStore]);

  return (
    <Button
      size={'large'}
      className={s.AntdBtn}
      icon={
        <div className={s.favoriteContainer}>
          <div className={s.iconContainer}>
            <HeartOutlined className={s.icon} style={{ fontSize: '20px' }}/>
            {products.length > 0
              ? <div className={s.count}>{products.length}</div>
              : null
            }
          </div>
          <div className={s.text}>Избранное</div>
        </div>
      }
      onClick={() => router.push('/favorites')}
    />
  );
};

export default Favorite;
