import s from './MobileBanner.module.scss';
import Link from 'next/link';
import playMarketSVG from '@/public/images/playMarket.svg';
import appleStoreSVG from '@/public/images/appleStore.svg';

import Image from 'next/image';

const MobileBanner = () => {
  return (
    <div className={s.bannerContainer}>
      <div className={s.content}>
        <div className={s.mobile}></div>
        <div className={s.contentInfo}>
          <div className={s.contentText}>
            <div className={s.textDescription}>Быстрый подбор расходников и комплектующих</div>
            <div className={s.textTitle}>В МОБИЛЬНОМ ПРИЛОЖЕНИИ</div>
          </div>
          <div className={s.linksContainer}>
            <Link
              className={s.linkIco}
              href={'https://play.google.com/store/apps/details?id=ru.spaceapp.medok'}>
              <Image src={playMarketSVG} alt={''}/>
            </Link>
            <Link
              className={s.linkIco}
              href={'https://apps.apple.com/ru/app/%D0%BC%D0%B5%D0%B4%D0%BE%D0%BA/id1460772151'}>
              <Image src={appleStoreSVG} alt={''}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
