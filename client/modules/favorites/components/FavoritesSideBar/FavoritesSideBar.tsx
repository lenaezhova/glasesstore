import s from './FavoritesSideBar.module.scss';
import {useCatalogStore} from '@/modules/catalog/store/store';
import Link from 'next/link';

const FavoritesSidebar = () => {
  const {categories} = useCatalogStore((state) => state);

  return (
    <div className={s.block}>
      <h2>Категория</h2>
      <>
        {categories.map((el) => (
          <Link key={el} href={'/catalog/' + el}>
            {el}
          </Link>
        ))}
      </>
    </div>
  );
};

export default FavoritesSidebar;
