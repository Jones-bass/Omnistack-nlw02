import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textInPrimary};

  @media (max-width: 668px) {
    margin: auto;

  }
`;

export const Container = styled.div`
  max-width: 1100px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "logo hero hero"
    "buttons buttons total";

  
    @media (max-width: 668px) {
      grid-template-rows: auto;
      grid-template-columns: 1fr;
      grid-template-areas: 
        "logo"
        "hero"
        "total"
        "buttons";
      }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  align-self: center;
  text-align: left;
  margin: 0;

  @media (max-width: 668px) {
    padding: 1rem;
    grid-area: logo;
    width: 75%;
    
    padding-top: 15rem;
    margin: auto;
  }

  h2 {
    text-align: initial;
    font: 700 2rem Archivo;
  }

  img {
    width: 100%;
  }
`;

export const HeroImage = styled.img`
  grid-area: hero;
  justify-self: end;
  width: 70%;
  max-width: 100%; 
  height: auto;

  @media (max-width: 768px) {
    grid-area: hero;
    width: 75%;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-area: buttons;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 668px) {
    grid-area: buttons;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a {

    width: 18rem;
    height: 6rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    color: ${(props) => props.theme.buttonText};
    background: ${(props) => props.theme.primaryLighter};

    &:last-child {
      margin-right: 0;
    }

    img {
      width: 2rem;
      margin-right: 2.4rem;
    }

    &.give-classes {
      background: ${(props) => props.theme.secundary};
    }

    &:hover {
      &.study {
        background: ${(props) => props.theme.primarylight};
      }

      &.give-classes {
        background: ${(props) => props.theme.secundaryDark};
      }
    }
  }

  @media (max-width: 668px) {
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: background-color 0.2s;
  }
`;

export const TotalConnections = styled.span`
  grid-area: total;
  width: 32rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    margin-left: 0.8rem;
  }

  @media (max-width: 768px) {
    grid-area: total;
    justify-content: center;
    padding: 5%;
    align-items: center;
    width: 28rem;
  }
`;

