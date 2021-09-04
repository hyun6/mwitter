import React, { useState } from 'react';

interface IFormValues {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export const useForm = (initialState: IFormValues): [IFormValues, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [formValues, setFormValues] = useState<IFormValues>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return [formValues, handleChange];
};
