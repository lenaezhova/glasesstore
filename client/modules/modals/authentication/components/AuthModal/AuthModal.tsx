'use client';
import {useAuthModalStore} from '@/modules/modals/authentication/store/store';
import s from './AuthModal.module.scss';
import {Button, Typography} from 'antd';
import {useForm} from 'antd/es/form/Form';
import SignInForm from '@/modules/modals/authentication/components/SignInForm/SignInForm';
import {CustomModal} from '@/src/components/UI/CustomModal/CustomModal';
import SignUpForm from '@/modules/modals/authentication/components/SignUpForm/SignUpForm';
import {useCallback, useState} from 'react';
import {useAuthStore} from '@/modules/user/store/store';
import {useInvalidateUserSubInfo} from "@/src/http/hooks/useInvalidateUserSubInfo";

const {Link} = Typography;

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const {isVisibleAuthModal, setIsVisibleAuthModal} = useAuthModalStore((state) => state);

  const [form] = useForm();

  const footer =  (
      <div className={s.footer}>
        {isLogin ? (
          <div>
            Нет аккаунта? <Link onClick={() => setIsLogin(false)}>Зарегистрируйся!</Link>
          </div>
        ) : (
          <div>
            Есть аккаунт? <Link onClick={() => setIsLogin(true)}>Авторизуйтесь!</Link>
          </div>
        )}
        <div>
          <Button className={s.AntdButton} onClick={() => form.submit()}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>
          <Button onClick={() => setIsVisibleAuthModal(false)}>Отмена</Button>
        </div>
      </div>
    );

  return (
    <>
      <CustomModal
        title={isLogin ? 'Авторизация' : 'Регистрация'}
        isOpen={isVisibleAuthModal}
        onCancel={() => setIsVisibleAuthModal(false)}
        footer={footer}
      >
        {!isLogin ? (
          <SignUpForm
            form={form}
          />
        ) : (
          <SignInForm
            form={form}
          />
        )}
      </CustomModal>
    </>
  );
};

export default AuthModal;
