'use client';
import { useAllProductsInCategory } from '@/modules/catalog/api/client/api';
import { useCatalogStore } from '@/modules/catalog/store/store';
import CatalogList from '@/modules/catalog/components/CatalogList/CatalogList';
import { useEffect } from 'react';
import s from './CatalogPage.module.scss';
import CatalogSidebar from '@/modules/catalog/components/CatalogSidebar/CatalogSidebar';
import { Spin } from 'antd';
import SwiperProducts from '@/src/components/SwiperProducts/SwiperProducts';
import { getProductsInRecentlyStore } from '@/modules/product/api/client/api';
import {useAllProduct} from '@/src/http/hooks/useAllProduct';

interface Props {
  name: string;
}

export default function CatalogPage(props: Props) {
  const {
    products,
    setProducts,
    setCategoryName,
    setTotal
  } = useCatalogStore(state => state);
  const {} = useAllProduct();

  const { name } = props;
  const { data, isLoading } = useAllProductsInCategory(name);
  const recentlyStore = getProductsInRecentlyStore();

  useEffect(() => {
    setCategoryName(name);
    if (data) {
      setProducts(data.products);
    }
  }, [setCategoryName, name, setTotal, data, setProducts, isLoading]);

  if (isLoading || !data) {
    return <div className={s.spinner}>
      <Spin/>
    </div>;
  }

  return (
    <>
      <div className={s.block}>
        <CatalogSidebar/>
        <CatalogList/>
      </div>
      {/*<div className={s.swiper}>*/}
      {/*  <SwiperProducts key={'recently'} title={'Вы недавно смотрели'} products={recentlyStore} hideFooter={true}/>*/}
      {/*</div>*/}
    </>
  );
}
