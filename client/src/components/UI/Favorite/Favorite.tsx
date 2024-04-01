import React, { useEffect } from 'react';
import { Button } from 'antd';
import s from './Favorite.module.scss';
import { HeartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useFavoriteStore } from '@/modules/favorites/store/store';
import { getFavorites } from '@/modules/favorites/api/client/api';
import {useAllFavorite} from '@/src/http/hooks/useAllFavroite';
import {IconProfile} from '@/src/ui/IconProfile';
import {IconFavorite} from "@/src/ui/IconFavorite";

const Favorite = () => {
  // const {products, setProductsInFavoritesStore} = useFavoriteStore(state => state);
  const {data, isLoading} = useAllFavorite();

  const router = useRouter();

  // useEffect(() => {
  //   const res = getFavorites();
  //   setProductsInFavoritesStore(res);
  // }, [setProductsInFavoritesStore]);

  return (
    <button
      className={s.btnIcon}
      onClick={() => router.push('/favorites')}
    >
      <div className={s.favoriteContainer}>
        <div className={s.iconContainer}>
          <IconFavorite className={s.icon} style={{fontSize: '26px'}}/>
           {data?.productsId?.length && data?.productsId?.length > 0
            ? <div className={s.count}>{data?.productsId?.length}</div>
            : null
           }
        </div>
      </div>
    </button>
  // <Button
  //   size={'large'}
  //   className={s.AntdBtn}
  //   icon={
  //     <div className={s.favoriteContainer}>
  //       <div className={s.iconContainer}>
  //         <HeartOutlined className={s.icon} style={{fontSize: '20px'}}/>
  //         {data?.productsId?.length && data?.productsId?.length > 0
  //           ? <div className={s.count}>{data?.productsId?.length}</div>
  //           : null
  //         }
  //       </div>
  //         <div className={s.text}>Избранное</div>
  //       </div>
  //     }
  //     onClick={() => router.push('/favorites')}
  //   />
  );
};

export default Favorite;
