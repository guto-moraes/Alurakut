import { useRouter } from 'next/router';
import cookie from "js-cookie";
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
      top: -.188rem;
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

  const router = useRouter();

  const email = "joseaugusto.teo@gmail.com";

  function handleLogout(){
    fetch(
      "/api/login",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({})  
      }
    );
    router.push("/");
  }

  return(
    <ContentStatusLog>
      <a className="username" href="#" title="Username">{email}</a>
      <a className="logout" onClick={handleLogout} title="Logout">Sair</a>
    </ContentStatusLog>
  )
}