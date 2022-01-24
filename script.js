const numbers = document.getElementsByClassName('numbers');
const panel = document.getElementById('panel');


function putNumber(){
  const number = event.target
  panel.value += number.innerText
}
function listenAll() {
    for (let i = 0; i < numbers.length; i += 1) {
      numbers[i].addEventListener('click', putNumber);
    }
  }
  listenAll();