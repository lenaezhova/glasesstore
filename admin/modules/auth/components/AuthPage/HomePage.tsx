'use client'
import s from './AuthPage.module.scss';
import {Button, Form, Input, message} from 'antd';
import {useMutation} from '@tanstack/react-query';
import {$glassesAdminApi} from '@/src/http/api/api';
import {useAuthStore} from '@/modules/user/store/store';
import {useForm} from 'antd/lib/form/Form';
import {rules} from '@/src/helpers/rules/rules';

interface IDataForm {
  email: string;
  password: string;
}

const AuthPage = () => {
  const {setIsAuth, setUserId} = useAuthStore((state) => state);
  const {mutateAsync} = useMutation({
    mutationFn: $glassesAdminApi.User.registerAdminEndpoints.login
  })

  const [form] = useForm();

  const submitForm = async (data : IDataForm) => {
    try {
      const response = await mutateAsync(data);
      localStorage.setItem('adminToken', response.accessToken);
      localStorage.setItem('adminRefreshToken', response.refreshToken);
      setUserId(response.userId)
      setIsAuth(true);
    } catch {
      message.error('Ошибка при автризации')
    }
  };

  return (
    <div className={s.content}>
      <Form
        className={s.form}
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
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
          <Button onClick={() => form.submit()}>Войти</Button>
        </div>
      </Form>
    </div>
  );
};

export default AuthPage;
