import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export const ContainerHeader = styled.View`
  padding: 40px;
  background-color: ${theme.colors.primary};
`;

export const BorderlessButton = styled(TouchableOpacity)``;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color:${theme.colors.titleInWhite};
  font-family: 'Archivo_400Regular';    
  font-size: 24px;
  max-width: 180px;
  `;
