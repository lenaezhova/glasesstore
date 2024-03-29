'use client';

import s from './DemonstrationList.module.scss';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
import {useQuery} from '@tanstack/react-query';
import {mockDemonstrationData} from '@/src/typography';

export default function DemonstrationList() {
  const testFetcher = async () => {
    const res = await fetch(
      'https://api.slingacademy.com/v1/sample-data/photos/1',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    );

    if (!res.ok) {
      throw new Error('Ошибка');
    }

    return res.json();
  };

  function useTestData() {
    return useQuery({
      queryKey: ['userData'],
      queryFn: () => testFetcher(),
      refetchOnWindowFocus: false,
      staleTime: Infinity
    });
  }

  const {data, isSuccess} = useTestData();

  return (
    <div className={s.wrapper}>
      <h2>Прелоадеры изображений / смена темы</h2>
      <ul className={s.list}>
        {mockDemonstrationData.map(({id, title, image}) => (
          <li key={id} className={s.item}>
            <PreloaderImage
              className={s.imageWrapper}
              sizes='100vw'
              imgClassName={s.img}
              src={isSuccess && data.photo.url}
              alt={title}
              priority={true}
              objectFit='cover'
              preloaderSize='large'
            />
            <div className={s.innerWrapper}>
              <h2>{title}</h2>
              <button className={s.button}>Button</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
