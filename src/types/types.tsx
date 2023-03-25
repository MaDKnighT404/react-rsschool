export interface FormValues {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  country: string;
  photoUrl: string;
  photoName: string;
  skills: Record<string, boolean>;
  notifications: boolean;
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

export interface InputState {
  value: string;
}

export interface Product {
  img: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
}

export interface HeaderState {
  pathname: string;
}

export interface FormState {
  formData: FormValues[];
}
