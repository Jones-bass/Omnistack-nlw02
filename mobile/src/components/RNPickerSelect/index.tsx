import { ReactNode, useMemo } from 'react';
import PickerSelect, {
  PickerSelectProps,
  PickerStyle,
} from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';

interface RNPickerSelectProps extends PickerSelectProps {
  name?: string;
  Ícone?: () => JSX.Element
}

export function RNPickerSelect({ items, ...rest }: RNPickerSelectProps) {
  const style = useMemo<PickerStyle>(() => {
    return {
      viewContainer: {
        height: 54,
        backgroundColor: '#fff',
        paddingLeft: 8,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 4,
      },
      inputIOSContainer: {
        paddingLeft: 8,
        height: '100%',
        justifyContent: 'center',
      },
      iconContainer: {
        height: '100%',
        justifyContent: 'center',
        marginRight: 16,
      },
      placeholder: {
        color: '#c1bccc',
      },
    };
  }, []);

  return (
    <PickerSelect
      items={items}
      placeholder={{ label: 'Selecione o dia', value: '', color: '#ccc' }}
      style={style}
      doneText="Selecionar"
      Ícone={() => <Feather name="chevron-down" size={20} color="#000" />}
      {...rest}
    />
  );
}
