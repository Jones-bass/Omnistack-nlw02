import { SelectHTMLAttributes } from 'react';
import { SelectBlock } from './styles';
import { Control, Controller, FieldError } from 'react-hook-form';
import { ErrosText } from '../Input/styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: "nome" | "avatar" | "whatsapp" | "bio" | "subject" | "cost" | "week_day" | `schedule.${number}.from` | `schedule.${number}.to` | `schedule.${number}.week_day`;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  error?: FieldError | undefined;
  control: Control | any; 
}

export function Select({ label, name, options, error, control, ...rest }: SelectProps) {
  return (
    <SelectBlock className="select-block">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select id={name} {...field} {...rest}>
            <option value="" disabled hidden>Selecione uma opção</option>

            {options.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        )}
      />
      {error && <ErrosText>{error.message}</ErrosText>}

    </SelectBlock >
  );
}

