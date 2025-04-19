// script.js (atualizado)
let currentLesson = 1;
const lessons = [
  {
    title: "Aula 1: Conceitos Fundamentais da Lógica",
    content: `
      <p><strong>O que é lógica?</strong></p>
      <p>A <span class="term-glossary" onclick="showGlossary('lógica')">lógica</span> é uma disciplina que estuda os princípios do <span class="term-glossary" onclick="showGlossary('raciocínio válido')">raciocínio válido</span>. Ela permite a análise de <span class="term-glossary" onclick="showGlossary('argumentos')">argumentos</span>, a identificação de <span class="term-glossary" onclick="showGlossary('falácia')">falácias</span> e a construção de raciocínios sólidos.</p>
      <p>Na matemática, ciência e filosofia, a lógica é fundamental para estruturar <span class="term-glossary" onclick="showGlossary('provas')">provas</span> e teorias de forma <span class="term-glossary" onclick="showGlossary('coerência lógica')">coerente</span> e consistente.</p>
    `
  },
  {
    title: "Aula 2: Princípio da Identidade",
    content: `
      <p><strong>Definição:</strong> Toda proposição é igual a si mesma (P → P).</p>
      <p><strong>Exemplo:</strong> 
        "Se hoje é terça-feira, então hoje é terça-feira" (<span class="term-glossary" onclick="showGlossary('tautologia')">tautologia</span>)<br>
        "A Lua é um satélite natural ↔ A Lua é um satélite natural"
      </p>
      <table border="1">
        <tr><th>p</th><th>p → p</th></tr>
        <tr><td>V</td><td>V</td></tr>
        <tr><td>F</td><td>V</td></tr>
      </table>
    `
  },
  {
    title: "Aula 3: Princípio da Não Contradição",
    content: `
      <p><strong>Definição:</strong> ¬(P ∧ ¬P) - Nenhuma proposição pode ser <span class="term-glossary" onclick="showGlossary('verdadeira')">verdadeira</span> e <span class="term-glossary" onclick="showGlossary('falsa')">falsa</span> simultaneamente</p>
      <p><strong>Exemplo:</strong> 
        "Estou dormindo e acordado" (<span class="term-glossary" onclick="showGlossary('contradição')">contradição</span>)<br>
        "Este círculo é quadrado" (<span class="term-glossary" onclick="showGlossary('impossibilidade lógica')">impossibilidade lógica</span>)
      </p>
      <table border="1">
        <tr><th>p</th><th>¬p</th><th>p ∧ ¬p</th><th>¬(p ∧ ¬p)</th></tr>
        <tr><td>V</td><td>F</td><td>F</td><td>V</td></tr>
        <tr><td>F</td><td>V</td><td>F</td><td>V</td></tr>
      </table>
    `
  },
  {
    title: "Aula 4: Princípio do Terceiro Excluído",
    content: `
      <p><strong>Definição:</strong> P ∨ ¬P - Toda proposição deve ser <span class="term-glossary" onclick="showGlossary('verdadeira')">verdadeira</span> ou <span class="term-glossary" onclick="showGlossary('falsa')">falsa</span></p>
      <p><strong>Exemplo:</strong> 
        "Ou está chovendo ou não está"<br>
        "Número é <span class="term-glossary" onclick="showGlossary('par')">par</span> ou não é par"
      </p>
      <table border="1">
        <tr><th>p</th><th>¬p</th><th>p ∨ ¬p</th></tr>
        <tr><td>V</td><td>F</td><td>V</td></tr>
        <tr><td>F</td><td>V</td><td>V</td></tr>
      </table>
    `
  },
  {
    title: "Aula 5: Negação (¬)",
    content: `
      <p><strong>Definição:</strong> Operador que inverte o <span class="term-glossary" onclick="showGlossary('valor lógico')">valor lógico</span></p>
      <p><strong>Exemplo:</strong> 
        p: "Está chovendo"<br>
        ¬p: "<span class="term-glossary" onclick="showGlossary('negação')">Não</span> está chovendo"
      </p>
      <table border="1">
        <tr><th>p</th><th>¬p</th></tr>
        <tr><td>V</td><td>F</td></tr>
        <tr><td>F</td><td>V</td></tr>
      </table>
    `
  },
  {
    title: "Aula 6: Conjunção (∧)",
    content: `
      <p><strong>Definição:</strong> Operador '<span class="term-glossary" onclick="showGlossary('e lógico')">E</span>' - Verdadeiro apenas quando ambas proposições são verdadeiras</p>
      <p><strong>Exemplo:</strong> 
        p ∧ q: "Está chovendo <span class="term-glossary" onclick="showGlossary('conjunção')">e</span> faz frio"
      </p>
      <table border="1">
        <tr><th>p</th><th>q</th><th>p ∧ q</th></tr>
        <tr><td>V</td><td>V</td><td>V</td></tr>
        <tr><td>V</td><td>F</td><td>F</td></tr>
        <tr><td>F</td><td>V</td><td>F</td></tr>
        <tr><td>F</td><td>F</td><td>F</td></tr>
      </table>
    `
  },
  {
    title: "Aula 7: Disjunção (∨)",
    content: `
      <p><strong>Definição:</strong> Operador '<span class="term-glossary" onclick="showGlossary('ou lógico')">OU</span>' - Verdadeiro quando pelo menos uma proposição é verdadeira</p>
      <p><strong>Exemplo:</strong> 
        p ∨ q: "Está chovendo <span class="term-glossary" onclick="showGlossary('disjunção')">ou</span> faz frio"
      </p>
      <table border="1">
        <tr><th>p</th><th>q</th><th>p ∨ q</th></tr>
        <tr><td>V</td><td>V</td><td>V</td></tr>
        <tr><td>V</td><td>F</td><td>V</td></tr>
        <tr><td>F</td><td>V</td><td>V</td></tr>
        <tr><td>F</td><td>F</td><td>F</td></tr>
      </table>
    `
  },
  {
    title: "Aula 8: Implicação (→)",
    content: `
      <p><strong>Definição:</strong> "<span class="term-glossary" onclick="showGlossary('se-então')">Se... então</span>" - Falso apenas quando antecedente é verdadeiro e consequente falso</p>
      <p><strong>Exemplo:</strong> 
        p → q: "Se está chovendo, então o solo está molhado"
      </p>
      <table border="1">
        <tr><th>p</th><th>q</th><th>p → q</th></tr>
        <tr><td>V</td><td>V</td><td>V</td></tr>
        <tr><td>V</td><td>F</td><td>F</td></tr>
        <tr><td>F</td><td>V</td><td>V</td></tr>
        <tr><td>F</td><td>F</td><td>V</td></tr>
      </table>
    `
  },
  {
    title: "Aula 9: Bicondicional (↔)",
    content: `
      <p><strong>Definição:</strong> "<span class="term-glossary" onclick="showGlossary('se e somente se')">Se e somente se</span>" - Verdadeiro quando ambos valores são iguais</p>
      <p><strong>Exemplo:</strong> 
        p ↔ q: "Um número é par ↔ É divisível por 2"
      </p>
      <table border="1">
        <tr><th>p</th><th>q</th><th>p ↔ q</th></tr>
        <tr><td>V</td><td>V</td><td>V</td></tr>
        <tr><td>V</td><td>F</td><td>F</td></tr>
        <tr><td>F</td><td>V</td><td>F</td></tr>
        <tr><td>F</td><td>F</td><td>V</td></tr>
      </table>
    `
  },
  {
    title: "Aula 10: Leis de Morgan",
    content: `
      <p><strong>1ª Lei:</strong> ¬(p ∧ q) ≡ <span class="term-glossary" onclick="showGlossary('negação')">¬p</span> ∨ <span class="term-glossary" onclick="showGlossary('negação')">¬q</span></p>
      <p><strong>2ª Lei:</strong> ¬(p ∨ q) ≡ ¬p ∧ ¬q</p>
      <p><strong>Aplicação:</strong> Simplificação de <span class="term-glossary" onclick="showGlossary('expressões lógicas')">expressões lógicas</span> complexas</p>
      <p><strong>Exemplo:</strong><br>
        ¬(Chove ∧ FazFrio) ≡ Não chove ∨ Não faz frio
      </p>
    `
  },
  {
    title: "Aula 11: Simplificação de Expressões",
    content: `
      <p><strong>Técnicas:</strong></p>
      <ul>
        <li><span class="term-glossary" onclick="showGlossary('propriedade distributiva')">Propriedade distributiva</span></li>
        <li><span class="term-glossary" onclick="showGlossary('leis de absorção')">Leis de absorção</span></li>
        <li>Identificação de <span class="term-glossary" onclick="showGlossary('tautologia')">tautologias</span></li>
      </ul>
      <p><strong>Exemplo:</strong><br>
        (p ∧ q) ∨ (p ∧ ¬q) ≡ p ∧ (q ∨ ¬q) ≡ p
      </p>
    `
  }
];

// Glossário Ampliado
const glossary = {
  'lógica': 'Estudo sistemático da estrutura dos argumentos válidos',
  'argumentos': 'Conjunto de premissas que levam a uma conclusão',
  'falácia': 'Argumento que parece válido mas contém erros de raciocínio',
  'tautologia': 'Proposição sempre verdadeira (ex: P ∨ ¬P)',
  'contradição': 'Proposição sempre falsa (ex: P ∧ ¬P)',
  'valor lógico': 'Valor de verdade de uma proposição (Verdadeiro/Falso)',
  'e lógico': 'Operador que requer ambas condições verdadeiras (∧)',
  'ou lógico': 'Operador que requer pelo menos uma condição verdadeira (∨)',
  'se-então': 'Operador condicional (→)',
  'se e somente se': 'Operador bicondicional (↔)',
  'expressões lógicas': 'Combinação de proposições usando operadores lógicos',
  'propriedade distributiva': 'Lei que permite reescrever expressões: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)',
  'leis de absorção': 'Leis que simplificam expressões: p ∧ (p ∨ q) ≡ p',
  'verdadeira': 'Valor lógico que representa a verdade de uma proposição',
  'falsa': 'Valor lógico que representa a falsidade de uma proposição',
};

// Mantenha o mesmo CSS e HTML do pop-up fornecido anteriormente

// Função para alternar entre abas principais
function openMainTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    tab.style.display = 'none';
  });

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  const activeTab = document.getElementById(tabName);
  activeTab.classList.add('active');
  activeTab.style.display = 'block';

  document.querySelector(`.tab-button[onclick="openMainTab('${tabName}')"]`).classList.add('active');

  // Se a aba for de conquistas, carregue a lista de conquistas
  if (tabName === 'achievements') {
    loadAchievementsTab();
  }
}

// Atualiza os botões de navegação da lição
function updateNavigationButtons() {
  // Correção nas condições de desabilitar botões
  document.getElementById('prev-lesson').disabled = currentLesson === 1;
  document.getElementById('next-lesson').disabled = currentLesson === lessons.length;
  document.getElementById('current-lesson').textContent = currentLesson;
}

function loadLesson() {
  const currentLessonData = lessons[currentLesson - 1];
  const lessonTitle = document.getElementById('lesson-title');
  const lessonContent = document.getElementById('lesson-content');

  if (lessonTitle && lessonContent) {
    lessonTitle.textContent = currentLessonData.title;
    lessonContent.innerHTML = currentLessonData.content;
  }

  updateNavigationButtons();
}

function nextLesson() {
  if (currentLesson < lessons.length) {
    currentLesson++;
    loadLesson();
    updateAchievementProgress('lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    alert("Você chegou ao fim das aulas.");
  }
}

function prevLesson() {
  if (currentLesson > 1) {
    currentLesson--;
    loadLesson();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Array de exercícios
const exercises = {
  negacao: [
    {
      question: "Qual é a negação de 'Está chovendo'?",
      options: ["Não está chovendo", "Está fazendo sol", "Está ventando"],
      answer: 0,
      hint: "A negação inverte diretamente o valor verdade da proposição."
    },
    {
      question: "Qual é a negação de 'p ∧ q'?",
      options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q"],
      answer: 1,
      hint: "Use a Lei de De Morgan para negar conjunções."
    },
    {
      question: "Qual é a negação de 'p → q'?",
      options: ["p ∧ ¬q", "¬p ∧ q", "¬(p → q)"],
      answer: 0,
      hint: "Lembre que a negação da implicação mantém o antecedente e nega o consequente."
    }
  ],
  conjuncao: [
    {
      question: "Qual é o valor de V ∧ F?",
      options: ["V", "F"],
      answer: 1,
      hint: "Conjunção só é verdadeira quando ambos são verdadeiros."
    },
    {
      question: "Se p = V e q = V, qual o valor de p ∧ q?",
      options: ["V", "F"],
      answer: 0,
      hint: "Ambas as proposições são verdadeiras."
    },
    {
      question: "Qual o resultado de (V ∧ V) ∧ F?",
      options: ["V", "F"],
      answer: 1,
      hint: "A operação se torna falsa se qualquer um dos operandos for falso."
    }
  ],
  disjuncao: [
    {
      question: "Qual é o valor de V ∨ F?",
      options: ["V", "F"],
      answer: 0,
      hint: "Disjunção é verdadeira se pelo menos uma proposição for verdadeira."
    },
    {
      question: "Se p = F e q = F, qual o valor de p ∨ q?",
      options: ["V", "F"],
      answer: 1,
      hint: "Ambas as proposições são falsas."
    },
    {
      question: "Qual o resultado de (F ∨ V) ∨ F?",
      options: ["V", "F"],
      answer: 0,
      hint: "Pelo menos uma proposição é verdadeira."
    }
  ],
  implicacao: [
    {
      question: "Qual o valor de V → F?",
      options: ["V", "F"],
      answer: 1,
      hint: "Implicação só é falsa quando o antecedente é verdadeiro e o consequente é falso."
    },
    {
      question: "Se p = F e q = V, qual o valor de p → q?",
      options: ["V", "F"],
      answer: 0,
      hint: "Implicação é verdadeira quando o antecedente é falso."
    },
    {
      question: "Qual o resultado de (V → V) → F?",
      options: ["V", "F"],
      answer: 1,
      hint: "Analise a implicação interna e depois a implicação externa."
    }
  ],
  bicondicional: [
    {
      question: "Qual o valor de V ↔ F?",
      options: ["V", "F"],
      answer: 1,
      hint: "Bicondicional requer valores iguais."
    },
    {
      question: "Se p = V e q = V, qual o valor de p ↔ q?",
      options: ["V", "F"],
      answer: 0,
      hint: "Ambos os valores são iguais."
    },
    {
      question: "Qual é o valor de F ↔ F?",
      options: ["V", "F"],
      answer: 0,
      hint: "Os dois operandos possuem o mesmo valor lógico."
    }
  ],
  mistos: [
    {
      question: "Qual o valor de (V ∧ F) → (F ∨ V)?",
      options: ["V", "F"],
      answer: 0,
      hint: "Resolva primeiro as operações dentro dos parênteses."
    },
    {
      question: "Qual a negação de (p → q)?",
      options: ["p ∧ ¬q", "¬p ∨ q", "¬p ∧ ¬q"],
      answer: 0,
      hint: "A negação de uma implicação mantém o antecedente e nega o consequente."
    },
    {
      question: "Resolva: ¬(p ∨ q) ∨ (p ∧ q) = ?",
      options: ["V", "F"],
      answer: 1,
      hint: "Aplique as Leis de De Morgan e simplifique a expressão."
    }
  ]
};

// Carrega exercícios
function loadExercises(topic) {
  const container = document.getElementById('exercise-container');
  let selectedExercises = [];

  if (topic === 'all') {
    for (const key in exercises) {
      selectedExercises = selectedExercises.concat(exercises[key]);
    }
  } else {
    selectedExercises = exercises[topic] || [];
  }
}

// Função para verificar a resposta do exercício selecionado
function loadExercises(topic) {
  currentExerciseTopic = topic; // Armazena o tópico selecionado
  const container = document.getElementById('exercise-container');
  let selectedExercises = [];

  if (topic === 'all') {
    for (const key in exercises) {
      selectedExercises = selectedExercises.concat(exercises[key]);
    }
  } else {
    selectedExercises = exercises[topic] || [];
  }

  container.innerHTML = selectedExercises.map((ex, index) => `
    <div class="exercise">
      <p><strong>Exercício ${index + 1}:</strong> ${ex.question}</p>
      <ul>
        ${ex.options.map((opt, i) => `
          <li>
            <label>
              <input type="radio" name="exercise-${index}" value="${i}">
              ${opt}
            </label>
          </li>
        `).join('')}
      </ul>
      <button onclick="checkAnswer(${index}, this)">Verificar Resposta</button>
      <button onclick="showHint(${index})">Mostrar Dica</button>
      <p class="feedback"></p>
    </div>
  `).join('');

  document.getElementById('total-questions').textContent = selectedExercises.length;
  document.getElementById('correct-answers').textContent = '0';
}

function checkAnswer(exerciseIndex, selectedButton) {
  // Usa o tópico atual armazenado
  const exercise = exercises[currentExerciseTopic][exerciseIndex];
  const feedback = document.getElementsByClassName('exercise')[exerciseIndex].querySelector('.feedback');

  const radios = document.getElementsByName(`exercise-${exerciseIndex}`);
  let selectedOption = null;
  for (let radio of radios) {
    if (radio.checked) {
      selectedOption = parseInt(radio.value);
      break;
    }
  }

  if (selectedOption === null) {
    alert("Por favor, selecione uma opção.");
    return;
  }

  if (selectedOption === exercise.answer) {
    feedback.innerHTML = '✓ Resposta Correta!';
    feedback.style.color = 'green';
  } else {
    feedback.innerHTML = '✗ Resposta Incorreta';
    feedback.style.color = 'red';
  }

  if (selectedOption === exercise.answer) {
    updateAchievementProgress('exercises');
    achievements.perfectionist.current++;
    if(achievements.perfectionist.current >= achievements.perfectionist.target) {
      unlockAchievement(achievements.perfectionist);
    }
  } else {
    achievements.perfectionist.current = 0;
  }
}

function showHint(index) {
  const exercise = exercises[currentExerciseTopic][index];
  const feedback = document.getElementsByClassName('exercise')[index]?.querySelector('.feedback');
  if (feedback) {
    feedback.innerHTML = `💡 Dica: ${exercise.hint}`;
  }
}

// Função para gerar tabela-verdade
function gerarTabela() {
  const formulaInput = document.getElementById("formula").value.trim();
  if (!formulaInput) {
    alert("Por favor, insira uma fórmula.");
    return;
  }

  try {
    let variables = Array.from(new Set(formulaInput.match(/[a-zA-Z]/g))).sort();
    let expression = formulaInput
      .replace(/¬|~/g, "!")
      .replace(/∧/g, "&&")
      .replace(/∨/g, "||")
      .replace(/→/g, "=>");

    const numRows = Math.pow(2, variables.length);
    let tableHTML = "<table><tr>";

    variables.forEach(v => tableHTML += `<th>${v}</th>`);
    tableHTML += "<th>Resultado</th></tr>";

    for (let i = 0; i < numRows; i++) {
      let values = {};
      variables.forEach((v, index) => {
        values[v] = Boolean((i >> (variables.length - index - 1)) & 1);
      });

      let evalExpression = expression;
      variables.forEach(v => {
        evalExpression = evalExpression.replace(new RegExp(`\\b${v}\\b`, 'g'), values[v]);
      });

      let result = eval(evalExpression);
      tableHTML += "<tr>";
      variables.forEach(v => tableHTML += `<td>${values[v] ? "V" : "F"}</td>`);
      tableHTML += `<td>${result ? "V" : "F"}</td></tr>`;
    }

    tableHTML += "</table>";
    document.getElementById("resultado").innerHTML = tableHTML;
  } catch (error) {
    alert("Erro ao gerar tabela-verdade. Verifique a fórmula.");
    console.error(error);
  }
}

// Variáveis globais para o modo competitivo
let currentDifficulty = null;
let currentQuestionIndex = 0;
let score = 0;
let errorCount = 0;

// Perguntas competitivas
const competitiveQuestions = {
  easy: [
    { question: "Qual é o valor de V ∧ F?", answer: "F" },
    { question: "Qual é o valor de ¬V?", answer: "F" }
  ],
  medium: [
    { question: "Complete: V ∨ F = ?", answer: "V" },
    { question: "Qual o resultado de V → F?", answer: "F" }
  ],
  hard: [
    { question: "Qual é o valor de (V ∧ F) ∨ ¬F?", answer: "V" },
    { question: "Resolva: (V → F) ∧ (F → V) = ?", answer: "F" }
  ]
};

// Função para iniciar o modo competitivo
function startCompetitiveMode(difficulty) {
  currentDifficulty = difficulty;
  currentQuestionIndex = 0;
  score = 0;
  errorCount = 0;
  clearChat();
  appendChatMessage("bot", `🎮 Modo ${difficulty.toUpperCase()} iniciado!`);
  appendChatMessage("bot", "⚠️ Responda com 'V' para Verdadeiro ou 'F' para Falso");
  sendNextCompetitiveQuestion();
}

// Função para enviar a próxima pergunta
function sendNextCompetitiveQuestion() {
  const questions = competitiveQuestions[currentDifficulty];
  if (!questions || currentQuestionIndex >= questions.length) {
    appendChatMessage("bot", "🏆 Você completou todas as perguntas!");
    currentDifficulty = null;
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  appendChatMessage("bot", `📝 Pergunta ${currentQuestionIndex + 1}: ${currentQuestion.question}`);
}

// Função para adicionar mensagens ao chat
function appendChatMessage(sender, message) {
  const chatArea = document.getElementById("competitive-chat");
  if (!chatArea) {
    console.error("Área de chat 'competitive-chat' não encontrada.");
    return;
  }

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message", sender);
  messageDiv.textContent = message;
  chatArea.appendChild(messageDiv);

  // Rola automaticamente para a última mensagem
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Função para limpar o chat
function clearChat() {
  const chatArea = document.getElementById("competitive-chat");
  if (chatArea) {
    chatArea.innerHTML = "";
  }
}

// Evento de envio de mensagem no chat
document.getElementById('send-answer').addEventListener('click', () => {
  const input = document.getElementById("chatMessage");
  if (!input) {
    console.error("Campo de entrada 'chatMessage' não encontrado.");
    return;
  }

  const message = input.value.trim();
  if (!message) {
    alert("Por favor, insira uma resposta antes de enviar.");
    return;
  }

  appendChatMessage("user", message);
  processCompetitiveAnswer(message);
  input.value = ""; // Limpa o campo após o envio
});

// Processa a resposta do usuário
function processCompetitiveAnswer(userMessage) {
  try {
    if (!currentDifficulty) {
      throw new Error("Modo competitivo não iniciado.");
    }

    const questions = competitiveQuestions[currentDifficulty];
    if (!questions || currentQuestionIndex >= questions.length) {
      throw new Error("Nenhuma pergunta disponível.");
    }

    const currentQuestion = questions[currentQuestionIndex];
    const cleanAnswer = (str) => str.trim().toUpperCase().replace(/[^A-Z]/g, '');
    const userAnswer = cleanAnswer(userMessage);
    const correctAnswer = cleanAnswer(currentQuestion.answer);

    if (userAnswer === correctAnswer) {
      appendChatMessage("bot", "✅ Resposta correta! +10 pontos");
      updateScore(10);
      currentQuestionIndex++;

      if (currentQuestionIndex >= questions.length) {
        appendChatMessage("bot", "🏆 Você completou todas as perguntas!");
        currentDifficulty = null;
        return;
      }

      setTimeout(sendNextCompetitiveQuestion, 1500);
    } else {
      errorCount = (errorCount || 0) + 1;
      appendChatMessage("bot", "❌ Resposta incorreta. Tente novamente!");

      if (errorCount > 1) {
        appendChatMessage("bot", `💡 Dica: A resposta começa com "${correctAnswer[0]}"`);
      }
    }
  } catch (error) {
    console.error(error.message);
    appendChatMessage("bot", "⚠️ Ocorreu um erro. Por favor, tente novamente.");
  }
}

// Atualiza a pontuação
function updateScore(points) {
  const scoreElement = document.getElementById('score');
  if (!scoreElement) {
    console.error("Elemento de pontuação 'score' não encontrado.");
    return;
  }

  score += points;
  scoreElement.textContent = score;
}

// script.js
const achievements = {
  firstSteps: {
    name: "Primeiros Passos",
    description: "Complete sua primeira aula",
    icon: "fa-graduation-cap",
    target: 1,
    current: 0,
    unlocked: false,
    type: "lessons"
  },
  practiceMaster: {
    name: "Mestre da Prática",
    description: "Resolva 20 exercícios",
    icon: "fa-pencil-alt",
    target: 20,
    current: 0,
    unlocked: false,
    type: "exercises"
  },
  truthTableExpert: {
    name: "Expert em Tabelas",
    description: "Gere 10 tabelas-verdade",
    icon: "fa-table",
    target: 10,
    current: 0,
    unlocked: false,
    type: "tables"
  },
  speedRunner: {
    name: "Velocista Lógico",
    description: "Complete 5 perguntas no modo competitivo em menos de 1 minuto",
    icon: "fa-stopwatch",
    target: 5,
    current: 0,
    unlocked: false,
    type: "speed"
  },
  perfectionist: {
    name: "Perfeccionista",
    description: "Acertar 10 questões seguidas sem erros",
    icon: "fa-star",
    target: 10,
    current: 0,
    unlocked: false,
    type: "streak"
  }
};

// Função para atualizar o progresso
function updateAchievementProgress(type, amount = 1) {
  Object.values(achievements).forEach(achievement => {
    if (achievement.type === type && !achievement.unlocked) {
      achievement.current += amount;
      if (achievement.current >= achievement.target) {
        unlockAchievement(achievement);
      }
      saveAchievements();
      renderAchievements();
    }
  });
}

// Função para desbloquear conquista
function unlockAchievement(achievement) {
  achievement.unlocked = true;
  showAchievementPopup(achievement);
  saveAchievements();
}

// Função para exibir popup
function showAchievementPopup(achievement) {
  const popup = document.getElementById('achievement-popup');
  const content = `
    <div class="achievement-header">
      <i class="fas ${achievement.icon} achievement-icon"></i>
      <h3>Conquista Desbloqueada!</h3>
    </div>
    <div class="achievement-body">
      <h4>${achievement.name}</h4>
      <p>${achievement.description}</p>
    </div>
  `;
  
  popup.querySelector('.achievement-popup-content').innerHTML = content;
  popup.style.display = 'block';
  
  setTimeout(() => {
    popup.style.display = 'none';
  }, 10000);
}

// Função para renderizar conquistas
function renderAchievements() {
  const container = document.getElementById('achievements-container');
  container.innerHTML = Object.values(achievements).map(ach => `
    <div class="achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}">
      ${ach.unlocked ? '<div class="achievement-badge"><i class="fas fa-unlock"></i></div>' : ''}
      <i class="fas ${ach.icon} achievement-icon"></i>
      <h3>${ach.name}</h3>
      <p>${ach.description}</p>
      <div class="achievement-progress">
        <div class="achievement-progress-bar" style="width: ${(ach.current/ach.target)*100}%"></div>
      </div>
      <small>Progresso: ${ach.current}/${ach.target}</small>
    </div>
  `).join('');
}

// Função para salvar no localStorage
function saveAchievements() {
  localStorage.setItem('achievements', JSON.stringify(achievements));
}

// Carregar conquistas ao iniciar
function loadAchievements() {
  const saved = localStorage.getItem('achievements');
  if (saved) {
    Object.assign(achievements, JSON.parse(saved));
  }
  renderAchievements();
}

// Função para mostrar definição
function showGlossary(term) {
  const popup = document.getElementById('glossaryPopup');
  document.getElementById('glossaryTerm').textContent = term.charAt(0).toUpperCase() + term.slice(1);
  document.getElementById('glossaryDefinition').textContent = glossary[term];
  popup.classList.add('visible');
  setTimeout(() => popup.classList.remove('visible'), 3000);
}

// Inicializar
loadAchievements();