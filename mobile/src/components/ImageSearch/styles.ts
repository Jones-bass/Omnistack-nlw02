import styled from 'styled-components/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';
import { ImageBackground } from 'react-native';


export const Container = styled(ImageBackground).attrs({
  source: giveClassesBgImg,
  resizeMode: 'cover',
})`
  flex: 1;
  justify-content: center;
`;

export const ContainerImage = styled(Container)`
  padding-top: 50px;
  align-items: center; 
`;

export const ImageLogo = styled.Image`
  width: 250px; 
  height: 250px;
`;
