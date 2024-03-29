import SwiperProducts from '@/src/components/SwiperProducts/SwiperProducts';
import MobileBanner from '@/src/components/UI/MobileBanner/MobileBanner';
import RegistrationBenefitsBanner from '@/src/components/UI/RegistrationBenefitsBanner/RegistrationBenefitsBanner';
import WhoWorkWithBanner from '@/src/components/UI/WhoWeWorkWithbanner/WhoWeWorkWith';
import OplataBanner from '@/src/components/UI/OplataBanner/OplataBanner';
import s from './HomePage.module.scss';
import SubscribeEmailBanner from '@/src/components/UI/SubscribeEmailBanner/SubscribeEmailBanner';

const HomePage = () => {
  return (
    <div className={s.content}>

      {/*<RegistrationBenefitsBanner/>*/}
      {/*<div className={s.contentItem}>*/}
      {/*  <SwiperProducts categoryName={'all'} title={'Сниженная цена'} hideFooter={false}/>*/}
      {/*</div>*/}
      {/*<div className={s.contentItem}>*/}
      {/*  <SwiperProducts categoryName={'all'} title={'Рекомендуем приобрести'} hideFooter={true}/>*/}
      {/*</div>*/}

      {/*<WhoWorkWithBanner/>*/}
      {/*<div className={s.contentItem}>*/}
      {/*  <SwiperProducts categoryName={'all'} title={'Шок-цены'} hideFooter={true}/>*/}
      {/*</div>*/}
      {/*<div className={s.contentItem}>*/}
      {/*  <SwiperProducts categoryName={'all'} title={'Много интересного'} hideFooter={true}/>*/}
      {/*</div>*/}

      {/*<MobileBanner/>*/}
      {/*<div className={s.contentItem}>*/}
      {/*  <SwiperProducts categoryName={'all'} title={'Популярные товары'} hideFooter={true}/>*/}
      {/*</div>*/}

      {/*<OplataBanner/>*/}
      {/*<div className={s.contentItem}>*/}
      {/*  <SwiperProducts categoryName={'all'} title={'Новые поступления'} hideFooter={true}/>*/}
      {/*</div>*/}

      {/*<SubscribeEmailBanner/>*/}
    </div>
  );
};

export default HomePage;
