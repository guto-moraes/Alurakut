import styled from "styled-components";
import Button from "../Buttons";
import { SectionTitle } from "../Utilities";

const BoxTitle = styled(SectionTitle)`
  font-size: 1.125rem;
  font-weight: 400;
`;

const ButtonsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media(max-width: 859px){
    flex-direction: column;
    justify-content: center;
  }
`;

const Buttons = styled(Button)`
  @media(max-width: 859px){
    &:not(:last-child){
      margin-right: 0;
      margin-bottom: .625rem;
    }
  }
`;

const FormActions = styled.form`
    input,
    textarea {
        width: 100%;
        font-size: 0.75rem;
        line-height: 0.875rem;
        color: #333;
        padding: 0.75rem 1rem;
        margin-top: 1rem;
        background: #f4f4f4;
        border-radius: 2rem;
        border: 0;

        &::placeholder {
            font-family: "Rubik", sans-serif;
            font-size: 0.75rem;
            line-height: 0.875rem;
            color: #333;
            padding: 0.75rem 1rem;
        }
    }

    textarea {
        min-height: 6rem;
        resize: none;
    }

    .tab-community,
    .tab-testimonial,
    .tab-scrap {
        position: relative;
        left: -100%;
        top: 0;
        display: none;
        transition: all 400ms;
    }

    .tab-community.active,
    .tab-testimonial.active,
    .tab-scrap.active {
        left: 0;
        display: block;
    }
`;

export default function WhatDoYouWish() {


    function handleShowForm(e) {
        const tabButton = document.querySelectorAll(".btn-action");
        const contents = document.querySelectorAll(".tab-content");

        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach((btn) => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            contents.forEach((content) => {
                content.classList.remove("active");
            });
            const el = document.querySelector(`#${id}`);
            el.classList.add("active");
        }
    }

    return (
        <>
          <BoxTitle>O que você deseja fazer?</BoxTitle>
          
          <ButtonsBlock>
            <Buttons className="btn-action" onClick={handleShowForm} data-id="community" >
              Criar comunidade
            </Buttons>
            
            <Buttons className="btn-action" onClick={handleShowForm} data-id="testimonial">
              Escrever depoimento
            </Buttons>
            
            <Buttons className="btn-action" onClick={handleShowForm} data-id="scrap">
              Deixar um scrap
            </Buttons>
          </ButtonsBlock>

          <FormActions>

            <div id="community" className="tab-content tab-community">
              <input
                type="text"
                name="title"
                placeholder="Qual vai ser o nome da sua comunidade?"
              />
              <input
                type="url"
                name="image"
                placeholder="Qual a URL da imagem da comunidade?"
              />
              <input
                type="url"
                name="link"
                placeholder="Qual a URL da página da comunidade?"
              />
              <Button name="community" className="active mt-1" type="submit">
                Criar
              </Button>
            </div>

            <div id="testimonial" className="tab-content tab-testimonial">
              <textarea
                name="texttestimonial"
                placeholder="Escreva seu dopoimento."
              ></textarea>
              <Button name="testimonial" className="active mt-1" type="submit">
                Publicar
              </Button>
            </div>

            <div id="scrap" className="tab-content tab-scrap">
              <input
                type="url"
                name="scrapimage"
                placeholder="Qual a URL do scrap que você deseja adicionar?"
              />
              <Button name="scrap" className="active mt-1" type="submit">
                Publicar
              </Button>
            </div>

          </FormActions>
        </>
    );
}
