import { TextareaHTMLAttributes } from 'react';

import { Control, Controller, FieldError } from 'react-hook-form';
import { ErrosText } from '../Input/styles';
import { TextareaContainer } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: "bio";
  label: string;
  error?: FieldError;
  control: Control | any
}

export function TextArea({ label, name, error, control, ...rest }: TextAreaProps) {
  return (
    <TextareaContainer className="textarea-block">
      <label htmlFor={name}>{label}</label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea id={name} {...field} {...rest} />
        )}
      />

      {error && <ErrosText>{error.message}</ErrosText>}
    </TextareaContainer>
  );
};
