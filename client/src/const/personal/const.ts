import { IPersonalOption } from '@/src/const/personal/type';

export const personalRouter = '/personal';
export const personalProfileRouter = personalRouter + '/profile';
export const personalProfileCompanyRouter = personalProfileRouter + '/company';
export const personalProfileRouterSoletrader = personalProfileRouter + '/soletrader';

export const personalOptions : IPersonalOption[] = [
  {
    element: 'Личные данные',
    href: personalProfileRouter
  },
  {
    element: 'Ваши заказы',
    href: personalRouter + '/order'
  },
  {
    element: 'Акции',
    href: personalRouter + '/specials'
  },
  {
    element: 'Уведомления',
    href: personalRouter + '/subscriptions'
  },
  {
    element: 'Обратная связь',
    href: personalRouter + '/feedback'
  },
  {
    element: 'Дополнительная информация',
    href: personalRouter + '/extrainfo'
  },
  {
    element: 'Ваше оборудование',
    href: personalRouter + '/equipments'
  },
  {
    element: 'Настройки',
    href: personalRouter + '/settings'
  }
];
