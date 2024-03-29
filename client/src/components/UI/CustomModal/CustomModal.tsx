'use client';
import React, {ReactNode} from 'react';
import { Modal as AntdModal} from 'antd';
import s from './CustomModal.module.scss';
import classNames from 'classnames';

interface Props {
  title?: ReactNode | string;
  children?: ReactNode;
  isOpen?: boolean;
  footer?: ReactNode | string;
  className?: string;
  onOk?: () => void;
  onCancel?: () => void ;
}

export const CustomModal = (props: Props) => {
  const {
    title,
    isOpen,
    onOk,
    onCancel,
    children,
    footer,
    className
  } = props;

  return (
    <AntdModal
      className={classNames(className, {}, [s.AntdModalFooter, s.AntdModalBody])}
      open={isOpen}
      title={typeof title !== 'string'
        ? <>{title}</>
        : <div className={s.ModalHeader}>{title}</div>}
      onOk={onOk}
      onCancel={onCancel}
      footer={typeof footer !== 'string'
        ? <>{footer}</>
        : <div className={s.ModalHeader}>{footer}</div>}
    >
      <>{children}</>
    </AntdModal>
  );
};
