import giveClassesBgImg from '../../assets/images/land.png';

import { ImageLogo, ContainerImage } from './styles';

export function ImageSearch() {
  return (
    <ContainerImage>
      <ImageLogo 
        source={giveClassesBgImg} 
        resizeMode="contain"
      />
    </ContainerImage>
  );
}
