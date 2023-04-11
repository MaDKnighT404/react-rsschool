export interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  country: string;
  photoURL: string;
  photoName: string;
  html: boolean;
  css: boolean;
  javascript: boolean;
  typescript: boolean;
  jest: boolean;
  react: boolean;
  notification: boolean;
  userCards: Array<FormValues>;
}

export interface CardProps {
  data: ServerAnswer;
}

export interface ServerAnswer {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CardData {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }>;
}

export interface ModalProps {
  close: () => void;
}
