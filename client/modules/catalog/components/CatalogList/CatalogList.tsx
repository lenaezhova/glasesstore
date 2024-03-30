import s from './CatalogList.module.scss';
import { useCatalogStore } from '@/modules/catalog/store/store';
import { useCallback, useEffect, useState } from 'react';
import CardCatalog from '@/src/components/CardCatalog/CardCatalog';
import CartVert from '@/modules/catalog/components/CartVert/CartVert';
import Image from 'next/image';
import menuVec from '@/public/images/menuVec.svg';
import menuVecBlue from '@/public/images/menuVecBlue.svg';
import menuBlock from '@/public/images/menuBlock.svg';
import menuBlockBlue from '@/public/images/menuBlockBlue.svg';
import {useAllProduct} from "@/src/http/hooks/useAllProduct";

const CatalogList = () => {
  const [isVert, setVert] = useState(false);

  // const {
  //   products,
  //   setProducts,
  //   categoryName,
  //   offset,
  //   setTotal
  // } = useCatalogStore(state => state);

  const {data} = useAllProduct();

  useEffect(() => {
    const res = localStorage.getItem('menuCatalogView');
    setVert(JSON.parse(res || 'false'));
  }, []);

  const handleClickMenuBlock = useCallback(() => {
    setVert(false);
    localStorage.setItem('menuCatalogView', 'false');
  }, []);

  const handleClickMenuVec = useCallback(() => {
    setVert(true);
    localStorage.setItem('menuCatalogView', 'true');
  }, []);

  return (
    <div className={s.block}>

      <div className={s.containerHeader}>
        <Image
          className={s.menuIcon}
          src={isVert ? menuBlock : menuBlockBlue}
          alt={''}
          onClick={handleClickMenuBlock}
        />

        <Image
          className={s.menuIcon}
          src={isVert ? menuVecBlue : menuVec}
          alt={''}
          onClick={handleClickMenuVec}
        />
      </div>

      <div className={s.underline}/>

      {/*{isVert*/}
      {/*  ? <CartVert products={products} setProducts={setProducts}/>*/}
      {/*  : */}
      <CardCatalog products={data}/>
      {/*}*/}
    </div>
  );
};

export default CatalogList;
