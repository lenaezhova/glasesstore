'use client';
import { Button, Form, Input } from 'antd';
import s from './FeedbackForm.module.scss';

const FeedbackForm = () => {
  return (
    <div className={s.block}>
      <Form className={s.form}>
        <Form.Item>
          <Input placeholder={'Выбрать тему обращения'}/>
        </Form.Item>

        <Form.Item>
          <Input placeholder={'Фамилия Имя Отчество'}/>
        </Form.Item>

        <Form.Item>
          <Input placeholder={'Электронная почта'}/>
        </Form.Item>

        <Form.Item>
          <Input placeholder={'Номер телефона'}/>
        </Form.Item>

        <Form.Item>
          <Input placeholder={'Текст сообщения'}/>
        </Form.Item>

        <Form.Item>
          <Button type={'primary'}>Отправить</Button>
        </Form.Item>
      </Form>
    </div>

  );
};

export default FeedbackForm;
