import s from './WhoWeWorkWith.module.scss';

const WhoWorkWithBanner = () => {
  return (
    <div className={s.content}>
      <div className={s.contentText}>
        <div className={s.contentTitle}>Работаем</div>
        <div className={s.contentDescription}>с юридическими лицами и частными клиентами!</div>
      </div>
    </div>
  );
};

export default WhoWorkWithBanner;
