export interface FormFilter {
  scadute?: boolean;
  minImporto?: number;
  maxImporto?: number;
}

export interface NavLinks {
  name: string;
  route: string;
  icon?: string;
}

export interface SocialMediaLinks {
  name: string;
  link: string;
  iconName: string;
}

export interface DialogToConfirmData {
  message: string;
  content: string;
}
