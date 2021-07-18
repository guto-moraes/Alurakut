import styled from "styled-components";

const UserDetailsBlock = styled.div`
  margin: 0 auto;
`;

const DetailsList = styled.ul`
  list-style: none;
  margin-top: 0.313rem;
  margin-bottom: 0.75rem;

  li {
    font-size: 0.75rem;
    line-height: 1rem;
    color: #999;
  }
`;

const UserName = styled.h1`
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.063rem;
  color: #2e7bb4;  
`;

const ActionsList = styled.ul`
  list-style: none;
  margin-bottom: .75rem;

  li{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &:not(:last-child){
      margin-bottom: .75rem;
    }

    img{
      margin-right: .5rem;
    }

    a{
      font-size: .75rem;
      line-height: .875rem;
      color: #2e7bb4;
      text-decoration: none;
    }

    .edit-perfil {
      float: right;
    }

  }
`;

const AppsTitle = styled.h2`
  font-size: .813rem;
  font-weight: 500;
  line-height: .938rem;
  color: #999999;
  margin-bottom: .75rem;
`;

export { UserDetailsBlock, UserName, DetailsList, ActionsList, AppsTitle };