import styled from "styled-components";

const HamburgerMenuIcon = styled.button`
    display: none;
    width: 1.85rem;
    height: 1.75rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    span::after {
      display: block;
      content: "";
      width: 2rem;
      height: .25rem;
      background-color: #fff;
      transition: 600ms all;
    }

    span:not(:last-child)::after {
      margin-bottom: .25rem;
    }

    &.active span:nth-child(1)::after{
      position: absolute;
      transform: rotate(45deg);
    }
    &.active span:nth-child(2)::after{
      display: none;
    }
    &.active span:nth-child(3)::after{
      position: absolute;
      transform: rotate(-45deg);
    }

    @media (max-width: 859px) {
      display: block;
    }
`;

export default function HamburgerMenu(){

  function showMenu(e){
    e.preventDefault();
    const button = document.querySelector('.show-menu');
    const navbar = document.querySelector('.navbar');
    
    button.classList.toggle('active');
    navbar.classList.toggle('active');
  }  
  
  return(
    <HamburgerMenuIcon onClick={showMenu} className="show-menu" title="Menu do site" role="button">
      <span></span>
      <span></span>
      <span></span>
    </HamburgerMenuIcon>
  )
}