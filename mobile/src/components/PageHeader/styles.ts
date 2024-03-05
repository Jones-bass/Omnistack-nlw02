import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  padding: 40px;
  background-color: #8257e5;
`;

export const BorderlessButton = styled(TouchableOpacity)`

`;

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
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 180px;
  `;
//  margin-vertical: 40px;
