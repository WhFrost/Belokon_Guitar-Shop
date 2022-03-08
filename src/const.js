const AppRoute = {
  ROOT: '/',
  CATALOG: '/catalog',
  CART: '/cart',
};

const HEADER_NAV_MENU_ITEMS = [
  {
    name: 'Каталог',
    link: AppRoute.CATALOG,
  },
  {
    name: 'Где купить?',
    link: '#',
  },
  {
    name: 'О компании',
    link: '#',
  },
  {
    name: 'Cервис-центры',
    link: '#',
  },
];

const HEADER_USER_MENU_ITEMS = [
  {
    name: 'Где мы находимся',
    icon: 'map',
    link: '#',
  },
  {
    name: 'Поиск',
    icon: 'search',
    link: '#',
  },
  {
    title: 'Корзина',
    icon: 'cart',
    link: AppRoute.CART,
  }
];

const FOOTER_SOCIALS = [
  {
    name: 'Facebook',
    icon: 'facebook',
    link: '#',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    link: '#',
  },
  {
    namename: 'Twitter',
    icon: 'twitter',
    link: '#',
  },
];

const FOOTER_NAV_CATALOG = [
  {
    name: 'Акустические гитары',
    link: '#',
  },
  {
    name: 'Классические гитары',
    link: '#',
  },
  {
    name: 'Электрогитары',
    link: '#',
  },
  {
    name: 'Бас-гитары',
    link: '#',
  },
  {
    name: 'Укулеле',
    link: '#',
  },
];

const FOOTER_NAV_INFO = [
  {
    name: 'Где купить?',
    link: '#',
  },
  {
    name: 'Блог',
    link: '#',
  },
  {
    name: 'Вопрос - ответ',
    link: '#',
  },
  {
    name: 'Возврат',
    link: '#',
  },
  {
    name: 'Сервис-центры',
    link: '#',
  },
];

export {
  AppRoute,
  HEADER_NAV_MENU_ITEMS,
  HEADER_USER_MENU_ITEMS,
  FOOTER_SOCIALS,
  FOOTER_NAV_CATALOG,
  FOOTER_NAV_INFO
};
