import styled from 'styled-components';



export const TextareaContainer = styled.div`  
  position: relative;

  label {
    font-size: 1rem;
    padding-left: 0.3rem;
}

textarea {
  width: 100%;
  height: 16rem;
  min-height: 8rem;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.inputBackground};
  border: 1px solid ${(props) => props.theme.lineInWhite};
  outline: none;
  resize: vertical;
  padding: 1.2rem 1.6rem;
  font: 1.6rem Archivo;
}

:focus-within::after {
  width: calc(100% - 3.2rem);
  height: 2px;
  content: '';
  background: ${(props) => props.theme.primarylight};
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 7px;
}
`;

