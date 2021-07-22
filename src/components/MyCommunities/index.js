import styled from "styled-components";
import { Breadcrumb, Link, Pagination, SectionTitle } from "../Utilities";
import Button from "../Buttons";
import Alura from '../../assets/images/communities/alura.png';
import BrazilJs from '../../assets/images/communities/js-brasil.png';

const SectionCommunitiesTitle = styled(SectionTitle)`
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  margin-bottom: 0;
`;

const ButtonWithSeparator = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 2rem 0;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    margin-left: 1rem;
    background: #f4f4f4;
  }
`;

const MyCommunities = styled.ul`

  list-style: none;
  margin-bottom: 0;

  li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    height: 7.75rem;
    padding-left: 1.25rem;

    .community-info{

      a{
        display: block;
        font-size: 1.125rem;
        color: #2e7bb4;
        margin-bottom: .25rem;
        text-decoration: none;
      }
      span {
        font-size: .875rem;
        color: #5a5a5a;
      }

    }
  }

  li:first-child {
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;
  }

  li:last-child {
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }

  li:nth-child(2n+1){
    background-color: #d9e6f6;
  }

  li:nth-child(2n){
    background-color: #f1f9fe;
  }
`;

const CommunityAvatar = styled.div`
  width: 5.75rem;
  height: 5.75rem;
  background-image: url(${props => props.avatar});
  background-size: cover;
  border-radius: 50%;
`;

const PaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &.top{
    margin-bottom: 1rem;
  }

  &.bottom{
    margin-top: 1rem;
  }

  > div{
    font-size: .875rem;
    color: #333;
  }
`;

export default function AllCommunities(){
  return(
    <>
      <SectionCommunitiesTitle>
        Minhas comunidades
      </SectionCommunitiesTitle>

      <Breadcrumb>
        <li>
          <Link to="/" title="Ir para o Início">Início</Link>
        </li>
        <li>Minhas Comunidades</li>
      </Breadcrumb>

      <ButtonWithSeparator>
        <Button className="active">Criar comunidade</Button>
      </ButtonWithSeparator>

      <PaginationBlock className="top">
        <div>monstrando <strong>1</strong> de <strong>10</strong></div>
        <Pagination>
          <li>primeira</li>
          <li class="plus">anterior</li>
          <li class="plus">próxima</li>
          <li>última</li>
        </Pagination>
      </PaginationBlock>

      <MyCommunities>
        <li>
          <CommunityAvatar avatar={Alura.src} />
          <div className="community-info">
            <Link to="" title="Alura Devs">Alura Devs</Link>
            <span>4120 membros</span>
          </div>
        </li>       
        <li>
          <CommunityAvatar avatar={BrazilJs.src} />
          <div className="community-info">
            <Link to="" title="BrazilJS">BrazilJS</Link>
            <span>1200 membros</span>
          </div>
        </li>           
      </MyCommunities>

      <PaginationBlock className="bottom">
        <div>monstrando <strong>1</strong> de <strong>10</strong></div>
        <Pagination>
          <li>primeira</li>
          <li class="plus">anterior</li>
          <li class="plus">próxima</li>
          <li>última</li>
        </Pagination>
      </PaginationBlock>

    </>    
  )
}