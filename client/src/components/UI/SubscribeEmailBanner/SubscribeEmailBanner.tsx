'use client';
import CustomButton from '@/src/components/customButton/customButton';
import s from './SubscribeEmailBanner.module.scss';
import { Input } from 'antd';

const SubscribeEmailBanner = () => {
  return (
    <div className={s.footer}>
      <h3 className={s.footerHeader}>Выгода с доставкой</h3>
      <p className={s.footerSubTitle}>Подпишитесь и получайте промокоды, акции и подборки товаров на свою почту.</p>
      <div className={s.footerForm}>
        <Input className={s.footerCustomInput} placeholder={'Введите e-mail'}/>
        <CustomButton title={'Подписаться'} />
      </div>
    </div>
  );
};

export default SubscribeEmailBanner;
