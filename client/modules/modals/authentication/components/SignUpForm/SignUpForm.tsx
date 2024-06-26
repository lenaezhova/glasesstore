'use client';
import s from './SignUpForm.module.scss';
import {Form, FormInstance, Input, message} from 'antd';
import {rules} from '@/src/helpers/rules/rules';
import clsx from 'clsx';
import {useMutation} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';
import {useForm} from 'antd/es/form/Form';
import {useInvalidateUserSubInfo} from "@/src/http/hooks/useInvalidateUserSubInfo";

interface IDataForm {
  email: string,
  name: string,
  password: string
  surname: string
}

interface Props {
  form: FormInstance<any>
}

const SignUpForm = (props : Props) => {
  const { form } = props;
  const {mutateAsync, isLoading} = useMutation({
    mutationFn: $glassesApi.User.registerEndpoints.registration
  })
  const {ivalidateAsync} = useInvalidateUserSubInfo();
  const submitForm = async (data : IDataForm) => {
    try {
      const response =  await mutateAsync(data);
      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      await ivalidateAsync();
    } catch (e) {
      message.error('Ошибка при регистрации');
    }
  };

  return (
      <Form
        className={s.AntdFormItem}
        form={form}
        layout='vertical'
        onFinish={submitForm}
      >
        <Form.Item label='Имя' name='name' rules={[rules.required()]}>
          <Input />
        </Form.Item>

        <Form.Item label='Фамилия' name='surname' rules={[rules.required()]}>
          <Input />
        </Form.Item>

        <Form.Item label='Почта' name='email' rules={[rules.required()]}>
          <Input />
        </Form.Item>

        <Form.Item label='Пароль' name='password' rules={[rules.required()]}>
          <Input.Password/>
        </Form.Item>
      </Form>
  );
};

export default SignUpForm;
