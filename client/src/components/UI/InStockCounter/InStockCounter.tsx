import s from './InStockCounter.module.scss';
import clsx from 'clsx';
import { RefObject, memo } from 'react';

interface Props {
  count: number;
  setCount: (count: number) => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
  className?: string
  classNameButtonInc? : string;
  classNameButtonDec? : string;
  classNameCount?: string;
  ref?: RefObject<any>;
}

const InStockCounter = (props: Props) => {
  const {
    count,
    setCount,
    onIncrement,
    onDecrement,
    className,
    classNameButtonInc,
    classNameButtonDec,
    classNameCount
  } = props;

  function handleIncrement () {
    if (onIncrement) {
      onIncrement();
    } else {
      setCount(count + 1);
    }
  }

  function handleDecrement () {
    if (onDecrement) {
      onDecrement();
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className={className}>
      <div className={s.inStockContainer}>
        <button className={clsx(s.inStockDecrement, {}, [classNameButtonDec])} onClick={handleDecrement}>-</button>
        <div className={clsx(s.inStockCount, {}, [classNameCount])}>{count}</div>
        <button className={clsx(s.inStockIncrement, {}, [classNameButtonInc])} onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default memo(InStockCounter);
