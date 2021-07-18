import styled from "styled-components";

const ContentStatusLog = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a{
    position: relative;
    
    &:not(:last-child){
      padding-right: 1rem;
    }
  
    &:not(:last-child)::before {
      content : "";
      position: absolute;
      top: 4px;
      right: 0;
      width: 1px;
      height: .575rem;
      background: #5292C1;
      z-index: 100;
    }
}

  .username{
    font-size: 0.8rem;
    font-weight: 500;
    color: #2f4a71;
  }

  .logout {
    font-size: 0.75rem;
    color: #fff;
  }

  .username,
  .logout {
    text-decoration: none;
  }

`;

export default function StatusLog(){
  return(
    <ContentStatusLog>
      <a className="username" href="#" title="Username">joseaugusto.teo@gmail.com</a>
      <a className="logout" href="#" title="Logout">Sair</a>
    </ContentStatusLog>
  )
}