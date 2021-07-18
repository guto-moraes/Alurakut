import styled from "styled-components";
import SearchIcon from "../../assets/images/icons/search-icon.svg";

const SearchForm = styled.form`
    position: relative;
    width: 100%;
    float: right;

    input {
        width: 11.375rem;
        height: 2.125rem;
        font-size: 0.75rem;
        color: #fff;
        padding-left: 2.625rem;
        background-color: #5579a1;
        border: 0;
        border-radius: 2.125rem;

        &::placeholder {
            color: #fff;
        }

        @media(max-width: 859px){
            width: 100%!important;
        }
    }

    button {
        position: absolute;
        top: .625rem;
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

export default function SearchBox(){
    return(
        <SearchForm>
            <input type="search" placeholder="Pesquisar no Alurakut" />
            <button type="submit" className="search-button">
                <img src={SearchIcon.src} alt="Search Button Icon" />
            </button>
        </SearchForm>
    )
}