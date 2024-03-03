import List from '../../../src/assets/images/logo.svg'
import { ImageLogo, ContainerImage,  } from './styles'

export function ImageSearch() {
  return (
    <ContainerImage>
      <ImageLogo>
        <img src={List} alt="" />
      </ImageLogo>
    
    </ContainerImage>
  )
}
