import styled from 'styled-components';

export const TeacherFormContainer = styled.div``;

export const FormMain = styled.main`
  background: ${(props) => props.theme.boxBase};
  width: 55vw;
  border-radius: 0.8rem 0.8rem 0 0;
  margin: auto;
  overflow: hidden;
  padding: 2rem;

  fieldset {
    border: 0;

    legend {
      font: 700 1.7rem Archivo;
      padding-top: 3rem;
      color: ${(props) => props.theme.textTitle};
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid ${(props) => props.theme.lineInWhite};

      button {
        background: none;
        border: 0;
        color: ${(props) => props.theme.primary};
        font: 700 1rem Archivo;
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
    background: ${(props) => props.theme.boxBase};
    border-top: 1px solid ${(props) => props.theme.lineInWhite};
    margin-top: 4rem;
    padding: 2rem;
    display: flex;

  p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      line-height: 2rem;
      color: ${(props) => props.theme.textComplement};

      img {
        margin-right: 2rem;
      }
  }

    button {
      width: 100%;
      height: 4rem;
      background: ${(props) => props.theme.secundary};
      color: ${(props) => props.theme.buttonText};
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.2rem Archivo;
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

  @media (max-width: 768px) {
    width: 100%;

    fieldset {
      padding: 0 2rem;
    }

    footer {
      display: grid;
      padding: 1rem 1.5rem 1rem 1.5rem;
      gap: 2rem;
   
      p {
        justify-content: space-between;
      }

      button {
        width: 100%;
        margin: auto;
        margin-bottom: 1rem;
      }
    }
  } 
`;

