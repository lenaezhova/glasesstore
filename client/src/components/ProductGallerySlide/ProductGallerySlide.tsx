import React, { FC, useState, useEffect } from 'react';
import { Image } from 'antd';

import s from './ProductGallerySlide.module.scss';
import {useMedia} from "react-use";

interface productgallerySlideProps {
  dataForPreview: string;
  dataIndex: number;
  previewImages: string[];
}

export const ProductGallerySlide: FC<productgallerySlideProps> = ({
  dataForPreview,
  dataIndex,
  previewImages,
}) => {
  const [previewIndex, setPreviewImageIndex] = useState(dataIndex);
  const [isOpen, setIsOpen] = useState(false);
  const is590px = useMedia('(max-width: 590px)');
    const is380px = useMedia('(max-width: 380px)');

  const onChangePriviewHandler = (current: number, prevCurrent: number) => {
    if (current > prevCurrent) {
      setPreviewImageIndex((previewIndex) => ++previewIndex);
    } else {
      setPreviewImageIndex((previewIndex) => --previewIndex);
    }
  };

  const onChangePreviewVisibility = (visible: boolean) => {
    setPreviewImageIndex(dataIndex);
    setIsOpen(visible);
  };

  const getHeight = () => {
      if (is380px) {
          return 190
      }

      if (is590px) {
          return 250
      }

      return 300
  }

  return (
    <Image.PreviewGroup
      items={previewImages}
      preview={{
        destroyOnClose: true,
        current: previewIndex,
        onChange: onChangePriviewHandler,
        onVisibleChange: onChangePreviewVisibility,
        toolbarRender: (original, info) =>  original,
        imageRender: (original) => original
      }}
    >
      <Image
        height={getHeight()}
        className={s.productGallarySlide__img}
        src={dataForPreview}
      />
    </Image.PreviewGroup>
  );
};
