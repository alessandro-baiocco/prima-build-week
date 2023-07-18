const countdown = document.querySelector("p");

let time = 5;

function myStopFunction() {
  clearInterval(myInterval);
}

const myInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countdown.innerHTML = `${seconds}`;
  time--;
  if (time < 0) {
    myStopFunction();
  }
}
updateCountdown();

const generateInt = function () {
  const aNumGen = parseInt(Math.floor(Math.random() * 75 + 1));
  if (!scheda1.includes(aNumGen)) {
    scheda1.push(aNumGen);
    return aNumGen;
  } else {
    generateInt();
  }
};
