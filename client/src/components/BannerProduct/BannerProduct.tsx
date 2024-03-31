'use client';
import React from 'react';
import s from './BannerProduct.module.scss';
import {useAllProduct} from '@/src/http/hooks/useAllProduct';
import Link from 'next/link';
import ProductItem from '@/src/components/ProductItem/ProductItem';
import {IconBannerArrow} from '@/src/ui/IconBannerArrow';
import {useNowBuyBanner} from '@/src/http/hooks/useNowBuyBanner';

interface BannerProductProps {
  title?: string;
  redirectHref?: string;
  redirectTitle?: string;
}

const BannerProduct = ({title, redirectHref, redirectTitle}: BannerProductProps) => {
  const {data, isLoading} = useNowBuyBanner();
  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className={s.banner}>
      <div className={s.titleWrapper}>
        <h3 className={s.title}>{title}</h3>
        {redirectHref &&
          <div className={s.linkWrapper}>
            <Link className={s.href} href={redirectHref}>{redirectTitle}</Link>
            <IconBannerArrow style={{fontSize: 30}}/>
          </div>
        }
      </div>
      <div className={s.productWrapper}>
        {data?.productIds?.map((el, index) =>
          <ProductItem key={el} productId={el}/>
        )}
      </div>
    </div>
  );
};

export default BannerProduct;
