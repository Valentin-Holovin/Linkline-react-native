import { useState } from 'react';

interface UseValidationProps {
  type?: | 'email' | 'password'
  initialValue?: string | ''
}

export const useValidation = ({ type, initialValue = '' }: UseValidationProps) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const emailValidation = () => {
    if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setError('Invalid email');
    }
  };

  const passwordValidation = () => {
    if (!value.match(/\S+/)) {
      setError("Password can't have space");
    } else if (!value.match(/\d/)) {
      setError('Password must have 1 number');
    } else if (!value.match(/[a-zA-Z]/)) {
      setError('Password must have 1 letter');
    } else if (!value.match(/^.{6,20}$/)) {
      setError('Password must have be 6 to 20 characters');
    }
  };

  const onFocus = () => {
    setError('');
  };

  const onBlur = () => {
    if (type === 'email') emailValidation();
    else if (type === 'password') passwordValidation();
    else setError('Required');
  };

  return {
    value, error, setValue, onBlur, onFocus,
  };
};
