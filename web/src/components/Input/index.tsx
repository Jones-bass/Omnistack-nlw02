import { InputHTMLAttributes } from 'react';

import { ErrosText, InputBlock } from './styles';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  errorMessage: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return (
    <InputBlock>
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} {...register(props.name)} {...props} />
      {props.errorMessage ? <ErrosText>{props.errorMessage}</ErrosText> : null}
    </InputBlock>
  );
}

