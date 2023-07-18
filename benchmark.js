console.log("ok");
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
//crea H1 random.

let time = 5;
let bottoneRisposta1 = document.querySelector("#primo");
let bottoneRisposta2 = document.querySelector("#secondo");
let bottoneRisposta3 = document.querySelector("#terzo");
let bottoneRisposta4 = document.querySelector("#quarto");
const bottoniTutti = document.querySelectorAll("button");


bottoniTutti.forEach((button, index1) => {
  button.addEventListener("click", () => {
    bottoniTutti.forEach((button, index2) => {
      index1 !== index2 ? button.classList.remove("selected") : button.classList.toggle("selected");
    });

    console.log("clicked", index1);
  });
});

let domandaRandom = () => {
  const myInterval = setInterval(updateCountdown, 1000);
  let rand = Math.floor(Math.random() * questions.length);
  const h1 = document.querySelector("h1");
  h1.innerHTML = questions[rand].question;
  const risposte = questions[rand].incorrect_answers;
  risposte.push(questions[rand].correct_answer);
  console.log("risposte:", risposte);
  const bottoneUno = document.getElementById("primo");
  if (bottoneRisposta1.innerHTML === undefined) {
    bottoneRisposta1.disa;
  }
  bottoneUno.innerHTML = risposte[3];
  const bottoneDue = document.getElementById("secondo");
  bottoneDue.innerHTML = risposte[0];
  const bottoneTre = document.getElementById("terzo");
  bottoneTre.innerHTML = risposte[2];
  const bottoneQuarto = document.getElementById("quarto");
  bottoneQuarto.innerHTML = risposte[1];
};
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countdown.innerHTML = `${seconds}`;
  time--;
  if (time < 0) {
    clearInterval(myInterval);
    domandaRandom();
  }
}


