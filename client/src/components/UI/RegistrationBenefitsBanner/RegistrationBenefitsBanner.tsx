import s from './RegistrationBenefitsBanner.module.scss';
import Image from 'next/image';
import lvlSVG from '@/public/images/lvls/lvl.svg';
import womenSVG from '@/public/images/women.png';
import btnPlay from '@/public/images/btnPlay.svg';
import Link from 'next/link';
const RegistrationBenefitsBanner = () => {
  return (
    <div className={s.content}>
      <div className={s.contentInfo}>
        <div className={s.contentTitle}>
          <div>Преимущества регистрации</div>
        </div>
        <div className={s.contentDescription}>
          <div className={s.contentDescriptionContainer}>
            <div className={s.descriptionText}>
              <Image className={s.descriptionIco} src={lvlSVG} alt={''}/>
              Возможность видеть актуальные цены, отслеживать цены</div>
            <div className={s.descriptionText}>
              <Image className={s.descriptionIco} src={lvlSVG} alt={''}/>
              Добавлять свое оборудование и делать заказы по нему
            </div>
          </div>
          <div className={s.contentDescriptionContainer}>
            <div className={s.descriptionText}>
              <Image className={s.descriptionIco} src={lvlSVG} alt={''}/>
              Персональный менеджер
            </div>
            <div className={s.descriptionText}>
              <Image className={s.descriptionIco} src={lvlSVG} alt={''}/>
              Различные системы скидок
            </div>
          </div>
        </div>
      </div>
      <div className={s.contentMovie}>
        <Image className={s.womenImage} width={400} height={400} src={womenSVG} alt={''}/>
        <Link href={'https://www.youtube.com/watch?v=uYmDcn2SM8E'}>
          <Image className={s.btnPlayImage} width={160} height={160} src={btnPlay} alt={''}/>
        </Link>
      </div>

    </div>
  );
};

export default RegistrationBenefitsBanner;
