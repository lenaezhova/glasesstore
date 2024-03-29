import {memo} from 'react';
import s from './Reviews.module.scss';
import clsx from 'clsx';
import star from '@/public/images/rating-star.svg';
import Image from 'next/image';
interface Props {
  average: number;
  totalCount?: number;
  className?: string;
  classStar?: string;
  classReviewsText?: string;
}

const Reviews = (props: Props) => {
  const {
    average,
    totalCount,
    className,
    classStar,
    classReviewsText
  } = props;

  const classForStar = classStar || s.raitingStar;
  const classForTextReviews = classReviewsText || s.reviewsItem;

  return (
    <div className={clsx(s.reviewsContainer, {}, [className])}>
      <div className={s.reviewsContainerFirst}>
        <Image className={classForStar} src={star} alt={''}/>
        <div className={classForTextReviews}>
          {average}
        </div>
      </div>
      <div className={s.reviewsContainerSecond}>
        {totalCount &&
        <div className={s.reviewsItem}>
          {totalCount} отзывов
        </div> }
      </div>
    </div>
  );
};

export default memo(Reviews);
