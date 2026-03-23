Dogs - Rede Social para Cachorros
Este é um projeto de uma rede social exclusiva para cachorros, desenvolvida em React. A aplicação permite que utilizadores criem contas, façam login, postem fotos dos seus animais de estimação, visualizem um feed de fotos, comentem e acompanhem estatísticas de visualização.

🚀 Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

React 18: Biblioteca principal para a interface.

Vite: Ferramenta de build e ambiente de desenvolvimento rápido.

React Router Dom: Gestão de rotas da aplicação.

Victory: Utilizada para a exibição de gráficos estatísticos.

Vite Plugin SVGR: Permite a importação de SVGs como componentes React.

ESLint: Ferramenta de linting para manter a qualidade do código.

🛠️ Funcionalidades
Autenticação de Utilizador: Sistema de login e criação de conta com validação de Token JWT.

Feed de Fotos: Visualização de fotos postadas por diferentes utilizadores com paginação.

Perfil do Utilizador: Área restrita para o utilizador gerir as suas fotos e visualizar estatísticas.

Interação: Sistema de comentários nas fotos e opção de eliminar publicações próprias.

Recuperação de Password: Funcionalidade para recuperação e reset de palavra-passe através da API.

Design Responsivo: Interface adaptável para diferentes tamanhos de ecrã.

📂 Estrutura do Projeto
Abaixo, os principais pontos da estrutura de pastas:

src/Components: Contém todos os componentes visuais da aplicação (Login, Feed, Foto, User, etc.).

src/Hooks: Custom hooks para gerir formulários, fetches e media queries.

src/UserContext.jsx: Contexto global para gerir o estado de autenticação e dados do utilizador.

src/api.jsx: Configuração centralizada de todos os endpoints da API (Dogs API).

🔧 Configuração e Instalação
Instalar dependências:

Bash
npm install
Executar o projeto em modo de desenvolvimento:

Bash
npm run dev
Gerar a build para produção:

Bash
npm run build
🌐 API
A aplicação consome a API oficial do curso da Origamid:
https://dogsapi.origamid.dev/json

Este projeto foi desenvolvido por Marcelo Zanguettin Pereira.