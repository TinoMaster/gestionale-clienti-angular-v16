import { NavLinks, SocialMediaLinks } from '../models/common/global.types';

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

export const footerDescription =
  'Benvenuto in Gestionale Clienti, un sistema di gestione di clienti e fatture.';

export const socialContacts: SocialMediaLinks[] = [
  {
    name: 'Facebook',
    link: 'https://facebook.com',
    iconName: 'facebook',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com',
    iconName: 'twitter',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com',
    iconName: 'instagram',
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com',
    iconName: 'LinkedIn',
  },
];
