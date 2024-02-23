import styled from 'styled-components';

export const InputBlock = styled.div`
  position: relative;

  label {
    font-size: 1rem;
    padding-left: 0.3rem;
  }

  input {
    width: 100%;
    height: 3.5rem;
    margin-top: 0.3rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.inputBackground};
    border: 1px solid ${(props) => props.theme.lineInWhite};
    color: ${(props) => props.theme.textTitle};
    outline: 0;
    padding: 0 1.6rem;
    font: 0.9rem Archivo;
  }
`;


export const ErrosText = styled.p`
  color: ${(props) => props.theme.alert};
  font-size: 12px;
  padding-bottom: 5px;
`