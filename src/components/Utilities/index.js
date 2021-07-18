import styled from "styled-components";

const ContentBox = styled.div`
  width: 100%;
  padding: 1rem .5rem;
  background-color: #fff;
  border-radius: .5rem;

  &:not(:last-child){
    margin-bottom: .625rem;
  }
`;

const SquareAvatar = styled.div`
  width: 7.625rem;
  height: 7.625rem;
  border-radius: .5rem;
  margin: 0 auto;
  background-image: url(${props => props.image});
  background-size: cover;
`;

const Link = styled.a.attrs(
  props => ({
    href: props.to,
    title: props.title
  })
)`
  text-decoration: none;
`;

const Linked = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  color: #2e7bb4;
  text-decoration: none;
`;

const HorizontalDividerBar = styled.hr`
    width: 100%;
    height: 1px;
    margin: .75rem auto;
    background: #ecf2fa;
    background-image: linear-gradient(to right, #ecf2fa, #ecf2fa);
    border: 0;
`;

const SectionTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 1.25rem;

  span {
    color: #2e7bb4;
  }
`;

function ArrayRandom(arr, count = null){
  const total = count === null ? 0 : count;

  if(total === 0){
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
  } else {
    let randomFriends = new Set();
    while(randomFriends.size < count) {
      const random = arr[Math.floor(Math.random() * arr.length)];
      if(arr.indexOf(random) !== -1) {
        randomFriends.add(random);
      }
    }
    return [...randomFriends];
  }
} 

const ListFriendsCommunities = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(5.285rem, 1fr) );
    grid-gap: .625rem;
`;

const ListFriendsCommunitiesItem = styled.div`
    position: relative;
    height: 6.875rem;
    background-image: url(${(props) => props.image});
    background-position: top center;
    background-size: cover;
    border-radius: 0.5rem;

    h2 {
        position: absolute;
        left: 0.5rem;
        bottom: 0.625rem;
        width: 4.125rem;
        font-size: 0.675rem;
        line-height: 0.75rem;
        color: #fff;
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;        
    }
`;

export { 
  ContentBox, 
  SquareAvatar, 
  Link, 
  Linked, 
  HorizontalDividerBar, 
  SectionTitle, 
  ArrayRandom, 
  ListFriendsCommunities, 
  ListFriendsCommunitiesItem 
};