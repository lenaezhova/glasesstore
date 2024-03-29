'use client';
import { Button } from 'antd';
import s from './customButton.module.scss';

interface Props {
  title?: string;
}

const CustomButton = (props: Props) => {
  const { title } = props;
  return (
    <div className={s.customButton} >
      <Button type={'primary'}>
        <div className={s.title}>
          {title}
        </div>
      </Button>
    </div>
  );
};

export default CustomButton;
