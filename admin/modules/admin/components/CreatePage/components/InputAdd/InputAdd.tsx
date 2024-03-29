import React, {useRef, useState} from 'react';
import {Button, Input, InputRef, message, Space} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {TInfoProduct, useInfoProduct} from '@/src/http/hooks/useInfoProduct';
import {useMutateInfoProduct} from '@/src/http/hooks/useMutateInfoProduct';

const InputAdd = ({nameQuery}: {nameQuery: TInfoProduct;}) => {
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);
  const {invalidate} = useInfoProduct(nameQuery);
  const {mutateAsync} = useMutateInfoProduct(nameQuery);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const res = await mutateAsync(name);
      await invalidate();
    } catch (e) {
      message.error('Ошибка при добавлении')
    }
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <Space style={{ padding: '0 8px 4px' }}>
      <Input
        placeholder="Введите название"
        ref={inputRef}
        value={name}
        onChange={onChange}
        onKeyDown={(e) => e.stopPropagation()}
      />
      <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
        Добавить
      </Button>
    </Space>
  );
};

export default InputAdd;
