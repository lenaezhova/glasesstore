'use client';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import s from './ProfileForm.module.scss';
import CustomInput from '@/src/components/UI/CustomSearch/CustomSearch';
import {
  personalProfileCompanyRouter,
  personalProfileRouterSoletrader
} from '@/src/const/personal/const';
import {memo} from 'react';
import ProfileSoleTraderForm from '@/modules/personal/components/profile/ProfileSoleTraderForm/ProfileSoleTraderForm';
import ProfileCompanyForm from '@/modules/personal/components/profile/ProfileCompanyForm/ProfileCompanyForm';

interface Props {
  pathname?: string;
}

const ProfileForm = (props: Props) => {
  const [form] = useForm();
  const {pathname} = props;
  const submitForm = () => {
    console.log('submit');
  };

  return (
    <Form className={s.form} form={form}>
      <Form.Item>
        <div className={s.formItem}>
          <div>Ф.И.О</div>
          <CustomInput placeholder={'Введите ваши данные'}/>
        </div>
      </Form.Item>

      <Form.Item>
        <div className={s.formItem}>
          <div>Email</div>
          <CustomInput placeholder={'Введите ваши данные'}/>
        </div>
      </Form.Item>

      <Form.Item>
        <div className={s.formItem}>
          <div>Специализация</div>
          <CustomInput placeholder={'Введите ваши данные'}/>
        </div>
      </Form.Item>

      <Form.Item>
        <div className={s.formItem}>
          <div>Город</div>
          <CustomInput placeholder={'Введите ваши данные'}/>
        </div>
      </Form.Item>

      { pathname === personalProfileCompanyRouter && <ProfileCompanyForm/> }
      { pathname === personalProfileRouterSoletrader && <ProfileSoleTraderForm/> }
    </Form>
  );
};

export default memo(ProfileForm);
