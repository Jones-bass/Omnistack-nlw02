import { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export function Input(props: InputProps) {

  return (
    <InputBlock>
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} {...props} />
    </InputBlock>
  );
}

