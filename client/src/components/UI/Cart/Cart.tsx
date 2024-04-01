import { Button } from 'antd';
import s from './Cart.module.scss';
import { useRouter } from 'next/navigation';
import React from 'react';
import {useAllBasket} from '@/src/http/hooks/useAllBasket';
import {IconCart} from '@/src/ui/IconCart';

const Cart = () => {
  const { data } = useAllBasket();

  const router = useRouter();

  return (
    <button
      className={s.btnIcon}
      onClick={() => router.push('/cart')}
    >
      <div className={s.iconContainer}>
        <IconCart className={s.cartIcon} style={{fontSize: '26px'}}/>
         {data?.length && data?.length > 0
          ? <div className={s.count}>{data?.length}</div>
          : null
         }
        {/* <div className={s.text}>Корзина</div> */}
      </div>
    </button>
    // <Button
    //   size={'large'}
    //   className={s.AntdBtn}
    //   icon={
    //     <div className={s.iconContainer}>
    //       <ShoppingCartOutlined className={s.cartIcon} style={{fontSize: '25px'}}/>
    //       {data?.length && data?.length > 0
    //         ? <div className={s.count}>{data?.length}</div>
  //         : null
  //       }
  //       <div className={s.text}>Корзина</div>
  //     </div>
  //   }
  //   onClick={() => router.push('/cart')}
  // />
  );
};

export default Cart;
