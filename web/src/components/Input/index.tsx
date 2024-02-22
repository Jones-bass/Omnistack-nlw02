import { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function Input({ label, name, ...rest }:InputProps) {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputBlock>
  );
}

