import React from 'react';
import s from './AboutUsBanner.module.scss';
import firstImage from 'public/aboutus/firstImage.png';
import secondImage from 'public/aboutus/secondImage.png';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';
const AboutUsBanner = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.leftBlock}>
        <div className={s.content}>
          <PreloaderImage
            className={s.imageWrapper}
            sizes='100vw'
            imgClassName={s.img}
            src={firstImage}
            alt={'preloaderImage'}
            priority={true}
            objectFit='contain'
            preloaderSize='large'
          />
        </div>

      </div>
      <div className={s.rightBlock}>
        <p className={s.title}>О НАС</p>
        <p className={s.text}>
          Проект «ОчкИИ» - это новый взгляд на работу онлайн-оптик. Наиболее острой проблемой в работе оптик такого
          плана является неудобство или невозможность примерки оправ.
          <br/>
          <br/>
          Для людей с низким зрением пока существует только один выход – покупка линз и примерка оправ в линзах в
          оффлайн-магазине.
          Наша команда предлагает совершенно инновационный подход: возможность примерки оправ от разных сетей оптик с
          будущим их заказом в нашем онлайн-приложении. Мы подарим нашим покупателям захватывающий и реалистичный опыт
          «попробуй перед покупкой" в режиме реального времени и на любом устройстве с использованием передовых
          технологий для очков.
        </p>
        <div className={s.imageBlock}>
          <div className={s.content}>
            <PreloaderImage
              className={s.imageWrapperSecond}
              sizes='100vw'
              imgClassName={s.img}
              src={secondImage}
              alt={'preloaderImage'}
              priority={true}
              objectFit='contain'
              preloaderSize='large'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
