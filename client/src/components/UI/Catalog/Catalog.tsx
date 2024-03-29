'use client';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import s from './Catalog.module.scss';
import { getCategories } from '@/modules/catalog/api/server/api';
import { useCatalogStore } from '@/modules/catalog/store/store';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Catalog = () => {
  const [isLoading, setLoading] = useState(true);

  const { setCategories } = useCatalogStore(state => state);

  const router = useRouter();

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
    setLoading(false);
  }, [setCategories]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Button
        className={s.AntdBtn}
        icon={<MenuOutlined />}
        onClick={() => router.push('/catalog/all')}
      >
        Каталог
      </Button>
    </>

  );
};

export default Catalog;
