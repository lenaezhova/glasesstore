import s from './Header.module.scss';
import Logo from '@/src/components/UI/Logo/Logo';
import Navbar from '@/src/components/Header/components/Navbar/Navbar';

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerInner}>
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}
