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
  flex-direction: row;
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
  return(
    <LoginWrapper>
      <LoginRootWrapper>

        <LoginMain>
          <LoginContentBox>
    
            <img src={Alura.src} alt="Alurakut | Uma comunidade que nunca envelhece" title="Alurakut | Uma comunidade que nunca envelhece" />
            <div className="presentation">
              <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
              <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
              <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
            </div>
                
          </LoginContentBox>

          <LoginFormGroup>
            <LoginContentBox>
              <LoginForm>
                <h2>Crie sua conta no <strong>Alurakut</strong></h2>
                <input type="text" name="username" placeholder="Informe seu nome de usuário" />
                <input type="email" name="password" placeholder="Informe seu e-mail" />
                <input type="password" name="password" placeholder="Digite sua senha" />
                <input type="password" name="check_password" placeholder="Repita a senha digitada" />
                <ButtonLogin type="submit">Criar conta</ButtonLogin>
              </LoginForm>
            </LoginContentBox>
          </LoginFormGroup>
        </LoginMain>

        <LoginFooter>
          <LoginFooterContentBox>
            &copy; 2021 Alurakut - 
            <Link to="#">Sobre o Alurakut</Link> -  
            <Link to="#">Centro de segurança</Link> -  
            <Link to="#">Privacidade</Link> -  
            <Link to="#">Termos</Link> -  
            <Link to="#">Contato</Link>
          </LoginFooterContentBox>
        </LoginFooter>

      </LoginRootWrapper>   
    </LoginWrapper>
  )
}