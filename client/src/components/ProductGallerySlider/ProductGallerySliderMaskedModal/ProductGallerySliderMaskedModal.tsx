import React, {useState} from 'react';
import s from '@/src/components/ProductGallerySlider/ProductGallerySlider.module.scss';
import {Modal} from 'antd';
import MaskedCanvasReact from '@/src/components/MaskedCanvas/MaskedCanvasReact';

const ProductGallerySliderMaskedModal = ({image}: {image: string}) => {
  const [isModal, setIsModal] = useState(false);

  const handleOpenMasked = () => {
    setIsModal(true);
  }

  return (
    <>
      <div className={s.bottomSlider__img} onClick={handleOpenMasked}>
        Примерить очки
      </div>
      <Modal
        width={1000}
        destroyOnClose
        footer={<div></div>}
        open={isModal}
        styles={{
          footer: {
            border: 'none'
          }
        }}
        closeIcon={false}
        onCancel={() => setIsModal(false)}
      >
        <MaskedCanvasReact imageUrl={image}/>
      </Modal>
    </>
  );
};

export default ProductGallerySliderMaskedModal;
