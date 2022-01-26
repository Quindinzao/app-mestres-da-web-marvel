Caso você seja uma pessoa aleatória que caiu de paraquedas no meu Github, aqui vai uma pequena explicação do que seria isso: um projeto para entrar na empresa Mestres da Web, onde eu teria que fazer um aplicativo bem simples, cujo design já estava definido.

# Aos Mestres da Web

Infelizente eu não consegui terminar o projeto, já que passei mal o fim de semana inteiro e não tive muito tempo para desenvolver (menos que 12hrs).

Ah, devo lembrá-los de que sou uma pessoa pobre com computador ruim, então fiz com expo mesmo huahsuhsuahsauhauh

Enfim, águas passadas, o que eu teria feito: 

- Components: aqui vão todos os componentes que podem aparecer em todas as telas;
- Folder_name/components: aqui vão os componentes que aparecem em uma só tela e que são logos ou aparecem muitas vezes;
- Utils: apesar de não utilizar essa pasta, eu coloco aqui textos que aparecem muitas vezes e que não vêm de API's;
- Services: falando nelas, aqui vêm as API's, é nesse lugar em que eu "resgato" o que vem delas, como no código de exemplo, localzado em src/services/api.ts. Minha ideia era a de criar uma API fictícia e trabalhar em cima daqueles dados;
- Routes: aqui ficariam as queridíssimas rotas, o que eu utilizaria para mudar de tela;
- Também gosto de separar as importações para não haver maiores problemas quando alguém for procurá-las;
- Hooks: foi amor a primeira vista, só tenho um pouco de dificuldade quanto ao useContext, mas, de resto, eu sei bastante;
- Redux hooks: estou estudando ha três semanasm, então vai ser bom para vocês aproveitarem que eu não tenho nenhum "vício" ainda.

No geral, é isso! Pelo que pude verm sua empresa tem uma cultura muito maneira e eu adoraria fazer parte dessa equipe!

## API:

Para que a API funcione, basta que você rode o seguinte comando:
- npx json-server --watch src/services/server.json
