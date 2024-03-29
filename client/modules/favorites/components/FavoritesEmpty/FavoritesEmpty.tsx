import s from './Favorites.module.scss';
import { Button } from 'antd';
import Image from 'next/image';
import HeartSVG from '@/public/images/heart.svg';
import { useRouter } from 'next/navigation';

const FavoritesEmpty = () => {
  const router = useRouter();

  return (
    <div className={s.block}>
      <div className={s.container}>

        <Image src={HeartSVG} alt={''}/>
        <h3 className={s.title}>Список избранного пуст</h3>
        <p className={s.text}>Добавляйте товары в избранное — находите товары и нажимайте на сердечко!</p>
        <Button type={'primary'} onClick={() => router.push('/')}>Перейти к покупкам</Button>

      </div>
    </div>
  );
};

export default FavoritesEmpty;
