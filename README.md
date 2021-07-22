 <span style="display:block;text-align:center">![Alurakut](https://raw.githubusercontent.com/guto-moraes/Alurakut/Aula04/src/assets/images/alurakut-login.svg)</div>
 <span style="display:block;text-align:center">:wrench: **Projeto em desenvolvimento!** :hammer:</span>
# Sobre o Alurakut

O desenvolvimento desta aplicação foi proposta durante a Imersão Alura 2021 (@alura-cursos). Toda a parte de customização do CSS foi realizada por mim, com o uso da Styled Components.

## Arquivo .env
Para Esta aplicação usa do Dato CMS, assim, além de alterar o arquivo env.example para .env, é necessário criar criar uma conta
```env
env.example >>> .env
```

## Models 

No [Dato CMS](https://pages.github.com/), foram criados os seguintes models, com seus respectivos campos e id:

##### Communities  (id: community)
- Language (id: language, campo tipo select - é preciso instalar o *plugin* para este fim no Dato CMS)
- Image (id: image, campo tipo mídia no caso de carragamento da image)
- Image URL (id: url_image, campo tipo texto em caso de ser informada apenas a url da imagem)
- Community URL (id: link, campo tipo texto)
- Category (id: category, campo tipo select)
  
##### Friends (id: friend)
- Name (id: name, nome do amigo em campo tipo texto)
- Avatar (id: avatar, imagem do amigo em campo tipo texto)
- Github Link (id: github_link, url campo tipo texto)

##### Testimonials (id: testimonial)
- Content (id: content, campo tipo texto estruturado)
- Author (id: author, campo tipo texto)

##### Users (id: user)
- Username (id: username, campo tipo texto estruturado)
- E-mail (id: email, campo tipo texto)
- Password (id: author, campo tipo texto)

## Implementações futuras
- [ ] Melhoria no sistema de autenticação (recuperação de senha)
- [ ] Possibilidade de autenticação com mídias sociais

## License
[MIT](https://choosealicense.com/licenses/mit/)