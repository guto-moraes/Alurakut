import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-gap: .625rem;
  margin: 0 auto;

  @media(min-width: 860px){
    grid-template-columns: 10rem 39.875rem 19.5rem;
  }
`;

export default Main;