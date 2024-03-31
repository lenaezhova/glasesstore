import SwiperProducts from '@/src/components/SwiperProducts/SwiperProducts';
import MobileBanner from '@/src/components/UI/MobileBanner/MobileBanner';
import RegistrationBenefitsBanner from '@/src/components/UI/RegistrationBenefitsBanner/RegistrationBenefitsBanner';
import WhoWorkWithBanner from '@/src/components/UI/WhoWeWorkWithbanner/WhoWeWorkWith';
import OplataBanner from '@/src/components/UI/OplataBanner/OplataBanner';
import s from './HomePage.module.scss';
import SubscribeEmailBanner from '@/src/components/UI/SubscribeEmailBanner/SubscribeEmailBanner';
import MainSlider from "@/src/components/MainSlider/MainSlider";
import BannerProduct from "@/src/components/BannerProduct/BannerProduct";
import AboutUsBanner from "@/src/components/AboutUsBanner/AboutUsBanner";
import clsx from "clsx";
import OnlineBanner from "@/src/components/OnlineBanner/OnlineBanner";

const HomePage = () => {
  return (
    <div className={s.content}>
      <MainSlider/>
      <div className={clsx(s.content, 'container')}>
        <BannerProduct title={'Сейчас покупают'} redirectHref={'/catalog/all'} redirectTitle={'Посмотреть все'}/>
        <AboutUsBanner/>
        {/*<BannerProduct title={'Наши любимые модели'} redirectHref={' /catalog/all'} redirectTitle={'Посмотреть все'}/>*/}
        <OnlineBanner/>
      </div>
    </div>
  );
};
//
// {/*<RegistrationBenefitsBanner/>*/}
// {/*<div className={s.contentItem}>*/}
// {/*  <SwiperProducts categoryName={'all'} title={'Сниженная цена'} hideFooter={false}/>*/}
// {/*</div>*/}
// {/*<div className={s.contentItem}>*/}
// {/*  <SwiperProducts categoryName={'all'} title={'Рекомендуем приобрести'} hideFooter={true}/>*/}
// {/*</div>*/}
//
// {/*<WhoWorkWithBanner/>*/}
// {/*<div className={s.contentItem}>*/}
// {/*  <SwiperProducts categoryName={'all'} title={'Шок-цены'} hideFooter={true}/>*/}
// {/*</div>*/}
// {/*<div className={s.contentItem}>*/}
// {/*  <SwiperProducts categoryName={'all'} title={'Много интересного'} hideFooter={true}/>*/}
// {/*</div>*/}
//
// {/*<MobileBanner/>*/}
// {/*<div className={s.contentItem}>*/}
// {/*  <SwiperProducts categoryName={'all'} title={'Популярные товары'} hideFooter={true}/>*/}
// {/*</div>*/}
//
// {/*<OplataBanner/>*/}
// {/*<div className={s.contentItem}>*/}
// {/*  <SwiperProducts categoryName={'all'} title={'Новые поступления'} hideFooter={true}/>*/}
// {/*</div>*/}
//
// {/*<SubscribeEmailBanner/>*/}

export default HomePage;
