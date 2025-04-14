const questions = [
  {
    question: "What is the collective noun for a group of rabbits?",
    answers: [
      { text: "Nest", correct: false },
      { text: "Colony", correct: false },
      { text: "Warren", correct: false },
      { text: "Fluffle", correct: true },
    ],
  },
  {
    question: "What do you call a group of baboons?",
    answers: [
      { text: "Troop", correct: false },
      { text: "Band", correct: false },
      { text: "Pack", correct: false },
      { text: "Flange", correct: true },
    ],
  },
  {
    question: "What is the term for a group of hippopotamuses?",
    answers: [
      { text: "Bloat", correct: true },
      { text: "Herd", correct: false },
      { text: "Pod", correct: false },
      { text: "Crash", correct: false },
    ],
  },
  {
    question: "What do you call a group of owl?",
    answers: [
      { text: "School", correct: false },
      { text: "Parliament", correct: true },
      { text: "Gaggle", correct: false },
      { text: "Convocation", correct: false },
    ],
  },
  {
    question: "What is the collective noun for a group of ferrets?",
    answers: [
      { text: "Flock", correct: false },
      { text: "Bunch", correct: false },
      { text: "Cluster", correct: false },
      { text: "Business", correct: true },
    ],
  },
  {
    question: "What is the term for a group of lemurs?",
    answers: [
      { text: "Band", correct: false },
      { text: "Conspiracy", correct: true },
      { text: "Mob", correct: false },
      { text: "Leap", correct: false },
    ],
  },
  {
    question: "What do you call a group of otters?",
    answers: [
      { text: "Pod", correct: false },
      { text: "Shoal", correct: false },
      { text: "Raft", correct: true },
      { text: "Nest", correct: false },
    ],
  },
  {
    question: "What is the collective noun for a group of crows?",
    answers: [
      { text: "Murder", correct: true },
      { text: "Flock", correct: false },
      { text: "Pack", correct: false },
      { text: "Swarm", correct: false },
    ],
  },
  {
    question: "What is the term for a group of flamingos?",
    answers: [
      { text: "flock", correct: false },
      { text: "Flamboyance", correct: true },
      { text: "Gaggle", correct: false },
      { text: "Troop", correct: false },
    ],
  },
  {
    question: "What is the term for a group of giraffes?",
    answers: [
      { text: "Herd", correct: false },
      { text: "Tower", correct: true },
      { text: "Cluster", correct: false },
      { text: "Gang", correct: false },
    ],
  },
  {
    question: "What do you call a group of vultures in flight?",
    answers: [
      { text: "Flock", correct: false },
      { text: "Kettle", correct: true },
      { text: "Swarm", correct: false },
      { text: "Cloud", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
