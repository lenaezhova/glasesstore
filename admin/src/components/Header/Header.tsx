import s from './Header.module.scss';

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerInner}>
        Панель администратора
      </div>
    </div>
  );
}
