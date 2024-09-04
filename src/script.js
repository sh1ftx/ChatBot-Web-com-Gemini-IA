document.addEventListener('DOMContentLoaded', async () => {
    // ----------------------- Importações --------------------------------
    const { GoogleGenerativeAI } = await import("https://esm.run/@google/generative-ai");

    // ----------------------- Configuração do Servidor PHP --------------------------------
    const SERVER_URL = 'http://localhost/server.php'; // URL do servidor PHP
    
    // ----------------------- Configuração da API --------------------------------
    const API_KEY = 'Coloque sua API Key aqui dentro' // Variável que armazena a API Key
    const genAI = new GoogleGenerativeAI(API_KEY); 

    
    const modelConfig = {
        model: "gemini-1.5-flash",
        systemInstruction: `
            Você é um chatbot especializado em Ciências Exatas, Engenharia de Softwares, TI, e tudo que envolva cálculos.
            Suas respostas devem servir para perguntas exatas, resolver dúvidas e cálculos relacionados às seguintes áreas:
            - **Matemática:** Álgebra (Elementar, Linear, Abstrata), Cálculo e Análise, Geometria e Topologia, Matemática Discreta, Probabilidade e Estatística, Matemática Computacional, Otimização, Teoria do Caos, Matemática Financeira.
            - **Física:** Mecânica Clássica, Eletromagnetismo, Física Moderna, Física Experimental, Cosmologia, Astrofísica.
            - **Química:** Química Geral, Inorgânica, Orgânica, Analítica, Físico-Química, Teórica, Computacional, Ambiental, Industrial, Nanotecnologia.
            - **Astronomia:** Astrofísica, Mecânica Celeste, Astronomia Observacional.
            - **Computação:** Algoritmos e Estruturas de Dados, Lógica e Computabilidade, Sistemas de Computação, Inteligência Artificial, Desenvolvimento de Software, Computação Gráfica, Computação Quântica, Bioinformática, Teoria da Informação, Criptografia e Segurança.
            - **Estatística:** Teoria da Probabilidade, Estatística Descritiva, Inferência Estatística, Estatística Aplicada.
            - **Engenharia:** Engenharia Civil, Elétrica, Mecânica, Química, de Produção, de Computação.

            Suas respostas devem ser claras, detalhadas e explicativas, se possível não longas, mas se necessário pode ser longas sim, e com um tom lúdico e divertido, com uma personalidade nerd e genial que lembre o Satoro Gojo. Sempre que possível, forneça exemplos e explicações detalhadas para garantir que o usuário compreenda o conteúdo.

            ### Formatação das Respostas:
            - **Normas ABNT:** Utilize os padrões da ABNT para formatação de textos acadêmicos caso seja uma pergunta que necessite de algo mais profissional. 
            - **Elementos Utilizados:** Utilize títulos (TEXTO EM CAIXA ALTA), subtítulos (Texto com um ' - ' antes ), parágrafos, listas ( use ' + ' para as listas), tabelas e referências conforme necessário mas sem o uso do markdown.
            - **Estilo:** As respostas devem ser estéticas e visualmente agradáveis, mas sem excesso de cores. Utilize fontes legíveis e que sigam o estilo formal, como 'Times New Roman' para tex///////////////tos e 'Arial' para cabeçalhos.
            - **Referências:** Se for mencionado algum conteúdo externo, cite-o de acordo com as normas da ABNT.

            
            ### Instruções Adicionais:
            - Para perguntas fora do escopo das Ciências Exatas e Engenharia, informe ao usuário: "Sou especializado apenas em Ciências Exatas e Engenharia. Por favor, faça uma pergunta dentro dessas áreas."
            - Responda com genialidade e inteligência, além de um tom lúdico, mantendo uma conversa gostosa e acessível.
            - Sempre envie respostas formatadas em HTML.
            - **Estrutura das respostas**: Toda e qualquer pergunta deve ser respondida com respostas em formato HTML, exemplo: Se eu perguntar "oque é matemática?", sua resposta deve seguit essa estrutura:
            <!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O que é a Matemática?</title>
</head>
<body>
    <h2>O que é a Matemática?</h2>
    <p>A matemática é uma disciplina que estuda padrões, quantidades, estruturas e mudanças. Ela usa conceitos e ferramentas para entender e descrever o mundo ao nosso redor. Abaixo, exploramos suas principais áreas e conceitos.</p>

    <h3>Subdisciplinas da Matemática</h3>
    <p>A matemática é dividida em várias subdisciplinas, cada uma com seus próprios métodos e aplicações:</p>

    <h4>Álgebra</h4>
    <p>A álgebra é a parte da matemática que lida com símbolos e regras para manipular essas fórmulas. Exemplos de fórmulas importantes incluem:</p>
    <ul>
        <li><strong>Equação Linear:</strong> <code>ax + b = 0</code>
            <ul>
                <li>Onde <code>a</code> e <code>b</code> são constantes e <code>x</code> é a variável a ser encontrada.</li>
            </ul>
        </li>
        <li><strong>Fórmula Quadrática:</strong> <code>ax^2 + bx + c = 0</code>
            <ul>
                <li>Onde <code>a</code>, <code>b</code>, e <code>c</code> são constantes e <code>x</code> pode ser resolvido usando a fórmula de Bhaskara:</li>
                <li><code>x = (-b ± √(b^2 - 4ac)) / 2a</code></li>
            </ul>
        </li>
    </ul>

    <h4>Geometria</h4>
    <p>A geometria estuda as propriedades e as relações das figuras e formas no espaço. Exemplos de fórmulas importantes incluem:</p>
    <ul>
        <li><strong>Área de um Círculo:</strong> <code>A = πr^2</code>
            <ul>
                <li>Onde <code>r</code> é o raio do círculo.</li>
            </ul>
        </li>
        <li><strong>Volume de um Cubo:</strong> <code>V = a^3</code>
            <ul>
                <li>Onde <code>a</code> é o comprimento da aresta do cubo.</li>
            </ul>
        </li>
    </ul>

    <h4>Cálculo</h4>
    <p>O cálculo lida com mudanças e movimentos, usando conceitos de derivadas e integrais. Exemplos de fórmulas importantes incluem:</p>
    <ul>
        <li><strong>Derivada de uma Função:</strong> Se <code>f(x)</code> é uma função, sua derivada <code>f'(x)</code> representa a taxa de mudança da função em relação a <code>x</code>.
            <ul>
                <li>Exemplo: Para <code>f(x) = x^2</code>, a derivada é <code>f'(x) = 2x</code>.</li>
            </ul>
        </li>
        <li><strong>Integral de uma Função:</strong> A integral de <code>f(x)</code> representa a área sob a curva da função.
            <ul>
                <li>Exemplo: Para <code>f(x) = x^2</code>, a integral é <code>∫ x^2 dx = (x^3 / 3) + C</code>, onde <code>C</code> é a constante de integração.</li>
            </ul>
        </li>
    </ul>

    <h4>Estatística</h4>
    <p>A estatística é usada para coletar, analisar, interpretar e apresentar dados. Exemplos de fórmulas importantes incluem:</p>
    <ul>
        <li><strong>Média Aritmética:</strong> A média é a soma de todos os valores dividida pelo número total de valores.
            <ul>
                <li><code>x̄ = (Σ xi) / n</code></li>
            </ul>
        </li>
        <li><strong>Desvio Padrão:</strong> O desvio padrão mede a dispersão dos dados em relação à média.
            <ul>
                <li><code>σ = √((Σ (xi - x̄)²) / n)</code></li>
            </ul>
        </li>
    </ul>

    <h3>Aplicações da Matemática</h3>
    <p>A matemática é utilizada em diversas áreas, como:</p>
    <ul>
        <li><strong>Ciências:</strong> Para modelar fenômenos naturais e analisar dados experimentais.</li>
        <li><strong>Engenharia:</strong> Para projetar e otimizar sistemas e estruturas.</li>
        <li><strong>Economia:</strong> Para calcular custos, lucros e analisar tendências financeiras.</li>
        <li><strong>Artes:</strong> Para criar padrões e simetrias em design e arquitetura.</li>
    </ul>

    <p>Essas áreas mostram como a matemática não é apenas uma disciplina acadêmica, mas uma ferramenta essencial para resolver problemas práticos e compreender o mundo ao nosso redor.</p>
</body>
</html>

-> **Considerando que a necessidade de títulos, subtítulos, listas e calculos deve ser analisada de acordo com o contexto da perguntas, mas todas as respostas devm ficar formatadas nesse modelo.**
-> **As respostas devem ser longas ou curtas dependendo da necessidade e grau de complexidade da pergunta.**
        `,
    };

    const model = genAI.getGenerativeModel(modelConfig);

    // ----------------------- Elementos da Interface --------------------------------
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const newTopicButton = document.getElementById('new-topic-button');
    const topicsList = document.querySelector('.topics-list');

    let currentTopic = localStorage.getItem('currentTopic') || 'Geral';
    let topics = JSON.parse(localStorage.getItem('topics')) || {};

    // ----------------------- Funções --------------------------------
    function appendMessage(html, sender, isStreaming = false) {
        let message;
        if (isStreaming) {
            message = chatBox.querySelector('.bot-message:last-child');
            if (!message) {
                message = document.createElement('div');
                message.classList.add('message', 'bot-message');
                chatBox.appendChild(message);
            }
        } else {
            message = document.createElement('div');
            message.classList.add('message', `${sender}-message`);
            chatBox.appendChild(message);
        }
        message.innerHTML = html;
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function handleUserMessage() {
        const input = userInput.value;
        if (input.trim() === '') return;

        appendMessage(`<p>${input}</p>`, 'user');
        userInput.value = '';

        if (!topics[currentTopic]) {
            topics[currentTopic] = { messages: [] };
        }
        topics[currentTopic].messages.push({ type: 'user', text: input });
        saveTopics();

        try {
            const responseStream = await model.generateContentStream(input);
            let botResponse = '';
            for await (const chunk of responseStream.stream) {
                const chunkText = chunk.text();
                botResponse += chunkText;
                appendMessage(botResponse, 'bot', true);
            }
            topics[currentTopic].messages.push({ type: 'bot', text: botResponse });
            saveTopics();
        } catch (error) {
            console.error('Erro ao gerar resposta:', error);
            appendMessage('<p>Desculpe, ocorreu um erro.</p>', 'bot');
        }
    }

    function saveTopics() {
        localStorage.setItem('topics', JSON.stringify(topics));
    }

    function loadTopic(topicName) {
        currentTopic = topicName;
        localStorage.setItem('currentTopic', currentTopic);
        chatBox.innerHTML = '';
        const topic = topics[currentTopic];
        if (topic && topic.messages) {
            topic.messages.forEach(message => {
                appendMessage(message.text, message.type);
            });
        }
    }

    function loadTopicsList() {
        topicsList.innerHTML = '';
        Object.keys(topics).forEach(topicName => {
            const topicItem = document.createElement('div');
            topicItem.classList.add('topic-item');
            topicItem.textContent = topicName;
            if (topicName === currentTopic) {
                topicItem.classList.add('active');
            }
            topicsList.appendChild(topicItem);

            topicItem.addEventListener('click', () => {
                loadTopic(topicName);
            });
        });
    }

    newTopicButton.addEventListener('click', () => {
        const newTopicName = prompt('Digite o nome do novo tópico:');
        if (newTopicName && !topics[newTopicName]) {
            topics[newTopicName] = { messages: [] };
            saveTopics();
            loadTopicsList();
            loadTopic(newTopicName);
        }
    });

    sendButton.addEventListener('click', handleUserMessage);

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleUserMessage();
        }
    });

    loadTopicsList();
    loadTopic(currentTopic);

    // ----------------------- Adicionando Estilo --------------------------------
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #1c1c1c;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
        }
    `;
    document.head.appendChild(style);
});
// ----------------------- Configuração do Menu de Contexto -----------------------

document.addEventListener('DOMContentLoaded', () => {
    const contextMenu = document.getElementById('context-menu');
    let currentTopicName = '';

    function showContextMenu(event, topicName) {
        event.preventDefault();
        currentTopicName = topicName;

        contextMenu.style.display = 'block';
        contextMenu.style.left = `${event.pageX}px`;
        contextMenu.style.top = `${event.pageY}px`;
    }

    function hideContextMenu() {
        contextMenu.style.display = 'none';
    }

    function handleEditTopic() {
        const newTopicName = prompt('Digite o novo nome do tópico:', currentTopicName);
        if (newTopicName && newTopicName !== currentTopicName) {
            const topicsElement = document.querySelector('.topics-list');
            const topicItems = topicsElement.querySelectorAll('.topic-item');
            topicItems.forEach(item => {
                if (item.textContent === currentTopicName) {
                    item.textContent = newTopicName;
                    item.dataset.topicName = newTopicName;
                }
            });

            // Atualizar o nome do tópico no localStorage
            const topicData = topics[currentTopicName];
            delete topics[currentTopicName];
            topics[newTopicName] = topicData;
            saveTopics();
            loadTopicsList();
        }
    }

    function handleDeleteTopic() {
        if (confirm(`Tem certeza de que deseja apagar o tópico "${currentTopicName}"?`)) {
            const topicsElement = document.querySelector('.topics-list');
            const topicItems = topicsElement.querySelectorAll('.topic-item');
            topicItems.forEach(item => {
                if (item.textContent === currentTopicName) {
                    item.remove();
                }
            });

            // Remover o tópico do localStorage
            delete topics[currentTopicName];
            saveTopics();
            loadTopicsList();
            loadTopic('Geral');
        }
    }

    function handlePinTopic() {
        // Implementar lógica para fixar o tópico
        alert(`O tópico "${currentTopicName}" foi fixado.`);
    }

    // Eventos para mostrar e esconder o menu de contexto
    document.querySelector('.topics-list').addEventListener('contextmenu', (event) => {
        const topicItem = event.target.closest('.topic-item');
        if (topicItem) {
            showContextMenu(event, topicItem.textContent);
        }
    });

    document.addEventListener('click', hideContextMenu);
    contextMenu.addEventListener('click', (event) => {
        if (event.target.id === 'edit-topic') {
            handleEditTopic();
        } else if (event.target.id === 'delete-topic') {
            handleDeleteTopic();
        } else if (event.target.id === 'pin-topic') {
            handlePinTopic();
        }
    });
});

// ----------------------- Função para Adicionar Botão de Três Pontinhos -----------------------

function addMenuButtonToTopics() {
    const topicsList = document.querySelector('.topics-list');
    const topicItems = topicsList.querySelectorAll('.topic-item');

    topicItems.forEach(item => {
        if (!item.querySelector('.topic-menu-button')) {
            const menuButton = document.createElement('button');
            menuButton.textContent = '⋮';
            menuButton.classList.add('topic-menu-button');
            item.appendChild(menuButton);
        }
    });
}

// ----------------------- Funções para Manipulação de Tópicos -----------------------

function saveTopics() {
    localStorage.setItem('topics', JSON.stringify(topics));
}

function loadTopicsList() {
    const topicsList = document.querySelector('.topics-list');
    topicsList.innerHTML = '';

    Object.keys(topics).forEach(topicName => {
        const topicItem = document.createElement('div');
        topicItem.classList.add('topic-item');
        topicItem.textContent = topicName;
        topicItem.dataset.topicName = topicName;

        const menuButton = document.createElement('button');
        menuButton.textContent = '⋮';
        menuButton.classList.add('topic-menu-button');
        topicItem.appendChild(menuButton);

        topicsList.appendChild(topicItem);
    });

    addMenuButtonToTopics();
}

// ----------------------- Código de Inicialização -----------------------

document.addEventListener('DOMContentLoaded', () => {
    loadTopicsList();
    loadTopic(currentTopic);
});

