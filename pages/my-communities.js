import { Wrapper, RootWrapperTwoColumns, ContentWrapper } from '../src/components/Wrappers';
import Navigation from '../src/components/NavBar';
import { ContentBox, SquareAvatar, Link, HorizontalDividerBar, LargePaddingContentBox } from '../src/components/Utilities';
import { UserDetailsBlock, AppsTitle, ActionApps } from '../src/components/UserSidebarStyles';
import { User, UserDetailsList, UserActionsListOne, UserActionsListTwo } from '../src/components/UserSidebar';
import AllCommunities from '../src/components/MyCommunities';

const avatar = 'https://github.com/guto-moraes.png';
const github = 'https://github.com/guto-moraes';

export default function Home(){

  return (
        <Wrapper>
          <Navigation />

          <RootWrapperTwoColumns>

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
              <LargePaddingContentBox>

                <AllCommunities />

              </LargePaddingContentBox>
            </ContentWrapper>

          </RootWrapperTwoColumns>
          
        </Wrapper>
  )
}
