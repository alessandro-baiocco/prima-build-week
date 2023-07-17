const scatolaCheck = document.getElementsByTagName("input")[0];
const bottone = document.getElementsByTagName("button")[0];

scatolaCheck.onchange = function () {
  if (scatolaCheck.checked) {
    bottone.disabled = false;
  } else {
    bottone.disabled = true;
  }
};
