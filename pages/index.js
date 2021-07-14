import Wrapper from '../src/components/Wrapper';
import {HeaderWrapper, Header } from '../src/components/Header';
import { Menu, SearchBox } from '../src/components/TopBar';
import Log from '../src/components/Log';
import Main from '../src/components/Main';
import { UserBox, UserInfoAndActions } from '../src/components/UserBox';
import { ContentBoxWrapper, ContentBox } from '../src/components/ContentBox';
import FriendsCommunity from '../src/components/CommunityBox';
import Button from '../src/components/Buttons';

import AppLogo from '../src/assets/images/alurakut-logo.svg';
import SearchIcon from '../src/assets/images/icons/search-icon.svg';
import UserAvatar from '../src/assets/images/avatar.jpg';

import bookIcon from '../src/assets/images/icons/book-icon.svg';
import cubeIcon from '../src/assets/images/icons/cube-icon.svg';
import cubeIconOp from '../src/assets/images/icons/cube-opacity-icon.svg';
import emailIcon from '../src/assets/images/icons/email-icon.svg';
import heartIcon from '../src/assets/images/icons/heart-icon.svg';
import photoIcon from '../src/assets/images/icons/photo-icon.svg';
import plusIcon from '../src/assets/images/icons/plus-icon.svg';
import smileIcon from '../src/assets/images/icons/smile-icon.svg';
import smileIconOp from '../src/assets/images/icons/smile-opacity-icon.svg';
import starIcon from '../src/assets/images/icons/star-icon.svg';
import sunnyIcon from '../src/assets/images/icons/sunny-icon.svg';
import toDoListIcon from '../src/assets/images/icons/to-do-list-icon.svg';
import userUpdateIcon from '../src/assets/images/icons/user-update-icon.svg';
import userIcon from '../src/assets/images/icons/user-icon.svg';
import videoIcon from '../src/assets/images/icons/video-icon.svg';
import wrenchIcon from '../src/assets/images/icons/wrench-icon.svg';


export default function Home() {

  return (
        <Wrapper>
          <HeaderWrapper>
            <Header>
              <Menu>
                <img className="user-avatar" src={AppLogo.src} alt="Alurakut" />
                <ul className="menu-list">
                  <li>
                    <a className="active" href="#" title="Início">Início</a>
                  </li>
                  <li>
                    <a href="#" title="Perfil">Perfil</a>
                  </li>
                  <li>
                    <a href="#" title="Página de recados">Página de recados</a>
                  </li>
                  <li>
                    <a href="#" title="Amigos">Amigos</a>
                  </li>        
                  <li>
                    <a href="#" title="Comunidades">Comunidades</a>
                  </li>                                                                       
                </ul>
              </Menu>
              <Log>
                <span>joseaugusto.teo@gmail.com</span>
                <a href="logout" title="Sair do Alurakut">Sair</a>
              </Log>
              <SearchBox>
                <input type="search" placeholder="Pesquisar no Orkut" />
                <button type="submit" className="search-button">
                  <img src={SearchIcon.src} alt="Search Button Icon" />
                </button>
              </SearchBox>
            </Header>
          </HeaderWrapper>

          <Main>
            <UserBox>
              <img className="user-avatar" src={UserAvatar.src} alt="Guto Moraes" />
              <UserInfoAndActions>
                <hr />
                <h1 className="user-name">Guto Moraes</h1>
                <ul className="user-info">
                  <li>masculino,</li>
                  <li>casado</li>
                  <li>Brasil</li>
                </ul>
                <hr />
                <ul className="user-actions">
                  <li>
                    <img src={userIcon.src} alt="Perfil do Usuário" />
                    <a href="#" title="Perfil do Usuário">Perfil</a>
                  </li>
                  <li>
                    <img src={bookIcon.src} alt="Recados" />
                    <a href="#" title="Recados">Recados</a>
                  </li>
                  <li>
                    <img src={photoIcon.src} alt="Fotos" />
                    <a href="#" title="Fotos">Fotos</a>
                  </li>
                  <li>
                    <img src={videoIcon.src} alt="Vídeos" />
                    <a href="#" title="Vídeos">Vídeos</a>
                  </li>
                  <li>
                    <img src={sunnyIcon.src} alt="Depoimentos" />
                    <a href="#" title="Depoimentos">Depoimentos</a>
                  </li>                                    
                </ul>
                <hr />
                <h2>Apps</h2>
                <ul className="user-actions">
                  <li>
                    <img src={plusIcon.src} alt="Adicionar App" />
                    <a href="#" title="Adicionar App">Adicionar App</a>
                  </li>                                   
                </ul>
                <ul className="user-actions">
                  <li>
                    <img src={toDoListIcon.src} alt="Listas" />
                    <a href="#" title="Listas">Listas</a>
                  </li>    
                  <li>
                    <img src={userUpdateIcon.src} alt="Atualizações" />
                    <a href="#" title="Atualizações">Atualizações</a>
                  </li>  
                  <li>
                    <img src={wrenchIcon.src} alt="Configurações" />
                    <a href="#" title="Configurações">Configurações</a>
                  </li>                                                                     
                </ul>                
              </UserInfoAndActions>
            </UserBox>

            <ContentBoxWrapper>
              <ContentBox>
                <h1 className="welcome">Bem-vindo, Guto Moraes</h1>
                <h2 className="good-lucky"><strong>Sorte de hoje</strong>: O melhor profeta do futuro é o passado</h2>
                <ul className="actions-content-list">
                  <li>
                    <span className="section">Recados</span>
                    <div className="icon-count">
                      <img src={bookIcon.src} alt="Recados" /> <span className="total">0</span>
                    </div>
                  </li>
                  <li>
                    <span className="section">Fotos</span>
                    <div className="icon-count">
                      <img src={photoIcon.src} alt="Fotos" /> <span className="total">0</span>
                    </div>
                  </li>                  
                  <li>
                    <span className="section">Vídeos</span>
                    <div className="icon-count">
                      <img src={videoIcon.src} alt="Vídeos" /> <span className="total">0</span>
                    </div>
                  </li>
                  <li>
                    <span className="section">Fãs</span>
                    <div className="icon-count">
                      <img src={starIcon.src} alt="Fãs" /> <span className="total">0</span>
                    </div>
                  </li>
                  <li>
                    <span className="section">Mensagens</span>                    
                    <div className="icon-count">
                      <img src={emailIcon.src} alt="Mensagens" /> <span className="total">0</span>
                    </div>
                  </li>
                  <li>
                    <span className="section">confiável</span>                    
                    <div className="icon-count">
                      <img src={smileIcon.src} alt="Confiável" />
                      <img src={smileIconOp.src} alt="Confiável" />
                      <img src={smileIconOp.src} alt="Confiável" /> <span className="total">0</span>
                    </div>
                  </li>
                  <li>
                    <span className="section">legal</span>
                    <div className="icon-count">
                      <img src={cubeIcon.src} alt="Legal" />
                      <img src={cubeIconOp.src} alt="Legal" />
                      <img src={cubeIconOp.src} alt="Legal" /> <span className="total">0</span>
                    </div>
                  </li>
                  <li>
                    <span className="section">sexy</span>                    
                    <div className="icon-count">
                      <img src={heartIcon.src} alt="Sexy" />
                      <img src={heartIcon.src} alt="Sexy" />
                      <img src={heartIcon.src} alt="Sexy" /> <span className="total">0</span>
                    </div>
                  </li>                                                                                                                              
                </ul>
              </ContentBox>
              <ContentBox>
                <h2 className="what-do-you-do">O que você deseja fazer?</h2>
                <Button primary>Criar comunidade</Button>
                <Button>Escrever depoimento</Button>
                <Button>Deixar um scrap</Button>
                <form className="community-name">
                  <input type="text" name="community" placeholder="Qual vai ser o nome da sua comunidade?" />
                </form>
              </ContentBox>
            </ContentBoxWrapper>

            <FriendsCommunity />
          </Main>
        </Wrapper>
  )
}
