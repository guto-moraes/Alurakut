import React from 'react';
import styled from 'styled-components';

import friend1 from '../../assets/images/friends/friend-1.jpg';
import friend2 from '../../assets/images/friends/friend-2.jpg';
import friend3 from '../../assets/images/friends/friend-3.jpg';
import friend4 from '../../assets/images/friends/friend-4.jpg';
import friend5 from '../../assets/images/friends/friend-5.jpg';
import friend6 from '../../assets/images/friends/friend-6.jpg';

const CommunityWrapper = styled.section`
  width: 100%;
`;

const CommunityBox = styled.div`
  height: 21.438rem;
  padding: 1rem 1.25rem;
  background-color: #fff;
  border-radius: .5rem;

  &:not(:last-child){
    margin-bottom: .625rem;
  }
`;

const Community = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 6.875rem);
    grid-gap: .625rem;

    & > * {
      height: 5.625rem;
      background-image: url(${props => props.image}) no-repeat top left;
      background-size: cover;
    }
`;

function FriendsCommunity() {
  return ( 
      <CommunityWrapper>
        <CommunityBox>
          <Community image={friend1.src}>Amigo 1</Community>  
          <Community image={friend2.src}>Amigo 2</Community>  
          <Community image={friend3.src}>Amigo 3</Community>  
          <Community image={friend4.src}>Amigo 4</Community>  
          <Community image={friend5.src}>Amigo 5</Community>  
          <Community image={friend5.src}>Amigo 5</Community>  
        </CommunityBox>
      </CommunityWrapper>      
    )
}

export default FriendsCommunity;