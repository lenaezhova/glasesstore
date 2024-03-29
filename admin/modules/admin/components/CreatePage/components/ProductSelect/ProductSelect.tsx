import React from 'react';
import { Divider, Input, Select, Space, Form } from 'antd';
import InputAdd from '@/modules/admin/components/CreatePage/components/InputAdd/InputAdd';
import {TInfoProduct, useInfoProduct} from '@/src/http/hooks/useInfoProduct';
import s from './ProductSelect.module.scss'

interface IProductSelect {
  nameQuery: TInfoProduct;
  formItemName: string;
  label: string;
}

const ProductSelect = ({nameQuery, formItemName, label}: IProductSelect) => {
  const {data, isLoading} = useInfoProduct(nameQuery);
  return (
    <Form.Item
      rootClassName={s.formItem}
      label={label}
      name={formItemName}
    >
      <Select
        loading={isLoading}
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: '8px 0' }} />
            <Space style={{ padding: '0 8px 4px' }}>
              <InputAdd nameQuery={nameQuery}/>
            </Space>
          </>
        )}
        options={data?.map((item) => ({ label: item.name, value: item._id }))}
      />
    </Form.Item>
  );
};

export default ProductSelect;
