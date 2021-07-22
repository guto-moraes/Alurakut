import { Wrapper, RootWrapperThreeColumns, ContentWrapper } from '../src/components/Wrappers';
import Navigation from '../src/components/NavBar';
import { UserDetailsBlock, ActionApps } from '../src/components/UserSidebarStyles';
import { User } from '../src/components/UserSidebar';
import { ContentBox, LargePaddingContentBox, SquareAvatar, Link, HorizontalDividerBar } from '../src/components/Utilities';
import CommunityDetails from '../src/components/Community';
import Members from '../src/components/Members';

const communityAvatar = 'https://www.datocms-assets.com/52356/1626558236-alura.png';
const communityUrl = 'https://github.com/alura-cursos';
const communityName = 'Alura Devs';

export default function SingleCommunity(){
  return(
    <Wrapper>
      <Navigation />
   
      <RootWrapperThreeColumns>
      
        <ContentWrapper as="aside">
          <ContentBox>
            <Link to={communityUrl} title={communityName} target="_blank">
              <SquareAvatar image={communityAvatar} />
            </Link>
            <HorizontalDividerBar />

            <UserDetailsBlock>
              <Link to={communityUrl} title={communityName} target="_blank">
                <User name={communityName} />
                <span>(4120 membros)</span>
              </Link>            
            </UserDetailsBlock>
            <HorizontalDividerBar />

            <ActionApps to="#" actionTitle="Participar da comunidade" />            
               
          </ContentBox>
        </ContentWrapper>

        <ContentWrapper as="main">
          <LargePaddingContentBox>
            <CommunityDetails />
          </LargePaddingContentBox>
        </ContentWrapper>

        <ContentWrapper as="section">
          <ContentBox>
            <Members />
          </ContentBox>
        </ContentWrapper>

      </RootWrapperThreeColumns>
    </Wrapper>
  )  
}