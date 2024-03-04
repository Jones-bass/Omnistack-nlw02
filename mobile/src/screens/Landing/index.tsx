import { Image } from 'react-native';

import landingImg from '../../assets/images/landing.png';
import heartIcon from '../../assets/images/icons/heart.png';

import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';

import { ButtonPrimary, ButtonSecundary, ButtonText, ButtonsContainer, ContainerLanding, Logo, Title, TitleBold, TotalConnections } from './styles';

export function Landing() {
  return (
    <ContainerLanding>
      <Logo source={landingImg} />

      <Title >
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary>
          <ButtonText>Estudar
          <Image source={studyIcon} />

          </ButtonText>
        </ButtonPrimary>
        
        <ButtonSecundary>
          <ButtonText>Dar aulas
          <Image source={giveClassesIcon} />

          </ButtonText>
        </ButtonSecundary>
      </ButtonsContainer>

      <TotalConnections>
        Total de 02 conexões já realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </ContainerLanding>
  );
}
