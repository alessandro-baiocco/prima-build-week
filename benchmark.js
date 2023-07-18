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
// let selezionata = document.getElementsByClassName("selected")[0];
// if (selezionata.innerHTML === questions[rand].correct_answer) {
//   risposteGiuste++;
//   console.log("giuste", risposteGiuste);
// } else {
//   risposteSbagliate++;
//   console.log("sbagliato", risposteSbagliate);
// }
//crea H1 random.
const questNumber = document.getElementById("changingNumber");
let numberQuest = 1;

const bottoniTutti = document.querySelectorAll("button");

// let selezionata = document.getElementsByClassName("selected")[0];
// const egiusta = (click) => {
// bottoniTutti.forEach((button, index1) => {
//   button.addEventListener("click", () => {
//   click.addEventListener("click" , ()) => {
//     if (selezionata.innerHTML === questions[rand].correct_answer )
//   }
// }

let bottoni1 = document.getElementsByTagName("button")[0];
let bottoni3 = document.getElementsByTagName("button")[2];
let domandeUscite = [];
let risposteGiuste = 0;
let risposteSbagliate = 0;

bottoniTutti.forEach((button, index1) => {
  button.addEventListener("click", () => {
    bottoniTutti.forEach((button, index2) => {
      index1 !== index2 ? button.classList.remove("selected") : button.classList.toggle("selected");
      // if (index2.innerHTML === questions[rand].correct_answer) {
      //   console.log("funzi");
      // }
    });
    console.log("clicked", index1, bottoniTutti);
  });
});
let domandaRandom = () => {
  let rand = Math.floor(Math.random() * questions.length);
  if (!domandeUscite.includes(rand)) {
    const h1 = document.querySelector("h1");
    h1.innerHTML = questions[rand].question;
    const risposte = questions[rand].incorrect_answers;
    risposte.push(questions[rand].correct_answer);
    const bottoneUno = document.getElementById("primo");
    bottoneUno.innerHTML = risposte[3];
    const bottoneDue = document.getElementById("secondo");
    bottoneDue.innerHTML = risposte[0];
    const bottoneTre = document.getElementById("terzo");
    bottoneTre.innerHTML = risposte[2];
    const bottoneQuarto = document.getElementById("quarto");
    bottoneQuarto.innerHTML = risposte[1];
    if (bottoni1.innerText === "undefined") {
      bottoni1.disabled = true;
    } else {
      bottoni1.disabled = false;
    }
    if (bottoni3.innerText === "undefined") {
      bottoni3.disabled = true;
    } else {
      bottoni3.disabled = false;
    }
    domandeUscite.push(rand);
    questNumber.innerText = numberQuest;
    numberQuest++;
    if (numberQuest === questions.length) {
    }
  } else {
    domandaRandom();
  }
};
domandaRandom();

const countdown = document.getElementById("countdown");
let time = 5;

const myInterval = setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdown.innerHTML = `${seconds}`;
  time--;

  if (time === -1) {
    time = 5;
    domandaRandom();
    bottoniTutti.forEach((button, index1) => button.classList.remove("selected"));
  }
}
