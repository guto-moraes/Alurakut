import styled from "styled-components";
import { Breadcrumb, Link, SectionTitle } from "../Utilities";

const CommunityName = styled(SectionTitle)`
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  margin-bottom: 0;
`;

const CommunityDetails = styled.ul`

  list-style: none;
  margin-top: 1.56rem;
  margin-bottom: 0;

  li{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    height: 2.375rem;

    .sections,
    .details{      
      font-size: .875rem;
      color: #5a5a5a;

      @media(min-width: 860px){
        min-width: 12.5rem;
      }
    }

    .sections{
      text-align: right;
    }
    .details{
      text-align: left;

      a{
        color: #2e7bb4;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }

  li:nth-child(2n+1){
    background-color: #d9e6f6;
  }

  li:nth-child(2n){
    background-color: #f1f9fe;
  }
`;

export default function MembersList(){

  const link = "./";

  const details = [
    {section: "idioma", detail: "Português"},
    {section: "categoria", detail: "Tecnologia"},
    {section: "dono", detail: "Paulo Silveira"},
    {section: "moderadores", detail: "nenhum"},
    {section: "tipo", detail: "pública"},
    {section: "privacidade de conteúdo", detail: "aberta para não membros"},
    {section: "local", detail: "Brasil"},
    {section: "criada em", detail: "19 jul de 2021 15:30"},
    {section: "membros", detail: 4120}  
  ];


  return(
    <>
      <CommunityName>
        Alura Devs
      </CommunityName>

      <Breadcrumb>
        <li>
          <Link to="/" title="Ir para o Início">Início</Link>
        </li>
        <li>
          <Link to="/my-communities" title="Minhas Comunidades">Minhas Comunidades</Link>
        </li>        
        <li>Alura Devs</li>
      </Breadcrumb>

      <CommunityDetails>
        {

          details.map( (item, key)=> {
            return(
              <li key={key}>
                <div className="sections">{item.section}:</div>
                <div className="details">
                {
                  item.section == "dono" ? <a href={link} title={item.detail}>{item.detail}</a> : item.detail
                }
                </div>
              </li>
            )
          })
        }
      </CommunityDetails>
    </>
  )
}