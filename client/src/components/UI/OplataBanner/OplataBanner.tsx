import s from './OpataBanner.module.scss';
import Image from 'next/image';
import lvlSVG from '@/public/images/lvls/lvlOrange.svg';
import mobilesSVG from '@/public/images/mobiles.png';
import btnPlay from '@/public/images/btnOrangePlay.svg';
import Link from 'next/link';

const OPLATA_TEXT_FIRST_LVL =
  ['Онлайн',
    'Наличными',
    'По счету'
  ];

const OPLATA_TEXT_SECOND_LVL =
  ['Apple Pay, Google Pay, Samsung Pay',
    'Картами Visa, Master Card, Maestro и МИР'
  ];

const OplataBanner = () => {
  return (
    <div className={s.content}>
      <div className={s.contentInfo}>
        <div className={s.contentTitle}>
          <div>Принимаем оплату</div>
        </div>
        <div className={s.contentDescription}>
          <div className={s.contentDescriptionContainer}>
            {OPLATA_TEXT_FIRST_LVL.map(el =>
              <div key={el} className={s.descriptionText}>
                <Image className={s.descriptionIco} src={lvlSVG} alt={''}/>
                {el}
              </div>
            )}
          </div>
          <div className={s.contentDescriptionContainer}>
            {OPLATA_TEXT_SECOND_LVL.map(el =>
              <div key={el} className={s.descriptionText}>
                <Image className={s.descriptionIco} src={lvlSVG} alt={''}/>
                {el}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={s.contentMovie}>
        <Image className={s.womenImage} width={400} height={400} src={mobilesSVG} alt={''}/>
        <Link href={'https://www.youtube.com/watch?v=uYmDcn2SM8E'}>
          <Image className={s.btnPlayImage} width={160} height={160} src={btnPlay} alt={''}/>
        </Link>
      </div>

    </div>
  );
};

export default OplataBanner;
