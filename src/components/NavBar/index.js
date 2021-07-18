import styled from "styled-components";
import HamburgerMenu from "../HamburgerMenu";
import Nav from "../Nav";
import Logo from "../../assets/images/alurakut-logo.svg";

const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;    
  background-color: #5c9ecf;
`;

const NavBar = styled.div`
  margin: 0 auto;

  @media(max-width: 859px){
    width: 90vw;
    display: flex;
    justify-content: space-between;
  }

  @media(min-width: 860px) {
    display: grid;
    grid-template-columns: 5.5rem calc(70.625rem - 7.25rem);
    grid-gap: 1.75rem;
  }
`;

const NavBrand = styled.img.attrs(
    props => ({
      src: props.image
    })
  )`
  max-width: 100px;
`;

export default function Navigation() {
    return (
        <Header>
          <NavBar>
            <NavBrand image={Logo.src} />
            <HamburgerMenu />
            <Nav />
          </NavBar>
        </Header>
    );
}