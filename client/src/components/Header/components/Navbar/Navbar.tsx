'use client';
import s from './Navbar.module.scss';
import Cart from '@/src/components/UI/Cart/Cart';
import Favorite from '@/src/components/UI/Favorite/Favorite';
import Catalog from '@/src/components/UI/Catalog/Catalog';
import CustomSearch from '@/src/components/UI/CustomSearch/CustomSearch';
import AuthIco from '@/src/components/AuthIco/AuthIco';

const Navbar = () => {
  return (
    <div className={s.navbarContainer}>
      <>
        <div className={s.leftContainer}>
          <Catalog />
          <CustomSearch />
        </div>
      </>

      <div className={s.rightContainer}>
        <AuthIco />
        <Favorite />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
