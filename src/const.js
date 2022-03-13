const AppRoute = {
  ROOT: '/',
  CATALOG: '/catalog',
  CART: '/catalog/cart',
};

const BREADCRUMBS = {
  '/': 'Главная',
  '/catalog': 'Каталог',
  '/catalog/cart': 'Оформляем',
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

const GUITAR_TYPES = {
  electro: 'Электрогитара',
  acoustic: 'Акустическая гитара',
  ukulele: 'Укулеле',
};

const FILTER_GUITAR_TYPES = [
  {
    type: 'acoustic',
    label: 'Акустические гитары',
  },
  {
    type: 'electro',
    label: 'Электрогитары',
  },
  {
    type: 'ukulele',
    label: 'Укулеле',
  },
];
const FILTER_GUITAR_COUNT_STRINGS = [
  {
    count: 4,
    label: '4',
  },
  {
    count: 6,
    label: '6',
  },
  {
    count: 7,
    label: '7',
  },
  {
    count: 12,
    label: '12',
  },
];

const CARDS_ON_PAGE = 9;

export {
  AppRoute,
  BREADCRUMBS,
  HEADER_NAV_MENU_ITEMS,
  HEADER_USER_MENU_ITEMS,
  FOOTER_SOCIALS,
  FOOTER_NAV_CATALOG,
  FOOTER_NAV_INFO,
  GUITAR_TYPES,
  FILTER_GUITAR_TYPES,
  FILTER_GUITAR_COUNT_STRINGS,
  CARDS_ON_PAGE
};
