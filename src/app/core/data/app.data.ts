import { NavLinks } from '../models/common/global.types';

export const navLinks: NavLinks[] = [
  {
    name: 'Dashboard',
    route: 'dashboard',
  },
  {
    name: 'Clienti',
    route: 'clienti',
  },
  {
    name: 'Fatture',
    route: 'fatture',
  },
];

export const authLinks: NavLinks[] = [
  {
    name: 'Login',
    route: 'login',
  },
  {
    name: 'Register',
    route: 'register',
  },
];
