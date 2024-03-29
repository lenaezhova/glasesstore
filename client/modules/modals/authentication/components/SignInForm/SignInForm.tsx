'use client';
import s from './SignInForm.module.scss';
import {Form, FormInstance, Input, message} from 'antd';
import {rules} from '@/src/helpers/rules/rules';
import clsx from 'clsx';
import {useMutation} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';
import {useAuthStore} from '@/modules/user/store/store';
import {useAuthModalStore} from '@/modules/modals/authentication/store/store';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import {useForm} from 'antd/es/form/Form';

interface IDataForm {
  email: string;
  password: string;
}

interface Props {
  form: FormInstance<any>
}

const SignInForm = ({form}: Props) => {
  const {setIsAuth, setUserId} = useAuthStore((state) => state);
  const { setIsVisibleAuthModal} = useAuthModalStore((state) => state);
  const {mutateAsync} = useMutation({
    mutationFn: $glassesApi.User.registerEndpoints.login
  })

  const submitForm = async (data : IDataForm) => {
    try {
      const response = await mutateAsync(data);
      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      setUserId(response.userId)
      setIsAuth(true);
      setIsVisibleAuthModal(false);
    } catch {
      message.error('Ошибка при автризации')
    }
  };

  return (
    <div className={s.SignInContainerContent}>
      <Form
        className={s.AntdFormItem}
        form={form}
        layout='vertical'
        requiredMark={'optional'}
        onFinish={submitForm}
      >
        <Form.Item label='Почта' name='email' rules={[rules.required()]}>
          <Input />
        </Form.Item>
        <Form.Item label='Пароль' name='password' rules={[rules.required()]}>
          <Input.Password/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInForm;
