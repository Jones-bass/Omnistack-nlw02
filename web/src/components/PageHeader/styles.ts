import styled from 'styled-components';

export const PageHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textInPrimary};
  padding: 0.5rem 0 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 1rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 2rem Archivo;
    margin-top: 5rem;
    line-height: 2.5rem;
    color: ${(props) => props.theme.titleInPrimary};
    max-width: 450px;
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme.textInPrimary};
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;