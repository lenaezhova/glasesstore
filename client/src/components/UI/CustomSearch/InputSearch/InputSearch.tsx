import s from './InputSearch.module.scss';
import {SearchOutlined} from '@ant-design/icons';
import clsx from 'clsx';
import {useEffect, useRef, useState} from 'react';
import {useFocus} from '@/src/hooks/useFocus';
import {useDebounce} from '@/src/hooks/useDebounce';
import {Spin} from 'antd';
import {IProduct} from '@/modules/product/type/type';
import {getProductsInCategory} from '@/modules/catalog/api/client/api';
import InputSearchItem from '@/src/components/UI/CustomSearch/InputSearchItem/InputSearchItem';
import Link from 'next/link';

interface Props {
  className?: string;
}

const InputSearch = (props: Props) => {
  const [valueInput, setValueInput] = useState('');
  const debounceInput = useDebounce(valueInput, 500);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const {className} = props;

  const inputRef = useRef<any>();
  const isFocus = useFocus(inputRef, 100);

  const inputContainerRef = useRef<any>();

  // useEffect(() => {
  //   async function search() {
  //     setLoading(true);
  //     const res = await getProductsInCategory('all');
  //     const filterRes = res.products.filter((el) => el.title.toLowerCase().includes(valueInput.toLowerCase()));
  //     setProducts(filterRes);
  //     setLoading(false);
  //   }
  //
  //   if (debounceInput || valueInput.length < 0) search();
  // }, [debounceInput]); // eslint-disable-line

  const handleClickProductItem = (title: string) => {
    setValueInput(title);
  };

  return (
    <div className={s.searchInputContainer}>
      <div className={clsx(s.searchField, {}, [className])}>
        <input
          value={valueInput}
          ref={inputRef}
          className={s.searchInput}
          placeholder={'Искать товары'}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <button className={s.searchButton}>
          <SearchOutlined className={s.searchIcon}  />
        </button>
      </div>
      {/*<div ref={inputContainerRef}>*/}
      {/*  {isFocus && (*/}
      {/*    <div className={s.searchInputField}>*/}
      {/*      {loading ? (*/}
      {/*        <div className={s.spin}>*/}
      {/*          <Spin size={'large'} />*/}
      {/*        </div>*/}
      {/*      ) : (*/}
      {/*        <div className={s.listProducts}>*/}
      {/*          {products.map((el) => (*/}
      {/*            <Link href={'/product/' + el.id} key={el.id}>*/}
      {/*              <InputSearchItem onClick={() => handleClickProductItem(el.title)} product={el} />*/}
      {/*            </Link>*/}
      {/*          ))}*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
};

export default InputSearch;
