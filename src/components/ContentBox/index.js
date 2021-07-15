import React, { useEffect, useState } from 'react';

import styled from "styled-components";

import Button from '../Buttons';

import bookIcon from '../../assets/images/icons/book-icon.svg';
import photoIcon from '../../assets/images/icons/photo-icon.svg';
import cubeIcon from '../../assets/images/icons/cube-icon.svg';
import cubeIconOp from '../../assets/images/icons/cube-opacity-icon.svg';
import emailIcon from '../../assets/images/icons/email-icon.svg';
import heartIcon from '../../assets/images/icons/heart-icon.svg';
import smileIcon from '../../assets/images/icons/smile-icon.svg';
import smileIconOp from '../../assets/images/icons/smile-opacity-icon.svg';
import starIcon from '../../assets/images/icons/star-icon.svg';
import videoIcon from '../../assets/images/icons/video-icon.svg';

const ContentBoxWrapper = styled.main`
    width: 100%;
`;

const ContentBox = styled.section`
    min-height: 11.125rem;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;

    &:not(:last-child) {
        margin-bottom: 0.625rem;
    }

    .welcome {
        font-size: 1.75rem;
        font-weight: 400;
        color: #333;
    }

    .good-lucky {
        font-size: 0.875rem;
        font-weight: 400;
        color: #999;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        strong {
            font-weight: 500;
        }
    }

    .what-do-you-do {
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.375rem;
        color: #333;
        margin-bottom: 1.25rem;
    }

    .actions-content-list {
        list-style: none;
        display: flex;
        flex-direction: row;

        li {
            &:not(:last-child) {
                margin-right: 1.5rem;
            }

            .section {
                font-size: 0.825rem;
                font-style: italic;
                font-weight: 400;
                color: #5a5a5a;
                margin-bottom: 0.188rem;
            }

            .icon-count {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .total {
                    font-size: 0.875rem;
                    font-style: italic;
                    color: #2e7bb4;
                    margin: 0.25rem 0 0 0.25rem;
                }
            }
        }
    }

    .community-name {

        input {
            width: 100%;
            font-size: 0.75rem;
            line-height: 0.875rem;
            color: #333;
            padding: 0.75rem 1rem;
            margin-top: 1rem;
            background: #f4f4f4;
            border-radius: 2rem;            
            border: 0;

            &::placeholder {
                font-size: 0.75rem;
                line-height: 0.875rem;
                color: #333;
                padding: 0.75rem 1rem;
            }
        }
    }
`;

const CommunitiesBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    grid-gap: .625rem;
`;

const CommunityItem = styled.div`
    position: relative;
    width: 5.285rem;
    height: 6.875rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
    border-radius: 0.5rem;

    h2 {
        position: absolute;
        left: 0.5rem;
        bottom: 0.625rem;
        max-width: 4.125rem;
        font-size: 0.675rem;
        line-height: 0.75rem;
        color: #fff;
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
    }
`;

const TestimonialBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    grid-gap: .625rem;
`;

const TestimonialItem = styled.div`

    h2{
        font-family: 'Rubik', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #333;
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
    }
`;

const ScrapBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    grid-gap: .625rem;
`;

const ScrapItem = styled.div`
    max-width: 100%;
`;

function Content(){

    const [communities, setCommunities] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [scraps, setScraps] = useState([]);

    const button = function handleButtonClicked(event){
        event.preventDefault();
        return event.target.name;
    }

    function handleCreateCommunity(e){
        e.preventDefault();        

        if(e.target.children.content.value){
            if(e.target[0] == e.nativeEvent.submitter){
                setCommunities([...communities, e.target.children.content.value]);
            }        
            else if(e.target[1] == e.nativeEvent.submitter){
                setTestimonials([...testimonials, e.target.children.content.value]);
            }
            else if(e.target[2] == e.nativeEvent.submitter){
                setScraps([...scraps, e.target.children.content.value]);
            }
        }
        e.target.children.content.value = '';
    }

    useEffect(() => {

        return () => {
            setCommunities();
            setTestimonials();
            setScraps();
        }
    }, []);

    return(
        <ContentBoxWrapper>
        <ContentBox>
          <h1 className="welcome">Bem-vindo, Guto Moraes</h1>
          <h2 className="good-lucky"><strong>Sorte de hoje</strong>: O melhor profeta do futuro é o passado</h2>
          <ul className="actions-content-list">
            <li>
              <span className="section">Recados</span>
              <div className="icon-count">
                <img src={bookIcon.src} alt="Recados" /> <span className="total">0</span>
              </div>
            </li>
            <li>
              <span className="section">Fotos</span>
              <div className="icon-count">
                <img src={photoIcon.src} alt="Fotos" /> <span className="total">0</span>
              </div>
            </li>                  
            <li>
              <span className="section">Vídeos</span>
              <div className="icon-count">
                <img src={videoIcon.src} alt="Vídeos" /> <span className="total">0</span>
              </div>
            </li>
            <li>
              <span className="section">Fãs</span>
              <div className="icon-count">
                <img src={starIcon.src} alt="Fãs" /> <span className="total">0</span>
              </div>
            </li>
            <li>
              <span className="section">Mensagens</span>                    
              <div className="icon-count">
                <img src={emailIcon.src} alt="Mensagens" /> <span className="total">0</span>
              </div>
            </li>
            <li>
              <span className="section">confiável</span>                    
              <div className="icon-count">
                <img src={smileIcon.src} alt="Confiável" />
                <img src={smileIconOp.src} alt="Confiável" />
                <img src={smileIconOp.src} alt="Confiável" /> <span className="total">0</span>
              </div>
            </li>
            <li>
              <span className="section">legal</span>
              <div className="icon-count">
                <img src={cubeIcon.src} alt="Legal" />
                <img src={cubeIconOp.src} alt="Legal" />
                <img src={cubeIconOp.src} alt="Legal" /> <span className="total">0</span>
              </div>
            </li>
            <li>
              <span className="section">sexy</span>                    
              <div className="icon-count">
                <img src={heartIcon.src} alt="Sexy" />
                <img src={heartIcon.src} alt="Sexy" />
                <img src={heartIcon.src} alt="Sexy" /> <span className="total">0</span>
              </div>
            </li>                                                                                                                              
          </ul>
        </ContentBox>
        <ContentBox>
          <h2 className="what-do-you-do">O que você deseja fazer?</h2>
          <form className="community-name" onSubmit={handleCreateCommunity}>
            <Button name="community" type="submit" primary>Criar comunidade</Button>
            <Button name="testimonial" type="submit">Escrever depoimento</Button>
            <Button name="scrap" type="submit">Deixar um scrap</Button>
            <input type="text" name="content" placeholder="Qual vai ser o nome da sua comunidade?" />
          </form>
        </ContentBox>
        {
            communities.length > 0 &&    
            <ContentBox>
                <h2>Comunidades</h2>
                <CommunitiesBox>
                { 
                    communities.map( (community, key) => {
                        return(
                            <a key={key} href="#" title={community} target="_blank">
                                <CommunityItem image={`https://via.placeholder.com/90x110.png/1a659e/1a659e`}>
                                    <h2>{community}</h2>
                                </CommunityItem>
                            </a>
                        )
                    })
                }
                </CommunitiesBox>
            </ContentBox>     
        }
        {
            testimonials.length > 0 &&    
            <ContentBox>
                <TestimonialBox>
                { 
                    testimonials.map( (testimonial, key) => {
                        return(
                            <TestimonialItem>
                                <h2>{testimonial}</h2>
                            </TestimonialItem>
                        )
                    })
                }
                </TestimonialBox>
            </ContentBox>     
        }     
        {
            scraps.length > 0 &&    
            <ContentBox>
                <ScrapBox>
                { 
                    scraps.map( (scrap, key) => {
                        return(
                            <ScrapItem key={key}>
                                <img src={scrap} />
                            </ScrapItem>
                        )
                    })
                }
                </ScrapBox>
            </ContentBox>     
        }             
      </ContentBoxWrapper>        
    )
}

export default Content;
