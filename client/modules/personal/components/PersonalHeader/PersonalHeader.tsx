import s from './PersonalHeader.module.scss';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children?: ReactNode;
}

const PersonalHeader = (props: Props) => {
  const {title, children} = props;
  return (
    <div className={s.header}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PersonalHeader;
