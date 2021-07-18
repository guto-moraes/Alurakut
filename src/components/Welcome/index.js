import styled from "styled-components";
import { ArrayRandom } from '../Utilities';

const WelcomeMessage = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
  color: #333;
`;

const GoodLuck = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
  color: #999;
  margin-top: 0.5rem;
  margin-bottom: 2rem;

  strong {
    font-weight: 500;
  }
`;

export default function Welcome(props){

  const goodLuckArray = [
    'O melhor profeta do futuro é o passado.',
    'Que a boa sorte te encontre e decida jamais te abandonar.',
    'Jogue para o alto todos os seus desejos e apanhe um.',
    'Quanto mais você se prepara, mais chances você tem!',
    'Não tenha medo da mudança.',
    'Nunca desista de lutar!'

  ]; 

  return(
    <>
      <WelcomeMessage>
        Bem-vindo, {props.username}
      </WelcomeMessage>
      <GoodLuck>
        <strong>Sorte de hoje</strong>: {ArrayRandom(goodLuckArray)}
      </GoodLuck>
    </>
  )
}