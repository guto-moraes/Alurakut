import styled from "styled-components";
import AppLogo from '../../assets/images/alurakut-logo.svg';

const MenuWrapper = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        margin-right: 1.5rem;
    }
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    flex: 1;
    margin: 0 -0.5rem;
    list-style: none;

    & > * {
        margin: 0 0.5rem;
    }

    li {
        a {
            font-size: 0.75rem;
            line-height: 0.875rem;
            color: #fff;
            text-decoration: none;
            padding-right: 1.25rem;

            &:not(:first-child) {
                padding-left: 1.25rem;
            }

            &.active {
                font-weight: 700;
            }
        }

        &:not(:last-child)::after {
            content: "";
            height: 0.75rem;
            border: thin solid #5292c1;
            flex: none;
            order: 1;
            flex-grow: 0;
        }
    }
`;

const SearchBox = styled.form`
    position: relative;
    width: 100%;
    float: right;

    input {
        width: 11.375rem;
        height: 2.125rem;
        color: #fff;
        background-color: #5579a1;
        border: 0;
        border-radius: 2.125rem;

        &::placeholder {
            font-size: 0.75rem;
            color: #fff;
            padding-left: 2.625rem;
        }
    }

    button {
        position: absolute;
        top: 1.125rem;
        left: 0.625rem;
        background-color: transparent;
        border: 0;
        cursor: pointer;

        img {
            width: 1rem;
            height: 1rem;
        }
    }
`;

function Menu() {
    const menuItems = [
        "Início",
        "Perfil",
        "Página de recados",
        "Amigos",
        "Comunidades"
    ];

    return (
        <MenuWrapper>
            <img className="user-avatar" src={AppLogo.src} alt="Alurakut" />
            <MenuList>
                {
                  menuItems.map((item, key) => {
                    return(
                      <li key={key}>
                        <a className={item == "Início" ? "active" : ""} href="#" title={item}>
                            {item}
                        </a>
                      </li>
                    )
                  })
                }
            </MenuList>
        </MenuWrapper>
    );
}

export { Menu, SearchBox };