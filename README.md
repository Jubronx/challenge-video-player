# Challenge Video Player
![Image](https://github.com/user-attachments/assets/6dee9076-67ab-4572-9993-3bef6d5b9e82)
## Tecnologias Utilizadas

- **Nuxt.js**: Framework para aplicações Vue.js.
- **Vue.js**: Framework JavaScript para construção de interfaces de usuário.
- **GraphQL**: Linguagem de consulta para APIs.
- **Apollo**: Cliente GraphQL para fazer consultas e mutações.
- **Jest**: Framework de testes para JavaScript.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.

## Estrutura do Projeto

- **components**: Contém os componentes Vue, como `ContentPlayer` e `SideBar`.
- **pages**: Contém as páginas da aplicação, como `index.vue`.
- **server**: Contém a configuração do TypeScript para o servidor.
- **types**: Contém definições de tipos TypeScript.
- **test**: Contém os testes unitários escritos com Jest.
- 
## Observações
- Obtive um erro de cors, tive que adicionar essas linhas de codigo no banckend para conseguir fazer a requisição da api(arquivo main.ts)
   app.enableCors({
   origin: true,
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
   credentials: true,
   });
  
## Configuração

Certifique-se de instalar as dependências:

```bash
# npm
npm install
npm run dev 
