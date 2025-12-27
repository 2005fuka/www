const questions = [

  {

    question: "栗の風味を一番楽しめるケーキはどれ？",

    choices: ["ショートケーキ", "モンブラン", "チョコケーキ", "ミルフィーユ"],

    answer: 1

  },

  {

    question: "一番王道だと感じるケーキは？",

    choices: ["チーズケーキ", "ショートケーキ", "ミルフィーユ", "チョコケーキ"],

    answer: 1

  },

  {

    question: "コーヒーや紅茶と相性が良いケーキは？",

    choices: ["チョコケーキ", "ショートケーキ", "チーズケーキ", "モンブラン"],

    answer: 2

  },

  {

    question: "食感の違いを一番楽しめるケーキは？",

    choices: ["ミルフィーユ", "チーズケーキ", "ショートケーキ", "チョコケーキ"],

    answer: 0

  },

  {

    question: "疲れたときのご褒美にぴったりなケーキは？",

    choices: ["モンブラン", "チーズケーキ", "チョコケーキ", "ショートケーキ"],

    answer: 2

  }

];

let current = 0;

let score = 0;

const questionText = document.querySelector("#question");

const choicesDiv = document.querySelector("#choices");

const result = document.querySelector("#result");

const nextBtn = document.querySelector("#next");

const restartBtn = document.querySelector("#restart");

function showQuestion() {

  questionText.textContent = questions[current].question;

  choicesDiv.innerHTML = "";

  questions[current].choices.forEach((choice, index) => {

    const btn = document.createElement("button");

    btn.textContent = choice;

    btn.addEventListener("click", () => checkAnswer(index));

    choicesDiv.appendChild(btn);

  });

}

function checkAnswer(selected) {

  if (selected === questions[current].answer) {

    result.textContent = "正解！";

    score++;

  } else {

    result.textContent = "不正解…";

  }

}

nextBtn.addEventListener("click", () => {

  current++;

  if (current < questions.length) {

    result.textContent = "";

    showQuestion();

  } else {

    questionText.textContent = `クイズ終了！正解数は ${score} / ${questions.length} 問です。`;

    choicesDiv.innerHTML = "";

    result.textContent = score >= 3

      ? "あなたはケーキマスターです！"

      : "もっとケーキを食べて研究しよう！";

  }

});

restartBtn.addEventListener("click", () => {

  current = 0;

  score = 0;

  result.textContent = "";

  showQuestion();

});

showQuestion();
 