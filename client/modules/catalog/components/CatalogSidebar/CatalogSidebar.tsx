'use client';
import s from './CatalogSidebar.module.scss';
import React from 'react';
import {CollapseProps, Form} from 'antd';
import { Collapse } from 'antd';
import {arrayCategoryProduct} from '@/src/const/category';
import CategorySidebarItem from '@/modules/catalog/components/CatalogSidebar/CategorySidebarItem/CategorySidebarItem';
import {useForm} from 'antd/es/form/Form';

const items: CollapseProps['items'] = arrayCategoryProduct.map((el, index) => (
  {
    key: index,
    label: el.name,
    children: <CategorySidebarItem queryKey={el.queryKey[0]}/>,
  }
))

const CatalogSidebar = () => {
  const [form] = useForm();

  return (
    <Form
      className={s.form}
      form={form}
    >
      <Collapse defaultActiveKey={['0']} ghost items={items} />
      {/*{arrayCategoryProduct.map((el, index) =>*/}
      {/*  <CategorySidebarItem title={el.name} queryKey={el.queryKey[0]}/>*/}
      {/*)}*/}
    </Form>
  )
};

export default CatalogSidebar;
