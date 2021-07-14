import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #5c9ecf;
`;

const Header = styled.div`
  display: grid;
  grid-gap: 1.75rem;
  line-height: 3rem;
  margin: 0 auto;

  @media(min-width: 860px){
    grid-template-columns: auto 15rem 11.375rem;
    width: 70.625rem;
  }
`

export { HeaderWrapper, Header };