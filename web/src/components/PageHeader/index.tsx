import { ReactNode } from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { HeaderContent, PageHeaderWrapper, TopBarContainer } from './styles';

interface PageHeaderProps {
  children: ReactNode;
  title: string;
}

export function PageHeader(props: PageHeaderProps ) {
  return (
    <PageHeaderWrapper>
      <TopBarContainer className="top-bar-container"> 
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent className="header-content">
        <strong>{props.title}</strong>
        {props.children}

      </HeaderContent>
    </PageHeaderWrapper> 
  );
}

