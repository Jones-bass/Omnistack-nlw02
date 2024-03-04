import styled from 'styled-components/native';

import { theme } from '../../theme';
import { TouchableOpacity } from 'react-native';

export const ContainerLanding = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};

  justify-content: center;
  padding: 40px;
`;

export const Logo = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${theme.colors.titleInPrimary};
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(TouchableOpacity)`
  height: 125px;
  width: 48%;
  background-color: ${theme.colors.textTitle};
  border-radius: 8px;
  padding: 24px;

  justify-content: space-between;
  align-items: center;
  text-align: center;  
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${theme.colors.primaryLighter};
`;

export const ButtonSecundary = styled(Button)`
  background-color: ${theme.colors.secundary};
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.titleInPrimary};
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
