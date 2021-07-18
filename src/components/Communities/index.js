import { useState, useEffect } from "react";
import { 
  HorizontalDividerBar, 
  Link, 
  Linked, 
  SectionTitle, 
  ListFriendsCommunities, 
  ListFriendsCommunitiesItem 
} from '../Utilities';

export default function Communities() {

  const [communities, setCommunities] = useState([{}]);
  // const randomCommunities = ArrayRandom(communities, 6);

  useEffect(() => {

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': 'b4f8934093a7c8aca896720661c056',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "query": 
        `query {
          allCommunities {
            id
            title
            urlImage
            link
          }
        }`
      })
    })
    .then( response => response.json() )
    .then( res => {
      const dato_cms = res.data.allCommunities;
      setCommunities(dato_cms);
    })

    return () => {
      setCommunities();
    }

  }, []);

  return(
    <>
      <SectionTitle>
        Minhas Comunidades <span>({communities.length})</span>
      </SectionTitle>
      <ListFriendsCommunities>
      {
        communities.slice(0, 6).map( (item, key) => {  

          return( 
            <Link key={key} to={item.link} title={item.title} target="_blank">
              <ListFriendsCommunitiesItem key={key} image={item.urlImage}>
                <h2>{item.title}</h2>
              </ListFriendsCommunitiesItem>
            </Link>
          )
        })
      }
      </ListFriendsCommunities>
      <HorizontalDividerBar />
      <Linked to="#" title="Ver todas">Ver todas</Linked>
    </>
  )

}