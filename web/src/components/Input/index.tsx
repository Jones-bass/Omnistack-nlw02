import { InputHTMLAttributes } from 'react';

import { ErrosText, InputBlock } from './styles';
import { Control, Controller, FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: "nome" | "avatar" | "whatsapp" | "bio" | "subject" | "cost" | `schedule.${number}.from` | `schedule.${number}.to` | `schedule.${number}.week_day`;
  label?: string;
  error?: FieldError;
  control: Control | any
}

export function Input({ name, label, error, control, ...rest }: InputProps) {
  return (
    <>
    <InputBlock>
    <label htmlFor={label}>{label}</label>


      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, ref } }) => (
          
          <input 
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
          
          )}
      />

    {error && <ErrosText>{error.message}</ErrosText>} 

    </InputBlock>
  </>
   
  );
}
