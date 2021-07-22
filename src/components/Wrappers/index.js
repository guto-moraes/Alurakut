import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3rem auto;
  grid-gap: 1.5rem;
  width: 100%;
  min-height: 100vh;
  background-color: #d9e6f6;
`;

const RootWrapperThreeColumns = styled.div`
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

const RootWrapperTwoColumns = styled(RootWrapperThreeColumns)`

  @media(min-width: 860px){
    grid-template-columns: 10rem 59.375rem;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: .75rem;
  width: 100%;
  height: 100vh;
  background-color: #d9e6f6;
`;

const LoginRootWrapper = styled.div`

  display: grid;
  grid-gap: .75rem;

  @media(max-width: 859px){
    grid-template-columns: 90vw;
  }  

  @media(min-width: 860px){
    grid-template-rows: 23rem 1.875rem;
    width: 69.375rem;
  }
`;

export { Wrapper, RootWrapperThreeColumns, RootWrapperTwoColumns, ContentWrapper, LoginWrapper, LoginRootWrapper };
