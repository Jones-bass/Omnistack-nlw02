import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { ButtonsContainer, LogoContainer, PageLanding, TotalConnections, Container, HeroImage } from './styles';


export function Landing() {
  return (
    <PageLanding>
      <Container>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <HeroImage src={landingImg} alt="Plataforma de estudos" />
        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="#" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </ButtonsContainer>
        <TotalConnections>
          Total de 02 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </Container>
    </PageLanding>
  )
}
