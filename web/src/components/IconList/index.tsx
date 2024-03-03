import List from '../../../src/assets/images/logo.svg'
import { ImageLogo, ContainerImage,  } from './styles'

export const IconList = () => {
  return (
    <ContainerImage>
      <ImageLogo>
        <img src={List} alt="" />
      </ImageLogo>
    
    </ContainerImage>
  )
}
