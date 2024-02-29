import styled from 'styled-components';

export const TeacherItemWrapper = styled.article`
  background: ${(props) => props.theme.boxBase};

  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    
    img {
      width: 10%;
      height: 10%;
      border-radius: 50%;
    }
    
    div {
      margin-left: 2.4rem;

      strong {
        display: block;
        font: 700 2rem Archivo;
        color: ${(props) => props.theme.textTitle};
      }
      
      span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
      }
    }
  }
  
  > p {
    font-size: 1.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  footer {
    background: ${(props) => props.theme.boxFooter};
    display: flex;
    align-items: center;
    justify-content: space-between;

    p strong {  
      color: ${(props) => props.theme.primary};
      font-size: 1.6rem;
      display: block;
    }
    
    a {
      background-color: red;
      width: 14rem;
      height: 4rem;
      background: ${(props) => props.theme.secundary};
      color: ${(props) => props.theme.buttonText};
      border: none;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1rem Archivo;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        background: ${(props) => props.theme.secundaryDark};
      }
    }
  }

  @media (max-width: 700px) {
    margin: 1rem;

    > p {
      padding: 0rem 1rem 1rem 1rem;
      font-size: 1.2rem;

      text-align: center;
      align-items: center;
    }

    header {
      padding: 1rem;
     
      img {
        width: 30%;
        height: 30%;
      }    

      div {
        margin-left: 1rem;
      }
    }
    
    a {
      color: red;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    footer {
      display: grid;

      text-align: center;
      justify-content: center;
    }
  }
`;