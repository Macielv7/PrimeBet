# ⚽ Plataforma de Apostas Esportivas Simplificada

Uma plataforma de apostas esportivas, focada em uma interface intuitiva e responsiva para que os usuários possam selecionar jogos, visualizar cotas e simular apostas. Ele inclui um sistema básico de registro e login (utilizando LocalStorage para persistência de dados) e um bilhete de apostas interativo.

## 🚀 Tecnologias Utilizadas

* **HTML5**: Estrutura semântica da página.
* **CSS3**: Estilização completa da interface, com foco em um design moderno e responsivo.
* **JavaScript **:
    * Manipulação do DOM para interatividade.
    * Lógica para adicionar/remover apostas no bilhete.
    * Cálculo de cotas totais e retorno potencial.
    * Simulação de registro e login de usuários usando `localStorage`.

## ✨ Funcionalidades Principais

* **Layout Adaptável**: Design responsivo com cabeçalho, barra lateral de navegação, conteúdo principal e bilhete de apostas.
* **Navegação no Topo**: Links para diferentes seções da plataforma.
* **Barra de Pesquisa**: Funcionalidade de busca (apenas visual, sem lógica de filtragem implementada).
* **Autenticação Básica**:
    * Páginas de registro e login com validação simples.
    * Armazenamento de credenciais de usuário no `localStorage` do navegador (⚠️ **APENAS PARA FINS DE DEMONSTRAÇÃO - NÃO USAR EM PRODUÇÃO SEM HASH DE SENHAS E BACKEND SEGURO**).
* **Barra Lateral**: Navegação por categorias de esportes/eventos.
* **Cartões de Jogo/Partida**: Exibição de jogos com informações como liga, times e cotas de aposta.
* **Seleção de Cotas**: Ao clicar em uma cota, a aposta é adicionada ao bilhete. Permite a seleção de apenas uma aposta por jogo.
* **Bilhete de Apostas Interativo**:
    * Exibe as apostas selecionadas.
    * Calcula automaticamente as cotas totais.
    * Campo para inserir o valor da aposta e calcular o retorno potencial.
    * Botões de "Apostas Rápidas" para preencher o valor da aposta.
    * Opção de remover apostas individuais do bilhete.
    * Botão "Apostar" (simulado).

## 🛠️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITÓRIO>
    ```
    (Substitua `<URL_DO_SEU_REPOSITÓRIO>` pela URL real do seu repositório Git).

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-da-pasta-do-seu-projeto
    ```

3.  **Abra o arquivo `index.html` (ou `home.html` se for a página principal após login) no seu navegador.**
    Você pode simplesmente arrastar o arquivo `index.html` para a janela do navegador, ou usar uma extensão de "Live Server" no VS Code para facilitar o desenvolvimento.

## ⚠️ Observações de Segurança (Muito Importante!)

Este projeto utiliza o `localStorage` do navegador para armazenar informações de usuário, incluindo a senha, **em texto simples**. Esta abordagem é **altamente insegura** e é utilizada **APENAS PARA FINS DEMONSTRATIVOS** de funcionalidade front-end sem a necessidade de um backend.

**Em uma aplicação real de produção, JAMAIS armazene senhas em texto simples ou use `localStorage` para informações sensíveis. Você precisaria de:**

* Um **backend robusto** (Node.js, Python, PHP, Java, etc.).
* **Hashing de senhas** (ex: bcrypt) antes de armazená-las no banco de dados.
* **Sessões ou tokens JWT** para gerenciar o estado de login do usuário de forma segura.
* **HTTPS** para toda a comunicação.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma "issue" ou enviar um "pull request".

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes. (Se você tiver um arquivo de licença, mencione-o aqui. Caso contrário, pode remover esta seção ou adicionar uma licença de sua escolha).

---
