'use client';
import s from './MenuCatalog.module.scss';
import Link from 'next/link';
import { useCatalogStore } from '@/modules/catalog/store/store';
export default function MenuCatalog () {
  const {categories} = useCatalogStore(state => state);

  return (
    <div className={s.isActive}>
      {categories.map(el =>
        <Link key={el} href={`/catalog/${el}`}>{el}</Link>
      )}
    </div>
  );
};
