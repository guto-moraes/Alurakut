import { Wrapper, RootWrapperThreeColumns, ContentWrapper } from '../src/components/Wrappers';
import Navigation from '../src/components/NavBar';
import { ContentBox, SquareAvatar, Link, HorizontalDividerBar } from '../src/components/Utilities';
import { UserDetailsBlock, AppsTitle, ActionApps } from '../src/components/UserSidebarStyles';
import { User, UserDetailsList, UserActionsListOne, UserActionsListTwo } from '../src/components/UserSidebar';

import Welcome from '../src/components/Welcome';
import WhatDoYouWish from '../src/components/WhatDoYouWish';
import Friends from '../src/components/Friends';
import StatsHome from '../src/components/StatsHome';
import Communities from '../src/components/Communities';

const avatar = 'https://github.com/guto-moraes.png';
const github = 'https://github.com/guto-moraes';

export default function Home(){

  const username = "Guto Moraes";

  return (
        <Wrapper>
          <Navigation />
          
          <RootWrapperThreeColumns>

          <ContentWrapper as="aside">
            <ContentBox>

                <Link to={github} title={username} target="_blank">
                  <SquareAvatar image={avatar} />
                </Link>
                <HorizontalDividerBar />

                <UserDetailsBlock>
                  <Link to={github} title={username} target="_blank">
                    <User name={username} />
                  </Link>
                  <UserDetailsList />
                </UserDetailsBlock>
                <HorizontalDividerBar />                

                <UserActionsListOne />
                <HorizontalDividerBar />

                <AppsTitle>Apps</AppsTitle>
                <ActionApps to="#" actionTitle="Adicionar apps" />
                <HorizontalDividerBar />

                <UserActionsListTwo />    

            </ContentBox>
          </ContentWrapper>

          <ContentWrapper as="main">
            <ContentBox>
              <Welcome username={username} />
              <StatsHome />
            </ContentBox>

            <ContentBox>
              <WhatDoYouWish />
            </ContentBox>
          </ContentWrapper>

          <ContentWrapper as="section">
            <ContentBox>
              <Friends />
            </ContentBox>

            <ContentBox>
              <Communities />
            </ContentBox>
          </ContentWrapper>         

        </RootWrapperThreeColumns>
          
      </Wrapper>
  )
}