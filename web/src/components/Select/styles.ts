import styled from 'styled-components';

export const SelectBlock = styled.div`
  position: relative; 

  label {
    font-size: 1rem;
    padding-left: 0.3rem;
  }

  select {
    width: 100%; 
    height: 3.5rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.inputBackground};
    border: 1px solid ${(props) => props.theme.lineInWhite};
    color: ${(props) => props.theme.textTitle};
    outline: 0;
    padding: 0.3rem;
    font: 0.9rem Archivo;
  }
`;