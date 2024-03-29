import styled from 'styled-components/native';
import { theme } from '../../theme';
import { TouchableOpacity } from 'react-native';

export const ContainerList = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const LabelText = styled.Text`
  color: ${theme.colors.textInPrimary};
  font-family: 'Poppins_400Regular';
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  `;

export const InputBlock = styled.View`
  width: 48%;
`;

export const InputText = styled.TextInput`
  height: 54px;
  background-color: ${theme.colors.titleInWhite};
  padding: 10px;
  border-radius: 8px;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const SubmitButton = styled(TouchableOpacity)`
  background-color: ${theme.colors.secundary};
  height: 56px;
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: ${theme.colors.titleInWhite};
  font-family: Archivo_700Bold;
  font-size: 16px;
`;