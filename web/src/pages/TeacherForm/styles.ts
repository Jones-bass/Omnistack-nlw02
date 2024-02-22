import styled from 'styled-components';

export const TeacherFormContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const FormMain = styled.main`
  background: ${(props) => props.theme.boxBase};
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    legend {
      font: 700 2.4rem Archivo;
      color: ${(props) => props.theme.textTitle};
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${(props) => props.theme.lineInWhite};

      button {
        background: none;
        border: 0;
        color: ${(props) => props.theme.primary};
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: ${(props) => props.theme.primaryDark};
        }
      }
    }

    label {
      color: ${(props) => props.theme.textComplement};
    }
  }

  footer {
    padding: 4rem 2.4rem;
    background: ${(props) => props.theme.boxFooter};
    border-top: 1px solid ${(props) => props.theme.lineInWhite};
    margin-top: 6.4rem;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${(props) => props.theme.textComplement};

      img {
        margin-right: 2rem;
      }
    }

    button {
      width: 100%;
      height: 5.6rem;
      background: ${(props) => props.theme.secundary};
      color: ${(props) => props.theme.buttonText};
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.6rem Archivo;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;
      margin-top: 3.2rem;

      &:hover {
        background: ${(props) => props.theme.secundaryDark};
      }
    }
  }

  @media (min-width: 700px) {
    max-width: 100vw;
    margin-bottom: 0;

    fieldset {
      padding: 0 6.4rem;
    }

    footer {
      padding: 4.0rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        justify-content: space-between;
      }

      button {
        width: 20rem;
        margin-top: 0;
      }
    }
  }
`;

