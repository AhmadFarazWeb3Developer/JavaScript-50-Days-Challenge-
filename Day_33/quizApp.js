// Define an array of questions, each question has a prompt and a set of possible answers with correct indicators

const questions = [
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world ?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "SriLanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world ?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world ?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  // Additional questions
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
      { text: "Paris", correct: true },
      { text: "London", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "W", correct: false },
      { text: "H2O", correct: true },
      { text: "O2", correct: false },
      { text: "CO2", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "J.K. Rowling", correct: false },
      { text: "Harper Lee", correct: true },
      { text: "Stephen King", correct: false },
      { text: "Jane Austen", correct: false },
    ],
  },
];

// Get HTML elements by their IDs
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Initialize variables to keep track of current question index and score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz by resetting variables and displaying the first question
const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";

  showQuestion();
};

// Function to display the current question and its answers
const showQuestion = () => {
  // Clear previous state
  resetState();

  // Get the current question object
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  // Display the question prompt
  questionElement.innerHTML = questionNo + ").  " + currentQuestion.question;

  // Loop through answers and create buttons for each
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn"); // Add a class for styling
    answerButtons.appendChild(button);

    // Set data attribute to mark correct answers
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    // Attach click event listener to each button
    button.addEventListener("click", selectAnswer);
  });
};

// Function to handle the selection of an answer
const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  // Add appropriate class based on correctness
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++; // Increment score if correct
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Disable all answer buttons and mark correct answer
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; // Disable button after selection
  });

  nextButton.style.display = "block"; // Display next button
};

// Function to reset the state of the quiz (clear answers, hide next button)
const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

// Function to display final score
const showScore = () => {
  resetState();

  questionElement.innerHTML = `Your scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};

// Function to handle click event on next button
const handleNextButton = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(); // If there are more questions, display the next one
  } else {
    showScore(); // Otherwise, show the final score
  }
};

// Event listener for next button click
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton(); // Proceed to next question or final score
  } else {
    startQuiz(); // Restart quiz if finished
  }
});

// Start the quiz when the page loads
startQuiz();
