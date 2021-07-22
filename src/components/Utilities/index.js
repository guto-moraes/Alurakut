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

const LargePaddingContentBox = styled(ContentBox)`
  padding: 1.5rem!important;
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

const Breadcrumb = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: .5rem;

   li{
    font-size: 0.875rem;
    color: #999;
    line-height: 1.125rem;
   } 

  li:not(:last-child)::after{
    content: ">";
    font-size: 0.875rem;
    color: #999;
    margin: 0 .25rem;
  }

  a{
    color: #2e7bb4;
  }
`;

const Pagination = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  li{
    position: relative;
    font-size: .875rem;
    color: #333;
    padding-right: .5rem;

    &:nth-child(2).plus{
      position: relative;
      padding-left: 1rem!important;

      &::after {
        content: "<";
        position: absolute;
        top: 0;
        left: .35rem;
        font-size: 0.875rem;
        color: #333;
      }
    }

    &:nth-child(3).plus{
      position: relative;
      padding-right: 1rem!important;

      &::after {
        content: ">";
        position: absolute;
        top: 0;
        right: .35rem;
        font-size: 0.875rem;
        color: #333;
      }
    }    

    &:not(:first-child) {
      padding-left: .5rem;
    }

    &:not(:last-child)::before {
      content : "";
      position: absolute;
      top: .125rem;
      right: 0;
      width: 1px;
      height: .875rem;
      background: #333;
      z-index: 100;
    }
  }
`;

export { 
  ContentBox, 
  LargePaddingContentBox,
  SquareAvatar, 
  Link, 
  Linked, 
  HorizontalDividerBar, 
  SectionTitle, 
  ArrayRandom, 
  ListFriendsCommunities, 
  ListFriendsCommunitiesItem,
  Breadcrumb,
  Pagination
};