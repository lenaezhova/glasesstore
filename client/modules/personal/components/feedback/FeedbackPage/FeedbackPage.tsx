'use client';
import s from './FeedbackPage.module.scss';
import PersonalHeader from '@/modules/personal/components/PersonalHeader/PersonalHeader';
import FeedbackForm from '@/modules/personal/components/feedback/FeedbackForm/FeedbackForm';

const FeedbackPage = () => {

  return (
    <div className={s.container}>
      <PersonalHeader title={'Обратная связь'}/>
      <p className={s.title}>
        <h3>Мы постоянно работаем над тем, чтобы улучшить наш сервис.
          <br/>
         В этом очень помогают пожелания наших покупателей.</h3>
      </p>
      <p>
        <div className={s.text}>
          Если у Вас есть вопросы и пожелания по работе сайта, контакт-центра или службы доставки,
          <br/>
          воспользуйтесь формой обратной связи:
        </div>
      </p>
      <FeedbackForm/>
    </div>

  );
};

export default FeedbackPage;
