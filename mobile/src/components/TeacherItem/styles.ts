import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';

interface PropsButtons {
  isFavorited: boolean;
}

export const Container = styled.View`

  background-color: ${theme.colors.titleInWhite};
  border-width: 2px;
  border-color: ${theme.colors.background};
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${theme.colors.background};
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const NameText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${theme.colors.textTitle};
  font-size: 20px;
`;

export const SubjectText = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${theme.colors.textBase};
  font-size: 14px;
  margin-top: 4px;
`;

export const BioText = styled.Text`
  font-family: 'Poppins_400Regular';
  padding: 0px 20px;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.textTitle};
`;

export const Footer = styled.View`
  background-color: ${theme.colors.titleInWhite};
  padding: 0px 24px 14px 24px;
  margin-top: 24px;
`;

export const PriceText = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${theme.colors.textBase};
  font-size: 14px;
`;

export const PriceValueText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${theme.colors.primary};
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(TouchableOpacity)`
  background-color: ${({ isFavorited }: PropsButtons) => (isFavorited ? theme.colors.alert : theme.colors.primary)};

  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(TouchableOpacity)`
  background-color: ${theme.colors.secundary};
  flex: 1;
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  color: ${theme.colors.buttonText};
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;
