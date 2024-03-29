import {memo} from 'react';
import s from './Questions.module.scss';
import clsx from 'clsx';

interface Props {
  totalCount: number;
  className?: string;
}

const Questions = (props: Props) => {
  const {totalCount, className} = props;
  return (
    <div className={clsx(className, {}, [s.questionsContainer])}>
      <div className={s.questionsItem}>
        {totalCount} вопросов
      </div>
    </div>
  );
};

export default memo(Questions);
