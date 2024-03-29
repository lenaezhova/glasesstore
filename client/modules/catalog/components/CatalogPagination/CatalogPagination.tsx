import s from './CatalogPagination.module.scss';
import { useCatalogStore } from '@/modules/catalog/store/store';
import { Pagination, PaginationProps } from 'antd';

const CatalogPagination = () => {
  const {total, setOffset} = useCatalogStore(state => state);

  const onPaginationChange: PaginationProps['onChange'] = (pageNumber) => {
    setOffset(pageNumber);
  };

  return (
    <Pagination onChange={onPaginationChange} defaultCurrent={1} total={total} />
  );
};

export default CatalogPagination;
