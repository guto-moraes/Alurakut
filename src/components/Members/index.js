import React, { useState, useEffect } from "react";
import { 
  HorizontalDividerBar, 
  Link, 
  Linked, 
  SectionTitle, 
  ListFriendsCommunities, 
  ListFriendsCommunitiesItem 
} from '../Utilities';

export default function Members() {

  const [members, setMembers] = useState([{}]);

  useEffect(() => {

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': process.env.DATOCMS_API_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "query": 
        `query {
          allFriends {
            id
            name
            avatar
            githubLink
          }
        }`
      })
    })
    .then( response => response.json() )
    .then( res => {
      const dato_cms = res.data.allFriends;
      setMembers(dato_cms);
    })

    return () => {
      setMembers();
    }

  }, []);

  return(
    <>
      <SectionTitle>
        Members <span>({members.length})</span>
      </SectionTitle>
      <ListFriendsCommunities>
        {
          members.slice(0, 6).map( (user, key) => {
            return(
              <Link key={key} to={user.githubLink} title={user.name} target="_blank">
                <ListFriendsCommunitiesItem image={user.avatar}>
                  <h2>{user.name}</h2>
                </ListFriendsCommunitiesItem>
              </Link>
            )
          })
        }
      </ListFriendsCommunities>
      <HorizontalDividerBar />
      <Linked to="#" title="Ver todes">Ver todes</Linked>
    </>
  )

}