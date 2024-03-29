import s from './CartEmpty.module.scss';
import { Button } from 'antd';
import Image from 'next/image';
import CartSVG from '@/public/images/cartEmpty.svg';
import { useRouter } from 'next/navigation';

const CartEmpty = () => {
  const router = useRouter();

  return (
    <div className={s.block}>
      <div className={s.container}>
        <Image src={CartSVG} alt={''}/>
        <h3 className={s.title}>В корзине пока пусто</h3>
        <Button type={'primary'} onClick={() => router.push('/')}>Перейти к покупкам</Button>
      </div>
    </div>
  );
};

export default CartEmpty;
