import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3rem auto;
  grid-gap: 1.5rem;
  width: 100%;
  min-height: 100vh;
  background-color: #d9e6f6;
`;

const RootWrapper = styled.div`
  display: grid;
  grid-gap: .625rem;
  margin: 0 auto;

  @media(max-width: 859px){
    grid-template-columns: 90vw;
  }  

  @media(min-width: 860px){
    grid-template-columns: 10rem 39.875rem 19.5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

export { Wrapper, RootWrapper, ContentWrapper };
