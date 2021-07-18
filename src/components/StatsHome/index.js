import styled from "styled-components";

import bookIcon from "../../assets/images/icons/book-icon.svg";
import photoIcon from "../../assets/images/icons/photo-icon.svg";
import cubeIcon from "../../assets/images/icons/cube-icon.svg";
import cubeIconOp from "../../assets/images/icons/cube-opacity-icon.svg";
import emailIcon from "../../assets/images/icons/email-icon.svg";
import heartIcon from "../../assets/images/icons/heart-icon.svg";
import smileIcon from "../../assets/images/icons/smile-icon.svg";
import smileIconOp from "../../assets/images/icons/smile-opacity-icon.svg";
import starIcon from "../../assets/images/icons/star-icon.svg";
import videoIcon from "../../assets/images/icons/video-icon.svg";

const StatsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media(max-width: 859px){
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(4rem, 1fr) );
    grid-gap: .325rem;
  }

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

      .count {
        font-size: 0.875rem;
        font-style: italic;
        color: #2e7bb4;
        margin: 0.25rem 0 0 0.25rem;
      }
    }
  }
`;

export default function StatsHome(){
  
  const stats = [
    { statsName: 'Recados', statsIcon: bookIcon, statsCount: 0 },
    { statsName: 'Fotos', statsIcon: photoIcon, statsCount: 0 },
    { statsName: 'Vídeos', statsIcon: videoIcon, statsCount: 0 },
    { statsName: 'Fãs', statsIcon: starIcon, statsCount: 0 },                
    { statsName: 'Mensagens', statsIcon: emailIcon, statsCount: 0 },
    { statsName: 'confiável', statsIcon: smileIcon, statsCount: 0 },
    { statsName: 'legal', statsIcon: cubeIcon, statsCount: 0 },
    { statsName: 'sexy', statsIcon: heartIcon, statsCount: 0 },
  ];

  return(
    <StatsList>
      {
        stats.map( (item, key) => {
          return(
            <li key={key}>
              <span className="section">{item.statsName}</span>
              <div className="icon-count">
                <img src={item.statsIcon.src} alt={item.statsName} />
                <span className="count">{item.statsCount}</span>
              </div>
            </li>
          )
        })
      }
    </StatsList>

  )
}