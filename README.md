# Dogs - Rede Social Canina

Uma rede social exclusiva para cachorros inspirada no Instagram, desenvolvida com React. O projeto permite que usuários postem fotos de seus cães, visualizem um feed global, gerenciem seus perfis e acompanhem estatísticas de engajamento.

## 🚀 Tecnologias

Este projeto foi construído utilizando as seguintes ferramentas:

- **React 18**: Biblioteca base para a interface.
- **Vite**: Ferramenta de build e ambiente de desenvolvimento.
- **React Router Dom**: Gerenciamento de rotas e navegação SPA.
- **Victory**: Biblioteca para criação de gráficos estatísticos.
- **Vite Plugin SVGR**: Para manipulação de SVGs como componentes.
- **Hooks Personalizados**: Implementação de `useForm`, `useFetch` e `useMedia` para lógica reutilizável.

## ✨ Funcionalidades

- **Autenticação Completa**: Cadastro de usuários, login com validação de token JWT e recuperação de senha.
- **Feed de Fotos**: Visualização de postagens com scroll infinito e carregamento dinâmico.
- **Perfil do Usuário**: Área restrita para postar novas fotos (via formulário multipart), deletar fotos próprias e visualizar dados.
- **Estatísticas**: Gráficos que mostram o total de acessos e postagens do usuário utilizando a API de stats.
- **Interação**: Sistema de comentários em cada foto.
- **Proteção de Rotas**: Acesso controlado a páginas sensíveis através de componentes de rota protegida.

## 📦 Como Instalar e Rodar

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/marcelozanguettin/react_site_dogs.git](https://github.com/marcelozanguettin/react_site_dogs.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

## 🌐 API

O projeto consome a **Dogs API**, uma API REST desenvolvida especificamente para este contexto educacional, com endpoints para autenticação, usuários, fotos e comentários.

---
Desenvolvido por **Marcelo Zanguettin Pereira**.