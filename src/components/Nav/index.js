import styled from "styled-components";
import StatusLog from "../StatusLog";
import SearchBox from "../SearchBox";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;

    @media(max-width: 859px){
        visibility: hidden;
        position: absolute;
        top: 100%;
        right: 0;
        left: -100vw;
        width: 100vw;
        background-color: #5c9ecf;    
        transition: 600ms all;  

        &.active {
            visibility: visible;
            left: 0;
        }
    }    
`;

const NavBlock = styled.div`
    display: grid;
    grid-gap: 1.75rem;

    @media (min-width: 860px) {        
        grid-template-columns: auto 14.75rem 11.375rem;
        width: 100vw;
    }

    @media(max-width: 859px){
        width: 100%;
        padding: 1rem 5vw 1.5rem 5vw;
    }
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    margin: 0 -0.5rem;
    list-style: none;

    @media(max-width: 859px){
        flex-direction: column;
        justify-content: flex-start;
        margin: 0;
    }

    & > * {
        margin: 0 0.5rem;
    }

    li {
        position: relative;

        @media(max-width: 859px){
            width: 100%;
        }

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

            @media(max-width: 859px){
                font-size: .875rem;
                line-height: 2rem;
            }

        }

        @media(min-width: 860px){
            &:not(:last-child)::before {
                content : "";
                position: absolute;
                top: .188rem;
                right: 0;
                width: 1px;
                height: .575rem;
                background: #5292C1;
                z-index: 100;
            }
        }
    }
`;

export default function Menu() {
    const menuItems = [
        { title: "Início", link: "/home" },
        { title: "Perfil", link: "/profile" },
        { title: "Página de recados", link: "/messages" },
        { title: "Amigos", link: "/friends" },
        { title: "Minhas Comunidades", link: "/my-communities" }
    ];

    return (
        <Nav className="navbar">
            <NavBlock>
                <NavList>
                    {menuItems.map((item, key) => {
                        return (
                            <li key={key}>
                                <a
                                    className={item.title == "Início" ? "active" : ""}
                                    href={item.link}
                                    title={item.title}
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </NavList>
                <StatusLog />
                <SearchBox />
            </NavBlock>                
        </Nav>
    );
}
