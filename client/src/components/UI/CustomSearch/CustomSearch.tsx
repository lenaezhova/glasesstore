'use client';
import { memo, ReactNode, useEffect, useRef } from 'react';
import s from './CustomSearch.module.scss';
import InputSearch from '@/src/components/UI/CustomSearch/InputSearch/InputSearch';
interface Props {
  className?: string;
  icon?: ReactNode;
  placeholder?: string;
}

const CustomSearch = (props : Props) => {
  const ref = useRef<any>();

  const { className } = props;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        console.log('search');
      };
    };

    const element = ref.current;

    element.addEventListener('keydown', handleKeyDown);

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className={s.searchContainer}>
      <InputSearch className={className}/>
    </div>
  );
};

export default memo(CustomSearch);
