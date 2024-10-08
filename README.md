# Documentação do Projeto: Chatbot Inteligente para Ciências Exatas e Engenharia

## Índice

1. [Introdução](#introdução)
2. [Objetivos do Projeto](#objetivos-do-projeto)
3. [Características Principais](#características-principais)
4. [Arquitetura do Sistema](#arquitetura-do-sistema)
5. [Tecnologias Utilizadas](#tecnologias-utilizadas)
6. [Estrutura do Código](#estrutura-do-código)
   - 6.1 [index.html](#indexhtml)
   - 6.2 [script.js](#scriptjs)
   - 6.3 [styles.css](#stylescss)
7. [Instalação](#instalação)
8. [Uso](#uso)
   - 8.1 [Interação com o Chatbot](#interação-com-o-chatbot)
   - 8.2 [Gerenciamento de Tópicos](#gerenciamento-de-tópicos)
9. [Testes](#testes)
10. [Contribuição](#contribuição)
11. [Licença](#licença)
12. [Contato](#contato)

## 1. Introdução

O **Chatbot Inteligente para Ciências Exatas e Engenharia** é uma aplicação desenvolvida para fornecer assistência em disciplinas científicas e de engenharia. Com o uso de inteligência artificial, o chatbot oferece respostas precisas e detalhadas, ajudando estudantes e profissionais a resolver problemas e esclarecer dúvidas.

## 2. Objetivos do Projeto

- Prover um assistente virtual que possa ajudar usuários em suas dúvidas relacionadas a ciências exatas e engenharia.
- Facilitar o aprendizado através de respostas instantâneas e interativas.
- Armazenar conversas e tópicos para referência futura, permitindo a continuidade do aprendizado.

## 3. Características Principais

- **Especialização em Ciências Exatas:** O chatbot é projetado para responder perguntas sobre Matemática, Física, Química, Astronomia, Computação, Estatística e Engenharia.
- **Respostas Interativas:** Respostas são formatadas em HTML, permitindo um design visualmente atraente e fácil de entender.
- **Gerenciamento de Tópicos:** Usuários podem criar, editar e excluir tópicos de conversa, mantendo um histórico completo.
- **Integração com Google Generative AI:** O chatbot utiliza APIs para gerar respostas de maneira inteligente, melhorando a experiência do usuário.
- **Armazenamento Local:** Utiliza Local Storage para armazenar dados de conversas, permitindo acesso offline.

## 4. Arquitetura do Sistema

O sistema é dividido em três camadas principais:

1. **Camada de Apresentação:** Responsável pela interface do usuário, onde os usuários interagem com o chatbot.
2. **Camada de Lógica de Negócio:** Contém toda a lógica que processa as entradas do usuário e gera as respostas utilizando a API do Google.
3. **Camada de Persistência:** Armazena dados das conversas e tópicos utilizando Local Storage.

```plaintext
+---------------------+
|  Camada de         |
|  Apresentação      |
+---------------------+
           |
+---------------------+
|  Camada de Lógica  |
|  de Negócio        |
+---------------------+
           |
+---------------------+
|  Camada de         |
|  Persistência      |
+---------------------+
```

## 5. Tecnologias Utilizadas

- **JavaScript:** Para a lógica de interação do chatbot e manipulação do DOM.
- **HTML/CSS:** Para a estrutura e estilo da interface do usuário.
- **Google Generative AI:** Para geração de respostas baseadas em IA.
- **Local Storage:** Para armazenamento persistente de dados no navegador.
- **Frameworks de Frontend:** O projeto utiliza frameworks como Bootstrap para estilização responsiva.

## 6. Estrutura do Código

A estrutura do código é organizada da seguinte maneira:

```
/nome-do-repositorio
|-- index.html           # Página principal
|-- script.js            # Código JavaScript principal
|-- styles.css           # Estilos da aplicação
|-- README.md            # Documentação do projeto
```

### 6.1 index.html

O arquivo `index.html` contém a estrutura da interface do usuário. Nele, temos elementos como:

- Uma barra de entrada de texto para perguntas.
- Um botão de envio para iniciar a interação.
- Um espaço dedicado para exibir as respostas do chatbot.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Chatbot Inteligente</title>
</head>
<body>
    <div id="chat-container">
        <div id="chat-box"></div>
        <input type="text" id="user-input" placeholder="Digite sua pergunta...">
        <button id="send-button">Enviar</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### 6.2 script.js

O arquivo `script.js` é responsável pela lógica do chatbot. Aqui, o código realiza as seguintes funções:

- Captura a entrada do usuário e a processa.
- Faz chamadas para a API do Google Generative AI.
- Exibe as respostas no chat.

```javascript
document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        // Adiciona a pergunta do usuário ao chat
        addMessage("Você: " + userInput);
        getResponse(userInput);
        document.getElementById("user-input").value = ""; // Limpa a entrada
    }
});

function getResponse(input) {
    // Simulação de chamada à API do Google Generative AI
    fetch(`https://api.google.com/generative-ai?query=${input}`)
        .then(response => response.json())
        .then(data => addMessage("Bot: " + data.response))
        .catch(error => console.error("Erro:", error));
}

function addMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}
```

### 6.3 styles.css

O arquivo `styles.css` contém as regras de estilo para a interface. Ele define a aparência do chatbot, incluindo cores, fontes e layout.

```css
body {
    font-family: Arial, sans-serif;
}

#chat-container {
    width: 300px;
    margin: auto;
}

#chat-box {
    border: 1px solid #ccc;
    height: 400px;
    overflow-y: scroll;
    padding: 10px;
}

#user-input {
    width: calc(100% - 70px);
}

#send-button {
    width: 60px;
}
```

## 7. Instalação

Para instalar o projeto, siga os passos abaixo:

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
   ```
   
2. **Navegue até o Diretório do Projeto:**
   ```bash
   cd nome-do-repositorio
   ```

3. **Abra o arquivo `index.html` em um navegador:**
   Basta dar um duplo clique no arquivo `index.html` ou abrir com o navegador de sua escolha.

## 8. Uso

### 8.1 Interação com o Chatbot

1. Digite sua pergunta na caixa de entrada e pressione **Enter** ou clique no botão **Enviar**.
2. O chatbot processará a entrada e gerará uma resposta formatada em HTML.

### 8.2 Gerenciamento de Tópicos

- **Criar um Novo Tópico:** Clique no botão para adicionar um novo tópico.
- **Carregar Tópicos Existentes:** Clique no nome de um tópico para carregar suas mensagens anteriores.
- **Editar ou Excluir Tópicos:** Clique com o botão direito sobre um tópico para abrir o menu de contexto com opções de edição e exclusão.

## 9. Testes

Para garantir a qualidade do código e a precisão das respostas, o projeto inclui:

- **Testes Manuais:** Realizar testes manuais ao interagir com o chatbot, verificando se as respostas são relevantes e corretas.
- **Testes Automatizados:** Utilizar ferramentas como Jest para testes unitários no código JavaScript.

```javascript
describe('Chatbot', () => {
    it('deve retornar uma resposta válida', () => {
        const response = getResponse("Qual é a fórmula da água?");
        expect(response).toContain("H2O");
    });
});
```

## 10. Contribuição

Contribuições são bem-vindas! Para contribuir, siga as etapas abaixo:

1. **Fork o Repositório**
2. **Crie uma Branch:**
   ```bash
   git checkout -b minha-contribuicao
   ```
3. **Faça suas Alterações e Commit:**
   ```bash
   git commit -m "Descrição da alteração"
   ```
4. **Envie para o Repositório Remoto:**
   ```bash
   git push origin minha-contribuicao
   ```
5. **Abra um Pull

 Request.**

## 11. Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## 12. Contato

Para mais informações ou perguntas, entre em contato:

- **Nome:** Kayki Ivan
- **E-mail:** ivankayki72@gmail.com
- **GitHub:** [Seu Perfil no GitHub](https://github.com/sh1ftx)

-
