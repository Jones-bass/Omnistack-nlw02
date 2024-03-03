import styled from 'styled-components'

export const ContainerImage = styled.main`
  padding-top: 5rem;

  @media (max-width: 700px) {
    padding-top: 0rem;
  }
`

export const ImageLogo = styled.div`
  margin: auto;
  justify-content: center;
  text-align: center;

  img {
    width: 15rem;
    margin: 1rem;
  }

  @media (max-width: 700px) {
    margin: 0rem;
  }
`
