import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { HeaderContent, PageHeaderWrapper, TopBarContainer } from './styles';

export function PageHeader() {
  return (
    <PageHeaderWrapper>
      <TopBarContainer className="top-bar-container"> 
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent className="header-content">
        <strong>Estes são os proffys disponíveis.</strong>
        <p>description</p> 

      </HeaderContent>
    </PageHeaderWrapper> 
  );
}

