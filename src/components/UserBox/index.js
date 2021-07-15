import styled from 'styled-components';

const UserBox = styled.div`
  max-height: 35.5rem;
  background-color: #fff;
  border-radius: .5rem;

  .user-avatar{
    display: block;
    max-width: 7.563rem;
    margin: 1.625rem 1.25rem 0 1.25rem;
    border-radius: .25rem;
  }
`;

const UserInfoAndActions = styled.div`

margin: .75rem .625rem;

  hr {
    width: 9.063rem;
    height: 1px;
    margin-bottom: .75rem;
    background: #ecf2fa;
    background-image: linear-gradient(to right, #ecf2fa, #ecf2fa);
    border: 0;
  }

  .user-name{
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.063rem;
    color: #2e7bb4;
  }

  .user-info{
    list-style: none;
    margin-top: .313rem;
    margin-bottom: .75rem;

    li{
      font-size: .75rem;
      line-height: 1rem;
      color: #999;
    }
  }

  .user-actions{
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

  }

  h2{
    font-size: .813rem;
    font-weight: 500;
    line-height: .938rem;
    color: #999999;
    margin-bottom: .75rem;
  }

`;

export { UserBox, UserInfoAndActions };