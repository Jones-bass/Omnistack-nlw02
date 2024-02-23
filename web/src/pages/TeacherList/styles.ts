import styled from 'styled-components';

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;
`;


export const SearchTeachers = styled.form`
  top: 14rem;
  
  label {
    color: ${(props) => props.theme.textInPrimary};
  }

  button {
    width: 100%;
    height: 3.5rem;
    background: ${(props) => props.theme.secundary};
    color: ${(props) => props.theme.buttonText};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 2.4rem;

    &:hover {
      background: ${(props) => props.theme.secundaryDark};
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;