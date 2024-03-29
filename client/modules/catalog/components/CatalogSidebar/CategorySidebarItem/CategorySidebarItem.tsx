import React, {useEffect, useState} from 'react';
import s from './CategorySidebarItem.module.scss';
import Link from 'next/link';
import {TInfoProduct} from '@/src/http/api/Product/ProductAdminGetEndpoints/type';
import {useCategoryProduct} from '@/src/http/hooks/useCategoryProduct';
import {Spin} from 'antd';

interface ICategorySidebarItem {
  queryKey: TInfoProduct;
}

const CategorySidebarItem = ({ queryKey}: ICategorySidebarItem) => {
  const [isLoadingMain, setIsLoadingMain] = useState(true);
  const {data, isLoading} = useCategoryProduct(queryKey);
  console.log(isLoading);

  useEffect(() => {
    if (isLoading) return
    setTimeout(() => {
      setIsLoadingMain(false)
    }, 300)
  }, [isLoading]);

  if (isLoadingMain) {
    return <div className={s.loading}>
      <Spin/>
    </div>
  }

  return (
      <div className={s.categoryItems}>
        {data?.map((el, index) =>
          <div
            key={el._id}
            // href={'/catalog/' + el.name}
            // className={
            //   currentCategory === el
            //     ? s.categoryItemActive
            //     : s.categoryItem
            // }
            className={s.categoryItem}
          >
            {el.name}
          </div>
        )}
      </div>
  );
};

export default CategorySidebarItem;
