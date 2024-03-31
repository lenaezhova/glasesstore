import React from 'react';
import {Button} from 'antd';
import s from './GlassesButton.module.scss';
import clsx from 'clsx';

interface GlassesButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  type: 'clear' | 'primary'
}

const GlassesButton = ({
  text,
  onClick,
  className,
  type
}: GlassesButtonProps) => {
  const getClassName = () => {
    if (type === 'primary') {
      return s.primary;
    }
    return '';
  };
  const mainClassName = getClassName();
  return (
    <Button
      ghost
      onClick={onClick}
      className={clsx(mainClassName, className)}
    >
      {text}
    </Button>
  );
};

export default GlassesButton;
