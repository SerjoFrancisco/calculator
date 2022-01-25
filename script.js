const numbers = document.getElementsByClassName('digits');
const panel = document.getElementById('panel');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const history = document.getElementById('history')

function putNumber(){
  const number = event.target
  panel.value += number.innerText
}
function doMath(){
    const test = /([A-Za-z])/g.test(panel.value)
    console.log(test);
    if(test){
        panel.value = 'Ta fazendo conta errado!'
    }else{
    history.innerText += `${panel.value};`;
    panel.value = eval(panel.value);
}}

function clearPanel(){
    panel.value='';
}
function listenAll() {
    for (let i = 0; i < numbers.length; i += 1) {
      numbers[i].addEventListener('click', putNumber);
    }
  }
  listenAll();
  equal.addEventListener('click', doMath)
  clear.addEventListener('click', clearPanel)