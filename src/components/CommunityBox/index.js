import React from "react";
import styled from "styled-components";

import community1 from "../../assets/images/communities/abro-a-geladeira-para-pensar.jpg";
import community2 from "../../assets/images/communities/herrar-e-o-mano.jpg";
import community3 from "../../assets/images/communities/luta-de-classes.jpg";
import community4 from "../../assets/images/communities/odeio-acordar-cedo.jpg";
import community5 from "../../assets/images/communities/so-observo.jpg";
import community6 from "../../assets/images/communities/tocava-campainha.jpg";

const CommunityWrapper = styled.section`
    width: 100%;
`;

const CommunityBox = styled.div`
    height: 21.438rem;
    padding: 1rem 1.25rem;
    background-color: #fff;
    border-radius: 0.5rem;

    &:not(:last-child) {
        margin-bottom: 0.625rem;
    }

    h1 {
        font-size: 1rem;
        color: #333;
        margin-bottom: 1.25rem;

        span {
            color: #2e7bb4;
        }
    }
    hr {
        width: 271px;
        height: 1px;
        margin: .875rem auto;
        background-color: #f4f4f4;
        border: 0;
    }

    a {
        font-size: 0.875rem;
        font-weight: 700;
        color: #2e7bb4;
        text-decoration: none;
    }
`;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 5.285rem);
    grid-gap: 0.625rem;
`;

const ListItem = styled.div`
    position: relative;
    height: 6.875rem;
    background-image: url(${(props) => props.image});
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
    }
`;

function FriendsCommunity() {

    const pseudoFriends = ['marcobrunodev','maykbrito','omariosouto', 'vanessametonini', 'diego3g', 'filipedeschamps'];

    return (
        <CommunityWrapper>
            <CommunityBox>
                <h1>
                    Meus amiges <span>({pseudoFriends.length})</span>
                </h1>
                <List>
                {
                  pseudoFriends.map( (item, key) => {
                    const imageLink = `https://github.com/${item}.png`;
                    <ListItem key={key} image={imageLink}>
                        <h2>{item}</h2>
                    </ListItem>
                  })
                }
                </List>
                <hr />
                <a href="#" title="Ver todes">Ver todes</a>
            </CommunityBox>

            <CommunityBox>
                <h1>
                    Minhas Comunidades <span>(18)</span>
                </h1>
                <List>
                    <ListItem image={community1.src}>
                        <h2>Abro a geladeira para pensar</h2>
                    </ListItem>
                    <ListItem image={community2.src}>
                        <h2>Herrar é o mano</h2>
                    </ListItem>
                    <ListItem image={community3.src}>
                        <h2>Luta de classes</h2>
                    </ListItem>
                    <ListItem image={community4.src}>
                        <h2>Odeio acordar cedo</h2>
                    </ListItem>
                    <ListItem image={community5.src}>
                        <h2>Só Observo</h2>
                    </ListItem>
                    <ListItem image={community6.src}>
                        <h2>Tocava campainha</h2>
                    </ListItem>
                </List>
                <hr />
                <a href="#" title="Ver todas">Ver todas</a>
            </CommunityBox>            
        </CommunityWrapper>
    );
}

export default FriendsCommunity;
