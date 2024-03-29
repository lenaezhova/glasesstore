import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';
import LogoFooter from '@/public/logoFooter.jpg';
import Link from 'next/link';
import TelegramSvg from '@/src/components/UI/TelegramSvg/TelegramSvg';
import ViberSvg from '@/src/components/UI/ViberSvg/ViberSvg';
import WhatsAppSvg from '@/src/components/UI/WhatsAppSvg/WhatsAppSvg';

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footerInner}>
        <div className={s.footerLogo}>
          <Image className={s.logo} width='200' height='200' src={LogoFooter} alt={''} />
        </div>

        <div className={s.footerCenter}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <div>2019-2024 © ООО "ОчкИИ"</div>
        </div>

        <div className={s.footerRight}>
          <div className={s.footerRightInner}>
            <div className={s.footerRightContacts}>
              <Link className={s.footerIcon} href={'/viber'}>
                <ViberSvg />
              </Link>
              <Link className={s.footerIcon} href={'/whatsapp'}>
                <WhatsAppSvg />
              </Link>
              <Link className={s.footerIcon} href={'/telegram'}>
                <TelegramSvg />
              </Link>
            </div>

            <div className={s.footerRightInfo}>
              <Link href={'/delivery'} className={s.footerInfoItem}>
                Доставка
              </Link>
              <Link href={'/oferta'} className={s.footerInfoItem}>
                Юридическая информация
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
