import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? "#6f92bb" : "#d9e6f6"};
  color: ${props => props.primary ? "white" : "#2e7bb4"};
  font-size: .75rem;
  line-height: .875rem;
  padding: 0.625rem .75rem;
  border: 0;
  border-radius: .5rem;
  cursor: pointer;

  &:not(:last-child){
    margin-right: 1rem;
  }  
`;

export default Button;