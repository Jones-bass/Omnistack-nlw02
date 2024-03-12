import styled from 'styled-components/native';
import giveClassesBgImg from '../../assets/images/give-classes-background.png';
import { ImageBackground } from 'react-native';
import { theme } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
  justify-content: center;
  padding: 40px;
`;

export const Content = styled(ImageBackground).attrs({
  source: giveClassesBgImg,
  resizeMode: 'cover',
})`
  flex: 1;
  justify-content: center;
`;

export const TitleClass = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${theme.colors.titleInWhite};
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: ${theme.colors.textInPrimary};
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
  max-width: 240px;
`;

export const OkButton = styled.TouchableOpacity`
  background-color: ${theme.colors.secundary};
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OkButtonText = styled.Text`
  color: ${theme.colors.titleInWhite};
  font-size: 16px;
  font-family: 'Archivo_700Bold';
`;
