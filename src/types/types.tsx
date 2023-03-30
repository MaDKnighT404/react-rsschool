export interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  country: string;
  photo: FileList;
  skills: Record<string, boolean>;
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

export interface Product {
  img: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
}

export interface FormState {
  formData: FormValues[];
}
