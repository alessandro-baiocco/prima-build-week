let testina = document.querySelector("header");
let principale = document.querySelector("main");
let piedi = document.querySelector("footer");
let lato = document.querySelector("aside");
let domandeSelezionateErrate = [];

const partireConDomande = () => {
  let difficoltaQuestioni = document.querySelector("#difficulty:checked");
  let questions = questionsNotFiltered.filter((quest) => quest.difficulty === difficoltaQuestioni.value);
  let numeroQuestioni = document.querySelector("#questionNumber:checked");
  testina.innerHTML = ` <img src="./assets/epicode_logo.png" alt="logoEpicode" />
  <nav class="nav">
  <div class="containerTimer">
  <div class="inContainer">
  <p class="timerSeconds">Seconds</p>
  <p id="countdown"></p>
  <p class="timerRemains">Remaining</p>
  </div>
  </div>
  </nav>`;
  principale.innerHTML = `<h1 class="questionH1"></h1>
  <div class="questionButton">
  <div>
  <button id="primo" class="unselected"></button>
  <button id="secondo" class="unselected selected"></button>
  </div>
  <div>
  <button id="terzo" class="unselected"></button>
  <button id="quarto" class="unselected"></button>
  </div>
  </div>`;
  piedi.innerHTML = `<h3>QUESTION <span id="changingNumber"></span> <span class="pink"> / ${numeroQuestioni.value}</span></h3>`;
  //------------------------------------------------// variabili globali
  const timerEnorme = document.querySelector(".nav");
  rand = 0;

  let tempo = 60;
  let numberQuest = 0;
  const questNumber = document.getElementById("changingNumber");
  const bottoniTutti = document.querySelectorAll("button");
  let bottoni1 = document.getElementsByTagName("button")[0];
  let bottoni3 = document.getElementsByTagName("button")[2];
  let risposteGiuste = 0;
  let risposteSbagliate = 0;
  const countdown = document.getElementById("countdown");
  //------------------------------------------------------
  let risposteCollection = []; // cicla l'array per ottenere le risposte giuste
  for (let i = 0; i < questions.length; i++) {
    risposteCollection.push(questions[i].correct_answer);
  }

  // costruzione timer-------------------------------------
  const timer = () => {
    countdown.innerText = tempo;
    //----------------------------------
    let percTempo = 100 - (tempo * 100) / 60;
    timerEnorme.innerHTML = `<div class="containerTimer" style = "background-image : conic-gradient(from 0deg at 50% 50%, #8080807c ${percTempo}%, #00ffff ${percTempo}%)" >
    <div class="inContainer">
    <p class="timerSeconds">SECONDS</p>
    <p id="countdown">${tempo}</p>
    <p class="timerRemains">REMAINING</p>
    </div>
    </div>`;
    //-------------------------------------------
    if (tempo < 0) {
      risposteSbagliate++;
      domandeSelezionateErrate.push(questions[rand]);
      console.log(domandeSelezionateErrate);
      tempo = 60;
      domandaRandom();
    }
    tempo--;
  };
  const intervallo = setInterval(timer, 1000);

  // per aggiungere la classe al bottone ----------------------------------------
  //--------------------------------push domanda sbagliata-------------------------
  bottoniTutti.forEach((button, index1) => {
    button.addEventListener("click", () => {
      if (risposteCollection.includes(bottoniTutti[index1].innerHTML)) {
        risposteGiuste += 1;
        domandaRandom();
      } else {
        risposteSbagliate++;
        domandaRandom();
        domandeSelezionateErrate.push(questions[rand]);
        console.log(domandeSelezionateErrate);
      }
    });
  });

  //-------------------------------------------------------------
  let domandaRandom = () => {
    tempo = 60;
    timer();
    rand = Math.floor(Math.random() * questions.length);

    const h1 = document.querySelector("h1"); // mette le risposte in modo casuale
    h1.innerHTML = questions[rand].question;
    const risposte = questions[rand].incorrect_answers;
    risposte.push(questions[rand].correct_answer);
    risposte.sort();
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
    questions.splice(rand, 1);
    //--------------------------------cambio pagina--------------------------------
    if (numberQuest === parseInt(numeroQuestioni.value)) {
      //-------------------------------calcolo risultati-----------------
      let percSbagliate = (risposteSbagliate * 100) / parseInt(numeroQuestioni.value);
      let percGiuste = (risposteGiuste * 100) / parseInt(numeroQuestioni.value);

      clearInterval(intervallo);
      testina.innerHTML = `<img class="resultLogo" src="./assets/epicode_logo.png" alt="logo" />
      <p class="resultH1">Results</p>
      <p class="resultH2">The summary of your answer:</p>`;
      principale.innerHTML = `<div class="result">
      <div class="correct">
      <span class="grosso">Correct</span>
      <span class="medio">${Math.round(percGiuste * 10) / 10}%</span>
      <span class="piccolo">${risposteGiuste}/${parseInt(numeroQuestioni.value)} QUESTIONS</span>
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
        <span class="medio">${Math.round(percSbagliate * 10) / 10}%</span>
        <span class="piccolo">${risposteSbagliate}/${parseInt(numeroQuestioni.value)} QUESTIONS</span>
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
      for (let i = 0; i < domandeSelezionateErrate.length; i++) {
        const appendinoDomandeSu = document.createElement("div");
        appendinoDomandeSu.innerHTML = `${domandeSelezionateErrate[i].question}`;
        appendinoDomandeSu.classList.add("appendinoDomande");
        lato.appendChild(appendinoDomandeSu);
        const appendinoRisposte = document.createElement("div");
        appendinoRisposte.classList.add("appendinoRisposte");
        lato.appendChild(appendinoRisposte);
        const appendinoRispostaGiusta = document.createElement("div");
        appendinoRispostaGiusta.innerHTML = `${domandeSelezionateErrate[i].correct_answer} ✔`;
        appendinoRispostaGiusta.classList.add("appendiRisposta");
        appendinoRisposte.appendChild(appendinoRispostaGiusta);
        for (let j = 0; j < domandeSelezionateErrate[i].incorrect_answers.length; j++) {
          const appendinoRisposteErrate = document.createElement("div");
          appendinoRisposteErrate.innerHTML = `${domandeSelezionateErrate[i].incorrect_answers[j]} ×`;
          appendinoRisposteErrate.classList.add("rispostaErrata");
          appendinoRisposte.appendChild(appendinoRisposteErrate);
        }
      }
    }
    numberQuest++;
    questNumber.innerText = numberQuest;
  };
  domandaRandom(); // richiamata
};

//----------------------------------------------------------------
