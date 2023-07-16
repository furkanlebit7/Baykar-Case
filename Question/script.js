let questions = [];

async function fetchQuestions() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Extract 10 questions from the API response
    questions = data.slice(0, 10).map((item) => {
      const options = item.body.split("\n").slice(0, 4);
      return {
        question: item.title,
        choices: {
          A: options[0],
          B: options[1],
          C: options[2],
          D: options[3],
        },
        correctAnswer: "A", // Set the correct answer here
      };
    });

    showQuestion();
  } catch (error) {
    console.log("An error occurred while fetching questions:", error);
  }
}

let currentQuestionIndex = 0;
let userAnswers = [];
let countdownInterval;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  document.getElementById("choiceA").textContent = question.choices.A;
  document.getElementById("choiceB").textContent = question.choices.B;
  document.getElementById("choiceC").textContent = question.choices.C;
  document.getElementById("choiceD").textContent = question.choices.D;

  disableChoices(); // Disable choices initially

  const countdown = document.getElementById("countdown");
  countdown.textContent = "30";
  countdown.style.display = "block";

  let secondsLeft = 30;
  let allowAnswer = false;

  countdownInterval = setInterval(() => {
    secondsLeft--;

    if (secondsLeft <= 20 && !allowAnswer) {
      allowAnswer = true;
      enableChoices(); // Enable choices after 10 seconds
    }

    countdown.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(countdownInterval);
      disableChoices(); // Disable choices when time's up
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(choice) {
  disableChoices(); // Disable all choices

  const question = questions[currentQuestionIndex];
  const answer = {
    question: question.question,
    userAnswer: choice,
    correctAnswer: question.correctAnswer,
  };
  userAnswers.push(answer);
}

function enableChoices() {
  const choices = document
    .getElementById("choices")
    .getElementsByTagName("button");
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = false;
  }
}

function disableChoices() {
  const choices = document
    .getElementById("choices")
    .getElementsByTagName("button");
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = true;
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(countdownInterval); // Stop the countdown
  document.getElementById("question-container").style.display = "none";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("result-container").style.display = "block";

  const resultBody = document.getElementById("result-body");
  for (let i = 0; i < userAnswers.length; i++) {
    const row = document.createElement("tr");
    const questionCell = document.createElement("td");
    const userAnswerCell = document.createElement("td");
    const correctAnswerCell = document.createElement("td");

    questionCell.textContent = userAnswers[i].question;
    userAnswerCell.textContent = userAnswers[i].userAnswer;
    correctAnswerCell.textContent = userAnswers[i].correctAnswer;

    row.appendChild(questionCell);
    row.appendChild(userAnswerCell);
    row.appendChild(correctAnswerCell);

    resultBody.appendChild(row);
  }
}

fetchQuestions();
