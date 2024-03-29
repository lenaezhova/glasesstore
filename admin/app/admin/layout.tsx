'use client';
import React from 'react';
import { ProductOutlined, UserOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Authorized from '@/modules/Authorized';
import {useRouter} from 'next/navigation';

const { Content, Sider } = Layout;

const getItems = (router: any) => {
  return [
    {
      key: 'products',
      icon: React.createElement(ProductOutlined),
      label: 'Товары',

      children: [{
        key: 'createProduct',
        label: 'Создать товар',
        onClick: () => router.push('/admin/createproduct')
      }]
    },
    {
      key: 'users',
      icon: React.createElement(UserOutlined),
      label: 'Пользователи',

      children: [{
        key: 'addAdmin',
        label: 'Выдать роль администратора',
        onClick: () => router.push('/admin/addadmin')
      }]
    }];
};

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const items = getItems(router);

  return (
    <Authorized>
      <Content>
        <Layout
          style={{ padding: '24px 0', background: 'white' }}
        >
          <Sider style={{ background: 'white' }} width={200}>
            <Menu
              mode='inline'
              style={{ height: '100%' }}
              items={items}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 1000 }}>
            {children}
          </Content>
        </Layout>
      </Content>
    </Authorized>
  );
}
