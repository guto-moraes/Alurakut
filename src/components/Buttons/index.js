import styled from 'styled-components';

const Button = styled.button`
  background-color: #d9e6f6;
  color: #2e7bb4;
  font-size: .75rem;
  line-height: .875rem;
  padding: 0.625rem .75rem;
  border: 0;
  border-radius: .5rem;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:not(:last-child){
    margin-right: 1rem;
  }  

  &:hover,
  &.active {
    background-color: #6f92bb;
    color: #fff;
  }

  &.mt-1{
    margin-top: .625rem;
  }
`;

export default Button;