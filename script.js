const numbers = document.getElementsByClassName('digits');
const panel = document.getElementById('panel');
const equal = document.getElementById('equal');

function putNumber(){
  const number = event.target
  panel.value += number.innerText
}
function doMath(){
    panel.value = eval(panel.value);
}
function listenAll() {
    for (let i = 0; i < numbers.length; i += 1) {
      numbers[i].addEventListener('click', putNumber);
    }
  }
  listenAll();
  equal.addEventListener('click', doMath)