import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoginWrapper, LoginRootWrapper} from '../src/components/Wrappers';
import { ContentBox, Link } from '../src/components/Utilities';
import Button from "../src/components/Buttons";

import Alura from '../src/assets/images/alurakut-login.svg'

const LoginMain = styled.main`
  display: grid;
  gap: .75rem;

  @media(max-width: 859px){
    grid-template-columns: 100%;
  }

  @media(min-width: 860px){
    grid-template-rows: 23rem;
    grid-template-columns: auto 23rem;
  }
`;

const LoginContentBox = styled(ContentBox)`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;  

  &:not(:last-child){
    margin-bottom: 0;
  }

  .presentation {
    font-size: .75rem;
    color: #333;
    margin-top: 1.875rem;
    text-align: center;

    p:not(:last-child){
      margin-bottom: .275rem;
    }

    strong {
      color: #d81d99;
    }
  }

  @media(max-width: 859px){
      img {
        max-width: 15rem;
      }
      .presentation {
        text-align: left;
      }
  }
 
`;

const LoginFormGroup = styled.aside`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 100%;

  .sign-in{
    height: 17.625rem;
  }

  .sign-up{
    height: 4.625rem;

    p{
      font-size: .75rem;
      line-height: .875rem;
      color: #333;
    }

    a{
      font-size: .875rem;
      font-weight: 700;
      color: #2e7bb4;
      text-transform: uppercase;
    }
  }

`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 13.125rem;
  padding: 1rem 0;

  h2{
    width: 8.125rem;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.125rem;
    color: #5a5a5a;
    text-align: center;
    margin-bottom: 1.25rem;

    strong{
      font-weight: 700;
    }
  }

  input{
    width: 100%;
    font-size: .725rem;
    color: #5a5a5a;
    padding: .625rem 1rem;
    background: #fff;
    border: 1px solid #c5c6ca;
    border-radius: .5rem;
    margin-bottom: .75rem;
  }
`;

const ButtonLogin = styled(Button)`
  width: 100%;
  font-size: .75rem;
  font-weight: 700;
  color: #fff;
  padding: .625rem auto;
  background-color: #2e7bb4;

  &:hover {
    background-color: #2e7bb4; 
  }
`;

const Error = styled.span`
  display: none;
  font-size: .75rem;
  color: red;
`;

const EmailError = styled(Error)`
  &.error{
    display: block;
  }
`;

const PasswordError = styled(Error)`
  &.error{
    display: block;
  }
`;

const LoginFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: .75rem;
  color: #333;
  text-align: center;

  a {
    color: #2e7bb4;    
    margin-left: .15rem;
  }
`;

const LoginFooterContentBox = styled(ContentBox)`
  padding: .5rem;
  background-color: #bbcde8;
`;

export default function Login(){

  const router = useRouter();
  const [user, setUser] = useState([{}]);
  
  useEffect(() => {
    const DATO_API = "https://graphql.datocms.com/";
    const LOGIN_QUERY = `query {
      allUsers {
        id
        username
        email
        password
      }
    }`;

    fetch(DATO_API, {
      method: 'POST',
      headers: {
        'Authorization': 'b4f8934093a7c8aca896720661c056',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "query": LOGIN_QUERY })
    })
    .then( response => response.json() )
    .then( res => {
      setUser(res.data.allUsers);
    });

    return () => {
      setUser();
    }

  }, []);

  const userInfo = [];
  user.map( item => userInfo.push(item.email, item.password, item.username));


  const handleLogin = (e) => {

    const email = document.querySelector(".email-error");
    const pass = document.querySelector('.password-error');

    e.preventDefault();

    if(userInfo[0] == e.target[0].value && userInfo[1] == e.target[1].value){
      
      fetch(
        "/api/login",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "loggedin": { username: userInfo[2], email: userInfo[0] }})  
        }
      );
      router.push('/home');

    } else if(userInfo[0] !== e.target[0].value && userInfo[1] !== e.target[1].value){
      email.classList.add('error');
      pass.classList.add('error');      
    } else if(userInfo[0] !== e.target[0].value && userInfo[1] == e.target[1].value){
      email.classList.add('error');
    } else if(userInfo[0] == e.target[0].value && userInfo[1] !== e.target[1].value){
      pass.classList.add('error');
    }
  }


  return(
    <LoginWrapper>
      <LoginRootWrapper>

        <LoginMain>
          <LoginContentBox>
    
            <img src={Alura.src} alt="Alurakut | Uma comunidade que nunca envelhece" title="Alurakut | Uma comunidade que nunca envelhece" />
            <div className="presentation">
              <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instant??neas</p>
              <p><strong>Conhe??a</strong> novas pessoas atrav??s de amigos de seus amigos e comunidades</p>
              <p><strong>Compartilhe</strong> seus v??deos, fotos e paix??es em um s?? lugar</p>
            </div>
                
          </LoginContentBox>

          <LoginFormGroup>
            <LoginContentBox className="sign-in">
              <LoginForm onSubmit={handleLogin}>
                <h2>Acesse o <strong>Alurakut</strong> com a sua conta</h2>
                <EmailError className="email-error">O e-mail informado n??o ?? v??lido!</EmailError>
                <input type="email" name="username" placeholder="Informe seu nome de usu??rio" />
                <PasswordError className="password-error">A senha informada n??o ?? v??lida!</PasswordError>
                <input type="password" name="password" placeholder="Digite sua senha" />
                <ButtonLogin type="submit">Login</ButtonLogin>
              </LoginForm>
            </LoginContentBox>

            <LoginContentBox className="sign-up">
              <p>Ainda n??o ?? membro?</p>
              <Link to="/register" title="Crie sua conta no Alurakut">Entre J??</Link>
            </LoginContentBox>
          </LoginFormGroup>
        </LoginMain>

        <LoginFooter>
          <LoginFooterContentBox>
            &copy; 2021 Alurakut - 
            <Link to="#">Sobre o Alurakut</Link> -  
            <Link to="#">Centro de seguran??a</Link> -  
            <Link to="#">Privacidade</Link> -  
            <Link to="#">Termos</Link> -  
            <Link to="#">Contato</Link>
          </LoginFooterContentBox>
        </LoginFooter>

      </LoginRootWrapper>   
    </LoginWrapper>
  )
}