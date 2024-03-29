import s from './Title.module.scss';

interface ITitleProps {
  title: string;
}

const CustomTitle = ({title}: ITitleProps) => {
  return (
    <h1 className={s.title}>{title}</h1>
  );
};

export default CustomTitle;
