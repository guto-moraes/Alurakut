import Wrapper from '../src/components/Wrapper';
import {HeaderWrapper, Header } from '../src/components/Header';
import { Menu, SearchBox } from '../src/components/TopBar';
import Log from '../src/components/Log';
import Main from '../src/components/Main';
import { UserBox, UserInfoAndActions } from '../src/components/UserBox';
import Content from '../src/components/ContentBox';
import FriendsCommunity from '../src/components/CommunityBox';

import SearchIcon from '../src/assets/images/icons/search-icon.svg';
import UserAvatar from '../src/assets/images/avatar.jpg';

import bookIcon from '../src/assets/images/icons/book-icon.svg';
import photoIcon from '../src/assets/images/icons/photo-icon.svg';
import plusIcon from '../src/assets/images/icons/plus-icon.svg';
import sunnyIcon from '../src/assets/images/icons/sunny-icon.svg';
import toDoListIcon from '../src/assets/images/icons/to-do-list-icon.svg';
import userUpdateIcon from '../src/assets/images/icons/user-update-icon.svg';
import userIcon from '../src/assets/images/icons/user-icon.svg';
import videoIcon from '../src/assets/images/icons/video-icon.svg';
import wrenchIcon from '../src/assets/images/icons/wrench-icon.svg';

export default function Home() {

const userMenuActionsOne = [
  {icon: userIcon, title: "Perfil"},
  {icon: bookIcon, title: "Recados"},
  {icon: photoIcon, title: "Fotos"},
  {icon: videoIcon, title: "Vídeos"},
  {icon: sunnyIcon, title: "Depoimentos"}
];

const userMenuActionsTwo = [
  {icon: toDoListIcon, title: "Listas"},
  {icon: wrenchIcon, title: "Configurações"},
  {icon: userUpdateIcon, title: "Atualizações"}
];

  return (
        <Wrapper>
          <HeaderWrapper>
            <Header>
              <Menu />
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
            <UserBox as="aside">
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
                  {
                    userMenuActionsOne.map( (item, key) => {
                      const editLink = item.icon == 'userIcon' ? '<a className="edit-perfil" href="#" title="Editar perfil do usuário">editar</a>' : '';
                      return(
                        <li key={key}>
                          <img src={item.icon.src} alt={item.title} />
                          <a href="#" title={item.title}>{item.title}</a>
                          {editLink}
                        </li>
                      )
                    })
                  }                                 
                </ul>
                <hr />
                <h2>Apps</h2>
                <ul className="user-actions">
                  <li>
                    <img src={plusIcon.src} alt="Adicionar App" />
                    <a href="#" title="Adicionar App">Adicionar App</a>
                  </li>                                   
                </ul>
                <hr />
                <ul className="user-actions">
                {
                    userMenuActionsTwo.map( (item, key) => {
                      return(
                        <li key={key}>
                          <img src={item.icon.src} alt={item.title} />
                          <a href="#" title={item.title}>{item.title}</a>
                        </li>
                      )
                    })
                  }                                                                    
                </ul>                
              </UserInfoAndActions>
            </UserBox>

            <Content />      

            <FriendsCommunity />
          </Main>
        </Wrapper>
  )
}
