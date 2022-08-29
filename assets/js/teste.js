var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
  //desabilita botao quando chegar em 15
  if (currentNumber < 15) {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
  }
  updateUI()
}

function decrement() {
  //desabilitar botão quando chegar a -10
  if (currentNumber > -10) {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
  }
  updateUI()
}

function updateUI() {
  currentNumberWrapper.innerHTML = currentNumber

  document.getElementById('soma').disabled = currentNumber >= 15

  document.getElementById('sub').disabled = currentNumber <= -10

  changecolor()
}
// function changecolor(){
//   currentNumberWrapper.innerHTML = currentNumber
//   document.getElementById('currentNumber').style.color = 'lightgreen' = (currentNumber > 0)
//   document.getElementById('currentNumber').style.color = 'red' = (currentNumber < 0)
//   document.getElementById('currentNumber').style.color = 'white' = (currentNumber = 0)
// }
function changecolor() {
  if (currentNumber > 0) {
    document.getElementById('currentNumber').style.color = 'green'
  } else if (currentNumber < 0) {
    document.getElementById('currentNumber').style.color = 'red'
  } else {
    document.getElementById('currentNumber').style.color = 'black'
  }
}
