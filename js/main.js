var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var currentOperator = '';
var equalsBtn = document.querySelector('#equals');
var firstNumber = 0;
var secondNumber = 0;
var operatorJustClicked = false;

function evaluate(operation, firstNumber, secondNumber) {
  switch(operation){
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
  }
}

// for each digit, do a function
digits.forEach(function(btn) {
  // add an event listener to each function
  btn.addEventListener('click', function() {
    // 'this' is the button being clicked...
    if(operatorJustClicked){
      readout.innerText = ''; // clear the readout when someone just clicked an opreator
      operatorJustClicked = false;
    }
    readout.innerText += this.innerText;
  });
});

operators.forEach(function(operator) {
  operator.addEventListener('click', function(){
    if(!currentOperator){
      firstNumber = readout.innerText;
      
      // set current operator
      if(this.innerText === 'x'){
        currentOperator = '*';
      }
      else {
        currentOperator = this.innerText;
      }
  
      operatorJustClicked = true;
    }
    else{ // operator has already been selected

    }
  })
})

equalsBtn.addEventListener('click', function(){
  // using evaluate() instead of eval()
  secondNumber = readout.innerText;
  readout.innerText = evaluate(currentOperator, Number(firstNumber), Number(secondNumber));
});

// a clear button
// being able to chain operations