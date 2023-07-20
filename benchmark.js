const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "&#039;For&#039; loops",
    incorrect_answers: ["&#039;If&#039; Statements", "&#039;Do-while&#039; loops", "&#039;While&#039; loops"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the &quot;MP&quot; stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "HTML is what type of language?",
    correct_answer: "Markup Language",
    incorrect_answers: ["Macro Language", "Programming Language", "Scripting Language"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linus Torvalds created Linux and Git.",
    correct_answer: "True",
    incorrect_answers: ["False"],
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
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer: "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows",
    ],
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
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  }
];

//------------------------------------------------// variabili globali

let risposteCollection = []; // cicla l'array per ottenere le risposte giuste
for (let i = 0; i < questions.length; i++) {
  risposteCollection.push(questions[i].correct_answer);
}
const timerEnorme = document.querySelector(".nav");
const countdown = document.getElementById("countdown");
let tempo = 60;
let numberQuest = 0;
const questNumber = document.getElementById("changingNumber");
const bottoniTutti = document.querySelectorAll("button");
let bottoni1 = document.getElementsByTagName("button")[0];
let bottoni3 = document.getElementsByTagName("button")[2];
let domandeUscite = [];
let risposteGiuste = 0;
let risposteSbagliate = 0;
let testina = document.querySelector("header");
let principale = document.querySelector("main");
let piedi = document.querySelector("footer");

// costruzione timer-------------------------------------
const timer = () => {
  const minutes = Math.floor(tempo / 60);
  let seconds = tempo % 61;
  countdown.innerText = seconds;
  //----------------------------------
  let percTempo = 100 - (seconds * 100) / 60;
  timerEnorme.innerHTML = `<div class="containerTimer" style = "background-image : conic-gradient(from 0deg at 50% 50%, #8080807c ${percTempo}%, #00ffff ${percTempo}%)" >
  <div class="inContainer">
    <p class="timerSeconds">SECONDS</p>
    <p id="countdown">${seconds}</p>
    <p class="timerRemains">REMAINING</p>
  </div>
</div>`;
  //-------------------------------------------
  tempo--;
  if (tempo === -2) {
    risposteSbagliate++;
    tempo = 60;
    domandaRandom();
  }
};
const intervallo = setInterval(timer, 1000);

// per aggiungere la classe al bottone ----------------------------------------
bottoniTutti.forEach((button, index1) => {
  button.addEventListener("click", () => {
    if (risposteCollection.includes(bottoniTutti[index1].innerHTML)) {
      risposteGiuste += 1;
      clearInterval();
      domandaRandom();
      console.log("giuste", risposteGiuste);
    } else {
      risposteSbagliate++;
      clearInterval();
      domandaRandom();
      console.log("sbagliato", risposteSbagliate);
    }
    bottoniTutti.forEach((button, index2) => {
      index1 !== index2 ? button.classList.remove("selected") : button.classList.toggle("selected");
    });
  });
});

//-------------------------------------------------------
let domandaRandom = () => {
  tempo = 60;
  timer();
  let rand = Math.floor(Math.random() * questions.length);
  if (!domandeUscite.includes(rand)) {
    const h1 = document.querySelector("h1"); // Domande casuali
    h1.innerHTML = questions[rand].question;
    const risposte = questions[rand].incorrect_answers;
    risposte.push(questions[rand].correct_answer);
    risposte.sort();//Risposte casuali sui bottoni.
    const bottoneUno = document.getElementById("primo");
    bottoneUno.innerHTML = risposte[3];
    const bottoneDue = document.getElementById("secondo");
    bottoneDue.innerHTML = risposte[1];
    const bottoneTre = document.getElementById("terzo");
    bottoneTre.innerHTML = risposte[2];
    const bottoneQuarto = document.getElementById("quarto");
    bottoneQuarto.innerHTML = risposte[0];
    //--------------------------------rimozione bottoni per due risposte------------------------
    if (bottoni1.innerText === "undefined") {
      //disablita i bottoni se ci sono 2 risposte
      bottoni1.disabled = true;
    } else {
      bottoni1.disabled = false;
    }
    if (bottoni3.innerText === "undefined") {
      bottoni3.disabled = true;
    } else {
      bottoni3.disabled = false;
    }
    //-------------------------------------------------------------------------
    domandeUscite.push(rand);
    //--------------------------------cambio pagina--------------------------------
    if (numberQuest === 10) {
      //-------------------------------calcolo risultati-----------------
      let percSbagliate = risposteSbagliate * 10;
      let percGiuste = risposteGiuste * 10;

      console.log("dopo", numberQuest);
      clearInterval(timer);
      testina.innerHTML = `<img class="resultLogo" src="./assets/epicode_logo.png" alt="logo" />
      <p class="resultH1">Results</p>
      <p class="resultH2">The summary of your answer:</p>`;
      principale.innerHTML = `<div class="result">
      <div class="correct">
        <span class="grosso">Correct</span>
        <span class="medio">${percGiuste}%</span>
        <span class="piccolo">${risposteGiuste}/10 QUESTIONS</span>
      </div>
      <div
        class="punteggioGlobale"
        style="background-image: conic-gradient(from 0deg at 50% 50%, #c2128d ${percSbagliate}%, #00ffff ${percSbagliate}%)"
      >
        <div class="inPunteggio">
        </div>
      </div>
      <div class="wrong">
        <span class="grosso">Wrong</span>
        <span class="medio">${percSbagliate}%</span>
        <span class="piccolo">${risposteSbagliate}/10 QUESTIONS</span>
      </div>
    </div>`;
      piedi.innerHTML = `<footer class="resultFooter">
      <a href="feedbackPage.html"><button class="resultButton">RATE US</button></a>
      </footer>`;
      const inPunteggio = document.querySelector(".inPunteggio");
      const punteggioH4 = document.createElement("h4");
      const punteggioP = document.createElement("p");
      punteggioH4.classList.add("punteggioH4");
      punteggioP.classList.add("punteggioP");
      if (percGiuste >= 60) {
        punteggioH4.innerHTML = `Congratulations! <span class="aqua">You passed the exam</span>`;
        punteggioP.innerHTML = `We'll send you a certificate <br />
        in few minutes. <br />
        check your email (including <br />
        promotion / spam folder)`;
        inPunteggio.append(punteggioH4);
        inPunteggio.append(punteggioP);
      } else {
        punteggioH4.innerHTML = `Unlucky! <span class="red">You didn't pass the exam`;
        punteggioP.innerHTML = `STUDY MORE (idiot) <br />and try next time`;
        inPunteggio.append(punteggioH4);
        inPunteggio.append(punteggioP);
      }
    }
    numberQuest++;
    questNumber.innerText = numberQuest;
  } else {
    domandaRandom();
  }
};
domandaRandom(); // richiamata

//----------------------------------------------------------------
