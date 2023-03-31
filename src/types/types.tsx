export interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  country: string;
  photo: File[];
  html: boolean;
  css: boolean;
  javascript: boolean;
  typescript: boolean;
  jest: boolean;
  react: boolean;
  notification: boolean;
}

export interface UserFormState {
  values: FormValues;
  errors: Partial<Record<keyof FormValues, string>>;
  cardsArray: FormValues[];
  submitted: boolean;
}

export interface UserFormProps {
  onSubmit: (formData: FormValues[]) => void;
}

export interface UserCardProps {
  data: FormValues;
}

export interface CardItem {
  img: string;
  name: string;
  status: string;
  gender: string;
  location: string;
  species: string;
}

export interface FormState {
  formData: FormValues[];
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
