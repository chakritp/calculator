var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equalsBtn = document.querySelector('#equals');
var clearBtn = document.querySelector('#clear');

var currentOperator = '';
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
      console.log("there is an operator already: " + currentOperator);
      console.log("firstNumber: " + firstNumber);
      
      // first evaluate the numbers
      secondNumber = readout.innerText;
      console.log("secondNumber: " + secondNumber);
      var answer = evaluate(currentOperator, Number(firstNumber), Number(secondNumber));
      readout.innerText = answer;
      
      // store the into the first number
      firstNumber = answer;
      
      // set new operator
      if(this.innerText === 'x'){
        currentOperator = '*';
      }
      else {
        currentOperator = this.innerText;
      }

      // record that operator has just been clicked
      operatorJustClicked = true;
    }
  })
})

equalsBtn.addEventListener('click', function(){
  // using evaluate() instead of eval()
  secondNumber = readout.innerText;
  readout.innerText = evaluate(currentOperator, Number(firstNumber), Number(secondNumber));
});

// a clear button
clearBtn.addEventListener('click', function() {
  firstNumber = 0;
  secondNumber = 0;
  currentOperator = '';
  operatorJustClicked = false;
  readout.innerText = '';
})

// being able to chain operations